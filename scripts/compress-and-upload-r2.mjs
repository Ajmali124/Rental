#!/usr/bin/env node
/**
 * Compress service images and upload to Cloudflare R2.
 * Run: node scripts/compress-and-upload-r2.mjs
 * Requires: .env with R2_ENDPOINT, R2_ACCESS_KEY, R2_SECRET_KEY, R2_BUCKET
 */
import { readdir, readFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load env from .env if present
import { config } from 'dotenv';
config({ path: join(__dirname, '..', '.env') });

const IMAGES_DIR = join(__dirname, '..', 'public', 'services');
const MAX_WIDTH = 1200; // Good for 2x retina on 600px display
const FILES = ['wedding.png', 'airport.png', 'northern.png', 'corporate.png', 'city.png'];

async function compressImage(inputPath) {
  const buffer = await readFile(inputPath);
  const { width } = await sharp(buffer).metadata();
  const targetWidth = Math.min(width, MAX_WIDTH);

  return sharp(buffer)
    .resize(targetWidth, null, { withoutEnlargement: true })
    .png({ compressionLevel: 9 })
    .toBuffer();
}

async function uploadToR2(key, body, contentType = 'image/png') {
  const client = new S3Client({
    region: 'auto',
    endpoint: process.env.R2_ENDPOINT,
    credentials: {
      accessKeyId: process.env.R2_ACCESS_KEY,
      secretAccessKey: process.env.R2_SECRET_KEY,
    },
    forcePathStyle: true,
  });

  await client.send(
    new PutObjectCommand({
      Bucket: process.env.R2_BUCKET,
      Key: key,
      Body: body,
      ContentType: contentType,
    })
  );
}

async function main() {
  const missing = ['R2_ENDPOINT', 'R2_ACCESS_KEY', 'R2_SECRET_KEY', 'R2_BUCKET'].filter(
    (k) => !process.env[k]
  );
  if (missing.length) {
    console.error('Missing env vars:', missing.join(', '));
    console.error('Copy .env.example to .env and fill in your R2 credentials.');
    process.exit(1);
  }

  console.log('Compressing and uploading service images to R2...\n');

  for (const filename of FILES) {
    const inputPath = join(IMAGES_DIR, filename);
    const before = (await readFile(inputPath)).length;

    const compressed = await compressImage(inputPath);
    const after = compressed.length;
    const saved = ((1 - after / before) * 100).toFixed(1);

    await uploadToR2(filename, compressed);
    console.log(`✓ ${filename}: ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB (${saved}% smaller)`);
  }

  const cdn = process.env.CDN_URL || 'https://exarpro.com';
  const base = cdn.replace(/\/$/, '');
  console.log('\nDone! Image URLs (update your app to use these):');
  FILES.forEach((f) => console.log(`  ${base}/${f}`));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
