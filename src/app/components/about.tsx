import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Shield, Award, Diamond, Clock, Building2, Globe, HeartPulse, Construction } from 'lucide-react';
import { ArchitecturalCurves } from './ui/ArchitecturalCurves';

const valuePoints = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Precision & Trust',
    description: 'A legacy of architectural integrity and transparent investment structures developed over decades.'
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Awarded Excellence',
    description: 'Recognized globally for setting the gold standard in high-end residential and commercial estates.'
  },
  {
    icon: <Diamond className="w-6 h-6" />,
    title: 'Bespoke Curation',
    description: 'Each property is a singular masterpiece, hand-curated to match the lifestyle of the elite few.'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Timeless Returns',
    description: 'We develop assets that don\'t just house a life, but build generational wealth and status.'
  }
];

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

      {/* 2. MAIN ABOUT CONTENT (120px PADDING) */}
      <div className="max-w-[1440px] mx-auto px-8 md:px-24 py-32 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">

        {/* Cinematic Visual Representation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative order-2 lg:order-1"
        >
          {/* Main Image with Luxury Border Offset */}
          <div className="relative z-10 border border-[#C6A75E]/30 p-4 bg-[#161618] backdrop-blur-sm shadow-2xl rounded-[2rem]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070"
              alt="Luxury Architecture"
              className="w-full h-[650px] object-cover transition-transform duration-1000"
            />
            {/* Architectural Floating Frame Details */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-[#C6A75E] z-20 pointer-events-none" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-[#C6A75E] z-20 pointer-events-none" />
          </div>

          {/* Floating Luxury Counter Card */}
          <div className="absolute -right-8 bottom-12 z-20 bg-[#1C1C1E] border border-[#C6A75E]/40 p-10 shadow-3xl max-w-[280px] rounded-[2rem]">
            <span className="text-5xl text-[#C6A75E] block mb-2" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>8</span>
            <span className="text-[10px] tracking-[4px] uppercase text-[#F5F5F5] font-bold">Years of Architectural Supremacy</span>
          </div>
        </motion.div>

        {/* Narrative Text Section */}
        <div className="order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <span className="text-[#C6A75E] tracking-[6px] text-xs font-bold uppercase mb-4 block">The Organization</span>
            <h2 className="text-4xl md:text-6xl mb-10 text-[#F5F5F5]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, lineHeight: 1.1 }}>
              Defining High-End <br /> <span className="text-[#C6A75E] italic">Living Standards</span>
            </h2>
            <div className="w-24 h-[2px] bg-[#C6A75E] mb-12" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <p className="text-[#B5B5B5] text-lg leading-relaxed font-light tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Founded on the principles of architectural perfection and structural integrity, TATITO has spent over eight years curating the most exclusive residences in the world.
            </p>
            <p className="text-[#B5B5B5] text-lg leading-relaxed font-light tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              We don't just build homes; we craft generational assets. Our properties are investments in a lifestyle of absolute privacy, sophisticated comfort, and timeless elegance for modern living.
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 group flex items-center gap-6"
          >
            <span className="text-[#F5F5F5] text-[10px] tracking-[6px] uppercase font-bold group-hover:text-[#C6A75E] transition-colors duration-500">Read the Full Legacy</span>
            <div className="h-[1px] w-24 bg-[#C6A75E] transition-all duration-700 group-hover:w-32 shadow-[0_0_10px_rgba(198,167,94,0.5)]" />
          </motion.button>
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
