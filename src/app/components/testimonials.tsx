import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, X, Send, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { ArchitecturalCurves } from './ui/ArchitecturalCurves';

const initialTestimonials = [
  {
    id: 1,
    name: 'Alexander Rossi',
    role: 'CEO, Rossi Enterprises',
    text: 'The architectural precision and commitment to luxury shown by TATITO is unlike anything else in the market. Every detail of my residence was considered with investment integrity in mind.',
  },
  {
    id: 2,
    name: 'Elena Vance',
    role: 'Managing Partner, Vance & Co.',
    text: 'We chose Astra Valley for its unique blend of security and open-concept elegance. The return on enjoyment and investment has surpassed all expectations.',
  },
  {
    id: 3,
    name: 'Marcus Thorne',
    role: 'Tech Entreprenuer',
    text: 'Investing with Tatito was the best decision for my family\'s future. The transparency and quality are unmatched in the region.',
  }
];

export function Testimonials() {
  const [testimonialsList, setTestimonialsList] = useState(initialTestimonials);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', role: '', text: '' });
  const [direction, setDirection] = useState(0);

  const slideNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonialsList.length);
  }, [testimonialsList.length]);

  const slidePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonialsList.length) % testimonialsList.length);
  }, [testimonialsList.length]);

  useEffect(() => {
    const timer = setInterval(slideNext, 6000);
    return () => clearInterval(timer);
  }, [slideNext]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.text) return;

    const newTestimonial = {
      id: Date.now(),
      name: formData.name,
      role: formData.role || 'Elite Client',
      text: formData.text
    };

    setTestimonialsList([newTestimonial, ...testimonialsList]);
    setFormData({ name: '', role: '', text: '' });
    setIsFormOpen(false);
  };

  const currentTestimonial = testimonialsList[currentIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9
    })
  };

  return (
    <section id="testimonials" className="py-20 px-8 relative overflow-hidden bg-[#0B0B0D]">
      <ArchitecturalCurves className="rotate-45" opacity={0.05} />
      <div className="absolute inset-4 border border-[#C6A75E]/10 rounded-[3rem] pointer-events-none z-[1]" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,rgba(198,167,94,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 flex flex-col items-center"
        >
          <span className="text-[#C6A75E] tracking-[10px] text-[10px] font-black mb-4 block uppercase opacity-60">Echoes of Excellence</span>
          <h2 className="text-3xl md:text-5xl mb-6 text-[#F5F5F5]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
            Elite <span className="text-[#C6A75E] italic">Testimonials</span>
          </h2>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent mx-auto mt-2" />
        </motion.div>

        <div className="relative max-w-3xl mx-auto flex items-center justify-center min-h-[380px]">
          {/* Navigation Buttons */}
          <div className="absolute left-[-20px] lg:left-[-60px] z-30">
            <button
              onClick={slidePrev}
              className="w-12 h-12 rounded-full border border-[#C6A75E]/20 bg-[#161618]/60 flex items-center justify-center text-[#C6A75E] hover:bg-[#C6A75E] hover:text-black transition-all duration-700 backdrop-blur-xl group"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>
          </div>

          <div className="absolute right-[-20px] lg:right-[-60px] z-30">
            <button
              onClick={slideNext}
              className="w-12 h-12 rounded-full border border-[#C6A75E]/20 bg-[#161618]/60 flex items-center justify-center text-[#C6A75E] hover:bg-[#C6A75E] hover:text-black transition-all duration-700 backdrop-blur-xl group"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentTestimonial.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "tween", duration: 0.8, ease: [0.4, 0, 0.2, 1] },
                opacity: { duration: 0.6 }
              }}
              className="w-full bg-[#161618]/40 border border-[#C6A75E]/10 px-8 md:px-16 py-12 md:py-14 flex flex-col items-center text-center backdrop-blur-md rounded-none relative group"
            >
              <div className="absolute top-6 left-8 opacity-10 pointer-events-none">
                <Quote className="w-12 h-12 text-[#C6A75E]" />
              </div>

              <div className="relative z-10 max-w-2xl">
                <p className="text-[#F5F5F5] text-xl md:text-2xl leading-relaxed italic mb-10 font-medium font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
                  "{currentTestimonial.text}"
                </p>

                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-[#C6A75E]/30 p-1 bg-gradient-to-tr from-[#C6A75E]/10 to-transparent">
                    <div className="w-full h-full rounded-full bg-black/40 flex items-center justify-center text-[#C6A75E]">
                      <User className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-[#F5F5F5] text-lg font-bold tracking-[1px] uppercase">
                      {currentTestimonial.name}
                    </h4>
                    <span className="text-[#C6A75E] text-[9px] tracking-[4px] uppercase font-black opacity-70">
                      {currentTestimonial.role}
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C6A75E]/30 to-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => setIsFormOpen(true)}
            className="group relative px-12 py-5 border border-[#C6A75E]/20 text-[#C6A75E] text-[10px] tracking-[5px] font-black uppercase hover:bg-[#C6A75E] hover:text-black transition-all duration-700"
          >
            SHARE YOUR EXPERIENCE
            <div className="absolute inset-0 border border-[#C6A75E]/40 scale-0 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-700" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isFormOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFormOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-[#161618] border border-[#C6A75E]/30 rounded-[3rem] p-12 shadow-3xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8">
                <button onClick={() => setIsFormOpen(false)} className="text-[#C6A75E] hover:rotate-90 transition-transform duration-500">
                  <X className="w-8 h-8" />
                </button>
              </div>

              <div className="mb-12">
                <h3 className="text-3xl text-white font-serif mb-2">Share Your <span className="text-[#C6A75E] italic">Legacy</span></h3>
                <p className="text-[#7A7A7A] text-sm tracking-widest uppercase">We value your elite perspective</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-[4px] uppercase text-[#C6A75E] font-bold">Full Name</label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#C6A75E] transition-all"
                      placeholder="Alexander Rossi"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] tracking-[4px] uppercase text-[#C6A75E] font-bold">Profession / Title</label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#C6A75E] transition-all"
                      placeholder="CEO, Rossi Enterprises"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] tracking-[4px] uppercase text-[#C6A75E] font-bold">Your Experience</label>
                  <textarea
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#C6A75E] transition-all resize-none"
                    placeholder="Describe your journey with TATITO..."
                    value={formData.text}
                    onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                    required
                  />
                </div>

                <button type="submit" className="w-full flex items-center justify-center gap-4 py-5 bg-[#C6A75E] text-black font-black tracking-[4px] text-xs rounded-xl hover:bg-[#E8D8A0] transition-all duration-500 shadow-xl group">
                  SUBMIT EXPERIENCE
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
