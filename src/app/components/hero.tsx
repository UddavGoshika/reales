import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArchitecturalCurves } from './ui/ArchitecturalCurves';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop',
    titlePart1: 'Astra',
    titlePart2: 'Valley',
    subtitle: 'An exquisite sanctuary where curated land holdings meet the whispering winds of the valley, crafted for the true connoisseur.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop',
    titlePart1: 'Elite',
    titlePart2: 'Apartments',
    subtitle: 'Ascend to a realm of vertical elegance, where sweeping skylines and architectural brilliance redefine your urban existence.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    titlePart1: 'Imperial',
    titlePart2: 'Villas',
    subtitle: 'A masterpiece of privacy and prestige, these private estates offer a bespoke living experience beyond comparison.'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    titlePart1: 'Royal',
    titlePart2: 'Duplex',
    subtitle: 'Discover the harmony of multi-level grandeur, where vast open spaces and sophisticated design create a living symphony.'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop',
    titlePart1: 'Heritage',
    titlePart2: 'Farm Lands',
    subtitle: 'Return to the soul of the earth; lush agrarian retreats that offer a timeless escape into nature\'s purest embrace.'
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-[#030304]">
      {/* 1. CINEMATIC BACKGROUND SYSTEM - Dynamic Backdrop Blur */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          {/* Blurred Background Layer */}
          <div className="absolute inset-0 scale-110 blur-[80px] opacity-40">
            <ImageWithFallback
              src={slides[currentSlide].image}
              alt="Backdrop"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Dark Overlay for Backdrop */}
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* 2. THE FRAMED BANNER - Sharp Central Image */}
      <div className="absolute inset-0 px-2 md:px-4 pt-[190px] md:pt-[180px] pb-4 md:pb-8 z-10">
        <div className="relative w-full h-full rounded-none overflow-hidden border border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`framed-${currentSlide}`}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 2, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0"
            >
              {/* Image Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 z-10" />
              <div className="absolute inset-0 bg-black/10 z-10" />

              <ImageWithFallback
                src={slides[currentSlide].image}
                alt="Luxury Estate"
                className="w-full h-full object-cover brightness-[0.85]"
              />
            </motion.div>
          </AnimatePresence>

          {/* Architectural Curves - Inside the frame */}
          <ArchitecturalCurves className="opacity-30 mix-blend-overlay" opacity={0.1} />

          {/* Golden Corner Details - Inside the frame */}
          <div className="absolute top-10 left-10 w-12 h-12 border-t border-l border-[#C6A75E]/30 z-20 pointer-events-none rounded-tl-xl" />
          <div className="absolute bottom-10 right-10 w-12 h-12 border-b border-r border-[#C6A75E]/30 z-20 pointer-events-none rounded-br-xl" />

          {/* Content Inside the Frame */}
          <div className="relative z-30 h-full flex flex-col justify-end pb-12 md:pb-20 px-8 md:px-20 max-w-[1440px] mx-auto w-full">
            {/* Cinematic Headline */}
            <motion.div
              key={`headline-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="mb-4"
            >
              <h1 className="text-4xl md:text-8xl flex flex-col items-start gap-1" style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 500,
                lineHeight: 1.1,
              }}>
                <span className="text-[#F5F5F5] italic opacity-90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                  {slides[currentSlide].titlePart1}
                </span>
                <span className="text-[#C6A75E] uppercase tracking-[0.15em] drop-shadow-[0_4px_15px_rgba(198,167,94,0.3)]">
                  {slides[currentSlide].titlePart2}
                </span>
              </h1>
            </motion.div>

            {/* Elegant Subtitle */}
            <motion.p
              key={`sub-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="max-w-xl text-[#B5B5B5]/90 text-sm md:text-lg mb-10 leading-relaxed tracking-wide font-light border-l-2 border-[#C6A75E]/40 pl-6"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {slides[currentSlide].subtitle}
            </motion.p>

            {/* Premium CTA System */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="group relative px-10 py-4 bg-[#C6A75E] text-black font-bold tracking-[3px] text-[10px] transition-all duration-500 hover:bg-[#E8D8A0] hover:shadow-[0_0_40px_rgba(198,167,94,0.4)] overflow-hidden rounded-lg"
              >
                <span className="relative z-10 flex items-center gap-2 uppercase">
                  Discover Residences <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                </span>
              </button>

              <button
                onClick={() => scrollToSection('about')}
                className="px-10 py-4 border border-[#C6A75E]/30 text-[#C6A75E] font-bold tracking-[3px] text-[10px] bg-black/40 backdrop-blur-md transition-all duration-500 hover:border-[#C6A75E] hover:bg-[#C6A75E]/10 rounded-lg uppercase"
              >
                The Tatito Legacy
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer flex flex-col items-center gap-3 z-40"
        onClick={() => scrollToSection('about')}
      >
        <span className="text-[8px] tracking-[5px] text-[#7A7A7A] uppercase">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#C6A75E] to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
