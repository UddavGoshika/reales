import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    Layout, FileText, ListChecks, MapPin, Ruler, Hammer, BookOpen,
    Play, ShieldCheck, Globe, ChevronRight, ArrowRight as ArrowIcon
} from 'lucide-react';

interface MediaItem {
    type: 'image' | 'video' | 'youtube';
    src: string;
    caption: string;
}

interface ConnectivityItem {
    category: string;
    items: string[];
}

interface ProjectTabsProps {
    project: {
        name: string;
        location: string;
        heroImage?: string;
        amenities?: Array<{ name: string; image: string }>;
        technicalDetails?: {
            amenities?: { title?: string; list?: string[]; images?: Array<{ src: string; caption: string }> };
            floorplans?: { title?: string; list?: string[]; images?: Array<{ src: string; caption: string }>; xlsx?: string };
            specifications?: { title?: string; list?: string[]; images?: Array<{ src: string; caption: string }> };
            location?: { title?: string; connectivity?: ConnectivityItem[]; mapImage?: string };
            sitelayout?: { title?: string; pdf?: string; list?: string[] };
            wip?: { title?: string; media?: MediaItem[]; list?: string[] };
            ebroucher?: { title?: string; pdf?: string; list?: string[] };
        };
    };
    initialTab?: string;
}

