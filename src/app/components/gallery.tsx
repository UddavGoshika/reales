import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, Ruler, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { ArchitecturalCurves } from './ui/ArchitecturalCurves';
import { Link } from 'react-router-dom';

const galleryProjects = [
  {
    id: 1,
    name: 'Astra Valley',
    type: 'Open Plots',
    location: 'Madugula, Visakhapatnam',
    sqft: '2,500 - 5,000',
    description: 'An exquisite sanctuary where curated land holdings meet the whispering winds of the valley, crafted for the true connoisseur.',
    image: 'https://images.unsplash.com/photo-1628592102171-0775d2ff0036?q=80&w=2070',
    tagline: 'The Valley\'s Crown Jewel'
  },
  {
    id: 2,
    name: 'Goutam Valley',
    type: 'Luxury Plots',
    location: 'Bheemili, Visakhapatnam',
    sqft: '3,800 - 6,000',
    description: 'Bespoke coastal living that blends the tranquility of the sea with meticulously planned luxury infrastructure.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013',
    tagline: 'Coastal Elegance Defined'
  },
  {
    id: 3,
    name: 'Imperial Villas',
    type: 'Triplex Royal Villas',
    location: 'Gachibowli, Hyderabad',
    sqft: '4,500+',
    description: 'A masterpiece of privacy and prestige, these private estates offer a bespoke living experience beyond comparison.',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2070',
    tagline: 'Legacy of Royal Living'
  },
  {
    id: 4,
    name: 'Green View Farms',
    type: 'Sustainable Farmlands',
    location: 'Chipurupalle, Vizianagaram',
    sqft: '10,000+',
    description: 'Return to the soul of the earth; lush agrarian retreats that offer a timeless escape into nature\'s purest embrace.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000',
    tagline: 'Agrarian Tranquility'
  },
  {
    id: 5,
    name: 'Skyline Duplex',
    type: 'Urban Luxury Homes',
    location: 'Madhapur, Hyderabad',
    sqft: '3,200',
    description: 'Elevate your urban existence in these meticulously designed multi-level residences overlooking the city skyline.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070',
    tagline: 'The Vertical Sanctuary'
  }
];

export function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryProjects.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? galleryProjects.length - 1 : prev - 1));
  };

  const activeProject = galleryProjects[currentSlide];

  return (
    <section id="gallery" className="relative min-h-[90vh] py-12 px-4 md:px-12 flex items-center overflow-hidden bg-[#0B0B0D]">
      {/* Background Ambience */}
      <div className="absolute inset-4 border border-[#C6A75E]/10 rounded-[3rem] pointer-events-none z-[1]" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_70%_50%,rgba(198,167,94,0.08)_0%,transparent_70%)] pointer-events-none" />
      <ArchitecturalCurves className="opacity-0.05" opacity={0.05} />

      <div className="max-w-[1720px] mx-auto relative z-10 w-full">

        {/* CONDENSED HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <span className="text-[#C6A75E] tracking-[8px] text-[8px] font-black uppercase mb-2 block">Visual Discovery</span>
          <h2 className="text-3xl md:text-5xl text-[#F5F5F5]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}>
            Cinematic <span className="text-[#C6A75E] italic">Immersion Gallery</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

          {/* LEFT: WIDER/SHORTER IMAGE CANVAS (8 COLS) */}
          <div className="lg:col-span-8 relative group">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                className="relative aspect-[16/8.5] overflow-hidden rounded-[2.5rem] border border-[#C6A75E]/20 shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-10" />
                <ImageWithFallback
                  src={activeProject.image}
                  alt={activeProject.name}
                  className="w-full h-full object-cover brightness-[0.85] transition-transform duration-[3000ms] hover:scale-105"
                />

                {/* Visual Label */}
                <div className="absolute bottom-8 left-10 z-20 flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-[#C6A75E]" />
                  <span className="text-[10px] tracking-[4px] uppercase font-bold text-[#F5F5F5]/70">{activeProject.tagline}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* NAVIGATION ARROWS */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 z-30 flex justify-between pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-[#C6A75E]/30 flex items-center justify-center text-white pointer-events-auto hover:bg-[#C6A75E] hover:text-black transition-all duration-500"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-[#C6A75E]/30 flex items-center justify-center text-white pointer-events-auto hover:bg-[#C6A75E] hover:text-black transition-all duration-500"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* RIGHT: NARRATIVE PROJECT DATA (4 COLS) */}
          <div className="lg:col-span-4 space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="space-y-2">
                  <span className="text-[#C6A75E] tracking-[6px] text-[9px] font-black uppercase inline-block">Featured Residence</span>
                  <h3 className="text-5xl md:text-6xl text-white font-serif leading-none" style={{ fontWeight: 500 }}>
                    {activeProject.name.split(' ')[0]} <br />
                    <span className="text-[#C6A75E] italic translate-x-4 inline-block">{activeProject.name.split(' ')[1]}</span>
                  </h3>
                </div>

                <div className="space-y-4 border-l border-[#C6A75E]/30 pl-6">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-3.5 h-3.5 text-[#C6A75E]" />
                    <span className="text-[12px] text-[#B5B5B5] tracking-widest">{activeProject.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Ruler className="w-3.5 h-3.5 text-[#C6A75E]" />
                    <span className="text-[12px] text-[#B5B5B5] tracking-widest">{activeProject.sqft} SQFT</span>
                  </div>
                  <div className="inline-block px-3 py-1 bg-[#C6A75E]/10 border border-[#C6A75E]/30 text-[#C6A75E] text-[9px] font-bold tracking-[2px] uppercase">
                    {activeProject.type}
                  </div>
                </div>

                <p className="text-[#8A8A8A] text-lg leading-relaxed font-light italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                  "{activeProject.description}"
                </p>

                <div className="pt-4">
                  <Link to={activeProject.id === 1 ? '/project/astra-valley' : activeProject.id === 2 ? '/project/goutam-valley' : '#'} className="flex items-center gap-6 group/link">
                    <div className="w-14 h-14 rounded-full border border-[#C6A75E]/30 flex items-center justify-center group-hover/link:bg-[#C6A75E] transition-all duration-500">
                      <ArrowRight className="w-5 h-5 text-[#C6A75E] group-hover/link:text-black" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] tracking-[4px] uppercase font-black text-white">Explore Project</span>
                      <span className="text-[8px] text-[#C6A75E] tracking-[2px] uppercase opacity-60">Full Case Study</span>
                    </div>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Visual */}
            <div className="flex items-center gap-3 pt-8 pb-4">
              {galleryProjects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-[2px] transition-all duration-500 ${currentSlide === i ? 'w-10 bg-[#C6A75E]' : 'w-4 bg-white/10 hover:bg-white/30'}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
