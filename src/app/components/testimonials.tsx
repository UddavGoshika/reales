import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArchitecturalCurves } from './ui/ArchitecturalCurves';

const testimonials = [
  {
    id: 1,
    name: 'Alexander Rossi',
    role: 'CEO, Rossi Enterprises',
    text: 'The architectural precision and commitment to luxury shown by TATITO is unlike anything else in the market. Every detail of my residence was considered with investment integrity in mind.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1080'
  },
  {
    id: 2,
    name: 'Elena Vance',
    role: 'Managing Partner, Vance & Co.',
    text: 'We chose Astra Valley for its unique blend of security and open-concept elegance. The return on enjoyment and investment has surpassed all expectations.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1080'
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-8 relative overflow-hidden bg-[#0B0B0D]">
      {/* Architectural Accent Curves */}
      <ArchitecturalCurves className="rotate-45" opacity={0.05} />
      {/* 0. OUTER GOLDEN BORDER ENVELOPE */}
      <div className="absolute inset-4 border border-[#C6A75E]/10 rounded-[3rem] pointer-events-none z-[1]" />

      {/* 1. LAYERED LIGHTING DEPTH SECTION */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,rgba(198,167,94,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">

        {/* Section Heading - Royal Discipline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 flex flex-col items-center"
        >
          <span className="text-[#C6A75E] tracking-[6px] text-xs font-bold uppercase mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl mb-6 text-[#C6A75E]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
            Elite Testimonials
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent mx-auto mt-6 mb-10" />

          {/* Share Experience Button */}
          <button className="group relative px-10 py-4 border border-[#C6A75E]/30 text-[#C6A75E] text-[10px] tracking-[4px] font-bold hover:bg-[#C6A75E] hover:text-black transition-all duration-500">
            SHARE YOUR EXPERIENCE
            <div className="absolute inset-0 border border-[#C6A75E] scale-0 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500" />
          </button>
        </motion.div>

        {/* 2. PREMIUM TESTIMONIAL CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative bg-[#161618]/60 border border-[#C6A75E]/20 p-12 lg:p-16 transition-all duration-700 hover:border-[#C6A75E]/50 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] rounded-[2rem]"
            >
              {/* Oversized Decorative Quotation Mark */}
              <div className="absolute top-10 right-12 z-0 opacity-10 group-hover:opacity-20 transition-all duration-700 select-none">
                <Quote className="w-24 h-24 text-[#C6A75E]" />
              </div>

              {/* Narratives Section */}
              <div className="relative z-10">
                <p className="text-[#B5B5B5] text-xl md:text-2xl leading-relaxed italic mb-12 font-light tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
                  "{testimonial.text}"
                </p>

                {/* Author Profile Control Row */}
                <div className="flex items-center gap-6 pt-10 border-t border-white/5">
                  {/* Small Circular Profile with Gold Frame & Glow */}
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border border-[#C6A75E]/40 p-[2px] shadow-[0_0_15px_rgba(198,167,94,0.2)]">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <ImageWithFallback
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-[#F5F5F5] text-lg font-bold tracking-[2px]" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {testimonial.name}
                    </h4>
                    <span className="text-[#C6A75E] text-[10px] tracking-[4px] uppercase font-bold">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
              </div>

              {/* Gold Corner Accent (Subtle) */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#C6A75E]/40 z-20 group-hover:w-12 group-hover:h-12 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