export const ProjectTabs: React.FC<ProjectTabsProps> = ({ project, initialTab = 'amenities' }) => {
    const [activeTab, setActiveTab] = useState(initialTab);
    const [activeTechIndex, setActiveTechIndex] = useState(0);
    const [activeWipMedia, setActiveWipMedia] = useState(0);
    const [wipFilter, setWipFilter] = useState<'All' | 'Images' | 'Videos'>('All');

    const tabs = [
        { id: 'amenities', label: 'Amenities', icon: <Layout className="w-4 h-4" /> },
        { id: 'floorplans', label: 'Floor Plans', icon: <FileText className="w-4 h-4" /> },
        { id: 'specifications', label: 'Specifications', icon: <ListChecks className="w-4 h-4" /> },
        { id: 'location', label: 'Location', icon: <MapPin className="w-4 h-4" /> },
        { id: 'sitelayout', label: 'Site Layout', icon: <Ruler className="w-4 h-4" /> },
        { id: 'wip', label: 'Work in Progress', icon: <Hammer className="w-4 h-4" /> },
        { id: 'ebroucher', label: 'E-Brochure', icon: <BookOpen className="w-4 h-4" /> }
    ];

    const details = project.technicalDetails || {};
    const currentDetails = details[activeTab as keyof typeof details] ||
        (activeTab === 'floorplans' ? details['floorplan' as keyof typeof details] : undefined);

    // Fallback for amenities if technicalDetails.amenities is empty
    const getAmenitiesData = () => {
        if (activeTab === 'amenities' && (!(currentDetails as any)?.images || (currentDetails as any).images.length === 0)) {
            return {
                images: project.amenities?.map(a => ({ src: a.image, caption: a.name })) || [],
                list: project.amenities?.map(a => a.name) || []
            };
        }
        return currentDetails;
    };

    const effectiveDetails: any = activeTab === 'amenities' ? getAmenitiesData() : currentDetails;

    // Reset slide index when tab changes
    useEffect(() => {
        setActiveTechIndex(0);
        setActiveWipMedia(0);
    }, [activeTab]);

    // Auto-sliding logic for visuals
    useEffect(() => {
        const hasImages = effectiveDetails?.images && effectiveDetails.images.length > 0;
        const isStandardTab = ['amenities', 'floorplans', 'specifications'].includes(activeTab);

        if (isStandardTab && hasImages) {
            const timer = setInterval(() => {
                setActiveTechIndex(prev => (prev + 1) % (effectiveDetails.images?.length || 1));
            }, 4000);
            return () => clearInterval(timer);
        }
    }, [activeTab, effectiveDetails]);

    const renderPlaceholder = (message: string) => (
        <div className="w-full flex flex-col items-center justify-center py-24 text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center text-[#7A7A7A]">
                <FileText className="w-8 h-8 opacity-20" />
            </div>
            <p className="text-[#7A7A7A] font-serif italic text-xl tracking-wide">{message}</p>
        </div>
    );

    const renderStandardTab = () => {
        const images = effectiveDetails?.images || [];
        const list = effectiveDetails?.list || [
            "Premium international standards",
            "Architectural excellence in every detail",
            "Sustainable development practices",
            "State-of-the-art infrastructure"
        ];

        if (images.length === 0 && (!list || list.length === 0)) {
            return renderPlaceholder(`No ${activeTab} details available`);
        }

        return (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-stretch">
                {/* Left: Visuals */}
                <div className="relative h-[400px] lg:order-1 overflow-hidden rounded-3xl group">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${activeTab}-${activeTechIndex}`}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 1 }}
                            className="absolute inset-0"
                        >
                            <img
                                src={images[activeTechIndex]?.src || project.heroImage || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800"}
                                className="w-full h-full object-cover contrast-110 brightness-90 group-hover:scale-105 transition-transform duration-[2000ms]"
                                alt="Visual"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-8">
                                <span className="text-[#C6A75E] text-[10px] tracking-[6px] uppercase font-black bg-black/60 px-6 py-2 rounded-full backdrop-blur-md">
                                    {images[activeTechIndex]?.caption || "Official Development Visual"}
                                </span>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Right: List */}
                <div className="space-y-12 lg:order-2 flex flex-col justify-center">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-[1px] bg-[#C6A75E]" />
                            <span className="text-[#C6A75E] tracking-[8px] text-[10px] font-black uppercase">Live Highlights</span>
                        </div>
                        <h3 className="text-4xl md:text-5xl text-[#F5F5F5] font-serif italic">
                            {effectiveDetails?.title || tabs.find(t => t.id === activeTab)?.label}
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {list.map((item: string, idx: number) => (
                            <motion.button
                                key={idx}
                                onClick={() => setActiveTechIndex(idx % (images.length || 1))}
                                className={`w-full text-left p-4 rounded-xl border transition-all duration-700 flex items-center justify-between group/feature ${activeTechIndex === idx
                                    ? 'bg-[#161618] border-[#C6A75E] shadow-[0_10px_30px_rgba(198,167,94,0.1)]'
                                    : 'border-white/5 hover:border-white/20'
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-700 shrink-0 ${activeTechIndex === idx
                                        ? 'bg-[#C6A75E] border-[#C6A75E] rotate-90'
                                        : 'border-[#C6A75E]/30 group-hover/feature:border-[#C6A75E]'
                                        }`}>
                                        <ChevronRight className={`w-3 h-3 ${activeTechIndex === idx ? 'text-black' : 'text-[#C6A75E]'}`} />
                                    </div>
                                    <span className={`text-[13px] font-serif leading-tight transition-all duration-700 ${activeTechIndex === idx ? 'text-white translate-x-1' : 'text-[#7A7A7A] group-hover/feature:text-[#B5B5B5]'
                                        }`}>
                                        {item}
                                    </span>
                                </div>
                            </motion.button>
                        ))}
                    </div>
                    {activeTab === 'floorplans' && effectiveDetails?.xlsx && (
                        <div className="pt-4">
                            <a
                                href={effectiveDetails.xlsx}
                                download
                                className="inline-flex items-center gap-4 text-[#C6A75E] hover:text-white transition-colors group"
                            >
                                <FileText className="w-5 h-5" />
                                <span className="text-[10px] tracking-[4px] font-bold uppercase border-b border-[#C6A75E]/30 pb-1 group-hover:border-[#C6A75E]">Download Measurement Sheet</span>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    const renderLocationTab = () => {
        const loc = project.technicalDetails?.location;
        if (!loc) return renderPlaceholder("Location details not available");

        return (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-12 mb-8">
                    <h3 className="text-4xl text-[#F5F5F5] font-serif italic mb-2">{loc.title || "Strategic Connectivity"}</h3>
                    <div className="w-20 h-1 bg-[#C6A75E] opacity-50" />
                </div>
                <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {(loc.connectivity || (project as any).connectivity || []).map((cat: any, i: number) => {
                        // Handle both categorized and flat connectivity data
                        const isFlat = !cat.category;
                        const title = isFlat ? (cat.label || `Highlight ${i + 1}`) : cat.category;
                        const items = isFlat ? [cat.detail] : cat.items;

                        return (
                            <div key={i} className="space-y-4 bg-white/[0.02] p-8 rounded-2xl border border-white/5 hover:border-[#C6A75E]/20 transition-all">
                                <div className="flex items-center gap-3 border-b border-[#C6A75E]/20 pb-4">
                                    <Globe className="w-5 h-5 text-[#C6A75E]" />
                                    <span className="text-[#C6A75E] text-[10px] font-bold tracking-[3px] uppercase">{title}</span>
                                </div>
                                <ul className="space-y-3 pt-2">
                                    {items.map((item: string, j: number) => (
                                        <li key={j} className="text-[#B5B5B5] text-sm flex items-start gap-4">
                                            <div className="w-2 h-2 rounded-full bg-[#C6A75E]/40 mt-1.5 shrink-0" />
                                            <span className="font-light tracking-wide">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                    {(!loc.connectivity && !(project as any).connectivity) && (
                        <div className="col-span-2 text-center py-12 text-[#7A7A7A] italic">No connectivity landmarks listed</div>
                    )}
                </div>
                <div className="lg:col-span-5 space-y-8">
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#C6A75E]/10 group shadow-2xl">
                        <img
                            src={loc.mapImage || "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1080"}
                            className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                            alt="Location Map"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-6 left-6">
                            <span className="text-white text-[9px] font-bold tracking-[4px] uppercase bg-[#C6A75E]/90 px-6 py-3 rounded-full backdrop-blur-md border border-white/20 shadow-xl">
                                Project Navigation Hub
                            </span>
                        </div>
                    </div>
                    <div className="bg-[#1B1B1D] p-8 rounded-[2rem] border border-white/5 flex items-center gap-8 shadow-xl">
                        <div className="w-24 h-24 bg-white p-3 rounded-2xl shrink-0 shadow-inner">
                            <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://maps.google.com?q=${encodeURIComponent(project.location)}`} className="w-full h-full grayscale" alt="QR" />
                        </div>
                        <div className="space-y-2">
                            <span className="text-[#C6A75E] text-xs font-bold tracking-[3px] uppercase block">Instant Directions</span>
                            <p className="text-[#B5B5B5] text-sm leading-relaxed font-light">Scan code to open project location in Google Maps for live navigation.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const renderPdfTab = (type: 'sitelayout' | 'ebroucher') => {
        const details = project.technicalDetails?.[type];
        const pdf = details?.pdf;

        if (!pdf) {
            return renderPlaceholder(type === 'sitelayout' ? "No site layout available" : "No e-brochure available");
        }

        return (
            <div className="w-full space-y-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-white/5 pb-10">
                    <div className="space-y-4 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-4">
                            <div className="w-12 h-[1px] bg-[#C6A75E]" />
                            <span className="text-[#C6A75E] tracking-[6px] text-[10px] font-bold uppercase">
                                {type === 'sitelayout' ? 'Official Layout Blueprint' : 'Project Showcase'}
                            </span>
                        </div>
                        <h3 className="text-4xl text-white font-serif italic">{details?.title || (type === 'sitelayout' ? 'Site Layout Plan' : 'Digital Brochure')}</h3>
                    </div>
                    <div className="flex gap-4">
                        <a
                            href={pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-10 py-5 bg-white/5 border border-white/10 text-white text-[10px] tracking-[4px] uppercase font-bold hover:bg-white/10 transition-all shadow-xl"
                        >
                            Preview Document
                        </a>
                        <a
                            href={pdf}
                            download
                            className="px-10 py-5 bg-[#C6A75E] text-black text-[10px] tracking-[4px] uppercase font-black hover:bg-[#E8D8A0] transition-all shadow-2xl"
                        >
                            Download PDF
                        </a>
                    </div>
                </div>
                <div className="w-full h-[800px] rounded-3xl overflow-hidden border border-[#C6A75E]/10 shadow-3xl bg-black relative">
                    <iframe
                        src={`${pdf}#toolbar=0&navpanes=0`}
                        className="w-full h-full contrast-125"
                        title="Document Viewer"
                    />
                    <div className="absolute inset-0 pointer-events-none border-[20px] border-[#161618] rounded-3xl" />
                </div>
            </div>
        );
    };

    const renderWipTab = () => {
        const wip = project.technicalDetails?.wip;
        const media = wip?.media || [];

        const filteredMedia = media.filter(m => {
            if (wipFilter === 'All') return true;
            if (wipFilter === 'Images') return m.type === 'image';
            if (wipFilter === 'Videos') return m.type === 'video' || m.type === 'youtube';
            return true;
        });

        if (media.length === 0) {
            return renderPlaceholder("No construction updates available");
        }

        return (
            <div className="space-y-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="space-y-4 text-center md:text-left">
                        <h3 className="text-4xl text-white font-serif italic">Development <span className="text-[#C6A75E]">Pulse</span></h3>
                        <p className="text-[#7A7A7A] text-sm font-light tracking-wide">Real-time visibility into your future home's milestones.</p>
                    </div>
                    <div className="flex bg-[#0B0B0D] p-1.5 rounded-full border border-white/5">
                        {(['All', 'Images', 'Videos'] as const).map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setWipFilter(filter)}
                                className={`px-8 py-3 rounded-full text-[9px] tracking-[3px] uppercase font-black transition-all duration-500 ${wipFilter === filter
                                    ? 'bg-[#C6A75E] text-black shadow-lg'
                                    : 'text-[#7A7A7A] hover:text-[#C6A75E]'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredMedia.map((m, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/5 bg-black shadow-xl"
                        >
                            {m.type === 'youtube' ? (
                                <iframe src={m.src} className="w-full h-full" allowFullScreen title={m.caption} />
                            ) : m.type === 'video' ? (
                                <video src={m.src} className="w-full h-full object-cover" controls />
                            ) : (
                                <img src={m.src} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt={m.caption} />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 pointer-events-none" />
                            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none">
                                <span className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-[8px] tracking-[4px] text-[#C6A75E] font-black uppercase border border-white/10">
                                    {m.caption}
                                </span>
                                {(m.type === 'video' || m.type === 'youtube') && <Play className="w-4 h-4 text-[#C6A75E] fill-current" />}
                            </div>
                        </motion.div>
                    ))}
                    {filteredMedia.length === 0 && (
                        <div className="col-span-full py-20 text-center text-[#7A7A7A] font-serif italic">No {wipFilter.toLowerCase()} found in update logs.</div>
                    )}
                </div>

                {wip?.list && wip.list.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-white/5">
                        {wip.list.map((item, i) => (
                            <div key={i} className="flex items-center gap-6 bg-white/[0.02] p-8 rounded-[2rem] border border-white/5 hover:border-[#C6A75E]/20 transition-all">
                                <div className="w-10 h-10 rounded-full bg-[#C6A75E]/10 flex items-center justify-center text-[#C6A75E] shrink-0">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                                <span className="text-[#B5B5B5] text-sm font-medium tracking-wide">{item}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    };

    return (
        <section className="py-32 px-8 relative overflow-hidden bg-[#111113]">
            <div className="absolute inset-4 border border-[#C6A75E]/5 rounded-[3.5rem] pointer-events-none" />

            <div className="max-w-[1440px] mx-auto relative z-10">
                {/* 1. LAYERED TAB NAVIGATION */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-24 bg-[#161618]/80 backdrop-blur-xl border border-[#C6A75E]/20 p-2 rounded-2xl shadow-3xl">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-4 px-10 py-5 rounded-xl transition-all duration-700 text-[10px] tracking-[4px] uppercase font-black font-serif ${activeTab === tab.id
                                ? 'bg-[#C6A75E] text-black shadow-[0_15px_30px_rgba(198,167,94,0.3)] scale-105'
                                : 'text-[#7A7A7A] hover:text-[#C6A75E] hover:bg-white/5'
                                }`}
                        >
                            <span className={`${activeTab === tab.id ? 'opacity-100' : 'opacity-40 group-hover:opacity-100 transition-opacity'}`}>
                                {tab.icon}
                            </span>
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* 2. DYNAMIC CONTENT AREA */}
                <div className="min-h-[600px] bg-[#161618] border border-white/5 p-10 lg:p-20 rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.8, ease: "circOut" }}
                        >
                            {activeTab === 'location' ? renderLocationTab() :
                                activeTab === 'sitelayout' ? renderPdfTab('sitelayout') :
                                    activeTab === 'ebroucher' ? renderPdfTab('ebroucher') :
                                        activeTab === 'wip' ? renderWipTab() :
                                            renderStandardTab()}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};
