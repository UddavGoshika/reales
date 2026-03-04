import React from 'react';
import { motion } from 'motion/react';
import {
    Home, Building2, Trees,
    ArrowRight, MapPin, Ruler,
    Search, LayoutGrid, List
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Projects } from '../components/projects';

const properties = [
    { title: 'Apartments', type: 'apartments', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1080' },
    { title: 'Villas', type: 'villas', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1080' },
    { title: 'Duplex', type: 'duplex', image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1080' },
    { title: 'Farms', type: 'farms', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1080' },
];

export default function RealEstatePage() {
    return (
        <div className="bg-[#0B0B0D] text-[#F5F5F5] min-h-screen selection:bg-[#C6A75E] selection:text-black">
            {/* 1. HERO - THE PORTFOLIO EXHIBITION */}
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
                        <span className="text-[#C6A75E] tracking-[10px] uppercase text-[10px] font-bold mb-6 block">Legacy Portfolio</span>
                        <h1 className="text-6xl md:text-9xl text-[#F5F5F5] font-serif mb-12">Premier <span className="text-[#C6A75E] italic">Real Estate</span></h1>

                        <p className="text-[#B5B5B5] text-xl max-w-2xl mx-auto leading-relaxed font-light tracking-wide font-body">
                            Explore our curated collection of signature estates, luxury plots, and master-planned developments across India's most prestigious locations.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. DYNAMIC DISCOVERY & FILTERING */}
            <Projects />

            {/* 3. CATEGORY SELECTION */}
            <section className="py-24 px-8 bg-[#111113] border-t border-white/5">
                <div className="max-w-[1440px] mx-auto">
                    <div className="mb-16 text-center">
                        <span className="text-[#C6A75E] tracking-[6px] text-xs font-bold uppercase mb-4 block">Asset Classes</span>
                        <h2 className="text-4xl md:text-5xl text-white font-serif">Curated <span className="text-[#C6A75E] italic">Collections</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {properties.map((prop, i) => (
                            <Link
                                key={i}
                                to={`/category/${prop.type}`}
                                className="group relative h-80 overflow-hidden border border-[#C6A75E]/20 transition-all duration-700 hover:border-[#C6A75E]"
                            >
                                <img src={prop.image} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-[2000ms]" alt={prop.title} />
                                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black via-black/40 to-transparent">
                                    <h3 className="text-3xl text-white font-serif mb-2 group-hover:text-[#C6A75E] transition-colors">{prop.title}</h3>
                                    <div className="flex items-center gap-4 text-[#7A7A7A] text-[9px] tracking-[4px] uppercase font-bold group-hover:text-white transition-colors">
                                        Browse Collection <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
