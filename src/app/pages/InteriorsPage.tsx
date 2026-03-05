import React from 'react';
import { motion } from 'motion/react';
import {
    Layout, Palette, Compass,
    Hammer, Gem, Sparkles,
    ChevronRight, ArrowRight,
    Home, Building2, Paintbrush,
    CheckCircle2
} from 'lucide-react';
import { ProjectTeam } from '../components/ProjectTeam';
import { ProjectTabs } from '../components/ProjectTabs';
import { Link } from 'react-router-dom';

const interiorServices = [
    {
        title: "Bespoke Curation",
        desc: "Tailoring every element to your specific persona, from rare textures to custom-built furniture that narrates your story.",
        icon: <Gem className="w-10 h-10" />,
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1080"
    },
    {
        title: "Space Optimization",
        desc: "Architectural precision in re-imagining flow and functionality, ensuring every square inch serves a purpose without sacrificing style.",
        icon: <Compass className="w-10 h-10" />,
        image: "https://images.unsplash.com/photo-1616486341351-70252ad88081?q=80&w=1080"
    },
    {
        title: "Material Sovereignty",
        desc: "Direct sourcing of premium Italian marbles, exotic woods, and sustainable high-end finishes for an uncompromising aesthetic.",
        icon: <Palette className="w-10 h-10" />,
        image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1080"
    }
];

const styles = [
    { name: "Neo-Classical", desc: "Timeless grandeur with modern sensibilities." },
    { name: "Minimalist Luxe", desc: "The art of restraint and sophisticated simplicity." },
    { name: "Biophilic Design", desc: "Integrating nature into the heart of the home." },
    { name: "Contemporary Chic", desc: "Bold statements and cutting-edge aesthetics." }
];

