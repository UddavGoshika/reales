import React from 'react';
import { motion } from 'motion/react';
import {
    Trees,
    MapPin, Ruler,
    Search, LayoutGrid, List
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Projects } from '../components/projects';
import { ProjectTeam } from '../components/ProjectTeam';

export default function OpenPlotsPage() {
    return (
        <div className="bg-[#0B0B0D] text-[#F5F5F5] min-h-screen selection:bg-[#C6A75E] selection:text-black">
            {/* 1. HERO */}
            <section className="relative pt-64 pb-40 px-8 border-b border-white/5 bg-[#111113]">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#C6A75E]/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#C6A75E]/20 to-transparent" />
                </div>

                <div className="max-w-[1440px] mx-auto relative z-10 text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-[#C6A75E] tracking-[10px] uppercase text-[10px] font-bold mb-6 block">Sovereign Investment</span>
                        <h1 className="text-6xl md:text-9xl text-[#F5F5F5] font-serif mb-12">Luxury <span className="text-[#C6A75E] italic">Open Plots</span></h1>

                        <p className="text-[#B5B5B5] text-xl max-w-2xl mx-auto leading-relaxed font-light tracking-wide font-body">
                            Curated premium land opportunities in Vishakhapatnam's most sought-after growth corridors. Build your legacy on high-potential, clear-title developments.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. PROJECTS SECTION */}
            <div className="py-20">
                <div className="max-w-[1440px] mx-auto px-8 mb-12 flex items-center justify-between">
                    <div>
                        <h2 className="text-4xl text-white font-serif">Featured <span className="text-[#C6A75E] italic">Ventures</span></h2>
                        <p className="text-[#7A7A7A] text-sm mt-2 font-light">Direct from Tatito Developers & Promoters</p>
                    </div>
                </div>
                <Projects />
            </div>

            {/* 3. WHY INVEST SECTION */}
            <section className="py-24 px-8 bg-[#111113] border-t border-white/5">
                <div className="max-w-[1440px] mx-auto text-center">
                    <div className="mb-16">
                        <span className="text-[#C6A75E] tracking-[6px] text-xs font-bold uppercase mb-4 block">Benefits</span>
                        <h2 className="text-4xl md:text-5xl text-white font-serif">Land as an <span className="text-[#C6A75E] italic">Asset</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="p-10 border border-[#C6A75E]/10 bg-black/40 rounded-3xl group hover:border-[#C6A75E]/40 transition-all duration-700">
                            <Ruler className="w-10 h-10 text-[#C6A75E] mb-6 mx-auto group-hover:scale-110 transition-transform" />
                            <h3 className="text-2xl text-white font-serif mb-4">Prime Location</h3>
                            <p className="text-[#7A7A7A] text-sm leading-relaxed">Strategically chosen locations with high proximity to major highways and future infra projects.</p>
                        </div>
                        <div className="p-10 border border-[#C6A75E]/10 bg-black/40 rounded-3xl group hover:border-[#C6A75E]/40 transition-all duration-700">
                            <Trees className="w-10 h-10 text-[#C6A75E] mb-6 mx-auto group-hover:scale-110 transition-transform" />
                            <h3 className="text-2xl text-white font-serif mb-4">Clear Title</h3>
                            <p className="text-[#7A7A7A] text-sm leading-relaxed">100% legally verified properties with hassle-free transaction transparency and documentation.</p>
                        </div>
                        <div className="p-10 border border-[#C6A75E]/10 bg-black/40 rounded-3xl group hover:border-[#C6A75E]/40 transition-all duration-700">
                            <MapPin className="w-10 h-10 text-[#C6A75E] mb-6 mx-auto group-hover:scale-110 transition-transform" />
                            <h3 className="text-2xl text-white font-serif mb-4">Future Yields</h3>
                            <p className="text-[#7A7A7A] text-sm leading-relaxed">High-appreciation zones that promise significant returns on investment over a decade.</p>
                        </div>
                    </div>
                </div>
            </section>
            <ProjectTeam />
        </div>
    );
}
