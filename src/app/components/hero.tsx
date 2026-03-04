import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArchitecturalCurves } from './ui/ArchitecturalCurves';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop',
    titlePart1: 'The Sovereign',
    titlePart2: 'Standard',
    subtitle: 'A curated collection of the world\'s most prestigious residences, crafted for those who demand architectural perfection.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    titlePart1: 'Architectural',
    titlePart2: 'Magnificence',
    subtitle: 'Where timeless elegance meets contemporary innovation and unparalleled craftsmanship.'
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
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-[#0B0B0D]">
      {/* Architectural Accent Curves */}
      <ArchitecturalCurves className="opacity-50" opacity={0.08} />

      {/* 1. CINEMATIC BACKGROUND SYSTEM */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 2, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          {/* Layered Overlays - Slightly brightened for better visual clarity */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10" />
          <div className="absolute inset-0 bg-black/20 z-10" />

          <ImageWithFallback
            src={slides[currentSlide].image}
            alt="Luxury Estate"
            className="w-full h-full object-cover brightness-[0.7]"
          />
        </motion.div>
      </AnimatePresence>

      {/* 2. DECORATIVE ARCHITECTURAL ELEMENTS */}
      <div className="absolute inset-x-8 top-32 h-[1px] bg-gradient-to-r from-transparent via-[#C6A75E]/20 to-transparent z-20" />
      <div className="absolute right-12 top-1/2 -translate-y-1/2 w-[1px] h-48 bg-gradient-to-b from-transparent via-[#C6A75E]/20 to-transparent z-20" />

      {/* Golden Corner Details */}
      <div className="absolute top-12 left-12 w-8 h-8 border-t border-l border-[#C6A75E]/40 z-20 pointer-events-none" />
      <div className="absolute bottom-12 right-12 w-8 h-8 border-b border-r border-[#C6A75E]/40 z-20 pointer-events-none" />

      {/* 3. HERO CONTENT SECTION */}
      <div className="relative z-30 h-full flex flex-col justify-end pb-32 px-8 md:px-24 max-w-[1440px] mx-auto w-full">
        {/* Cinematic Headline */}
        <motion.div
          key={`headline-${currentSlide}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-7xl flex flex-col items-start gap-1" style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 500,
            lineHeight: 1.1,
            letterSpacing: '0.5px'
          }}>
            <span className="text-[#F5F5F5] italic opacity-90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              {slides[currentSlide].titlePart1}
            </span>
            <span className="text-[#C6A75E] uppercase tracking-[0.1em] drop-shadow-[0_4px_15px_rgba(198,167,94,0.3)]">
              {slides[currentSlide].titlePart2}
            </span>
          </h1>
        </motion.div>

        {/* Elegant Subtitle */}
        <motion.p
          key={`sub-${currentSlide}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="max-w-2xl text-[#B5B5B5] text-lg md:text-xl mb-12 leading-relaxed tracking-wide font-light border-l border-[#C6A75E]/30 pl-8"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {slides[currentSlide].subtitle}
        </motion.p>

        {/* 4. PREMIUM CTA SYSTEM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-6 mb-16"
        >
          {/* Solid Gold Button */}
          <button
            onClick={() => scrollToSection('projects')}
            className="group relative px-12 py-5 bg-[#C6A75E] text-black font-bold tracking-[3px] text-xs transition-all duration-500 hover:bg-[#E8D8A0] hover:shadow-[0_0_30px_rgba(198,167,94,0.4)] overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              DISCOVER RESIDENCES <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </span>
            <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
          </button>

          {/* Outline Gold Button */}
          <button
            onClick={() => scrollToSection('about')}
            className="px-12 py-5 border border-[#C6A75E]/40 text-[#C6A75E] font-bold tracking-[3px] text-xs bg-black/20 backdrop-blur-md transition-all duration-500 hover:border-[#C6A75E] hover:bg-[#C6A75E]/5"
          >
            THE TATITO LEGACY
          </button>
        </motion.div>

        {/* 5. ELITE SOCIAL PROOF PANEL */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="flex gap-12 items-center text-[#7A7A7A]"
        >
          <div className="flex flex-col">
            <span className="text-2xl font-light text-[#C6A75E]" style={{ fontFamily: "'Playfair Display', serif" }}>15+</span>
            <span className="text-[10px] tracking-[3px] uppercase">Years of Architectural Legacy</span>
          </div>
          <div className="h-8 w-[1px] bg-white/10" />
          <div className="flex flex-col">
            <span className="text-2xl font-light text-[#C6A75E]" style={{ fontFamily: "'Playfair Display', serif" }}>250+</span>
            <span className="text-[10px] tracking-[3px] uppercase">Ultra-Luxury Units Delivered</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer flex flex-col items-center gap-4 z-30"
        onClick={() => scrollToSection('about')}
      >
        <span className="text-[9px] tracking-[6px] text-[#7A7A7A] uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#C6A75E] to-transparent animate-pulse" />
      </motion.div>

      {/* Animated Gold Particle Overlay Concept (Custom SVG or CSS) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.1] z-[1]">
        {/* Placeholder for Particle Dust CSS */}
        <div className="particles-dust" />
      </div>
    </section>
  );
}
