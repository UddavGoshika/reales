import { motion } from 'motion/react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArchitecturalCurves } from './ui/ArchitecturalCurves';

const developers = [
  {
    id: 1,
    name: 'Jonathan Sterling',
    role: 'Managing Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1080',
    signature: 'J. Sterling'
  },
  {
    id: 2,
    name: 'Victoria Chen',
    role: 'Chief Architect',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1080',
    signature: 'V. Chen'
  }
];

export function Developers() {
  return (
    <section id="developers" className="py-32 px-8 relative overflow-hidden bg-[#0B0B0D]">
      {/* Architectural Accent Curves */}
      <ArchitecturalCurves className="scale-y-[-1] opacity-60" opacity={0.05} />
      {/* 0. OUTER GOLDEN BORDER ENVELOPE */}
      <div className="absolute inset-4 border border-[#C6A75E]/10 rounded-[3rem] pointer-events-none z-[1]" />

      {/* 1. LAYERED LIGHTING DEPTH SECTION */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(198,167,94,0.1)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">

        {/* Section Heading - Royal Discipline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-28"
        >
          <span className="text-[#C6A75E] tracking-[6px] text-xs font-bold uppercase mb-4 block">Leadership</span>
          <h2 className="text-4xl md:text-5xl mb-6 text-[#C6A75E]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
            Visionary Developers
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent mx-auto mt-6" />
        </motion.div>

        {/* 2. DEVELOPER CARDS UPGRADE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 max-w-5xl mx-auto">
          {developers.map((developer, index) => (
            <motion.div
              key={developer.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group text-center flex flex-col items-center"
            >
              {/* Circular Profile with Gold Frame & Halo Glow */}
              <div className="relative mb-12">
                {/* Gold Halo Glow (Hover Reactive) */}
                <div className="absolute -inset-4 rounded-full bg-[#C6A75E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-2xl" />

                {/* Main Profile Image */}
                <div className="relative w-72 h-72 rounded-full overflow-hidden border border-[#C6A75E]/30 p-2 z-10 group-hover:border-[#C6A75E] transition-all duration-700 hover:shadow-[0_0_50px_rgba(198,167,94,0.3)]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#0B0B0D]">
                    <ImageWithFallback
                      src={developer.image}
                      alt={developer.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Decorative Signature Concept Hover Text */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <span className="text-[#C6A75E] text-4xl italic" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}>{developer.signature}</span>
                </div>
              </div>

              {/* Narratives & Role Pillar Badge */}
              <div className="space-y-6">
                <h3 className="text-3xl text-[#F5F5F5] italic drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}>
                  {developer.name}
                </h3>

                {/* Gold Role Pill Badge */}
                <div className="inline-block px-8 py-2 border border-[#C6A75E]/30 bg-black/40 backdrop-blur-md rounded-full text-[#C6A75E] text-[10px] tracking-[4px] uppercase font-bold group-hover:border-[#C6A75E] transition-all duration-500">
                  {developer.role}
                </div>

                <p className="max-w-xs text-[#7A7A7A] text-sm leading-relaxed font-light group-hover:text-[#B5B5B5] transition-colors duration-500" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Driving architectural revolution through a meticulous commitment to timeless luxury and investment integrity.
                </p>

                {/* Minimal Social Discovery Row */}
                <div className="flex justify-center gap-10 pt-8 mt-8 border-t border-white/5 w-full">
                  {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                    <button
                      key={i}
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#7A7A7A] hover:text-[#C6A75E] hover:border-[#C6A75E] hover:shadow-[0_0_20px_rgba(198,167,94,0.35)] transition-all duration-500"
                    >
                      <Icon className="w-4 h-4" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* 3. OUR TEAM SECTION - SLIDE OUT EFFECT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-40 border-t border-[#C6A75E]/10 pt-32"
        >
          <div className="text-center mb-20">
            <h3 className="text-3xl text-[#F5F5F5]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}>Our Executive Team</h3>
            <div className="w-12 h-[1px] bg-[#C6A75E] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Marcus Aurelius', role: 'Operations', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400' },
              { name: 'Sarah Jenkins', role: 'Support', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400' },
              { name: 'David Chen', role: 'Finance', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400' },
              { name: 'Elena Rodriguez', role: 'Marketing', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400' }
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl aspect-[4/5]"
              >
                <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />

                {/* SLIDE OUT INFO */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-black/60 backdrop-blur-md">
                  <h4 className="text-lg text-white font-bold">{member.name}</h4>
                  <p className="text-[#C6A75E] text-[10px] tracking-[2px] uppercase">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
