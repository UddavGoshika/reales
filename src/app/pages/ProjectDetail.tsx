import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    MapPin, Ruler, Diamond, ArrowRight, ArrowLeft,
    ShieldCheck, Globe, ChevronRight, ChevronDown,
    FileText, Layout, ListChecks, Hammer, BookOpen, Play
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

// @ts-ignore
import vmrdaLogo from '../components/figma/images/unnamed.png';
// @ts-ignore
import astraVideo1 from '../components/figma/images/astra1.mp4';
// @ts-ignore
import astraVideo2 from '../components/figma/images/astra2.mp4';
// @ts-ignore
import layoutPlanPdf from '../components/figma/images/LAYOUT PLAN.pdf';
// @ts-ignore
import plotSizesExcel from '../components/figma/images/phase 1 plot sizes.xlsx';

const projectData = {
    'astra-valley': {
        name: 'ASTRA VALLEY',
        developer: 'Shubha Nakshatra Developers',
        tagline: 'VMRDA Approved Open Plots Near Madugula',
        heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070',
        originalPrice: '₹7,500',
        currentPrice: '₹6,500',
        unit: 'Per Sq. Yard Only*',
        location: 'Madugula, Vizag',
        distance: '+72 KM FROM VISAKHAPATNAM',
        overview: 'Note: 2 days complimentary accommodation free per yearly (Single Plot). Experience the perfect blend of resort-style living and strategic investment. Astra Valley is a premium residential layout designed for those who seek tranquility without compromising on luxury and connectivity.',
        sqft: '2,500 - 5,000',
        amenities: [
            { image: 'https://images.unsplash.com/photo-1587061949733-76243dc23299?q=80&w=400', name: "Cottages" },
            { image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=400', name: "Swimming Pool" },
            { image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=400', name: "Rain Dance" },
            { image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=400', name: "Open Kitchen" },
            { image: 'https://images.unsplash.com/photo-1545208393-216671fe73f7?q=80&w=400', name: "Yoga / Dhyana Mandir" }
        ],
        highlights: [
            { label: "Sri Modamamba Temple", detail: "Spiritual heritage located just 5 kms away.", image: 'https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=1080' },
            { label: "Jalampalli Reservoir", detail: "Scenic reservoir and picnic spot at 13 kms.", image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1080' },
            { label: "Vanajangi Hills", detail: "Famous cloud-view tourist destination at 32 kms.", image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1080' },
            { label: "Paderu", detail: "Tribal capital and hill station at 32 kms.", image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1080' },
            { label: "Proposed Tourist Hub", detail: "Upcoming development @ Tadivalasa near the project.", image: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=1080' },
            { label: "Madugula Halwa", detail: "World famous traditional sweet from the local region.", image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1080' }
        ],
        gallery: [
            { src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1080', caption: 'Lush Green Layout' },
            { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1080', caption: 'Modern Infrastructure' },
            { src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1080', caption: 'Evening Vibe' },
            { src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1080', caption: 'Expansive Views' }
        ],
        technicalDetails: {
            highlights: {
                title: "Project Highlights",
                list: [
                    "Grand Entrance arch centerpiece",
                    "Black Top Roads (40 Feet and 30 Feet)",
                    "Open Electricity Infrastructure",
                    "Open Drainage System",
                    "Avenue Plantation throughout",
                    "Parks and Gardens",
                    "Kids Play Area",
                    "Individual Tap Connection",
                    "Clear Title & Spot Registration",
                    "24/7 Security Service",
                    "100 % Vaasthu Compliant",
                    "Bank Loan Facility Available",
                    "Highway Facing Plots",
                    "Total Layout Compound Wall"
                ],
                images: [
                    { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600", caption: "Main Entrance Rendering" }
                ]
            },
            amenities: {
                title: "Project Amenities",
                list: [
                    "Luxury Cottages",
                    "Swimming Pool",
                    "Rain Dance Floor",
                    "Open Kitchen Facilities",
                    "Yoga / Dhyana Mandir",
                    "2 Days complimentary yearly accommodation"
                ],
                images: [
                    { src: "https://images.unsplash.com/photo-1587061949733-76243dc23299?q=80&w=600", caption: "Resort Living" }
                ]
            },
            specifications: {
                title: "Technical Specifications",
                list: [
                    "Roads: 40' & 30' Wide BT roads as per VMRDA standards",
                    "Electricity: Open electricity with street lights and dedicated transformer",
                    "Drainage: Purpose-built open drainage system with professional gradients",
                    "Water: Individual tap connection for every plot from overhead tank",
                    "Safety: 24x7 Security with grand entrance arch and compound wall",
                    "Vastu: 100% Vastu compliant layout with clear title",
                    "Approvals: VMRDA Approved (L.P.No.46/2025) & spot registration ready"
                ],
                images: [{ src: "https://images.unsplash.com/photo-1503387762-592dea58ef01?q=80&w=600", caption: "Development Standard" }]
            },
            wip: {
                title: "Construction Life",
                list: [
                    "Entrance arch construction finalized",
                    "Plantation and landscape ongoing",
                    "Road paving in final stages",
                    "Drainage network installation complete",
                    "Community hub preparation"
                ],
                images: [
                    { src: astraVideo1, caption: "Project Update", type: 'Videos' },
                    { src: astraVideo2, caption: "Cinematic Layout", type: 'Videos' }
                ]
            },
            sitelayout: {
                title: "Site Layout Plan",
                pdf: layoutPlanPdf
            },
            floorplans: {
                title: "Floor Plans & Plot Sizes",
                xlsx: plotSizesExcel,
                list: [
                    "Individual plot measurements included",
                    "Phase I - 162 total plots breakdown",
                    "Avenue facing and corner plots highlighted",
                    "Road side dimensions in ft/yards",
                    "Ready for spot registration plots marked"
                ]
            }
        }
    },
    'goutam-valley': {
        name: 'GOUTAM VALLEY',
        developer: 'Shubha Nakshatra Developers',
        tagline: 'Premium Gated Community Plots in Vizag',
        heroImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013',
        originalPrice: '₹8,500',
        currentPrice: '₹7,500',
        unit: 'Per Sq. Yard Only*',
        location: 'Bheemili, Vizag',
        distance: '35 KM FROM CITY CENTER',
        overview: 'Goutam Valley offers an exclusive opportunity to own a piece of paradise in the fast-developing coastal belt of Vizag. A project that combines natural beauty with urban sophistication.',
        sqft: '3,000 - 6,000',
        amenities: [
            { image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=400', name: "Designer Entrance" },
            { image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=400', name: "Gated Community" },
            { image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=400', name: "Landscape Greens" },
            { image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=400', name: "Elite Clubhouse" }
        ],
        highlights: [
            { label: "Close to Beach Road", detail: "3 mins walk to the pristine golden sands of Bheemili.", image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1080' },
            { label: "Proximity to IT SEZ", detail: "10 mins drive to the city's major technological hub.", image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1080' }
        ],
        gallery: [
            { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1080', caption: 'Coastal Proximity' },
            { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1080', caption: 'Gated Luxury' },
            { src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1080', caption: 'Business District Connection' },
            { src: 'https://images.unsplash.com/photo-1541443131876-44b03de101c5?q=80&w=1080', caption: 'Planned Community' }
        ],
        technicalDetails: {
            amenities: {
                title: "Gated Community Features",
                list: [
                    "Designer Entrance Lobby",
                    "Clubhouse with Modern Gym",
                    "Swimming Pool with Deck",
                    "Yoga & Meditation Zone",
                    "Multipurpose Banquet Hall",
                    "Intercom Facility",
                    "Rainwater Harvesting",
                    "CCTV Surveillance",
                    "Tennis & Badminton Courts",
                    "Jogging Tracks"
                ],
                images: [
                    { src: "https://images.unsplash.com/photo-1626808642875-0aa545452fe8?q=80&w=600", caption: "Clubhouse" },
                    { src: "https://images.unsplash.com/photo-1600508774444-466ba7ad944f?q=80&w=600", caption: "Gym Setting" }
                ]
            },
            specifications: {
                title: "Premium Specifications",
                list: [
                    "Seismic Zone Resistant Structure",
                    "Premium Vitrified Tile Flooring",
                    "Teak Wood Main Door Frame",
                    "Powder Coated Aluminum Windows",
                    "Concealed Copper Wiring",
                    "CP Fittings of Jaguar/Equivalent"
                ],
                images: [{ src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=600", caption: "Interior Quality" }]
            }
        }
    }
};

import { Projects } from '../components/projects';

export default function ProjectDetail() {
    const { id } = useParams<{ id: string }>();
    const project = projectData[id as keyof typeof projectData] || projectData['astra-valley'];
    const [activeTechTab, setActiveTechTab] = useState('amenities');
    const [mediaFilter, setMediaFilter] = useState('All');
    const [activePoint, setActivePoint] = useState(0);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    useEffect(() => {
        const timer = setInterval(() => {
            setActivePoint((prev) => (prev + 1) % project.highlights.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [project.highlights.length]);

    return (
        <div className="bg-[#0B0B0D] text-[#F5F5F5] min-h-screen selection:bg-[#C6A75E] selection:text-black">
            {/* Back Button Strategy */}
            <div className="fixed top-24 left-8 z-[110]">
                <Link
                    to="/"
                    className="group flex items-center justify-center w-12 h-12 text-[#C6A75E] bg-[#161618]/80 backdrop-blur-2xl border border-[#C6A75E]/30 rounded-full transition-all duration-700 hover:border-[#C6A75E] hover:shadow-[0_0_30px_rgba(198,167,94,0.1)]"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                </Link>
            </div>

            <section className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden bg-[#030304]">
                {/* Blurred Backdrop */}
                <div className="absolute inset-0 z-0 scale-110 blur-[80px] opacity-40">
                    <img
                        src={project.heroImage}
                        alt="Backdrop"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Framed Content Container */}
                <div className="absolute inset-0 px-2 md:px-4 pt-[190px] md:pt-[180px] pb-4 md:pb-8 z-10 flex items-center justify-center">
                    <div className="relative w-full h-full rounded-none overflow-hidden border border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.8)] flex items-end justify-center pb-12 md:pb-20">
                        {/* Sharp Image Layer */}
                        <div className="absolute inset-0">
                            <img
                                src={project.heroImage}
                                alt={project.name}
                                className="w-full h-full object-cover brightness-[0.7]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/95" />
                        </div>

                        {/* Centered Content Plane */}
                        <div className="relative z-20 text-center px-8 w-full max-w-6xl flex flex-col items-center">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2 }}
                                className="flex flex-col items-center w-full"
                            >
                                <span className="text-[#C6A75E] tracking-[10px] uppercase text-[10px] font-black mb-6 block opacity-90">{project.developer}</span>

                                <h1 className="text-5xl md:text-8xl mb-12 text-[#F5F5F5]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, lineHeight: 1.1 }}>
                                    {project.name.split(' ')[0]} <span className="text-[#C6A75E] italic whitespace-nowrap">{project.name.split(' ')[1]}</span>
                                </h1>

                                {/* Stats Row */}
                                <div className="flex flex-wrap items-center justify-center gap-x-8 md:gap-x-12 p-1 gap-y-6 mb-12 max-w-5xl mx-auto">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 border border-[#C6A75E]/20 rounded-lg">
                                            <MapPin className="w-4 h-4 text-[#C6A75E]" />
                                        </div>
                                        <div className="text-left">
                                            <span className="text-[9px] tracking-[3px] uppercase text-[#7A7A7A] block mb-1">Location</span>
                                            <span className="text-[11px] tracking-[2px] uppercase text-[#F5F5F5] font-black">{project.location}</span>
                                        </div>
                                    </div>

                                    <div className="h-8 w-[1px] bg-white/10 hidden md:block" />

                                    <div className="flex items-center gap-3">
                                        <div className="p-2 border border-[#C6A75E]/20 rounded-lg">
                                            <Ruler className="w-4 h-4 text-[#C6A75E]" />
                                        </div>
                                        <div className="text-left">
                                            <span className="text-[9px] tracking-[3px] uppercase text-[#7A7A7A] block mb-1">Dimensions</span>
                                            <span className="text-[11px] tracking-[2px] uppercase text-[#F5F5F5] font-sans font-bold">{project.sqft} SQ FT</span>
                                        </div>
                                    </div>

                                    <div className="h-8 w-[1px] bg-white/10 hidden md:block" />

                                    <div className="flex items-center gap-3">
                                        <div className="p-2 border border-[#C6A75E]/20 rounded-lg">
                                            <Globe className="w-4 h-4 text-[#C6A75E]" />
                                        </div>
                                        <div className="text-left">
                                            <span className="text-[9px] tracking-[3px] uppercase text-[#7A7A7A] block mb-1">Distance</span>
                                            <span className="text-[11px] tracking-[2px] uppercase text-[#F5F5F5] font-black">
                                                {project.distance}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="h-8 w-[1px] bg-white/10 hidden md:block" />

                                    <div className="flex flex-col items-center gap-2 group/vmrda">
                                        <span className="text-[8px] tracking-[4px] font-black text-white/40 uppercase">VMRDA APPROVED</span>
                                        <div className="w-12 h-12 rounded-full border border-[#C6A75E]/20 bg-white/[0.03] backdrop-blur-3xl p-2.5 flex items-center justify-center">
                                            <img src={vmrdaLogo} alt="VMRDA" className="w-full h-full object-contain" />
                                        </div>
                                    </div>
                                </div>

                                {/* Pricing Plaque */}
                                <div className="relative inline-block group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-[#8B4513] via-[#C6A75E] to-[#8B4513] rounded-3xl opacity-30 blur group-hover:opacity-50 transition duration-1000" />
                                    <div className="relative px-8 md:px-16 py-6 md:py-8 bg-[#1B120B] border border-[#C6A75E]/20 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-8 md:gap-16 overflow-hidden">
                                        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]" />
                                        <div className="relative z-10 text-left">
                                            <div className="flex items-baseline gap-4 mb-1">
                                                <span className="text-[#C6A75E]/30 line-through text-lg font-serif">{project.originalPrice}</span>
                                                <span className="text-white text-4xl md:text-5xl font-serif font-bold italic tracking-wider">{project.currentPrice}</span>
                                            </div>
                                            <span className="text-[8px] tracking-[4px] uppercase text-[#C6A75E]/60 font-black">Investment Priority</span>
                                        </div>
                                        <div className="h-10 w-[1px] bg-[#C6A75E]/10 hidden md:block" />
                                        <div className="relative z-10 text-center md:text-left">
                                            <h4 className="text-white text-xl font-sans tracking-[4px] mb-2 uppercase font-medium">{project.unit}</h4>
                                            <div className="flex items-center justify-center md:justify-start gap-4">
                                                <div className="h-[1px] w-8 bg-[#C6A75E]/40" />
                                                <span className="text-[9px] tracking-[3px] uppercase text-[#7A7A7A] font-bold">Limited Availability</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>



            {/* 1.5 SIGNATURE ABOUT SECTION */}
            <section className="py-32 px-8 bg-[#0B0B0D] relative overflow-hidden">
                <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-start relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5 space-y-10"
                    >
                        <div className="space-y-4">
                            <span className="text-[#C6A75E] tracking-[8px] text-[10px] font-bold uppercase block">About</span>
                            <h2 className="text-6xl md:text-7xl text-[#F5F5F5] font-serif uppercase tracking-tighter leading-none">
                                {project.name}
                            </h2>
                            <p className="text-[#C6A75E] text-xl font-serif italic tracking-wide">{project.tagline}</p>
                        </div>

                        <button className="group relative flex items-center gap-6 bg-[#161618] border border-[#C6A75E]/30 text-[#C6A75E] px-10 py-6 text-[10px] tracking-[4px] uppercase font-black hover:border-[#C6A75E] transition-all duration-700 overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-[#C6A75E] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                            <FileText className="relative z-10 w-4 h-4 group-hover:text-black transition-colors" />
                            <span className="relative z-10 group-hover:text-black transition-colors">Click to Download Brochure</span>
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 space-y-8 pt-4"
                    >
                        <h3 className="text-3xl md:text-4xl text-[#F5F5F5] font-serif leading-tight">
                            A Gem of a Home — <span className="text-[#C6A75E] italic">Precision Engineered</span> at {project.location}
                        </h3>
                        <p className="text-[#B5B5B5] text-xl leading-relaxed font-light font-body">
                            {project.overview}
                        </p>
                        <div className="pt-8 grid grid-cols-2 gap-12 border-t border-white/5">
                            <div className="space-y-2">
                                <span className="text-[10px] tracking-[3px] uppercase text-[#7A7A7A] font-bold">Project Scale</span>
                                <span className="text-white text-lg font-serif">Premium Gated Community</span>
                            </div>
                            <div className="space-y-2">
                                <span className="text-[10px] tracking-[3px] uppercase text-[#7A7A7A] font-bold">Certification</span>
                                <span className="text-white text-lg font-serif italic">VMRDA Verified Assets</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. INVESTMENT INTEGRITY SECTION */}
            <section className="py-32 px-8 relative overflow-hidden bg-[#0B0B0D]">
                <div className="absolute inset-4 border border-[#C6A75E]/10 rounded-[3rem] pointer-events-none z-[1]" />
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(198,167,94,0.05)_0%,transparent_60%)] pointer-events-none" />

                <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <div className="flex items-center gap-4">
                            <Diamond className="w-5 h-5 text-[#C6A75E]" />
                            <span className="text-[#C6A75E] text-[10px] tracking-[6px] font-bold uppercase">Overview</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl text-[#F5F5F5]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
                            Strategic <br /> <span className="text-[#C6A75E] italic">Investment Discovery</span>
                        </h2>
                        <p className="text-[#B5B5B5] text-lg leading-relaxed font-light font-body lowercase leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                            {project.overview}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                            <div className="bg-[#161618] border border-white/5 p-10 group hover:border-[#C6A75E]/30 transition-all duration-700">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-[#C6A75E] text-3xl font-bold font-serif">A+</span>
                                    <div className="h-4 w-[1px] bg-white/10" />
                                    <span className="text-[9px] tracking-[3px] uppercase text-[#7A7A7A]">Investment Rating</span>
                                </div>
                                <p className="text-[#B5B5B5] text-sm">Secure assets with exponential appreciation potential.</p>
                            </div>
                            <div className="bg-[#161618] border border-white/5 p-10 group hover:border-[#C6A75E]/30 transition-all duration-700">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 border border-[#C6A75E]/40 flex items-center justify-center">
                                        <ShieldCheck className="w-5 h-5 text-[#C6A75E]" />
                                    </div>
                                    <span className="text-[9px] tracking-[3px] uppercase text-[#7A7A7A]">100% Legally Audited</span>
                                </div>
                                <p className="text-[#B5B5B5] text-sm">Transparent documentation and VMRDA approved layouts.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* VMRDA Certification Reveal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-[#161618] border border-[#C6A75E]/20 p-16 text-center space-y-10 relative group"
                    >
                        <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-[#C6A75E]/40" />
                        <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-[#C6A75E]/40" />

                        <img src={vmrdaLogo} className="h-24 mx-auto contrast-125 brightness-110 grayscale group-hover:grayscale-0 transition-all duration-1000" alt="VMRDA" />
                        <h3 className="text-2xl text-[#F5F5F5] font-serif tracking-widest uppercase">Certified Portfolio</h3>
                        <div className="w-16 h-[1px] bg-[#C6A75E] mx-auto" />
                        <p className="text-[#7A7A7A] text-[10px] tracking-[4px] uppercase font-bold">Registration Verified: VUDA/VMRDA-LP-2026</p>

                        <div className="pt-8 grid grid-cols-2 gap-6">
                            <div className="p-6 border border-white/5 text-center">
                                <span className="text-white text-xl font-bold block mb-1 font-serif">{project.currentPrice}</span>
                                <span className="text-[8px] tracking-[3px] uppercase text-[#B5B5B5]">Starting Market Value</span>
                            </div>
                            <div className="p-6 bg-[#C6A75E] text-black text-center group cursor-pointer">
                                <span className="text-xl font-bold block mb-1 font-serif">RESERVE</span>
                                <span className="text-[8px] tracking-[3px] uppercase font-bold">Secure Asset Unit</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3. PREMIUM AMENITIES SYSTEM */}
            <section className="py-32 px-8 relative overflow-hidden bg-[#111113]">
                <div className="absolute inset-4 border border-[#C6A75E]/10 rounded-[3rem] pointer-events-none z-[1]" />
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(198,167,94,0.05)_0%,transparent_70%)] pointer-events-none" />

                <div className="max-w-[1440px] mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-24"
                    >
                        <span className="text-[#C6A75E] tracking-[6px] text-xs font-bold uppercase mb-4 block">World Class</span>
                        <h2 className="text-4xl md:text-5xl text-[#F5F5F5]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
                            Curated <span className="text-[#C6A75E] italic">Infrastructure</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
                        {project.amenities.map((amenity, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative h-[380px] overflow-hidden bg-[#161618] border border-white/5 transition-all duration-700 hover:border-[#C6A75E]/30"
                            >
                                <img src={amenity.image} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 contrast-110" alt={amenity.name} />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D] via-transparent to-transparent opacity-80" />
                                <div className="absolute bottom-8 left-8 right-8">
                                    <h4 className="text-xl text-[#F5F5F5] font-serif tracking-wide transition-colors duration-500 group-hover:text-[#C6A75E]">{amenity.name}</h4>
                                    <div className="w-8 h-[1px] bg-[#C6A75E] mt-4 group-hover:w-full transition-all duration-700" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>



            {/* 3.6 TECHNICAL DETAILS TABS */}
            < section className="py-32 px-8 relative overflow-hidden bg-[#111113]" >
                <div className="absolute inset-4 border border-[#C6A75E]/5 rounded-[3rem] pointer-events-none" />

                <div className="max-w-[1440px] mx-auto relative z-10">
                    {/* Dynamic Tabs Navigation */}
                    <div className="flex flex-wrap items-center justify-center gap-2 mb-20 bg-[#161618] border border-[#C6A75E]/20 p-2 rounded-xl">
                        {[
                            { id: 'amenities', label: 'Amenities', icon: <Layout className="w-4 h-4" /> },
                            { id: 'floorplans', label: 'Floor Plans', icon: <FileText className="w-4 h-4" /> },
                            { id: 'specifications', label: 'Specifications', icon: <ListChecks className="w-4 h-4" /> },
                            { id: 'location', label: 'Location', icon: <MapPin className="w-4 h-4" /> },
                            { id: 'sitelayout', label: 'Site Layout', icon: <Ruler className="w-4 h-4" /> },
                            { id: 'wip', label: 'Work in Progress', icon: <Hammer className="w-4 h-4" /> },
                            { id: 'ebroucher', label: 'e-Broucher', icon: <BookOpen className="w-4 h-4" /> }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTechTab(tab.id)}
                                className={`flex items-center gap-3 px-8 py-4 rounded-lg transition-all duration-500 text-[10px] tracking-[3px] uppercase font-bold ${activeTechTab === tab.id
                                    ? 'bg-[#C6A75E] text-black shadow-[0_10px_20px_rgba(198,167,94,0.2)]'
                                    : 'text-[#7A7A7A] hover:text-[#C6A75E] hover:bg-white/5'
                                    }`}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTechTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6 }}
                            className={`${((project as any).technicalDetails?.[activeTechTab]?.pdf || (project as any).technicalDetails?.[activeTechTab]?.xlsx) ? 'block' : 'grid grid-cols-1 lg:grid-cols-2 gap-20 items-start'} bg-[#161618] border border-white/5 p-12 lg:p-20 rounded-3xl`}
                        >
                            {(project as any).technicalDetails?.[activeTechTab]?.pdf ? (
                                <div className="w-full space-y-8">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-[1px] bg-[#C6A75E]" />
                                            <span className="text-[#C6A75E] tracking-[6px] text-[10px] font-bold uppercase">Layout Plan View</span>
                                        </div>
                                        <a
                                            href={(project as any).technicalDetails?.[activeTechTab]?.pdf}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-8 py-3 border border-[#C6A75E]/30 text-[#C6A75E] text-[9px] tracking-[3px] uppercase font-bold hover:bg-[#C6A75E] hover:text-black transition-all"
                                        >
                                            Open in New Tab
                                        </a>
                                    </div>
                                    <div className="w-full h-[1000px] rounded-2xl overflow-hidden border border-white/10">
                                        <iframe
                                            src={`${(project as any).technicalDetails?.[activeTechTab]?.pdf}#toolbar=0&navpanes=0`}
                                            className="w-full h-full"
                                            title="Layout Plan"
                                        />
                                    </div>
                                </div>
                            ) : (project as any).technicalDetails?.[activeTechTab]?.xlsx ? (
                                <div className="w-full space-y-12 py-12">
                                    <div className="flex flex-col items-center text-center space-y-8">
                                        <div className="w-24 h-24 rounded-2xl bg-[#C6A75E]/10 flex items-center justify-center text-[#C6A75E] border border-[#C6A75E]/20">
                                            <FileText className="w-10 h-10" />
                                        </div>
                                        <div className="space-y-4">
                                            <h3 className="text-3xl font-serif italic text-white">{(project as any).technicalDetails?.[activeTechTab]?.title}</h3>
                                            <p className="text-[#B5B5B5] max-w-xl mx-auto font-light leading-relaxed">
                                                The detailed plot sizes and measurements are available in the official project spreadsheet.
                                                Download the file below to view the comprehensive Phase 1 layout details.
                                            </p>
                                        </div>
                                        <div className="flex flex-wrap justify-center gap-12 pt-8">
                                            {((project as any).technicalDetails?.[activeTechTab]?.list || []).map((item: string, idx: number) => (
                                                <div key={idx} className="flex items-center gap-3">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#C6A75E]" />
                                                    <span className="text-[10px] tracking-[2px] uppercase text-[#7A7A7A] font-bold">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <a
                                            href={(project as any).technicalDetails?.[activeTechTab]?.xlsx}
                                            download
                                            className="mt-12 group flex items-center gap-6 bg-[#C6A75E] px-12 py-6 text-black font-black tracking-[4px] text-[10px] uppercase shadow-2xl hover:bg-[#E8D8A0] transition-all duration-500"
                                        >
                                            Download Plot Sizes Sheet <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                                        </a>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    {/* Left: Gallery/Visuals */}
                                    <div className="grid grid-cols-1 gap-10 relative lg:order-1">
                                        <div className="absolute -inset-8 border border-[#C6A75E]/10 rounded-[3rem] -z-1 transition-all duration-1000 group-hover:border-[#C6A75E]/20" />

                                        {activeTechTab === 'wip' && (
                                            <div className="flex flex-wrap gap-4 mb-4">
                                                {['All', 'Images', 'Videos'].map((filter) => (
                                                    <button
                                                        key={filter}
                                                        onClick={() => setMediaFilter(filter)}
                                                        className={`px-6 py-2.5 rounded-full text-[9px] tracking-[3px] uppercase font-black transition-all duration-500 border ${mediaFilter === filter
                                                            ? 'bg-[#C6A75E] text-black border-[#C6A75E]'
                                                            : 'border-white/10 text-[#7A7A7A] hover:border-[#C6A75E]/50 hover:text-[#C6A75E]'
                                                            }`}
                                                    >
                                                        {filter}
                                                    </button>
                                                ))}
                                            </div>
                                        )}

                                        {((project as any).technicalDetails?.[activeTechTab]?.images || [
                                            { src: "https://images.unsplash.com/photo-1503387762-592dea58ef01?q=80&w=800", caption: "Architectural Vision", type: 'Images' },
                                            { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800", caption: "Premium Construction", type: 'Images' },
                                            { src: "https://images.unsplash.com/photo-1541944743827-e04bb645d993?q=80&w=1080", caption: "Site Progress Video", type: 'Videos' }
                                        ]).filter((m: any) => mediaFilter === 'All' || m.type === mediaFilter || !m.type).map((img: any, idx: number) => (
                                            <motion.div
                                                key={idx}
                                                whileHover={{ scale: 1.02 }}
                                                className="relative aspect-video overflow-hidden border border-white/10 group rounded-xl bg-black"
                                            >
                                                {img.type === 'Videos' ? (
                                                    <video
                                                        src={img.src}
                                                        className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                                                        muted
                                                        loop
                                                        playsInline
                                                        onMouseEnter={(e) => e.currentTarget.play()}
                                                        onMouseLeave={(e) => {
                                                            e.currentTarget.pause();
                                                            e.currentTarget.currentTime = 0;
                                                        }}
                                                    />
                                                ) : (
                                                    <img src={img.src} className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000" alt="Tech" />
                                                )}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                                                {img.type === 'Videos' && (
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <div className="w-16 h-16 rounded-full bg-[#C6A75E]/20 backdrop-blur-md border border-[#C6A75E]/40 flex items-center justify-center text-[#C6A75E] transition-all group-hover:scale-110 group-hover:bg-[#C6A75E] group-hover:text-black">
                                                            <Play className="w-6 h-6 fill-current translate-x-0.5" />
                                                        </div>
                                                    </div>
                                                )}

                                                <div className="absolute bottom-6 left-6">
                                                    <span className="text-[#C6A75E] text-[8px] tracking-[4px] uppercase font-bold border-l-2 border-[#C6A75E] pl-3" style={{ lineHeight: 1 }}>
                                                        {img.caption}
                                                    </span>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Right: Detailed List */}
                                    <div className="space-y-12 lg:order-2">
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-[1px] bg-[#C6A75E]" />
                                                <span className="text-[#C6A75E] tracking-[6px] text-[10px] font-bold uppercase">Discover details</span>
                                            </div>
                                            <h3 className="text-4xl text-[#F5F5F5] font-serif italic">
                                                {(project as any).technicalDetails?.[activeTechTab]?.title || "Project Feature"}
                                            </h3>
                                        </div>

                                        <ul className="grid grid-cols-1 gap-y-8">
                                            {((project as any).technicalDetails?.[activeTechTab]?.list || [
                                                "Technical specifications available on request",
                                                "Contact our team for detailed blueprints",
                                                "Detailed project layout in final verification",
                                                "Registration & legal papers ready"
                                            ]).map((item: string, idx: number) => (
                                                <li key={idx} className="flex items-start gap-6 group">
                                                    <div className="w-10 h-10 rounded-full border border-[#C6A75E]/30 flex items-center justify-center shrink-0 group-hover:bg-[#C6A75E] group-hover:border-[#C6A75E] transition-all duration-500">
                                                        <ChevronRight className="w-4 h-4 text-[#C6A75E] group-hover:text-white transition-colors" />
                                                    </div>
                                                    <div className="space-y-1 pt-1">
                                                        <span className="text-[#D1D1D1] text-lg font-light tracking-wide leading-relaxed group-hover:text-white transition-colors">
                                                            {item}
                                                        </span>
                                                        <div className="w-0 h-[1px] bg-[#C6A75E]/30 group-hover:w-full transition-all duration-700" />
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="pt-12 flex flex-wrap gap-8">
                                            {activeTechTab === 'ebroucher' ? (
                                                <button className="group flex items-center gap-6 bg-[#C6A75E] text-black px-12 py-6 text-[10px] tracking-[4px] uppercase font-black hover:bg-[#E8D8A0] transition-all duration-500 shadow-2xl">
                                                    GET THE BROCHURE <FileText className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
                                                </button>
                                            ) : (
                                                <button className="group flex items-center gap-6 text-[#C6A75E] text-[10px] tracking-[5px] uppercase font-black border-b border-[#C6A75E]/0 hover:border-[#C6A75E]/40 pb-3 transition-all duration-500">
                                                    FULL DOCUMENTATION <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-3" />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* 4. STRATEGIC CONNECTIVITY HUB */}
            <section className="py-32 px-8 relative overflow-hidden bg-[#0B0B0D]">
                <div className="absolute inset-4 border border-[#C6A75E]/10 rounded-[3rem] pointer-events-none z-[1]" />
                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(198,167,94,0.05)_0%,transparent_60%)] pointer-events-none" />

                <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-center relative z-10">
                    <div className={`${(id === 'astra-valley' || id === 'goutam-valley') ? 'lg:col-span-12' : 'lg:col-span-5'} space-y-12`}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <div className="flex items-center gap-4">
                                <Globe className="w-5 h-5 text-[#C6A75E]" />
                                <span className="text-[#C6A75E] text-[10px] tracking-[6px] font-bold uppercase">Proximity</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl text-[#F5F5F5]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
                                Minutes From <br /> <span className="text-[#C6A75E] italic">Everywhere</span>
                            </h2>

                            <div className="space-y-4">
                                {project.highlights.map((item, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActivePoint(i)}
                                        className={`w-full text-left p-8 border-l-2 transition-all duration-500 flex items-center justify-between group/hub ${activePoint === i ? 'border-[#C6A75E] bg-[#161618]' : 'border-white/5 hover:border-white/20'}`}
                                    >
                                        <span className={`text-lg font-bold tracking-widest font-serif ${activePoint === i ? 'text-[#C6A75E]' : 'text-[#7A7A7A] group-hover/hub:text-[#B5B5B5]'}`}>{item.label}</span>
                                        <ChevronRight className={`w-4 h-4 transition-all duration-500 ${activePoint === i ? 'text-[#C6A75E] translate-x-0' : 'text-[#7A7A7A] -translate-x-4 opacity-0 group-hover/hub:opacity-100'}`} />
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {!(id === 'astra-valley' || id === 'goutam-valley') && (
                        <div className="lg:col-span-7">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activePoint}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.02 }}
                                    transition={{ duration: 0.8 }}
                                    className="relative h-[650px] border border-[#C6A75E]/20 p-4 bg-[#161618]"
                                >
                                    <img src={project.highlights[activePoint].image} className="w-full h-full object-cover contrast-110" alt="Connect" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/80 via-transparent to-transparent" />
                                    <div className="absolute bottom-12 left-12 right-12">
                                        <p className="text-xl text-[#F5F5F5] font-serif italic mb-4">"{project.highlights[activePoint].detail}"</p>
                                        <div className="flex items-center gap-4 text-[9px] tracking-[3px] uppercase text-[#7A7A7A]">
                                            <ShieldCheck className="w-3 h-3 text-[#C6A75E]" /> Verified Landmark Proximity
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    )}
                </div>
            </section>

            {/* 7. READY TO EXPERIENCE CTA */}
            <section className="relative py-40 overflow-hidden group">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2070"
                        className="w-full h-full object-cover transition-transform duration-[5000ms] group-hover:scale-110"
                        alt="CTA BG"
                    />
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
                </div>

                <div className="max-w-[1440px] mx-auto px-8 relative z-10 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl space-y-8"
                    >
                        <h2 className="text-4xl md:text-6xl text-white font-serif leading-tight">
                            Ready to experience {project.location}'s most prestigious lifestyle?
                        </h2>
                        <p className="text-[#C6A75E] text-lg tracking-[4px] uppercase font-bold">
                            Schedule a visit to our model project
                        </p>
                        <Link to="/#contact">
                            <button className="mt-10 px-12 py-5 border border-[#C6A75E] text-[#C6A75E] hover:bg-[#C6A75E] hover:text-black transition-all duration-500 text-[10px] tracking-[6px] uppercase font-black">
                                Contact Now
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* 8. FAQ SECTION */}
            <section className="relative py-40 bg-[#0B0B0D] overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070"
                        className="w-full h-full object-cover grayscale"
                        alt="FAQ BG"
                    />
                </div>

                <div className="max-w-[1440px] mx-auto px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <div className="space-y-6">
                            <span className="text-[#C6A75E] tracking-[8px] text-[10px] font-bold uppercase block">Information Hub</span>
                            <h2 className="text-6xl md:text-8xl text-white font-serif uppercase">FAQs</h2>
                            <div className="w-20 h-1 bg-[#C6A75E]" />
                        </div>

                        <div className="space-y-4 bg-black/60 backdrop-blur-xl p-8 lg:p-12 border border-white/5 rounded-3xl">
                            {[
                                { q: `Is ${project.name} RERA registered?`, a: "Yes, this is a fully VMRDA/TUDA approved and RERA-registered project for absolute peace of mind." },
                                { q: "What plot and villa configurations are available?", a: "We offer a diverse range of options tailored to luxury living and strategic investment." },
                                { q: "What makes this destination unique?", a: "The perfect blend of natural beauty, strategic location, and world-class infrastructure." },
                                { q: "Is financing available?", a: "Yes, we facilitate easy bank loan options with leading financial institutions." }
                            ].map((faq: any, idx: number) => (
                                <div key={idx} className="border-b border-white/10 last:border-0">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                        className="w-full py-6 flex items-center justify-between text-left group"
                                    >
                                        <span className={`text-sm md:text-base tracking-wide transition-colors ${openFaq === idx ? 'text-[#C6A75E]' : 'text-[#F5F5F5] group-hover:text-[#C6A75E]'}`}>
                                            {faq.q}
                                        </span>
                                        <ChevronDown className={`w-4 h-4 text-[#C6A75E] transition-transform duration-500 ${openFaq === idx ? 'rotate-180' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {openFaq === idx && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="pb-8 text-[#B5B5B5] text-sm md:text-base leading-relaxed max-w-2xl font-light">
                                                    {faq.a}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
