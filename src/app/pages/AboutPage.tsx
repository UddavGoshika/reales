import { motion } from 'motion/react';
import {
    Diamond, MapPin, ArrowRight, ShieldCheck, Globe,
    TrendingUp, BarChart3, Gem, PieChart, Landmark,
    Map, Building2, Palmtree, House, LayoutGrid, Compass,
    Users, Briefcase, GraduationCap, HeartPulse, Mail,
    CreditCard, Search, FileCheck, PhoneCall, Key,
    Leaf, Sprout, Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';

import { Projects } from '../components/projects';
import { ArchitecturalCurves } from '../components/ui/ArchitecturalCurves';

export default function AboutPage() {
    return (
        <div className="bg-[#0B0B0D] text-[#F5F5F5] min-h-screen selection:bg-[#C6A75E] selection:text-black">
            {/* 1. CINEMATIC HERO SECTION */}
            <section className="pt-64 pb-20 px-8 relative overflow-hidden text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle,rgba(198,167,94,0.05)_0%,transparent_70%)] pointer-events-none" />
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-[1440px] mx-auto relative z-10"
                >
                    <span className="text-[#C6A75E] tracking-[10px] uppercase text-[10px] font-bold mb-8 block">ESTABLISHED 1995</span>
                    <h1 className="text-7xl md:text-9xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
                        About <span className="text-[#C6A75E] italic">Us</span>
                    </h1>
                    <h2 className="text-2xl md:text-4xl text-[#C6A75E] italic mb-12 font-serif">Crafting Global Legacies</h2>
                    <div className="w-32 h-[1px] bg-[#C6A75E] mx-auto mb-16 shadow-[0_0_15px_rgba(198,167,94,0.5)]" />
                    <p className="text-xl text-[#B5B5B5] max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
                        For over three decades, TATITO has been synonymous with architectural excellence and unparalleled luxury.
                        Our commitment to creating extraordinary living spaces has established us as the premier choice for the elite.
                    </p>
                </motion.div>
            </section>

            {/* 2. LEADERSHIP SIDE-BY-SIDE GRIDS - FOUNDER TALKS */}
            <section className="py-24 px-8 relative bg-[#0D0D0F]/50 border-y border-white/5">
                <div className="max-w-[1440px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Leader 1: Ravikumar */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/[0.02] border border-[#C6A75E]/30 p-10 group hover:border-[#C6A75E] transition-all duration-700 relative overflow-hidden"
                        >
                            <div className="flex flex-col md:flex-row gap-10">
                                <div className="w-full md:w-[280px] shrink-0">
                                    <div className="aspect-[4/5] bg-neutral-900 border border-white/10 overflow-hidden relative rounded-2xl">
                                        <img
                                            src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1200"
                                            className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:scale-110 group-hover:opacity-80 transition-all duration-700 mix-blend-luminosity"
                                            alt="Ravikumar"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                    </div>
                                </div>
                                <div className="space-y-6 flex-1 pt-4">
                                    <div>
                                        <span className="text-[#C6A75E] text-[10px] tracking-[6px] font-black uppercase mb-2 block">Executive Director</span>
                                        <h3 className="text-4xl font-serif text-white mb-2">Ravikumar</h3>
                                        <div className="flex items-center gap-3 text-[#B5B5B5]/60 text-xs tracking-widest uppercase">
                                            <Briefcase className="w-4 h-4 text-[#C6A75E]" /> Strategic Growth
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-sm text-[#7A7A7A]">
                                            <PhoneCall className="w-4 h-4 text-[#C6A75E]/50" /> +91 XXXXX XXXXX
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-[#7A7A7A]">
                                            <Mail className="w-4 h-4 text-[#C6A75E]/50" /> contact@tatitoprojects.com
                                        </div>
                                    </div>
                                    <p className="text-[#B5B5B5] text-sm leading-relaxed italic font-light font-serif">
                                        "At TATITO, we don't just develop land; we curate the very foundations of high-net-worth lifestyles. Our focus remains absolute on transparency and structural integrity."
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Leader 2: Vanam Manoj Kumar */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/[0.02] border border-[#C6A75E]/30 p-10 group hover:border-[#C6A75E] transition-all duration-700 relative overflow-hidden"
                        >
                            <div className="flex flex-col md:flex-row gap-10">
                                <div className="w-full md:w-[280px] shrink-0">
                                    <div className="aspect-[4/5] bg-neutral-900 border border-white/10 overflow-hidden relative rounded-2xl">
                                        <img
                                            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200"
                                            className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:scale-110 group-hover:opacity-80 transition-all duration-700 mix-blend-luminosity"
                                            alt="Manoj Kumar"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                    </div>
                                </div>
                                <div className="space-y-6 flex-1 pt-4">
                                    <div>
                                        <span className="text-[#C6A75E] text-[10px] tracking-[6px] font-black uppercase mb-2 block">Visionary Founder</span>
                                        <h3 className="text-4xl font-serif text-white mb-2">Manoj Kumar Vanam</h3>
                                        <div className="flex items-center gap-3 text-[#C6A75E] text-xs font-bold tracking-widest uppercase">
                                            <Briefcase className="w-4 h-4" /> Tech Entrepreneur
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-sm text-[#7A7A7A]">
                                            <PhoneCall className="w-4 h-4 text-[#C6A75E]/50" /> +91 70937 04706
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-[#7A7A7A]">
                                            <Mail className="w-4 h-4 text-[#C6A75E]/50" /> tatitoprojects@gmail.com
                                        </div>
                                        <div className="flex items-center gap-3 text-sm text-[#7A7A7A]">
                                            <MapPin className="w-4 h-4 text-[#C6A75E]/50" /> Tirupati, Andhra Pradesh 517501, India
                                        </div>
                                    </div>
                                    <p className="text-[#B5B5B5] text-sm leading-relaxed italic font-light font-serif">
                                        "Since 1995, my vision has been to blend nature with urban luxury. We're not just selling plots; we are building a legacy that generations will be proud to inhabit."
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. FULL WIDTH NAVIGATIONAL GUIDE & PURCHASING FLOW */}
            <section className="py-32 px-8 relative overflow-hidden">
                <ArchitecturalCurves className="bottom-[-10%] right-[-5%]" opacity={0.03} />
                <div className="max-w-[1440px] mx-auto space-y-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-6xl md:text-8xl text-white font-serif mb-8 leading-tight">Investment <span className="text-[#C6A75E] italic">Portals</span></h2>
                        <div className="w-40 h-[1px] bg-[#C6A75E]/40 mx-auto mb-10" />
                        <p className="text-[#7A7A7A] max-w-2xl mx-auto text-sm tracking-[4px] uppercase font-light">Step-by-step architectural breakdown & customer purchase journey.</p>
                    </motion.div>

                    <div className="space-y-32">
                        {[
                            {
                                title: "ASTRA VALLEY",
                                subtitle: "RESORT THEMED LIVING",
                                location: "Near Vizag-Bheemili, AP",
                                icon: <Palmtree className="w-12 h-12" />,
                                desc: "Our flagship VMRDA-approved resort-themed layout. Designed for those seeking a retirement sanctuary or a high-growth investment asset.",
                                howItWorks: "We acquire strategic land, secure VMRDA approvals, and build premium resort infrastructure (Pools, Gyms, 40ft wide roads) before plot allocation.",
                                howToBuy: "1. Virtual Search & Filter > 2. Physical Site Visit > 3. Token Plot Selection > 4. Instant Legal Title Verification > 5. Registration.",
                                image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1400",
                                price: "Starting from 60L+"
                            },
                            {
                                title: "GOUTAM VALLEY",
                                subtitle: "ELITE COASTAL CORRIDOR",
                                location: "Coastal Road, Bheemili corridor",
                                icon: <Compass className="w-12 h-12" />,
                                desc: "Exclusive coastal residential plots in the fast-appreciating Bheemili-Vizag corridor. A project where nature meets sophisticated urban planning.",
                                howItWorks: "Focused on environmental integration. We preserve natural topography while integrating 100% underground cabling and secure gated perimeters.",
                                howToBuy: "Visit the Coastal Portal, select your preferred plot orientation (Vaastu Focused), and engage our finance advisors for immediate capital deployment.",
                                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400",
                                price: "Starting from 80L+"
                            },
                            {
                                title: "FARM LANDS",
                                subtitle: "SUSTAINABLE ESCAPE",
                                location: "Agri-Corridor, Vizianagaram",
                                icon: <Leaf className="w-12 h-12" />,
                                desc: "High-yield farm land projects designed for the modern investor desiring both agricultural output and a peaceful green retreat.",
                                howItWorks: "We identify fertile agrarian zones, develop high-end plantation infrastructure, and manage the ecological balance for sustainable growth.",
                                howToBuy: "Select your acreage on the Farm portal, choose your crop/plantation preference, and complete digital KYC for immediate land entitlement.",
                                image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1400",
                                price: "Starting from 45L+"
                            },
                            {
                                title: "PRIVATE VILLAS",
                                subtitle: "BESPOKE ARCHITECTURE",
                                location: "Premium Townships, Vizag",
                                icon: <Gem className="w-12 h-12" />,
                                desc: "Standalone masterpieces of privacy and bespoke design. These are high-ceiling, multi-tiered residences for ultimate exclusivity.",
                                howItWorks: "Our architects work with you to customize interiors within the TATITO structural gold standards. We build, you live.",
                                howToBuy: "Engagement through our 'Invest' portal for early stage reservation. Requires private consultation with our Chief Design Officer.",
                                image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1400",
                                price: "Starting from 4.5Cr+"
                            },
                            {
                                title: "DUPLEX HOMES",
                                subtitle: "MODERN SPATIAL LUXURY",
                                location: "Prime Residential Hubs",
                                icon: <LayoutGrid className="w-12 h-12" />,
                                desc: "Efficient architectural elegance. Dual-level living spaces optimized for modern families who desire a combination of social and private zones.",
                                howItWorks: "We specialize in 'Smart Flow' designs where social areas on the ground floor are separate from master suites on the upper level.",
                                howToBuy: "Navigate to the 'Duplex' tab, use the 3D-Floorplan analyzer, and book a consultation via our Floating Actions widget.",
                                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1400",
                                price: "Starting from 2.2Cr+"
                            },
                            {
                                title: "LUXURY APARTMENTS",
                                subtitle: "VERTICAL TOWNSHIPS",
                                location: "Urban Core, Vizag & AP",
                                icon: <Building2 className="w-12 h-12" />,
                                desc: "High-rise sophisticated living in the heart of urban hubs. Integrated with smart technology and Otis high-speed security.",
                                howItWorks: "Vertical integration of life and workspace. We provide 24/7 power backup and RO water systems within a gated vertical perimeter.",
                                howToBuy: "Select your 'Level' (floor), analyze the panoramic view quadrant, and initiate interest via our 'Analyze Investment' button.",
                                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400",
                                price: "Starting from 1.2Cr+"
                            },
                            {
                                title: "OPEN PLOTS & ESTATES",
                                subtitle: "LAND ACQUISITION",
                                location: "Pan-AP Expansion Zones",
                                icon: <Map className="w-12 h-12" />,
                                desc: "Strategic land nodes across AP/Telangana. Clean titles, clear boundaries, and immediate growth potential.",
                                howItWorks: "We secure huge land parcels, manage all government approvals (LP Numbers), and develop 40ft roads before hand-over.",
                                howToBuy: "Direct purchase via our 'Open Plots' gateway. High liquidity assets that can be registered in your choice of name immediately.",
                                image: "https://images.unsplash.com/photo-1444676632488-26a136c45b9b?q=80&w=1200",
                                price: "Starting from 35L+"
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/10 bg-white/[0.02] hover:border-[#C6A75E]/40 transition-all duration-700 overflow-hidden">
                                    <div className={`lg:col-span-6 p-12 lg:p-20 flex flex-col justify-center space-y-10 ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                                        <div className="flex items-center gap-6">
                                            <div className="text-[#C6A75E]">{item.icon}</div>
                                            <div className="h-[1px] w-12 bg-[#C6A75E]/30" />
                                            <span className="text-[#C6A75E] text-[10px] tracking-[6px] font-black uppercase">{item.subtitle}</span>
                                        </div>
                                        <div>
                                            <h3 className="text-5xl font-serif text-white mb-4">{item.title}</h3>
                                            <div className="flex items-center gap-2 text-[#7A7A7A] text-[11px] tracking-[2px] uppercase">
                                                <MapPin className="w-3.5 h-3.5 text-[#C6A75E]" /> {item.location}
                                            </div>
                                        </div>
                                        <p className="text-[#B5B5B5] text-lg leading-relaxed font-light">{item.desc}</p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-white/5 pt-10">
                                            <div className="space-y-4">
                                                <h4 className="text-[#C6A75E] text-[11px] tracking-[4px] font-bold uppercase flex items-center gap-3">
                                                    <Search className="w-4 h-4" /> How it Works
                                                </h4>
                                                <p className="text-[#7A7A7A] text-xs leading-relaxed uppercase tracking-wider">{item.howItWorks}</p>
                                            </div>
                                            <div className="space-y-4">
                                                <h4 className="text-[#C6A75E] text-[11px] tracking-[4px] font-bold uppercase flex items-center gap-3">
                                                    <CreditCard className="w-4 h-4" /> How to Buy
                                                </h4>
                                                <p className="text-[#7A7A7A] text-xs leading-relaxed uppercase tracking-wider">{item.howToBuy}</p>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap items-center gap-6 pt-10 border-t border-white/5">
                                            <div className="flex-1">
                                                <span className="text-[#C6A75E] font-serif italic text-xl block mb-1">{item.price}</span>
                                                <span className="text-[9px] tracking-[2px] text-[#7A7A7A] uppercase font-bold">Base Investment Value</span>
                                            </div>
                                            <div className="flex gap-4">
                                                <Link
                                                    to="/invest"
                                                    className="px-6 py-3 border border-[#C6A75E]/30 text-[#C6A75E] text-[9px] font-black tracking-[3px] uppercase hover:bg-[#C6A75E] hover:text-black transition-all flex items-center gap-2"
                                                >
                                                    <Calendar className="w-3 h-3" /> GET VISIT
                                                </Link>
                                                <Link
                                                    to="/invest"
                                                    className="px-8 py-3 bg-[#C6A75E] text-black text-[9px] font-black tracking-[3px] uppercase hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg"
                                                >
                                                    ANALYZE
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`lg:col-span-6 relative aspect-video lg:aspect-auto min-h-[600px] group overflow-hidden ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                                        <img
                                            src={item.image}
                                            className="absolute inset-0 w-full h-full object-cover contrast-125 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[4000ms]"
                                            alt={item.title}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent z-10" />
                                        <div className="absolute top-10 right-10 z-20">
                                            <div className="w-20 h-20 border border-[#C6A75E]/30 flex items-center justify-center text-[#C6A75E] text-3xl font-serif italic">
                                                {String(i + 1).padStart(2, '0')}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. CUSTOMER JOURNEY PHASES */}
            <section className="py-32 px-8 bg-black">
                <div className="max-w-[1440px] mx-auto">
                    <div className="text-center mb-24">
                        <span className="text-[#C6A75E] text-[10px] tracking-[10px] font-black uppercase mb-4 block">The Process</span>
                        <h2 className="text-5xl font-serif text-white">Your Path to <span className="text-[#C6A75E] italic">Ownership</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        {[
                            { step: "01", icon: <Search />, label: "DISCOVERY", desc: "Filter through elite listings and analyze real-time market data." },
                            { step: "02", icon: <FileCheck />, label: "VERIFICATION", desc: "Receive transparent digital documentation and legal clearvance." },
                            { step: "03", icon: <CreditCard />, label: "COMMITMENT", desc: "Secure your reservation through our secure capital gateway." },
                            { step: "04", icon: <Key />, label: "POSSESSION", desc: "Instant registration and official entry into the TATITO lifestyle." }
                        ].map((phase) => (
                            <div key={phase.step} className="p-10 border border-white/5 bg-white/[0.02] space-y-6 text-center group hover:border-[#C6A75E] transition-all duration-500">
                                <div className="text-[#C6A75E] flex justify-center">{phase.icon}</div>
                                <h3 className="text-[#C6A75E] text-[10px] tracking-[5px] font-black">{phase.label}</h3>
                                <p className="text-[#7A7A7A] text-xs leading-relaxed uppercase tracking-widest">{phase.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="border-t border-white/5">
                <Projects />
            </div>
        </div>
    );
}
