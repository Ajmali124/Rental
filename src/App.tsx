import { Clock, MapPin, MessageCircle, Phone, ShieldCheck, Star, Truck, Users } from 'lucide-react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import { useCallback, useEffect, useRef, useState } from 'react';

const WHATSAPP_NUMBER = '923134617397';
const PHONE_NUMBER = '+92 313 4617397';

const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const Header = () => {
  const shouldReduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <motion.header
      initial={shouldReduceMotion ? false : { opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 1, delay: shouldReduceMotion ? 0 : 0.5 }}
      role="banner"
      className={`fixed top-0 w-full z-50 px-6 flex justify-between items-center text-white transition-all duration-500 ${
        scrolled
          ? 'py-4 bg-black/80 backdrop-blur-xl border-b border-white/5'
          : 'py-5 mix-blend-difference'
      }`}
    >
      <a href="#" className="font-serif text-xl font-bold tracking-widest uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded">
        Pak Drive
      </a>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide" aria-label="Main navigation">
        <a href="#fleet" className="hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded">Fleet</a>
        <a href="#services" className="hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded">Services</a>
        <a href="#why-us" className="hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded">Why Us</a>
        <a href="#testimonials" className="hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded">Reviews</a>
      </nav>
      <a
        href={whatsappLink('Hi! I want to book a car from Pak Drive.')}
        target="_blank"
        rel="noopener noreferrer"
        className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
          scrolled ? 'bg-white text-black hover:bg-white/90' : 'bg-white text-black hover:bg-white/90 mix-blend-normal'
        }`}
      >
        Book Now
      </a>
    </motion.header>
  );
};

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative h-dvh w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=2560"
          alt="Premium black SUV on a scenic road"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-[#050505]"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-5 text-center">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: shouldReduceMotion ? 0 : 1, delay: shouldReduceMotion ? 0 : 0.2 }}
        >
          <span className="inline-flex items-center gap-2 py-1.5 px-3 md:px-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-[10px] md:text-xs font-medium tracking-[0.15em] md:tracking-[0.2em] uppercase mb-6 md:mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            Rated 4.9★ on Google — 500+ Happy Clients
          </span>
        </motion.div>

        <motion.h1
          className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tighter max-w-5xl leading-[0.9]"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: shouldReduceMotion ? 0 : 1, delay: shouldReduceMotion ? 0 : 0.4 }}
        >
          Lahore's Most Trusted <br />
          <span className="italic font-light text-white/80">Rent a Car</span> Service
        </motion.h1>

        <motion.p
          className="mt-5 md:mt-8 text-base md:text-xl text-white/60 max-w-xl font-light leading-relaxed"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: shouldReduceMotion ? 0 : 1, delay: shouldReduceMotion ? 0 : 0.6 }}
        >
          From airport pickups to northern adventures — premium cars with professional drivers, delivered to your doorstep. No hidden fees, ever.
        </motion.p>

        <motion.div
          className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-3"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: shouldReduceMotion ? 0 : 1, delay: shouldReduceMotion ? 0 : 0.8 }}
        >
          <a
            href={whatsappLink('Hi! I want to book a car from Pak Drive.')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 md:px-8 md:py-4 bg-[#25D366] text-white rounded-full font-medium text-base md:text-lg flex items-center gap-2.5 hover:scale-105 transition-transform duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-black shadow-lg shadow-[#25D366]/20"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            Book on WhatsApp
          </a>
          <a
            href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
            className="px-6 py-3.5 md:px-8 md:py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-medium text-base md:text-lg flex items-center gap-2.5 hover:bg-white/20 transition-colors duration-300 border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <Phone className="w-5 h-5" aria-hidden="true" />
            Call {PHONE_NUMBER}
          </a>
        </motion.div>
      </div>
    </div>
  );
};

const TrustBar = () => {
  const shouldReduceMotion = useReducedMotion();
  const items = [
    { icon: ShieldCheck, label: 'Fully Insured' },
    { icon: Clock, label: '24/7 Support' },
    { icon: Truck, label: 'Doorstep Delivery' },
    { icon: Users, label: 'Professional Drivers' },
  ];

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
      className="bg-[#0a0a0a] border-y border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-3 px-5 py-5 md:py-6 md:justify-center ${
              idx % 2 === 0 ? 'border-r border-white/[0.06]' : ''
            } ${
              idx < 2 ? 'border-b md:border-b-0 border-white/[0.06]' : ''
            } ${
              idx === 2 ? 'md:border-r md:border-white/[0.06]' : ''
            }`}
          >
            <div className="w-9 h-9 rounded-lg bg-white/[0.04] flex items-center justify-center shrink-0">
              <item.icon className="w-[18px] h-[18px] text-white/50" aria-hidden="true" />
            </div>
            <span className="text-[13px] font-medium text-white/60 tracking-wide">{item.label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
const FLEET_CATEGORIES = ['All', 'SUVs', 'Sedans', 'Economy', 'Vans'] as const;

const ALL_CARS = [
  { name: 'Toyota Land Cruiser Prado', class: 'Luxury SUV', category: 'SUVs', price: 'Rs. 30,000', per: '/ day', image: 'https://exarpro.com/Cars/prado.png' },
  { name: 'Tucson 1.6L Hybrid AWD', class: '2026 · SUV', category: 'SUVs', price: 'Rs. 18,000', per: '/ day', image: 'https://exarpro.com/Cars/tucson-hybrid-2026.webp' },
  { name: 'KIA Sportage Hybrid FWD', class: '2026 · SUV', category: 'SUVs', price: 'Rs. 18,000', per: '/ day', image: 'https://exarpro.com/Cars/sportage-hybrid-2026.webp' },
  { name: 'Toyota Fortuner G 2.7L', class: '2022 · SUV', category: 'SUVs', price: 'Rs. 20,000', per: '/ day', image: 'https://exarpro.com/Cars/fortuner-2022.jpg' },
  { name: 'Hyundai Tucson FWD', class: '2022 · SUV', category: 'SUVs', price: 'Rs. 14,000', per: '/ day', image: 'https://exarpro.com/Cars/tucson-2022.jpg' },
  { name: 'KIA Sportage FWD', class: '2020-22 · SUV', category: 'SUVs', price: 'Rs. 13,000', per: '/ day', image: 'https://exarpro.com/Cars/sportage-2022.png' },
  { name: 'Honda Civic RS Turbo', class: '2023-24 · Sedan', category: 'Sedans', price: 'Rs. 14,000', per: '/ day', image: 'https://exarpro.com/Cars/civic-rs-turbo-2023.webp' },
  { name: 'Corolla Grande 1.8X', class: '2024-25 · Sedan', category: 'Sedans', price: 'Rs. 11,000', per: '/ day', image: 'https://exarpro.com/Cars/corolla-grande-2024.webp' },
  { name: 'Honda Civic Oriel Turbo', class: '2022 · Sedan', category: 'Sedans', price: 'Rs. 12,000', per: '/ day', image: 'https://exarpro.com/Cars/civic-oriel-2022.jpg' },
  { name: 'Hyundai Elantra GLS', class: '2021-22 · Sedan', category: 'Sedans', price: 'Rs. 9,500', per: '/ day', image: 'https://exarpro.com/Cars/elantra-2022.png' },
  { name: 'Honda Civic VTi Oriel', class: '2018-21 · Sedan', category: 'Sedans', price: 'Rs. 9,000', per: '/ day', image: 'https://exarpro.com/Cars/civic-2018.png' },
  { name: 'Corolla Altis 1.6X', class: '2024-25 · Economy', category: 'Economy', price: 'Rs. 9,500', per: '/ day', image: 'https://exarpro.com/Cars/corolla-altis-2022.png' },
  { name: 'Toyota Yaris 1.3L', class: '2025 · Economy', category: 'Economy', price: 'Rs. 6,000', per: '/ day', image: 'https://exarpro.com/Cars/yaris-2025.webp' },
  { name: 'Honda City 1.5L', class: '2021 · Economy', category: 'Economy', price: 'Rs. 6,500', per: '/ day', image: 'https://exarpro.com/Cars/city-2021.png' },
  { name: 'Toyota Yaris 1.3L', class: '2021-22 · Economy', category: 'Economy', price: 'Rs. 6,000', per: '/ day', image: 'https://exarpro.com/Cars/yaris-2021.jpg' },
  { name: 'Suzuki Cultus 1.0L', class: '2020-22 · Economy', category: 'Economy', price: 'Rs. 4,000', per: '/ day', image: 'https://exarpro.com/Cars/cultus-2022.png' },
  { name: 'Toyota Hiace Grand Cabin', class: '2021-22 · Van', category: 'Vans', price: 'Rs. 12,000', per: '/ day', image: 'https://exarpro.com/Cars/hiace.jpeg' },
  { name: 'Hyundai Starex / H1', class: '2019-22 · Van', category: 'Vans', price: 'Rs. 12,000', per: '/ day', image: 'https://exarpro.com/Cars/starex.jpg' },
];

const Fleet = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredCars = activeCategory === 'All'
    ? ALL_CARS
    : ALL_CARS.filter(car => car.category === activeCategory);

  return (
    <section id="fleet" className="py-14 md:py-24 px-4 md:px-8 max-w-7xl mx-auto" aria-labelledby="fleet-heading">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4">
        <div>
          <h2 id="fleet-heading" className="font-serif text-3xl md:text-6xl tracking-tight">Our Fleet</h2>
          <p className="text-white/40 text-base md:text-lg max-w-md font-light mt-2 md:mt-4">18 vehicles. Meticulously maintained. Comprehensively insured.</p>
        </div>
      </div>

      {/* Category filter */}
      <div className="flex gap-2 mb-8 md:mb-10 overflow-x-auto pb-2 scrollbar-hide" role="tablist" aria-label="Filter cars by category">
        {FLEET_CATEGORIES.map(cat => (
          <button
            key={cat}
            role="tab"
            aria-selected={activeCategory === cat}
            onClick={() => setActiveCategory(cat)}
            className={`cursor-pointer px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-white text-black'
                : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/70'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
        {filteredCars.map((car, idx) => (
          <motion.div
            key={car.name + car.class}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-5%' }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : (idx % 4) * 0.06 }}
            className="group rounded-2xl overflow-hidden bg-[#111] border border-white/[0.06] hover:border-white/10 transition-colors duration-500"
          >
            {/* Image zone */}
            <div className="relative aspect-[4/3] bg-gradient-to-b from-[#1a1a1a] to-[#111] overflow-hidden flex items-center justify-center p-3 md:p-4">
              <img
                src={car.image}
                alt={car.name}
                loading="lazy"
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
              />
            </div>
            {/* Info zone */}
            <div className="p-4 md:p-5">
              <p className="text-white/30 text-[10px] md:text-[11px] font-medium uppercase tracking-[0.15em] mb-1">{car.class}</p>
              <h3 className="font-serif text-sm md:text-base mb-2 leading-snug">{car.name}</h3>
              <div className="flex items-baseline justify-between mb-3">
                <p className="text-white font-medium text-base md:text-lg">{car.price}<span className="text-white/30 text-[10px] md:text-xs font-normal"> {car.per}</span></p>
              </div>
              <a
                href={whatsappLink(`Hi! I'm interested in renting the ${car.name} (${car.class}). Price: ${car.price}${car.per}. Can you help me with booking?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 md:py-2.5 bg-[#25D366] text-white rounded-lg font-medium text-xs md:text-sm flex items-center justify-center gap-1.5 hover:bg-[#1fbe5a] transition-colors duration-300"
              >
                <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" /> Book on WhatsApp
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Services = () => {
  const shouldReduceMotion = useReducedMotion();
  const services = [
  {
    title: 'Weddings',
    desc: 'Grand entrances deserve grand cars. Decorated luxury sedans & SUVs with professional chauffeurs.',
    image: '/services/wedding.png',
  },
  {
    title: 'Airport Transfers',
    desc: 'On-time, every time. Your driver will be waiting — no stress, no waiting.',
    image: '/services/airport.png',
  },
  {
    title: 'Northern Expeditions',
    desc: 'Hunza, Skardu & beyond — in rugged 4x4 luxury with experienced mountain drivers.',
    image: '/services/northern.png',
  },
  {
    title: 'Corporate Rentals',
    desc: 'Daily, weekly & monthly plans for businesses. Dedicated fleet with priority support for your team.',
    image: '/services/corporate.png',
  },
  {
    title: 'City Rides',
    desc: 'Daily rentals for errands, meetings, or exploring Lahore. Economy to premium — take your pick.',
    image: '/services/city.png',
  },
];


  return (
    <section id="services" className="py-14 md:py-24 px-4 md:px-8 max-w-7xl mx-auto" aria-labelledby="services-heading">
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
        className="text-center mb-10 md:mb-16"
      >
        <p className="text-emerald-400 text-sm font-medium uppercase tracking-[0.2em] mb-3">What We Offer</p>
        <h2 id="services-heading" className="font-serif text-3xl md:text-6xl tracking-tight">Tailored for Every Journey</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {services.slice(0, 3).map((service, idx) => (
          <motion.div
            key={idx}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : idx * 0.15 }}
            className="relative rounded-2xl md:rounded-3xl overflow-hidden h-[280px] md:h-[420px] group cursor-pointer"
          >
            <img
              src={service.image}
              alt={service.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-50 group-hover:opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5 md:p-8 flex flex-col justify-end">
              <h3 className="font-serif text-2xl md:text-3xl mb-2 md:mb-3">{service.title}</h3>
              <p className="text-white/60 text-xs md:text-sm leading-relaxed font-light">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6">
        {services.slice(3).map((service, idx) => (
          <motion.div
            key={idx}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: shouldReduceMotion ? 0 : idx * 0.15 }}
            className="relative rounded-2xl md:rounded-3xl overflow-hidden h-[240px] md:h-[320px] group cursor-pointer"
          >
            <img
              src={service.image}
              alt={service.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-50 group-hover:opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5 md:p-8 flex flex-col justify-end">
              <h3 className="font-serif text-2xl md:text-3xl mb-2 md:mb-3">{service.title}</h3>
              <p className="text-white/60 text-xs md:text-sm leading-relaxed font-light">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const shouldReduceMotion = useReducedMotion();
  const features = [
    { title: 'Fully Insured', desc: 'Comprehensive coverage on every vehicle. Limited liability on all chauffeur-driven trips.' },
    { title: 'Well-Maintained', desc: 'Genuine parts. Periodic servicing. Fleet renewed every 3 years.' },
    { title: 'Doorstep Delivery', desc: 'Home, office, hotel, or airport — anywhere in Lahore, no extra charge.' },
    { title: 'Licensed Drivers', desc: 'Verified CNIC & licence. Trained, professional, equipped with safety kits.' },
    { title: 'Transparent Pricing', desc: 'What you see is what you pay. No hidden fees, ever.' },
    { title: '24/7 Support', desc: 'Call or WhatsApp us anytime. We\'re always here — day or night.' },
  ];

  return (
    <section id="why-us" className="py-14 md:py-24 px-4 md:px-8" aria-labelledby="why-heading">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          id="why-heading"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          className="font-serif text-3xl md:text-6xl tracking-tight text-center mb-10 md:mb-20"
        >
          More than just a rental.<br/>
          <span className="italic font-light text-white/40">A promise.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : idx * 0.08 }}
              className="py-8 px-6 border-b border-white/5 md:odd:border-r group"
            >
              <div className="flex items-start gap-5">
                <span className="font-serif text-3xl text-white/10 group-hover:text-white/25 transition-colors duration-500 leading-none">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-serif text-xl mb-2">{feature.title}</h3>
                  <p className="text-white/40 text-sm font-light leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const StatsCounter = () => {
  const stats = [
    { value: 500, suffix: '+', label: 'Happy Clients' },
    { value: 50, suffix: '+', label: 'Premium Vehicles' },
    { value: 8, suffix: '+', label: 'Years Experience' },
    { value: 24, suffix: '/7', label: 'Support' },
  ];

  return (
    <section className="py-10 md:py-16 px-4 md:px-8 border-y border-white/5" aria-label="Company statistics">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 text-center">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <p className="font-serif text-3xl md:text-5xl tracking-tight text-white/90">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
            </p>
            <p className="text-white/30 text-xs font-light uppercase tracking-[0.2em] mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Testimonials = () => {
  const shouldReduceMotion = useReducedMotion();
  const reviews = [
    {
      text: "The Prado was in immaculate condition. The chauffeur arrived 15 minutes early for our trip to Naran. Exceptional service that truly understands luxury.",
      name: 'Hassan Tariq',
      role: 'Corporate Client, Lahore',
    },
    {
      text: "Booked the S-Class for my brother's Baraat. The car was detailed to perfection and decorated exactly as requested. Made the day incredibly special.",
      name: 'Ayesha Khan',
      role: 'Wedding Booking',
    },
    {
      text: "We use Pak Drive for all our executive airport pickups. Always on time, always professional. Their monthly corporate plan has been a game-changer for us.",
      name: 'Omar Siddiqui',
      role: 'CEO, TechVentures Lahore',
    },
    {
      text: "Rented a Civic for a week-long family trip. The car was spotless, well-maintained, and the pricing was completely transparent — no surprises. Will definitely book again.",
      name: 'Fatima Noor',
      role: 'Family Trip, Lahore to Islamabad',
    },
  ];

  return (
    <section id="testimonials" className="py-14 md:py-24 px-4 md:px-8 bg-[#0a0a0a] border-y border-white/5" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-sm mb-6">
            <Star className="w-4 h-4 text-yellow-500 fill-current" aria-hidden="true" />
            <span className="text-yellow-500/90 font-medium">4.9 out of 5 — Google Reviews</span>
          </div>
          <h2 id="testimonials-heading" className="font-serif text-3xl md:text-6xl tracking-tight">What Our Clients Say</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : idx * 0.1 }}
              className="p-6 md:p-10 rounded-2xl md:rounded-3xl bg-[#111] border border-white/5"
            >
              <div className="flex gap-1 mb-6 text-yellow-500/80" role="img" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote>
                <p className="text-lg text-white/80 font-serif italic leading-relaxed mb-8">
                  "{review.text}"
                </p>
                <footer>
                  <p className="font-medium text-lg">{review.name}</p>
                  <p className="text-white/40 text-sm mt-1">{review.role}</p>
                </footer>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTABanner = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section className="py-16 md:py-24 px-4 md:px-8" aria-label="Call to action">
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
        className="max-w-5xl mx-auto text-center rounded-[2rem] relative overflow-hidden"
      >
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=2000"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>

        {/* Content */}
        <div className="relative px-6 py-16 md:p-20">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4 md:mb-6">
            Ready to Book Your Ride?
          </h2>
          <p className="text-white/50 text-base md:text-lg font-light max-w-md mx-auto mb-8 md:mb-10">
            Get a quote in under 2 minutes. No forms — just message us.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md sm:max-w-none mx-auto">
            <a
              href={whatsappLink('Hi! I want to book a car from Pak Drive. Can you share your rates?')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#25D366] text-white rounded-full font-medium text-base flex items-center justify-center gap-2.5 hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#25D366]/20"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              WhatsApp Us
            </a>
            <a
              href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
              className="px-6 py-3.5 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-medium text-base flex items-center justify-center gap-2.5 hover:bg-white/20 transition-colors duration-300"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Call Now
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const StickyContact = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3" role="group" aria-label="Contact options">
      <a
        href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
        aria-label="Call us"
        className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        <Phone className="w-5 h-5" aria-hidden="true" />
      </a>
      <a
        href={whatsappLink('Hi! I want to book a car from Pak Drive.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        <MessageCircle className="w-6 h-6" aria-hidden="true" />
      </a>
    </div>
  );
};

const Footer = () => {
  const areas = [
    'DHA', 'Gulberg', 'Model Town', 'Johar Town', 'Bahria Town',
    'Garden Town', 'Cantt', 'Mall Road', 'Airport', 'Wapda Town',
    'Faisal Town', 'Allama Iqbal Town', 'Township', 'Shadman',
  ];

  return (
    <footer className="py-16 px-4 md:px-8 border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="font-serif text-2xl font-bold tracking-widest uppercase mb-4">Pak Drive</p>
            <p className="text-white/40 text-sm font-light leading-relaxed mb-6">
              Lahore's premium rent a car service. Insured vehicles, professional drivers, and doorstep delivery across Pakistan.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href={whatsappLink('Hi!')} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-colors" aria-label="WhatsApp">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-widest mb-5">Quick Links</h3>
            <nav aria-label="Footer navigation" className="flex flex-col gap-3 text-sm text-white/40">
              <a href="#fleet" className="hover:text-white transition-colors">Our Fleet</a>
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a>
              <a href="#testimonials" className="hover:text-white transition-colors">Reviews</a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-widest mb-5">Contact</h3>
            <div className="flex flex-col gap-3 text-sm text-white/40">
              <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="hover:text-white transition-colors flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                {PHONE_NUMBER}
              </a>
              <a href={whatsappLink('Hi!')} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                WhatsApp
              </a>
              <span className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                Lahore, Pakistan
              </span>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-widest mb-5">Service Areas</h3>
            <div className="flex flex-wrap gap-2">
              {areas.map((area) => (
                <span key={area} className="text-xs text-white/30 bg-white/5 px-2.5 py-1 rounded-full">{area}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} Pak Drive. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/60 transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-emerald-400/20 selection:text-white">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-lg focus:text-sm focus:font-medium">
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <TrustBar />

        <Fleet />
        <Services />
        <WhyChooseUs />
        <StatsCounter />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
      <StickyContact />
    </div>
  );
}
