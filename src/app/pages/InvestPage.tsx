import React from 'react';
import { motion } from 'motion/react';
import {
    Diamond, TrendingUp, ShieldCheck,
    ArrowRight, Globe, BarChart3,
    Gem, PieChart, Landmark
} from 'lucide-react';
import { Link } from 'react-router-dom';

import { Projects } from '../components/projects';

export default function InvestPage() {
    return (
        <div className="bg-[#0B0B0D] text-[#F5F5F5] min-h-screen">
            {/* 1. HERO - SOPHISTICATED WEALTH */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426"
                        alt="Investment"
                        className="w-full h-full object-cover brightness-[0.6]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90" />
                </div>

                <div className="relative z-10 text-center px-8 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-[#C6A75E] tracking-[10px] uppercase text-[10px] font-bold mb-8 block">Wealth Architecture</span>
                        <h1
                            className="text-6xl md:text-9xl mb-12 text-[#F5F5F5] font-serif"
                            style={{ fontWeight: 500 }}
                        >
                            Build Your <span className="text-[#C6A75E] italic">Legacy</span>
                        </h1>
                        <p className="text-xl text-[#B5B5B5] font-light tracking-widest max-w-3xl mx-auto mb-16 leading-relaxed">
                            Strategic real estate acquisitions designed for exponential capital growth and multi-generational security.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                            <button className="px-12 py-6 bg-[#C6A75E] text-black font-bold text-xs tracking-[4px] uppercase hover:bg-[#E8D8A0] transition-colors duration-500 shadow-2xl">
                                REQUEST PROSPECTUS
                            </button>
                            <button className="px-12 py-6 border border-[#C6A75E]/40 text-[#C6A75E] font-bold text-xs tracking-[4px] uppercase hover:bg-[#C6A75E]/5 transition-colors duration-500">
                                VIEW ROI MODELS
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* DYNAMIC DISCOVERY & FILTERING */}
            <Projects />

            {/* 2. THE INVESTMENT PILLARS */}
            <section className="py-32 px-8 relative bg-[#0B0B0D]">
                <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-12 bg-[#161618] border border-[#C6A75E]/20 text-center space-y-8"
                    >
                        <div className="w-16 h-16 border border-[#C6A75E]/30 flex items-center justify-center mx-auto text-[#C6A75E]">
                            <TrendingUp className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-serif">Capital Appreciation</h3>
                        <p className="text-[#7A7A7A] font-light leading-relaxed">Projects strategically located in high-growth corridors of Tier-1 & Tier-2 cities with proven appreciation rates of 15-25% annually.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-12 bg-[#C6A75E] text-black text-center space-y-8"
                    >
                        <div className="w-16 h-16 border border-black/30 flex items-center justify-center mx-auto">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-serif">Legal Sovereignty</h3>
                        <p className="font-medium leading-relaxed">100% VMRDA/TUDA/GP approved layouts with individual clear titles. Every project is audited by elite legal firms for absolute peace of mind.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="p-12 bg-[#161618] border border-[#C6A75E]/20 text-center space-y-8"
                    >
                        <div className="w-16 h-16 border border-[#C6A75E]/30 flex items-center justify-center mx-auto text-[#C6A75E]">
                            <BarChart3 className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-serif">Exit Liquidity</h3>
                        <p className="text-[#7A7A7A] font-light leading-relaxed">Our projects are developed with prime ecosystem connectivity, ensuring high demand and seamless resale liquidity in any market cycle.</p>
                    </motion.div>
                </div>
            </section>

            {/* 3. PORTFOLIO DIVERSIFICATION */}
            <section className="py-40 bg-[#111113] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[radial-gradient(circle_at_70%_50%,rgba(198,167,94,0.3)_0%,transparent_70%)]" />

                <div className="max-w-[1440px] mx-auto px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                        <div className="space-y-12">
                            <span className="text-[#C6A75E] tracking-[6px] text-xs font-bold uppercase">Asset Classes</span>
                            <h2 className="text-5xl md:text-7xl text-[#F5F5F5] font-serif">Tailored <span className="text-[#C6A75E] italic">Vehicles</span></h2>

                            <div className="space-y-8">
                                {[
                                    { label: 'Strategic Open Plots', desc: 'Secure the base asset with minimum holding cost.' },
                                    { label: 'Luxury Multi-Family', desc: 'High rental yields and urban appreciation.' },
                                    { label: 'Eco-Farm Assets', desc: 'Lifestyle investment with carbon-credit potential.' }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-8 group">
                                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#C6A75E] mt-3" />
                                        <div>
                                            <h4 className="text-xl text-white mb-2 group-hover:text-[#C6A75E] transition-colors">{item.label}</h4>
                                            <p className="text-[#7A7A7A]">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative aspect-square border border-[#C6A75E]/30 p-4">
                            <div className="absolute inset-0 bg-black/40 z-10" />
                            <img
                                src="https://images.unsplash.com/photo-1543286386-713bcd534bf2?q=80&w=2670"
                                className="w-full h-full object-cover"
                                alt="Analytics"
                            />
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <Landmark className="w-24 h-24 text-[#C6A75E] opacity-50" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. CALL TO ACTION */}
            <section className="py-32 px-8 text-center bg-[#0B0B0D]">
                <div className="max-w-4xl mx-auto space-y-12">
                    <h2 className="text-4xl md:text-6xl text-[#F5F5F5] font-serif">Ready to Secure Your <span className="text-[#C6A75E] italic">Financial Future?</span></h2>
                    <p className="text-[#B5B5B5] text-xl font-light tracking-wide max-w-2xl mx-auto">
                        Speak with our Senior Investment Officers for a customized portfolio evaluation.
                    </p>
                    <div className="pt-8 flex flex-wrap justify-center gap-8">
                        <Link to="/" className="group flex items-center gap-6 text-[#C6A75E] text-[10px] tracking-[6px] uppercase font-bold">
                            <span>RETURN HOME</span>
                            <div className="relative w-12 h-[1px] bg-[#C6A75E]">
                                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 rounded-full bg-[#C6A75E] group-hover:scale-150 transition-transform" />
                            </div>
                        </Link>
                        <button className="px-12 py-6 bg-[#C6A75E] text-black font-bold text-xs tracking-[4px] uppercase hover:bg-[#E8D8A0] transition-all">
                            SCHEDULE ADVISORY
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
