import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Shield, Award, Diamond, Clock, Building2, Globe, HeartPulse, Construction, Users, Target, Eye, Sparkles } from 'lucide-react';
import { ArchitecturalCurves } from './ui/ArchitecturalCurves';

// @ts-ignore
import navlogo from './figma/images/navlogo.png';

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#0B0B0D]">
      {/* 0. OUTER GOLDEN BORDER ENVELOPE */}
      <div className="absolute inset-4 border border-[#C6A75E]/10 rounded-[3rem] pointer-events-none z-[1]" />

      {/* 1. LAYERED LIGHTING DEPTH SECTION (Enhanced Gold) */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(198,167,94,0.15)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(198,167,94,0.1)_0%,transparent_60%)] pointer-events-none" />

      {/* 1.5. Architectural Accent Curves */}
      <ArchitecturalCurves opacity={0.08} />

      {/* 2. MAIN ABOUT CONTENT (Enlarged and Re-structured) */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-24 py-32 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">

        {/* Visual Identity Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative flex flex-col items-center justify-center p-12 border border-[#C6A75E]/20 bg-[#161618]/40 backdrop-blur-3xl rounded-[4rem] shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
        >
          {/* Main Logo Presence */}
          <div className="relative group p-10">
            <div className="absolute inset-0 bg-[#C6A75E]/5 blur-3xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-1000" />
            <img
              src={navlogo}
              alt="Tatito Logo"
              className="h-64 md:h-[450px] w-auto object-contain brightness-125 contrast-110 drop-shadow-[0_0_40px_rgba(198,167,94,0.4)] transition-transform duration-1000 hover:scale-105"
            />
          </div>

          {/* Luxury Floating Frame Details */}
          <div className="absolute top-12 left-12 w-24 h-24 border-t-2 border-l-2 border-[#C6A75E]/40 z-20 pointer-events-none rounded-tl-[3rem]" />
          <div className="absolute bottom-12 right-12 w-24 h-24 border-b-2 border-r-2 border-[#C6A75E]/40 z-20 pointer-events-none rounded-br-[3rem]" />

          {/* Experience Badge */}
          <div className="mt-8 bg-[#0B0B0D] border border-[#C6A75E]/30 px-12 py-6 rounded-full shadow-2xl">
            <div className="flex items-center gap-6">
              <span className="text-5xl text-[#C6A75E] font-serif font-black">8+</span>
              <div className="h-10 w-[1px] bg-[#C6A75E]/20" />
              <span className="text-[10px] tracking-[4px] uppercase text-[#F5F5F5] font-black max-w-[100px] leading-tight">Years of Market Leadership</span>
            </div>
          </div>
        </motion.div>

        {/* Expanded Narrative Section */}
        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#C6A75E] tracking-[10px] text-sm font-black uppercase mb-6 block border-l-2 border-[#C6A75E] pl-6 uppercase">About Us</span>
            <h2 className="text-5xl md:text-7xl mb-12 text-[#F5F5F5] font-serif leading-[1.1]">
              Redefining <span className="text-[#C6A75E] italic">Luxury Living</span>
            </h2>

            <div className="space-y-12">
              <p className="text-[#F5F5F5] text-2xl leading-relaxed font-light tracking-wide lg:max-w-xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                At TATITO, we go beyond mere structures. We curate diverse lifestyle streams including premium <strong>Open Plots</strong>, sustainable <strong>Farm Lands</strong>, royal <strong>Villas</strong>, and bespoke <strong>Interiors</strong>.
              </p>

              {/* Detailed Quadrants */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4 group">
                  <div className="flex items-center gap-4 text-[#C6A75E]">
                    <Sparkles className="w-5 h-5" />
                    <span className="text-[10px] tracking-[4px] font-black uppercase">Our Vision</span>
                  </div>
                  <p className="text-[#7A7A7A] text-sm leading-relaxed group-hover:text-[#B5B5B5] transition-colors font-medium">To be the global benchmark in high-end living, harmonizing nature's farm lands with ultra-modern Royal Villas.</p>
                </div>

                <div className="space-y-4 group">
                  <div className="flex items-center gap-4 text-[#C6A75E]">
                    <Target className="w-5 h-5" />
                    <span className="text-[10px] tracking-[4px] font-black uppercase">Our Goal</span>
                  </div>
                  <p className="text-[#7A7A7A] text-sm leading-relaxed group-hover:text-[#B5B5B5] transition-colors font-medium">Delivering clear-title Open Plots and high-yield Real Estate investments through an uncompromising ethical framework.</p>
                </div>

                <div className="space-y-4 group">
                  <div className="flex items-center gap-4 text-[#C6A75E]">
                    <Users className="w-5 h-5" />
                    <span className="text-[10px] tracking-[4px] font-black uppercase">Happy Families</span>
                  </div>
                  <p className="text-[#7A7A7A] text-sm leading-relaxed group-hover:text-[#B5B5B5] transition-colors font-medium">Over 500+ families have realized their dream through our bespoke Interiors and sophisticated Apartment projects.</p>
                </div>

                <div className="space-y-4 group">
                  <div className="flex items-center gap-4 text-[#C6A75E]">
                    <Globe className="w-5 h-5" />
                    <span className="text-[10px] tracking-[4px] font-black uppercase">Full Spectrum</span>
                  </div>
                  <p className="text-[#7A7A7A] text-sm leading-relaxed group-hover:text-[#B5B5B5] transition-colors font-medium">We master the entire lifecycle of real estate, from strategic land acquisition to the final interior aesthetic.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-10 flex flex-col gap-6"
          >
            <div className="w-48 h-[2px] bg-[#C6A75E]" />
            <span className="text-[#F5F5F5] text-[10px] tracking-[8px] uppercase font-black opacity-30 tracking-widest">THE TATITO LEGACY</span>
          </motion.div>
        </div>
      </div>

      {/* 3. AUTHORITY SECTION: THE PILLARS OF TATITO (8 GRIDS) */}
      <div className="bg-[#161618] border-y border-white/5 relative z-10 py-32 px-8">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-4xl text-[#C6A75E]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
              The Pillars of TATITO
            </h2>
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Shield />, title: 'Precision', desc: 'Meticulous architectural integrity in every structure we build, ensuring that every detail meets the highest global standards of luxury and safety.' },
              { icon: <Award />, title: 'Excellence', desc: 'Award-winning standards in global real estate, recognized for our commitment to quality and architectural innovation across major territories.' },
              { icon: <Diamond />, title: 'Bespoke', desc: 'Hand-curated properties for the elite lifestyle, designed for those who demand exclusivity and a personal touch in their living spaces.' },
              { icon: <Clock />, title: 'Legacy', desc: 'Building generational wealth through timeless assets that appreciate over time, providing a secure and prestigious future for your family.' },
              { icon: <Building2 />, title: 'Innovation', desc: 'Pioneering future-forward design philosophies that blend sustainable technology with classical high-end aesthetics for the modern homeowner.' },
              { icon: <Globe />, title: 'Global', desc: 'Connecting world-class standards with local roots, bringing international luxury experiences to your doorstep with unparalleled precision.' },
              { icon: <HeartPulse />, title: 'Wellness', desc: 'Prioritizing the health and comfort of residents through advanced air purification, natural light optimization, and holistic spatial design.' },
              { icon: <Construction />, title: 'Quality', desc: 'Uncompromising build standards for longevity, using premium materials and expert craftsmanship to ensure your home stands the test of time.' }
            ].map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="group p-8 bg-[#1C1C1E] border border-[#C6A75E]/10 rounded-2xl hover:border-[#C6A75E]/40 transition-all duration-500"
              >
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-4">
                    <div className="text-[#C6A75E] w-8 h-8 group-hover:scale-110 transition-transform duration-500 shrink-0">
                      {pillar.icon}
                    </div>
                    <h4 className="text-xl text-[#F5F5F5]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}>{pillar.title}</h4>
                  </div>
                  <div>
                    <p className="text-[#7A7A7A] text-xs leading-relaxed group-hover:text-[#B5B5B5] transition-colors">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
