import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
    MapPin, Ruler, Diamond, ArrowRight as ArrowIcon, ArrowLeft,
    ShieldCheck, Globe, ChevronRight, ChevronDown,
    FileText, Layout, ListChecks, Hammer, BookOpen, Play
} from 'lucide-react';
import { ProjectTabs } from '../components/ProjectTabs';
import { Link, useParams } from 'react-router-dom';
import { ProjectTeam } from '../components/ProjectTeam';

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
        isVmrda: true,
        phases: [
            { title: "PHASE I", details: "320 SQ YARDS", count: "162 PLOTS", originalPrice: "₹7,500", currentPrice: "₹6,500" },
            { title: "PHASE II", details: "100 SQ YDS", count: "70 PLOTS", originalPrice: "₹5,500", currentPrice: "₹4,500" }
        ],
        overview: ' 2 days complimentary accommodation free per yearly (Single Plot). Experience the perfect blend of resort-style living and strategic investment. Astra Valley is a premium residential layout designed for those who seek tranquility without compromising on luxury and connectivity.',
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
            { label: "Paderu", detail: "Tribal capital and hill station at 32 kms.", image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1080' }
        ],
        gallery: [
            { src: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1080', caption: 'Lush Green Layout' },
            { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1080', caption: 'Modern Infrastructure' }
        ],
        technicalDetails: {
            amenities: {
                title: "Premium Amenities",
                list: ["Luxury Cottages", "Swimming Pool", "Rain Dance Floor", "Open Kitchen", "Yoga Mandir"],
                images: [{ src: "https://images.unsplash.com/photo-1587061949733-76243dc23299?q=80&w=600", caption: "Resort Living" }]
            },
            specifications: {
                title: "Technical Specs",
                list: ["40' & 30' Wide BT Roads", "Open Electricity", "Drainage System", "Vaasthu Compliant"],
                images: [{ src: "https://images.unsplash.com/photo-1503387762-592dea58ef01?q=80&w=600", caption: "Layout Standard" }]
            },
            floorplans: {
                title: "Floor Plans & Plot Sizes",
                xlsx: plotSizesExcel,
                list: ["Individual plot measurements", "Phase I - 162 total plots", "Corner plots highlighted"]
            },
            location: {
                title: "Landmarks & Connectivity",
                connectivity: [
                    { category: "CONNECTIVITY", items: ["Madugula RTC Bus Stand - 2 Km", "Paderu Road Junction - 1.5 Km", "Anakapalli Station - 45 Km", "Vizag Airport - 65 Km"] },
                    { category: "EDUCATIONAL", items: ["Govt Junior College - 3 Km", "DAV Public School - 25 Km"] },
                    { category: "HOSPITALS", items: ["Area Hospital Madugula - 2.5 Km", "Sunrise Clinics - 2 Km"] },
                    { category: "TEMPLES", items: ["Sri Modamamba Temple - 5 Km", "Jalampalli Reservoir - 15 Km"] }
                ],
                mapImage: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1080"
            },
            wip: {
                title: "Work In Progress",
                media: [
                    { type: 'image', src: "https://images.unsplash.com/photo-1541944743827-e04bb645d993?q=80&w=1080", caption: "Current View" },
                    { type: 'video', src: astraVideo1, caption: "Site Progress" },
                    { type: 'youtube', src: "https://www.youtube.com/embed/dQw4w9WgXcQ", caption: "Flyover View" }
                ],
                list: ["Entrance arch complete", "Plantation ongoing", "Road paving stages"]
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
        overview: 'Goutam Valley offers an exclusive opportunity to own a piece of paradise in the fast-developing coastal belt of Vizag.',
        sqft: '3,000 - 6,000',
        amenities: [
            { image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=400', name: "Designer Entrance" }
        ],
        highlights: [
            { label: "Close to Beach Road", detail: "3 mins walk to Bheemili beach.", image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1080' }
        ],
        gallery: [],
        technicalDetails: {
            amenities: {
                title: "Gated Features",
                list: ["Designer Lobby", "Clubhouse", "Gym", "Swimming Pool"],
                images: [{ src: "https://images.unsplash.com/photo-1626808642875-0aa545452fe8?q=80&w=600", caption: "Amenities" }]
            },
            specifications: {
                title: "Technical Standards",
                list: ["Seismic Zone Structure", "Vitrified Tiles", "Teak Wood Frame"],
                images: [{ src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=600", caption: "Quality" }]
            },
            floorplans: {
                title: "Floor Plans",
                xlsx: plotSizesExcel,
                list: ["Master Plan Available"]
            },
            location: {
                title: "Proximity Hub",
                connectivity: [
                    { category: "CONNECTIVITY", items: ["Bheemili Beach - 2 Km", "IT SEZ Rushikonda - 12 Km", "Vizag City - 30 Km", "New International Airport - 40 Km"] },
                    { category: "EDUCATIONAL", items: ["Gitam University - 15 Km", "DPS School - 5 Km"] },
                    { category: "HOSPITALS", items: ["NRI Hospital - 10 Km", "Apollo Clinic - 15 Km"] },
                    { category: "TEMPLES", items: ["Narasimha Temple - 15 Km"] }
                ],
                mapImage: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1080"
            },
            wip: {
                title: "Work In Progress",
                media: [
                    { type: 'image', src: "https://images.unsplash.com/photo-1503387762-592dea58ef01?q=80&w=1080", caption: "Site Work" },
                    { type: 'youtube', src: "https://www.youtube.com/embed/dQw4w9WgXcQ", caption: "Progress Video" }
                ],
                list: ["Layout marking complete", "Sewerage work start"]
            }
        }
    },
    'premium-villas': {
        name: 'SIGNATURE VILLAS',
        developer: 'Shubha Nakshatra Developers',
        tagline: 'Ultra-Luxury Independent Living',
        heroImage: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070',
        originalPrice: '₹1.5Cr',
        currentPrice: '₹1.2Cr',
        unit: 'Starting Price*',
        location: 'Kapurulu, Vizag',
        distance: '20 KM FROM CITY CENTER',
        overview: 'Signature Villas redefine luxury with private pools and smart home automation.',
        sqft: '4,500 - 8,000',
        amenities: [],
        highlights: [],
        gallery: [],
        technicalDetails: {
            amenities: { title: "Villa Amenities", list: ["Private Pool", "Home Automation", "Private Garden"], images: [] },
            specifications: { title: "Premium Specs", list: ["Italian Marble", "Smart Lighting", "Solar Power"], images: [] },
            floorplans: { title: "Villa Layouts", xlsx: plotSizesExcel, list: ["Ground Floor Plan", "First Floor Plan"] },
            location: {
                title: "Villa Connectivity",
                connectivity: [
                    { category: "CONNECTIVITY", items: ["City Center - 20 Km", "Airport - 35 Km"] },
                    { category: "HEALTH", items: ["Health City - 15 Km"] }
                ],
                mapImage: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1080"
            },
            wip: {
                title: "Villa Construction",
                media: [{ type: 'image', src: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070", caption: "Structure" }],
                list: ["Foundation complete", "Column work start"]
            }
        }
    },
    'luxury-apartments': {
        name: 'SKY GARDENS',
        developer: 'Shubha Nakshatra Developers',
        tagline: 'High-Rise Luxury Apartments',
        heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070',
        originalPrice: '₹6,500/sft',
        currentPrice: '₹5,500/sft',
        unit: 'Starting Price*',
        location: 'Madhurawada, Vizag',
        distance: '15 KM FROM CITY CENTER',
        overview: 'Sky Gardens offers 3 & 4 BHK ultra-luxury apartments with panoramic sea views and vertical gardens.',
        sqft: '2,200 - 4,500',
        amenities: [],
        highlights: [],
        gallery: [],
        technicalDetails: {
            amenities: { title: "Apartment Amenities", list: ["Roof-top Infinity Pool", "Sky Lounge", "EV Charging Station"], images: [] },
            specifications: { title: "Technical Standards", list: ["Double Glazed Windows", "Smart Security", "Fire Suppression System"], images: [] },
            floorplans: { title: "Flat Layouts", xlsx: plotSizesExcel, list: ["Standard 3BHK", "Premium 4BHK"] },
            location: {
                title: "Urban Connectivity",
                connectivity: [
                    { category: "CONNECTIVITY", items: ["IT Hub - 5 mins", "National Highway - 2 mins"] },
                    { category: "SERVICES", items: ["Shopping Mall - 5 mins"] }
                ],
                mapImage: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1080"
            },
            wip: {
                title: "Project Progress",
                media: [{ type: 'image', src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070", caption: "Structure" }],
                list: ["Slab casting ongoing", "Internal plumbing start"]
            }
        }
    },
    'independent-homes': {
        name: 'HERITAGE HOMES',
        developer: 'Shubha Nakshatra Developers',
        tagline: 'Premium Independent House Units',
        heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070',
        originalPrice: '₹95L',
        currentPrice: '₹85L',
        unit: 'Ready to Move*',
        location: 'Anakapalli, Vizag',
        distance: '40 KM FROM CITY CENTER',
        overview: 'Beautifully designed independent houses with private terrace and parking.',
        sqft: '1,500 - 2,200',
        amenities: [],
        highlights: [],
        gallery: [],
        technicalDetails: {
            amenities: { title: "Home Features", list: ["Private Terrace", "Individual Underground Tank", "Premium Wardrobes"], images: [] },
            specifications: { title: "Construction Quality", list: ["First Class Brick Work", "Jaquar CP Fittings", "Asian Royale Paints"], images: [] },
            floorplans: { title: "House Plans", xlsx: plotSizesExcel, list: ["Type A - 1500 sft", "Type B - 2200 sft"] },
            location: {
                title: "Town Hub",
                connectivity: [
                    { category: "CONNECTIVITY", items: ["RTC Main Stand - 5 mins", "Anakapalli Highway - 10 mins"] }
                ],
                mapImage: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1080"
            },
            wip: {
                title: "Finishing Work",
                media: [{ type: 'image', src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070", caption: "Finishing" }],
                list: ["Painting ongoing", "Wood work finalize"]
            }
        }
    },
    'farm-lands': {
        name: 'GREEN ACRES',
        developer: 'Shubha Nakshatra Developers',
        tagline: 'Productive Farm Lands with Managed Plantation',
        heroImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2013',
        originalPrice: '₹4,500/sqyd',
        currentPrice: '₹3,500/sqyd',
        unit: 'Launch Price*',
        location: 'Madugula, Vizag',
        distance: '75 KM FROM VIZAG',
        overview: 'Invest in managed farm lands with sandalwood and fruit-bearing trees.',
        sqft: '605 yds',
        amenities: [],
        highlights: [],
        gallery: [],
        technicalDetails: {
            amenities: { title: "Farm Facilities", list: ["Drip Irrigation", "24/7 Security", "Clubhouse Access"], images: [] },
            specifications: { title: "Land Standards", list: ["Clear Title", "Survey Marking", "Internal Access Roads"], images: [] },
            floorplans: { title: "Land Layout", xlsx: plotSizesExcel, list: ["Plotting Plan"] },
            location: {
                title: "Agricultural Connectivity",
                connectivity: [
                    { category: "CONNECTIVITY", items: ["Main Road - 1 Km"] }
                ],
                mapImage: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1080"
            },
            wip: {
                title: "Land Preparation",
                media: [{ type: 'image', src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2013", caption: "Plantation" }],
                list: ["Pit digging", "Fencing work"]
            }
        }
    }
};

const ProjectsDataTypes = projectData; // Alias for internal use

export default function ProjectDetail() {
    const { id } = useParams<{ id: string }>();
    const project = projectData[id as keyof typeof projectData] || projectData['astra-valley'];

    const [activePoint, setActivePoint] = useState(0);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    if (!project) return <div>Project not found</div>;

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
            {/* Back Button Strategy - Moved to Bottom */}
            <div className="fixed bottom-10 left-10 z-[110]">
                <Link
                    to="/"
                    className="group flex items-center justify-center w-14 h-14 text-[#C6A75E] bg-[#161618]/90 backdrop-blur-2xl border border-[#C6A75E]/30 rounded-full transition-all duration-700 hover:border-[#C6A75E] hover:shadow-[0_10px_40px_rgba(198,167,94,0.2)]"
                >
                    <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
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

                {/* Sharp Image Layer - Moved outside content padding to fill entire section */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={project.heroImage}
                        alt={project.name}
                        className="w-full h-full object-cover brightness-[0.7]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
                </div>

                {/* Content Container - Vertically Optimized Stack */}
                <div className="absolute inset-x-0 top-0 h-full z-10 flex flex-col pt-[180px] pb-6 px-4">
                    <div className="relative w-full h-full flex flex-col items-center">

                        {/* Narrative Content Strip */}
                        <div className="relative z-20 text-center w-full max-w-7xl mx-auto flex flex-col items-center h-full">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2 }}
                                className="flex flex-col items-center w-full h-full"
                            >
                                {/* Hero Title - Positioned with optimized spacing */}
                                <div className="flex flex-col items-center justify-center gap-4 mb-12 mt-10">
                                    <h1 className="text-5xl md:text-8xl text-[#F5F5F5]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, lineHeight: 1.1 }}>
                                        {project.name.split(' ')[0]} <span className="text-[#C6A75E] italic whitespace-nowrap">{project.name.split(' ')[1]}</span>
                                    </h1>
                                </div>

                                {/* Shared Background Stats Row */}
                                <div className="bg-black/60 backdrop-blur-2xl border border-white/10 rounded-2xl flex flex-nowrap items-stretch justify-center mb-12 shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden">
                                    {/* Location */}
                                    <div className="px-10 py-6 flex items-center gap-4 transition-all hover:bg-white/[0.02] group shrink-0 border-r border-white/10">
                                        <div className="p-2 border border-[#C6A75E]/20 rounded-lg group-hover:bg-[#C6A75E]/10 transition-colors">
                                            <MapPin className="w-5 h-5 text-[#C6A75E]" />
                                        </div>
                                        <div className="text-left">
                                            <span className="text-[10px] tracking-[4px] uppercase text-[#C6A75E] block mb-1 font-bold">Location</span>
                                            <span className="text-[14px] tracking-[1px] uppercase text-[#F5F5F5] font-black">{project.location}</span>
                                        </div>
                                    </div>

                                    {/* Dimensions */}
                                    <div className="px-10 py-6 flex items-center gap-4 transition-all hover:bg-white/[0.02] group shrink-0 border-r border-white/10">
                                        <div className="p-2 border border-[#C6A75E]/20 rounded-lg group-hover:bg-[#C6A75E]/10 transition-colors">
                                            <Ruler className="w-5 h-5 text-[#C6A75E]" />
                                        </div>
                                        <div className="text-left">
                                            <span className="text-[10px] tracking-[4px] uppercase text-[#C6A75E] block mb-1 font-bold">Dimensions</span>
                                            <span className="text-[14px] tracking-[1px] uppercase text-[#F5F5F5] font-sans font-black">{project.sqft} SQ FT</span>
                                        </div>
                                    </div>

                                    {/* Distance */}
                                    <div className="px-10 py-6 flex items-center gap-4 transition-all hover:bg-white/[0.02] group shrink-0 border-r border-white/10">
                                        <div className="p-2 border border-[#C6A75E]/20 rounded-lg group-hover:bg-[#C6A75E]/10 transition-colors">
                                            <Globe className="w-5 h-5 text-[#C6A75E]" />
                                        </div>
                                        <div className="text-left">
                                            <span className="text-[10px] tracking-[4px] uppercase text-[#C6A75E] block mb-1 font-bold">Distance</span>
                                            <span className="text-[14px] tracking-[1px] uppercase text-[#F5F5F5] font-black">{project.distance}</span>
                                        </div>
                                    </div>

                                    {/* VMRDA */}
                                    {(project as any).isVmrda && (
                                        <div className="px-10 py-6 flex items-center gap-6 transition-all hover:bg-white/[0.02] group shrink-0">
                                            <div className="w-16 h-16 rounded-full border border-[#C6A75E]/30 bg-transparent backdrop-blur-3xl p-2 flex items-center justify-center transition-all duration-700 hover:scale-110">
                                                <img src={vmrdaLogo} alt="VMRDA" className="w-full h-full object-contain" />
                                            </div>
                                            <div className="text-left">
                                                <span className="text-[14px] tracking-[6px] font-black text-[#C6A75E] uppercase block">VMRDA</span>
                                                <span className="text-[10px] tracking-[3px] text-[#F5F5F5] uppercase block font-bold opacity-70">Approved</span>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {((project as any).phases) ? (
                                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-14 w-full max-w-7xl mt-auto">
                                        {(project as any).phases.map((phase: any, idx: number) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.5 + idx * 0.2 }}
                                                className="relative group flex-1 w-full"
                                            >
                                                <div className="absolute -inset-1 bg-gradient-to-r from-[#8B4513] via-[#C6A75E] to-[#8B4513] rounded-3xl opacity-20 blur group-hover:opacity-40 transition duration-1000" />
                                                <div className="relative px-12 py-5 bg-[#1B120B] border border-[#C6A75E]/20 rounded-2xl shadow-2xl flex flex-col items-center justify-center overflow-hidden">
                                                    <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]" />
                                                    <span className="relative z-10 text-[10px] tracking-[6px] uppercase text-[#C6A75E] font-black mb-4 border-b border-[#C6A75E]/30 pb-2">{phase.title}</span>
                                                    <h4 className="relative z-10 text-white text-2xl md:text-3xl font-sans font-bold tracking-wider mb-2">{phase.details}</h4>

                                                    {phase.currentPrice && (
                                                        <div className="relative z-10 flex flex-col items-center mb-6">
                                                            <div className="flex items-center gap-4">
                                                                <span className="text-[#C6A75E]/40 line-through text-sm font-bold">{phase.originalPrice}</span>
                                                                <span className="text-[#C6A75E] text-2xl font-serif italic font-bold">{phase.currentPrice}</span>
                                                            </div>
                                                            <span className="text-[9px] tracking-[2px] text-[#7A7A7A] uppercase font-bold mt-1">Per Sq. Yard Only*</span>
                                                        </div>
                                                    )}

                                                    <div className="relative z-10 flex items-center gap-4">
                                                        <div className="h-[1px] w-6 bg-[#C6A75E]/40" />
                                                        <span className="text-[11px] tracking-[4px] uppercase text-[#F5F5F5] font-black">{phase.count}</span>
                                                        <div className="h-[1px] w-6 bg-[#C6A75E]/40" />
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="relative inline-block group mt-auto">
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
                                )}
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
                            <span className="text-[#C6A75E] italic">Precision Engineered</span> at {project.location}
                        </h3>
                        <p className="text-[#B5B5B5] text-xl leading-relaxed font-light font-body">
                            {project.overview}
                        </p>
                        <div className="pt-8 grid grid-cols-2 gap-12 border-t border-white/5">
                            {/* <div className="space-y-2">
                                <span className="text-[10px] tracking-[3px] uppercase text-[#7A7A7A] font-bold">Project Scale</span>
                                <span className="text-white text-lg font-serif">Premium Gated Community</span>
                            </div> */}
                            <div className="space-y-2">
                                <span className="text-[10px] tracking-[3px] uppercase text-[#7A7A7A] font-bold">Certification</span>
                                <span className="text-white text-lg font-serif italic">VMRDA Verified Assets</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. INVESTMENT INTEGRITY SECTION */}
            {/* <section className="py-32 px-8 relative overflow-hidden bg-[#0B0B0D]"> */}
            <div className="absolute inset-4 border border-[#C6A75E]/10 rounded-[3rem] pointer-events-none z-[1]" />
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(198,167,94,0.05)_0%,transparent_60%)] pointer-events-none" />

            <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10">
                {/* <motion.div
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
                    </motion.div> */}

                {/* VMRDA Certification Reveal */}
                {/* <motion.div
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
                    </motion.div> */}
            </div>
            {/* </section> */}

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
                            <span className="text-[#C6A75E] italic">Amenities</span>
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

            {/* 4. UNIFIED PROJECT TABS SYSTEM */}
            <ProjectTabs project={project as any} />

            {/* 4. STRATEGIC CONNECTIVITY HUB */}
            <section className="py-32 px-8 relative overflow-hidden bg-[#0B0B0D]">
                <div className="absolute inset-4 border border-[#C6A75E]/10 rounded-[3rem] pointer-events-none z-[1]" />
                <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_70%,rgba(198,167,94,0.05)_0%,transparent_60%)] pointer-events-none" />

                <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <div className="flex items-center gap-4">
                                <Globe className="w-5 h-5 text-[#C6A75E]" />
                                <span className="text-[#C6A75E] text-[11px] tracking-[8px] font-black uppercase">Proximity Hub</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl text-[#F5F5F5] font-serif" style={{ lineHeight: 1.2 }}>
                                Minutes From <br /> <span className="text-[#C6A75E] italic">Everywhere</span>
                            </h2>

                            <div className="space-y-6">
                                {project.highlights.map((item, i) => (
                                    <motion.button
                                        key={i}
                                        whileHover={{ x: 10 }}
                                        onClick={() => setActivePoint(i)}
                                        className={`w-full text-left p-8 rounded-2xl border transition-all duration-700 flex items-center justify-between group/hub ${activePoint === i
                                            ? 'border-[#C6A75E] bg-[#161618] shadow-[0_20px_40px_rgba(198,167,94,0.15)]'
                                            : 'border-white/5 hover:border-white/10'
                                            }`}
                                    >
                                        <div className="flex items-center gap-8">
                                            <span className={`text-[10px] font-black tracking-[4px] opacity-40 ${activePoint === i ? 'text-[#C6A75E]' : 'text-white'}`}>0{i + 1}</span>
                                            <span className={`text-xl font-bold tracking-widest font-serif ${activePoint === i ? 'text-[#C6A75E]' : 'text-[#7A7A7A] group-hover/hub:text-[#B5B5B5]'}`}>{item.label}</span>
                                        </div>
                                        <ChevronRight className={`w-5 h-5 transition-all duration-700 ${activePoint === i ? 'text-[#C6A75E] rotate-90 scale-125' : 'text-[#7A7A7A] opacity-30 group-hover/hub:opacity-100'}`} />
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activePoint}
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -40 }}
                                transition={{ duration: 0.8, ease: "circOut" }}
                                className="relative h-[700px] border border-[#C6A75E]/20 p-4 bg-[#161618] rounded-[2.5rem] overflow-hidden"
                            >
                                <img src={project.highlights[activePoint].image} className="w-full h-full object-cover contrast-125 brightness-90" alt="Connect" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                                <div className="absolute bottom-16 left-16 right-16">
                                    <h4 className="text-[#C6A75E] text-[10px] tracking-[6px] font-black uppercase mb-4">Verification Check</h4>
                                    <p className="text-2xl md:text-3xl text-white font-serif italic leading-relaxed">"{project.highlights[activePoint].detail}"</p>
                                    <div className="flex items-center gap-6 mt-10">
                                        <div className="h-[1px] w-12 bg-[#C6A75E]" />
                                        <div className="flex items-center gap-3 text-[10px] tracking-[3px] uppercase text-[#7A7A7A] font-bold">
                                            <ShieldCheck className="w-4 h-4 text-[#C6A75E]" /> Certified Proximity
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section >

            <ProjectTeam />

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

        </div >
    );
}
