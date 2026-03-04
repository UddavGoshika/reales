import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { ArchitecturalCurves } from './ui/ArchitecturalCurves';

const faqs = [
  {
    question: 'How do you ensure the investment integrity of your properties?',
    answer: 'Every TATITO property undergoes a rigorous 150-point quality and legal audit. We use only top-tier materials and partner with globally recognized architectural firms to guarantee long-term value appreciation.'
  },
  {
    question: 'Are there personalized management services for elite clients?',
    answer: 'Absolutely. We offer a bespoke 24/7 concierge and property management service for our ultra-luxury units, including landscape maintenance, private security, and estate health monitoring.'
  },
  {
    question: 'What financial structures are available for overseas investors?',
    answer: 'We provide streamlined, legal-expert guided documentation for international capital investment, ensuring full compliance and providing high-yield portfolio diversification.'
  },
  {
    question: 'Can I customize the architectural finishes of my residence?',
    answer: 'Yes. Our "Masterpiece Customization" program allows elite buyers to collaborate directly with our chief architects to select bespoke finishes from our premium global supply chain.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 px-8 relative overflow-hidden bg-[#0B0B0D]">
      {/* Architectural Accent Curves */}
      <ArchitecturalCurves className="scale-y-[-1]" opacity={0.05} />

      {/* 1. LAYERED LIGHTING DEPTH SECTION */}
      <div className="absolute top-1/2 right-[-10%] w-[60%] h-[60%] bg-[radial-gradient(circle,rgba(198,167,94,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-24">

        {/* Left Side Content - Royal Discipline Section Summary */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="sticky top-32"
          >
            <span className="text-[#C6A75E] tracking-[6px] text-xs font-bold uppercase mb-4 block">Knowledge Base</span>
            <h2 className="text-4xl md:text-5xl mb-8 text-[#C6A75E]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
              Frequently Asked <br /> <span className="text-[#F5F5F5]">Questions</span>
            </h2>
            <div className="w-24 h-[1px] bg-[#C6A75E] mb-12" />
            <p className="text-[#B5B5B5] text-lg leading-relaxed font-light mb-16 tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Detailed insights into our investment structures, architectural protocols, and the TATITO standard of excellence.
            </p>

            <button className="flex items-center gap-6 group text-[#C6A75E] text-[10px] tracking-[6px] uppercase font-bold">
              <span>Download Full Investor Kit</span>
              <div className="w-12 h-[1px] bg-[#C6A75E] transition-all duration-700 group-hover:w-20" />
            </button>
          </motion.div>
        </div>

        {/* Right Side Content - Premium Accordion System */}
        <div className="lg:col-span-7">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`group border border-[#C6A75E]/10 bg-[#161618] transition-all duration-700 relative overflow-hidden ${openIndex === index ? 'border-[#C6A75E]/30 bg-[#161618]/60 shadow-[0_0_40px_rgba(198,167,94,0.1)]' : 'hover:border-[#C6A75E]/30'}`}
              >
                {/* Animated Accordion Header */}
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left px-8 py-10 lg:px-12 flex items-center justify-between gap-10 group/btn"
                >
                  <h3 className={`text-xl font-medium tracking-wide transition-colors duration-500 font-serif ${openIndex === index ? 'text-[#C6A75E]' : 'text-[#F5F5F5] group-hover/btn:text-[#C6A75E]'}`}>
                    {faq.question}
                  </h3>

                  {/* Gold Animated Accordion Icon */}
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-700 ${openIndex === index ? 'border-[#C6A75E] bg-[#C6A75E] rotate-90 text-black' : 'border-[#C6A75E]/30 text-[#C6A75E] group-hover/btn:border-[#C6A75E]/60'}`}>
                    <Plus className={`w-4 h-4 transition-all duration-700 ${openIndex === index ? 'hidden' : 'block'}`} />
                    <Minus className={`w-4 h-4 transition-all duration-700 ${openIndex === index ? 'block' : 'hidden'}`} />
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <div className="px-8 pb-10 lg:px-12 lg:pb-12 text-[#B5B5B5] leading-relaxed font-light tracking-wide text-lg border-t border-white/5 pt-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