export default function InteriorsPage() {
    return (
        <div className="bg-[#0B0B0D] text-[#F5F5F5] min-h-screen selection:bg-[#C6A75E] selection:text-black">
            {/* 1. HERO - THE ART OF THE INTERIOR */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 scale-110 blur-[2px] opacity-60">
                    <img
                        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2070"
                        alt="Luxury Interior"
                        className="w-full h-full object-cover brightness-[0.4]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
                </div>

                <div className="relative z-10 text-center px-8 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-[#C6A75E] tracking-[10px] uppercase text-[10px] font-bold mb-8 block">Bespoke Living</span>
                        <h1 className="text-6xl md:text-9xl mb-12 text-[#F5F5F5] font-serif" style={{ fontWeight: 500 }}>
                            Beyond <span className="text-[#C6A75E] italic">Four Walls</span>
                        </h1>
                        <p className="text-xl text-[#B5B5B5] font-light tracking-widest max-w-3xl mx-auto mb-16 leading-relaxed">
                            Crafting immersive environments that resonate with your legacy. We translate architectural potential into soulful, living masterpieces.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                            <button className="px-12 py-6 bg-[#C6A75E] text-black font-bold text-xs tracking-[4px] uppercase hover:bg-[#E8D8A0] transition-colors duration-500 shadow-2xl">
                                START DESIGN JOURNEY
                            </button>
                            <button className="px-12 py-6 border border-[#C6A75E]/40 text-[#C6A75E] font-bold text-xs tracking-[4px] uppercase hover:bg-[#C6A75E]/5 transition-colors duration-500">
                                VIEW LOOKBOOK
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Vertical Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
                    <span className="text-[8px] tracking-[5px] uppercase">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-[#C6A75E] to-transparent animate-pulse" />
                </div>
            </section>

            {/* 2. THE PHILOSOPHY SECTION */}
            <section className="py-40 px-8 relative bg-[#0B0B0D]">
                <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <span className="text-[#C6A75E] tracking-[6px] text-xs font-bold uppercase">Our Philosophy</span>
                        <h2 className="text-5xl md:text-7xl text-white font-serif tracking-tight">
                            The Alchemy of <span className="text-[#C6A75E] italic">Elegance</span>
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                            {styles.map((style, i) => (
                                <div key={i} className="border-l border-[#C6A75E]/30 pl-8 space-y-3 group hover:border-[#C6A75E] transition-all">
                                    <h4 className="text-xl text-white group-hover:text-[#C6A75E] transition-colors font-serif">{style.name}</h4>
                                    <p className="text-[#7A7A7A] text-sm leading-relaxed">{style.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="relative aspect-[4/5] overflow-hidden group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#C6A75E]/20 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        <img
                            src="https://images.unsplash.com/photo-1616486341351-70252ad88081?q=80&w=1080"
                            className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-[2000ms] group-hover:scale-110"
                            alt="Design Process"
                        />
                        <div className="absolute top-10 right-10 flex flex-col items-end gap-2">
                            <span className="text-[60px] font-serif text-[#C6A75E]/20">01</span>
                            <div className="w-12 h-[1px] bg-[#C6A75E]/40" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CORE SERVICES - INTERACTIVE CARDS */}
            <section className="py-40 bg-[#111113] relative overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-8">
                    <div className="text-center mb-32 space-y-6">
                        <span className="text-[#C6A75E] tracking-[8px] text-[10px] font-bold uppercase">Design Ecosystem</span>
                        <h2 className="text-5xl md:text-8xl text-white font-serif">Comprehensive <span className="text-[#C6A75E] italic">Solutions</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {interiorServices.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="group relative overflow-hidden bg-[#0B0B0D] border border-white/5 aspect-[4/5]"
                            >
                                <img
                                    src={service.image}
                                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-all duration-1000 group-hover:scale-105"
                                    alt={service.title}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-12 flex flex-col justify-end gap-6 h-full">
                                    <div className="w-16 h-16 border border-[#C6A75E]/30 flex items-center justify-center text-[#C6A75E] mb-4 group-hover:bg-[#C6A75E] group-hover:text-black transition-all duration-500">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-3xl font-serif text-white">{service.title}</h3>
                                    <p className="text-[#B5B5B5] text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 h-0 group-hover:h-auto overflow-hidden">
                                        {service.desc}
                                    </p>
                                    <div className="flex items-center gap-4 text-[#C6A75E] text-[10px] tracking-[4px] uppercase font-bold mt-4">
                                        ANALYZE <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-2" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. TRANSFORMATIONAL JOURNERY */}
            <section className="py-40 bg-[#0B0B0D]">
                <div className="max-w-[1440px] mx-auto px-8 text-center mb-24">
                    <span className="text-[#C6A75E] tracking-[6px] text-xs font-bold uppercase">Workflow</span>
                    <h2 className="text-5xl md:text-7xl text-white font-serif mt-6">From Concept to <span className="text-[#C6A75E] italic">Comfort</span></h2>
                </div>

                <div className="max-w-[1200px] mx-auto px-8 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5 -translate-x-1/2 hidden lg:block" />

                    <div className="space-y-32">
                        {[
                            { step: "01", title: "Empathic Discovery", desc: "We begin by understanding your lifestyle, aspirations, and the unique history you want to preserve in your space." },
                            { step: "02", title: "Schematic Alchemy", desc: "Drafting concepts that balance structural integrity with avant-garde aesthetic choices, presented through 3D walkthroughs." },
                            { step: "03", title: "Meticulous Handover", desc: "Rigorous onsite execution where every switch, tile, and texture is checked against our global quality benchmarks." }
                        ].map((item, i) => (
                            <div key={i} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-32 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                                <div className="flex-1 text-center lg:text-left space-y-6">
                                    <span className="text-8xl font-serif text-[#C6A75E]/10 block">{item.step}</span>
                                    <h3 className="text-3xl text-white font-serif">{item.title}</h3>
                                    <p className="text-[#7A7A7A] max-w-md mx-auto lg:mx-0 leading-relaxed">{item.desc}</p>
                                </div>
                                <div className="w-32 h-32 flex-shrink-0 bg-[#C6A75E]/5 border border-[#C6A75E]/20 rounded-full flex items-center justify-center relative z-10 backdrop-blur-3xl">
                                    <CheckCircle2 className="w-10 h-10 text-[#C6A75E]" />
                                </div>
                                <div className="flex-1" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4.5 PROJECT TABS SYSTEM */}
            <ProjectTabs
                project={{
                    name: "Visionary Interiors",
                    location: "Global Studio",
                    heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1080",
                    amenities: [
                        { name: "Smart Automation", image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800" },
                        { name: "Premium Materials", image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=800" }
                    ],
                    technicalDetails: {
                        amenities: {
                            title: "Luxury Amenities",
                            list: ["Full Home Automation", "Premium Italian Marble", "Bespoke Furnishing", "Smart Lighting Control"],
                            images: [{ src: "https://images.unsplash.com/photo-1616486341351-70252ad88081?q=80&w=800", caption: "Premium Living" }]
                        },
                        floorplans: {
                            title: "Design Blueprints",
                            list: ["Conceptual Layouts", "3D Space Mapping", "Lighting Schematic", "Material Schedules"]
                        },
                        specifications: {
                            title: "Material Standards",
                            list: ["Grade A Timber", "Natural Stone Selection", "VOC-free Paints", "Energy-efficient Fixtures"]
                        },
                        location: {
                            title: "Service Scope",
                            connectivity: [
                                { category: "Design Studio", items: ["Our main creative hub for client consultations.", "Located in the central business district."] }
                            ]
                        },
                        wip: {
                            title: "Studio Progress",
                            list: ["Ongoing Villa Projects", "Penthouse Renovation", "Commercial Hub Design"],
                            media: [
                                { type: 'image', src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800", caption: "Live Execution" }
                            ]
                        },
                        ebroucher: {
                            title: "Portfolio Brochure",
                            list: ["Design Philosophy", "Service Breakdown", "Completed Work Portfolio"]
                        }
                    }
                }}
            />

            {/* 4.6 PROJECT TEAM AUTOSCROLL */}
            <ProjectTeam />

            {/* 5. CALL TO ACTION */}
            <section className="py-32 px-8 text-center bg-[#111113] border-t border-[#C6A75E]/10">
                <div className="max-w-4xl mx-auto space-y-12">
                    <h2 className="text-4xl md:text-6xl text-[#F5F5F5] font-serif tracking-tight leading-tight">
                        Transform Your <span className="text-[#C6A75E] italic">Living Consciousness</span>
                    </h2>
                    <p className="text-[#B5B5B5] text-xl font-light tracking-wide max-w-2xl mx-auto">
                        Speak with our principal design consultants for a private residence evaluation.
                    </p>
                    <div className="pt-8 flex flex-wrap justify-center gap-8">
                        <button className="px-16 py-8 bg-[#C6A75E] text-black font-black text-[10px] tracking-[6px] uppercase hover:bg-[#E8D8A0] transition-all transform hover:scale-105 shadow-[0_20px_60px_rgba(198,167,94,0.3)]">
                            CONSULT PRINCIPAL DESIGNER
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
