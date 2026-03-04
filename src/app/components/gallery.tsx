import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Search, ArrowUpRight } from 'lucide-react';
import { ArchitecturalCurves } from './ui/ArchitecturalCurves';

const galleryItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071',
    category: 'Architecture'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070',
    category: 'Interior'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600585154526-990dcea4db0d?q=80&w=2070',
    category: 'Lifestyle'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070',
    category: 'Amenity'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=2070',
    category: 'Views'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075',
    category: 'Master Bedroom'
  }
];

export function Gallery() {
  return (
    <section id="gallery" className="py-32 px-8 relative overflow-hidden bg-[#0B0B0D]">
      {/* 0. OUTER GOLDEN BORDER ENVELOPE */}
      <div className="absolute inset-4 border border-[#C6A75E]/10 rounded-[3rem] pointer-events-none z-[1]" />

      {/* 1. LAYERED LIGHTING DEPTH SECTION */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(198,167,94,0.1)_0%,transparent_70%)] pointer-events-none" />

      {/* 1.5. Architectural Accent Curves */}
      <ArchitecturalCurves className="rotate-180 scale-x-[-1]" opacity={0.06} />

      <div className="max-w-[1440px] mx-auto relative z-10">

        {/* Section Heading - Royal Discipline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[#C6A75E] tracking-[6px] text-xs font-bold uppercase mb-4 block">Visual Curation</span>
          <h2 className="text-4xl md:text-5xl mb-6 text-[#C6A75E]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
            Cinematic Immersion Gallery
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent mx-auto mt-6" />
        </motion.div>

        {/* 2. ROYAL ALTERNATING SECTIONS */}
        <div className="space-y-40">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-24`}
            >
              {/* Image Canvas with Golden Frame Effect */}
              <div className="w-full lg:w-3/5 relative group shrink-0">
                <div className="absolute -inset-4 border border-[#C6A75E]/10 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-1000 z-0" />
                <div className="relative aspect-[16/10] overflow-hidden bg-[#161618] border border-white/5 shadow-[0_30px_60px_rgba(0,0,0,0.5)] z-10 rounded-[2rem]">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.category}
                    className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110 brightness-[0.92]"
                  />
                  {/* Cinematic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-transparent to-transparent opacity-60" />
                </div>

                {/* Floating Architectural Detail */}
                <div className={`absolute top-1/2 ${index % 2 === 0 ? '-right-8' : '-left-8'} -translate-y-1/2 hidden xl:block z-20`}>
                  <div className="text-[120px] font-bold text-white/[0.03] select-none leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>
                    0{index + 1}
                  </div>
                </div>
              </div>

              {/* Narrative Content Discovery */}
              <div className="w-full lg:w-2/5 space-y-8 text-center lg:text-left">
                <div className="inline-block px-4 py-1 border-l-2 border-[#C6A75E] bg-[#C6A75E]/5 text-[#C6A75E] text-[10px] tracking-[5px] uppercase font-bold">
                  {item.category}
                </div>

                <h3 className="text-4xl md:text-5xl text-[#F5F5F5] italic leading-tight" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}>
                  Architectural <br /> <span className="text-[#C6A75E] not-italic">Sovereignty</span>
                </h3>

                <p className="text-[#7A7A7A] text-lg leading-relaxed font-light tracking-wide max-w-md mx-auto lg:mx-0">
                  A synthesis of classical proportion and modern engineering. Every surface is curated to evoke a sense of timeless investment integrity.
                </p>

                <div className="flex justify-center lg:justify-start pt-6">
                  <button className="group relative flex items-center gap-6 text-[#C6A75E] text-[10px] tracking-[6px] uppercase font-bold">
                    <span>Explore Archive</span>
                    <div className="relative w-12 h-[1px] bg-[#C6A75E]">
                      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 rounded-full bg-[#C6A75E] group-hover:scale-150 transition-transform duration-500 shadow-[0_0_15px_rgba(198,167,94,0.8)]" />
                    </div>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Action View */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-40 text-center"
        >
          <div className="w-px h-24 bg-gradient-to-b from-[#C6A75E] to-transparent mx-auto mb-12" />
          <button className="group relative px-16 py-6 border border-[#C6A75E]/30 text-[#C6A75E] font-bold tracking-[8px] text-xs transition-all duration-1000 overflow-hidden hover:border-[#C6A75E]">
            <span className="relative z-10 transition-colors duration-700 group-hover:text-black">VIEW FULL CINEMATIC ARCHIVES</span>
            <div className="absolute inset-0 bg-[#C6A75E] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out z-0" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
