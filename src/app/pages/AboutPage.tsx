import { motion } from 'motion/react';
import {
    Diamond, MapPin, ArrowRight, ShieldCheck, Globe,
    TrendingUp, BarChart3, Gem, PieChart, Landmark
} from 'lucide-react';
import { Link } from 'react-router-dom';

import { Projects } from '../components/projects';

export default function AboutPage() {
    return (
        <div className="bg-[#0B0B0D] text-[#F5F5F5] min-h-screen selection:bg-[#C6A75E] selection:text-black">
            {/* 1. CINEMATIC HERO SECTION */}

            {/* 1. CINEMATIC HERO SECTION */}
            <section className="pt-64 pb-32 px-8 relative overflow-hidden">
                {/* Background Ambient Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle,rgba(198,167,94,0.05)_0%,transparent_70%)] pointer-events-none" />

                <div className="max-w-[1440px] mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-[#C6A75E] tracking-[10px] uppercase text-[10px] font-bold mb-8 block">ESTABLISHED 1995</span>
                        <h1 className="text-6xl md:text-9xl font-bold mb-12 leading-tight" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}>
                            Crafting Global <br /> <span className="text-[#C6A75E] italic">Legacies</span>
                        </h1>
                        <div className="w-32 h-[1px] bg-[#C6A75E] mx-auto mb-16 shadow-[0_0_15px_rgba(198,167,94,0.5)]" />
                        <p className="text-xl text-[#B5B5B5] max-w-3xl mx-auto leading-relaxed font-light tracking-wide font-body" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                            For over three decades, TATITO has been synonymous with architectural excellence and unparalleled luxury.
                            Our commitment to creating extraordinary living spaces has established us as the premier choice for the elite.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* DYNAMIC DISCOVERY & FILTERING */}
            <Projects />

            {/* 2. ASTRA VALLEY - CURATED DISCOVERY */}
            <section id="astra-valley" className="py-32 border-t border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#C6A75E]/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative group"
                    >
                        {/* Luxury Frame Offset */}
                        <div className="absolute inset-0 border border-[#C6A75E]/30 translate-x-6 translate-y-6 -z-10 group-hover:translate-x-8 group-hover:translate-y-8 transition-transform duration-1000" />
                        <div className="bg-[#161618] p-4 border border-white/5 shadow-3xl">
                            <img
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1080"
                                className="w-full h-[600px] object-cover contrast-110 grayscale group-hover:grayscale-0 transition-all duration-1000"
                                alt="Astra Valley"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-[1.5px] bg-[#C6A75E]" />
                            <span className="text-[#C6A75E] text-[10px] tracking-[6px] font-bold uppercase">SIGNATURE RESORT LIVING</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-bold text-[#F5F5F5]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}>Astra <span className="text-[#C6A75E] italic">Valley</span></h2>
                        <div className="space-y-8">
                            <p className="text-lg text-[#B5B5B5] leading-relaxed font-light font-body" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                                Experience the perfect blend of resort-style living and strategic investment.
                                Astra Valley is a premium residential layout designed for those who seek tranquility
                                without compromising on luxury and connectivity.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-4 text-xs tracking-[2px] uppercase text-[#7A7A7A]">
                                    <ShieldCheck className="w-4 h-4 text-[#C6A75E]" /> VMRDA APPROVED INFRASTRUCTURE
                                </li>
                                <li className="flex items-center gap-4 text-xs tracking-[2px] uppercase text-[#7A7A7A]">
                                    <Globe className="w-4 h-4 text-[#C6A75E]" /> STRATEGIC CONNECTIVITY HUB
                                </li>
                            </ul>
                        </div>
                        <Link
                            to="/project/astra-valley"
                            className="inline-flex items-center gap-6 px-12 py-5 bg-[#C6A75E] text-black font-bold text-xs tracking-[4px] uppercase hover:bg-[#E8D8A0] transition-all duration-500 shadow-xl"
                        >
                            THE DISCOVERY <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* 3. GOUTAM VALLEY - THE COASTAL LEGACY */}
            <section id="goutam-valley" className="py-32 border-t border-white/5 bg-[#111113]/40 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-1/3 h-full bg-[#C6A75E]/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:order-2 relative group"
                    >
                        {/* Luxury Frame Offset */}
                        <div className="absolute inset-0 border border-[#C6A75E]/30 -translate-x-6 translate-y-6 -z-10 group-hover:-translate-x-8 group-hover:translate-y-8 transition-transform duration-1000" />
                        <div className="bg-[#161618] p-4 border border-white/5 shadow-3xl">
                            <img
                                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1080"
                                className="w-full h-[600px] object-cover contrast-110 grayscale group-hover:grayscale-0 transition-all duration-1000"
                                alt="Goutam Valley"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:order-1 space-y-10"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-[1.5px] bg-[#C6A75E]" />
                            <span className="text-[#C6A75E] text-[10px] tracking-[6px] font-bold uppercase">COASTAL SOPHISTICATION</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-bold text-[#F5F5F5]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}>Goutam <span className="text-[#C6A75E] italic">Valley</span></h2>
                        <div className="space-y-8">
                            <p className="text-lg text-[#B5B5B5] leading-relaxed font-light font-body" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                                Goutam Valley offers an exclusive opportunity to own a piece of paradise
                                in the fast-developing coastal belt of Vizag. A project that combines natural
                                beauty with urban sophistication.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-4 text-xs tracking-[2px] uppercase text-[#7A7A7A]">
                                    <ShieldCheck className="w-4 h-4 text-[#C6A75E]" /> PREMIUM COASTAL INFRASTRUCTURE
                                </li>
                                <li className="flex items-center gap-4 text-xs tracking-[2px] uppercase text-[#7A7A7A]">
                                    <Globe className="w-4 h-4 text-[#C6A75E]" /> EXCLUSIVE INVESTMENT CORRIDOR
                                </li>
                            </ul>
                        </div>
                        <Link
                            to="/project/goutam-valley"
                            className="inline-flex items-center gap-6 px-12 py-5 border border-[#C6A75E]/30 text-[#C6A75E] font-bold text-xs tracking-[4px] uppercase hover:bg-[#C6A75E] hover:text-black transition-all duration-500"
                        >
                            THE DISCOVERY <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
