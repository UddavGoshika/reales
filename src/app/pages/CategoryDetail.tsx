import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
    FileText, MapPin, Layout, ListChecks, Ruler,
    Hammer, BookOpen, ChevronRight, ArrowRight, ChevronDown,
    Diamond, Globe, ShieldCheck, Play
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Projects } from '../components/projects';
// @ts-ignore
import layoutPlanPdf from '../components/figma/images/LAYOUT PLAN.pdf';
// @ts-ignore
import plotSizesExcel from '../components/figma/images/phase 1 plot sizes.xlsx';

const categoryData: Record<string, any> = {
    'apartments': {
        title: 'Kausthubham',
        type: 'Luxury Apartments',
        location: 'Narayanapuram, Tirupati',
        heroImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013',
        tagline: 'The Gem in the Heart of Tirupati',
        description: 'Step into KAUSTHUBHAM and immerse yourself in a luxury lifestyle unfolding within a meticulously planned, gated community.',
        highlights: [
            { label: 'Exclusive 7.85-acre luxury gated community', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1080' },
            { label: 'Prime location in the heart of Tirupati', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1080' },
            { label: 'Vastu compliant architectural design', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1080' },
            { label: 'High-end clubhouse with world-class amenities', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1080' },
            { label: '24/7 advanced security surveillance', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1080' },
            { label: 'Ample lung space and landscaped gardens', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1080' }
        ],
        experience: {
            title: 'The Apartment Experience',
            subtitle: 'Step Into A Home Where Seamless Contemporary Design Blends With Traditional Charm:',
            features: [
                'Large, light-filled living and dining spaces',
                'Dedicated spaces for puja, home office/guest room, wet kitchen/utility, and family lounge',
                'Ample balconies, sit-outs, and swing cut-outs for relaxation',
                'Master and children\'s bedrooms en suite with dressing areas and luxury bathrooms'
            ],
            configuration: [
                'Expansive layouts ranging from 2,200 to 3,500 sq.ft.',
                'Living, dining, 3-4 bedrooms, puja, home office, servant room, terraces, balconies, provision for lift'
            ],
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1080'
        },
        faqs: [
            { q: 'Is KAUSTHUBHAM RERA registered?', a: 'Yes. This is a TUDA and RERA-approved project for absolute legal peace of mind.' },
            { q: 'What is the possession timeline?', a: 'The project is scheduled for completion within 18-24 months.' },
            { q: 'What security measures are present?', a: '24/7 CCTV surveillance, biometric access, and trained security personnel.' }
        ],
        amenities: [
            'Terrace swimming pool with toddler\'s pool',
            'Well-equipped gym & fitness zone',
            'Multipurpose hall for events & festivals',
            'Guest rooms for visitors',
            'Aerobics, Yoga, Meditation studio',
            'Children\'s play area, squash court, indoor games'
        ],
        gallery: [
            { src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1080', caption: 'Lush Garden Spaces' },
            { src: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=1080', caption: 'Grand Entrance' },
            { src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1080', caption: 'Premium Clubhouse' },
            { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1080', caption: 'Modern Interiors' }
        ]
    },
    'villas': {
        title: 'Imperial Villas',
        type: 'Royal Villas',
        location: 'Bheemili, Vizag',
        heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070',
        tagline: 'Legacy of Royal Living',
        description: 'Imperial Villas offers an exclusive collection of royal residences designed for those who appreciate the finer things in life.',
        highlights: [
            { label: 'Exclusive 7.85-acre luxury gated community', image: 'https://images.unsplash.com/photo-1626808642875-0aa545452fe8?q=80&w=1080' },
            { label: 'Only 70 triplex villas designed for selectivity', image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1080' },
            { label: 'East, West, and North-facing premium plots', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1080' },
            { label: 'Private home theatre in every villa', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1080' },
            { label: 'Provision for lift in each residence', image: 'https://images.unsplash.com/photo-1600607687614-ef861c83ec0e?q=80&w=1080' },
            { label: 'RERA & TUDA approved infrastructure', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1080' }
        ],
        experience: {
            title: 'The Villa Experience',
            subtitle: 'Step Into A Home Where Seamless Contemporary Design Blends With Traditional Charm:',
            features: [
                'Large, light-filled living and dining spaces',
                'Dedicated spaces for puja, home office/guest room, wet kitchen/utility, and family lounge',
                'Ample balconies, sit-outs, and swing cut-outs for relaxation',
                'Master and children\'s bedrooms en suite with dressing areas and luxury bathrooms'
            ],
            configuration: [
                'G+2 triplex plan, approx. 4,390sqft built-up area',
                'Living, dining, 4 bedrooms, theatre, puja, home office, servant room, terraces, balconies, provision for lift'
            ],
            image: 'https://images.unsplash.com/photo-1626808642875-0aa545452fe8?q=80&w=1080'
        },
        faqs: [
            { q: 'Is Sri Padmavathi\'s RERA registered?', a: 'Yes. This is a TUDA and RERA-approved project for absolute legal peace of mind.' },
            { q: 'What size villas and plot options are there?', a: 'Villas range from 250 to 458 sq. yds.' },
            { q: 'What makes these villas "Uber Luxury"?', a: 'Private home theaters, internal lifts, and bespoke premium finishes.' }
        ],
        amenities: [
            'Private infinity pool for each villa',
            'Personal home theater system',
            'Automated smart home features',
            '24/7 Concierge and security',
            'Lush private landscaped gardens',
            'Bespoke interior design options'
        ],
        gallery: [
            { src: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1080', caption: 'Villa Exterior' },
            { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1080', caption: 'Royal Living Room' },
            { src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1080', caption: 'Gourmet Kitchen' }
        ]
    },
    'duplex': {
        title: 'Emerald Duplex',
        type: 'Premium Duplex Homes',
        location: 'Madhurawada, Vizag',
        heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070',
        tagline: 'Modern Living Reimagined',
        description: 'Emerald Duplex homes offer the perfect balance of space, privacy, and community living. Designed for the modern family that values both elegance and functionality.',
        highlights: [
            { label: 'Spacious G+1 duplex layouts', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1080' },
            { label: 'Premium gated community with 50+ units', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1080' },
            { label: 'Individual garden spaces for every unit', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1080' },
            { label: 'Advanced smart home integration', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1080' },
            { label: 'State-of-the-art clubhouse access', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1080' },
            { label: 'Vaastu compliant design principals', image: 'https://images.unsplash.com/photo-1626808642875-0aa545452fe8?q=80&w=1080' }
        ],
        experience: {
            title: 'The Duplex Experience',
            subtitle: 'Dual-Level Sophistication For Your Growing Family:',
            features: [
                'Double-height living rooms for a grand feel',
                'Private internal staircase with glass railings',
                'Spacious master suites with walk-in closets',
                'Multi-purpose family room on the upper level'
            ],
            configuration: [
                '3 & 4 BHK options from 2,800 to 3,600 sq.ft.',
                'Private terrace and balcony for every bedroom'
            ],
            image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1080'
        },
        faqs: [
            { q: 'Are the duplex homes ready for possession?', a: 'We have both ready-to-move and under-construction units available.' },
            { q: 'Is there a provision for an elevator?', a: 'Yes, select corner units have provision for private lifts.' },
            { q: 'What is the security system like?', a: 'Comprehensive 3-tier security with biometric entry and 24/7 patrolling.' }
        ],
        amenities: [
            'Centralized multi-level clubhouse',
            'Heated indoor swimming pool',
            'Outdoor sports courts (Tennis/Basketball)',
            'Electric vehicle charging stations',
            'Pet-friendly parks and walking trails',
            'Library and business lounge'
        ],
        gallery: [
            { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1080', caption: 'Duplex Living' },
            { src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1080', caption: 'Modern Kitchen' },
            { src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1080', caption: 'Family Lounge' }
        ]
    },
    'farms': {
        title: 'Serene Farms',
        type: 'Managed Farm Houses',
        location: 'Anandapuram, Vizag',
        heroImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2032',
        tagline: 'Connect With Nature, Invest In Peace',
        description: 'Serene Farms provides a getaway from the urban bustle. Own a managed farm plot with fruit-bearing trees and a cozy weekend cottage, all within a secured perimeter.',
        highlights: [
            { label: 'Large 0.25 to 1 acre farm plots', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1080' },
            { label: 'Fully managed plantation services', image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1080' },
            { label: 'Organic kitchen garden setup', image: 'https://images.unsplash.com/photo-1535090467336-9501f96eef89?q=80&w=1080' },
            { label: 'Traditional farmhouse architecture', image: 'https://images.unsplash.com/photo-1518116242335-4e3a47da19e6?q=80&w=1080' },
            { label: '24/7 water and power backup', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1080' },
            { label: 'Secured community perimeter', image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1080' }
        ],
        experience: {
            title: 'The Farm Life',
            subtitle: 'Traditional Charm Meets Modern Comfort:',
            features: [
                'Natural stone and wood finishes',
                'Large wrap-around verandas for cool breezes',
                'Outdoor fire pit and BBQ zone',
                'Private organic orchards'
            ],
            configuration: [
                'Cottage styles from 1,200 to 2,500 sq.ft.',
                'Vast open spaces for private events and farming'
            ],
            image: 'https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=1080'
        },
        faqs: [
            { q: 'Who manages the farm when I am away?', a: 'Our professional estate management team handles all maintenance and harvesting.' },
            { q: 'Is it a legally separate title?', a: 'Yes, every plot comes with a clear individual title and registration.' },
            { q: 'Can I build my own custom house?', a: 'Yes, as long as it adheres to our architectural guidelines for the community.' }
        ],
        amenities: [
            'Natural lake and fishing point',
            'Horse riding and cattle farm',
            'Traditional Ayurveda spa center',
            'Campfire and star-gazing deck',
            'Organic produce delivery to your city home',
            'Cycle tracks and nature trails'
        ],
        gallery: [
            { src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1080', caption: 'Farm Landscape' },
            { src: 'https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=1080', caption: 'Rustic Cottage' },
            { src: 'https://images.unsplash.com/photo-1523348830342-d0187cf0c312?q=80&w=1080', caption: 'Organic Garden' }
        ]
    }
};

categoryData['apartments'].connectivity = [
    { label: 'Near Alipiri Gate', detail: 'Just 5 mins to the main Tirumala trek entrance.', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1080' },
    { label: 'Close to APSRTC Terminal', detail: '10 mins drive to the central transport hub.', image: 'https://images.unsplash.com/photo-1569336415962-a4bd4f7940ee?q=80&w=1080' },
    { label: 'University Enclave', detail: 'Located in the prestigious SV University zone.', image: 'https://images.unsplash.com/photo-1541339907198-e08756eaaaf1?q=80&w=1080' }
];

categoryData['villas'].connectivity = [
    { label: 'Close to Beach Road', detail: 'Walking distance to the pristine Bheemili shores.', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1080' },
    { label: 'Proximity to IT SEZ', detail: '12 mins from Visakhapatnam\'s major tech corridor.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1080' },
    { label: 'International Airport', detail: 'Seamless 45 mins drive via the marine highway.', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109c05a?q=80&w=1080' }
];

categoryData['duplex'].connectivity = [
    { label: 'Near IT Hub', detail: 'Quick access to major software parks in Madhurawada.', image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1080' },
    { label: 'Educational Zone', detail: 'Surrounded by top international schools and universities.', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1080' },
    { label: 'Cricket Stadium', detail: 'Just 5 mins drive to the International Cricket Stadium.', image: 'https://images.unsplash.com/photo-1540749303346-5b4af4964956?q=80&w=1080' }
];

categoryData['farms'].connectivity = [
    { label: 'Green Tech Corridor', detail: 'Located in the future expansion zone of Vizag.', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1080' },
    { label: 'Highway Proximity', detail: 'Easy access to the Chennai-Kolkata National Highway.', image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1080' },
    { label: 'Eco-Tourism Site', detail: 'Close to major waterfalls and nature trekking points.', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1080' }
];

const tabs = [
    { id: 'amenities', label: 'Amenities', icon: <Layout className="w-4 h-4" /> },
    { id: 'floorplan', label: 'Floor Plan', icon: <FileText className="w-4 h-4" /> },
    { id: 'specifications', label: 'Specifications', icon: <ListChecks className="w-4 h-4" /> },
    { id: 'location', label: 'Location', icon: <MapPin className="w-4 h-4" /> },
    { id: 'sitelayout', label: 'Site Layout', icon: <Ruler className="w-4 h-4" /> },
    { id: 'wip', label: 'Work in Progress', icon: <Hammer className="w-4 h-4" /> },
    { id: 'ebroucher', label: 'e-Boucher', icon: <BookOpen className="w-4 h-4" /> },
];

export default function CategoryDetail() {
    const { type } = useParams<{ type: string }>();
    const data = categoryData[type || 'apartments'];
    const [activeTab, setActiveTab] = useState('amenities');
    const [mediaFilter, setMediaFilter] = useState('All');
    const [activePoint, setActivePoint] = useState(0);
    const [activeHighlight, setActiveHighlight] = useState(0);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const technicalDetails: any = {
        amenities: {
            title: "World Class Amenities",
            list: data.amenities,
            images: data.gallery.slice(0, 2)
        },
        floorplan: {
            title: "Floor Plans & Plot Sizes",
            xlsx: plotSizesExcel,
            list: ["Individual plot measurements", "Phase I breakdown", "Road side dimensions", "Ready for registration plots"]
        },
        specifications: {
            title: "Premium Build Specs",
            list: ["Reinforced concrete structure", "Double-skin facade insulation", "High-performance glazing", "Smart home electrical routing"],
            images: [{ src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800", caption: "Material Quality" }]
        },
        ebroucher: {
            title: "Interactive E-Brochure",
            list: ["Full project walkthrough", "Detailed pricing breakdown", "Investment growth projections", "Official site certification"],
            images: [{ src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800", caption: "Brochure Preview" }]
        },
        sitelayout: {
            title: "Site Layout Plan",
            pdf: layoutPlanPdf
        },
        wip: {
            title: "Construction Life",
            list: ["Foundation work underway", "Site clearing completed", "Utility lines installation", "Road network planning"],
            images: data.gallery.slice(0, 3).map((img: any) => ({ ...img, type: 'Images' }))
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [type]);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveHighlight((prev) => (prev + 1) % data.highlights.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [data.highlights.length]);

    useEffect(() => {
        const timer = setInterval(() => {
            setActivePoint((prev) => (prev + 1) % (data.connectivity?.length || 1));
        }, 6000);
        return () => clearInterval(timer);
    }, [data.connectivity?.length]);

    return (
        <div className="bg-[#0B0B0D] text-[#F5F5F5] min-h-screen selection:bg-[#C6A75E] selection:text-black">
            {/* 1. CINEMATIC CATEGORY HERO - FRAMED LAYOUT */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#030304]">
                {/* Blurred Backdrop */}
                <div className="absolute inset-0 z-0 scale-110 blur-[80px] opacity-40">
                    <ImageWithFallback
                        src={data.heroImage}
                        alt="Backdrop"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Framed Image Container */}
                <div className="absolute inset-0 px-2 md:px-4 pt-[190px] md:pt-[180px] pb-4 md:pb-8 z-10 flex items-center justify-center">
                    <div className="relative w-full h-full rounded-none overflow-hidden border border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.8)] flex items-center justify-center">
                        {/* Sharp Image */}
                        <div className="absolute inset-0">
                            <ImageWithFallback
                                src={data.heroImage}
                                alt={data.title}
                                className="w-full h-full object-cover brightness-[0.7]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
                        </div>

                        {/* Content Inside Frame */}
                        <div className="relative z-20 text-center px-8 w-full max-w-6xl">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <span className="text-[#C6A75E] tracking-[10px] uppercase text-[10px] font-bold mb-8 block opacity-80">{data.type}</span>
                                <h1
                                    className="text-6xl md:text-9xl mb-12 text-[#F5F5F5]"
                                    style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
                                >
                                    {data.title}
                                </h1>

                                <div className="flex items-center justify-center gap-6 text-[10px] tracking-[4px] uppercase font-bold text-[#7A7A7A]">
                                    <Link to="/" className="hover:text-[#C6A75E] transition-colors">Home</Link>
                                    <ChevronRight className="w-3 h-3 text-[#C6A75E] rotate-0" />
                                    <span className="text-[#C6A75E] italic">Discover</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C6A75E]/30 to-transparent z-20" />
            </section>



            {/* 2. SIGNATURE OVERVIEW SECTION */}
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
                                {data.title}
                            </h2>
                            <p className="text-[#C6A75E] text-xl font-serif italic tracking-wide">{data.tagline}</p>
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
                            A Gem of a Home — <span className="text-[#C6A75E] italic">{data.type}</span> at {data.location}
                        </h3>
                        <p className="text-[#B5B5B5] text-xl leading-relaxed font-light font-body">
                            {data.description}
                        </p>
                        <div className="pt-8 grid grid-cols-2 gap-12 border-t border-white/5">
                            <div className="space-y-2">
                                <span className="text-[10px] tracking-[3px] uppercase text-[#7A7A7A] font-bold">Project Scale</span>
                                <span className="text-white text-lg font-serif">Premium Gated Community</span>
                            </div>
                            <div className="space-y-2">
                                <span className="text-[10px] tracking-[3px] uppercase text-[#7A7A7A] font-bold">Registration</span>
                                <span className="text-white text-lg font-serif italic">Verified Portfolio Assets</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3. PROJECT HIGHLIGHTS - SPLIT SLIDESHOW */}
            <section className="py-32 px-8 relative bg-[#111113] overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C6A75E]/20 to-transparent" />

                <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
                    <div className="lg:col-span-5 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <span className="text-[#C6A75E] tracking-[8px] text-[10px] font-bold uppercase block">Core Value</span>
                            <h2 className="text-5xl md:text-6xl text-[#F5F5F5] font-serif" style={{ fontWeight: 600 }}>
                                Project <span className="text-[#C6A75E] italic">Highlights</span>
                            </h2>
                        </motion.div>

                        <div className="space-y-4">
                            {data.highlights.map((item: any, idx: number) => (
                                <button
                                    key={idx}
                                    onMouseEnter={() => setActiveHighlight(idx)}
                                    className={`w-full text-left p-8 border-l-2 transition-all duration-700 flex items-center justify-between group h-24 ${activeHighlight === idx
                                        ? 'border-[#C6A75E] bg-[#161618] shadow-[20px_0_40px_rgba(198,167,94,0.05)]'
                                        : 'border-white/5 hover:border-white/20'
                                        }`}
                                >
                                    <div className="flex items-center gap-6">
                                        <span className={`text-xs font-serif italic ${activeHighlight === idx ? 'text-[#C6A75E]' : 'text-[#7A7A7A]'}`}>
                                            0{idx + 1}
                                        </span>
                                        <span className={`text-sm tracking-[2px] uppercase font-bold transition-all duration-500 ${activeHighlight === idx ? 'text-white translate-x-2' : 'text-[#7A7A7A] group-hover:text-[#B5B5B5]'
                                            }`}>
                                            {item.label}
                                        </span>
                                    </div>
                                    <ChevronRight className={`w-4 h-4 transition-all duration-500 ${activeHighlight === idx ? 'text-[#C6A75E] translate-x-0 opacity-100' : 'text-[#7A7A7A] -translate-x-4 opacity-0'
                                        }`} />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-7 relative h-[600px] group">
                        <div className="absolute -inset-4 border border-[#C6A75E]/10 rounded-2xl -z-1" />
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeHighlight}
                                initial={{ opacity: 0, scale: 1.05, x: 20 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.95, x: -20 }}
                                transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
                                className="relative w-full h-full overflow-hidden border border-[#C6A75E]/20"
                            >
                                <img
                                    src={data.highlights[activeHighlight].image}
                                    alt="Highlight"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms] contrast-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                <div className="absolute bottom-12 left-12 right-12">
                                    <div className="w-12 h-[2px] bg-[#C6A75E] mb-6" />
                                    <p className="text-2xl text-white font-serif italic tracking-wide">
                                        "{data.highlights[activeHighlight].label}"
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* 3. STRATEGIC CONNECTIVITY - SUBTLE LUXURY */}
            <section className="relative py-32 overflow-hidden bg-[#111113] border-y border-white/5">
                <div className="absolute inset-4 border border-[#C6A75E]/10 rounded-[3rem] pointer-events-none z-[1]" />
                <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-[16/10] bg-[#161618] border border-[#C6A75E]/30 p-3 shadow-3xl overflow-hidden group"
                    >
                        <ImageWithFallback
                            src={data.connectivity[activePoint]?.image}
                            alt="Connectivity Area"
                            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                    </motion.div>

                    <div className="space-y-12">
                        <div className="space-y-6">
                            <span className="text-[#C6A75E] tracking-[6px] text-xs font-bold uppercase">Location Advantage</span>
                            <h2 className="text-4xl md:text-5xl text-[#F5F5F5]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
                                Minutes From <span className="text-[#C6A75E] italic">Everywhere</span>
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {data.connectivity?.map((point: any, idx: number) => (
                                <button
                                    key={idx}
                                    onClick={() => setActivePoint(idx)}
                                    className={`w-full text-left p-8 border-l-2 transition-all duration-700 flex items-center justify-between group/point ${activePoint === idx ? 'border-[#C6A75E] bg-[#161618]' : 'border-white/5 hover:border-white/20'}`}
                                >
                                    <div className="space-y-2">
                                        <span className={`text-lg font-bold tracking-widest font-serif ${activePoint === idx ? 'text-[#C6A75E]' : 'text-[#7A7A7A] group-hover/point:text-[#B5B5B5]'}`}>{point.label}</span>
                                        {activePoint === idx && (
                                            <p className="text-[#B5B5B5] text-sm italic font-body lowercase tracking-wide">{point.detail}</p>
                                        )}
                                    </div>
                                    <ChevronRight className={`w-4 h-4 transition-all duration-700 ${activePoint === idx ? 'text-[#C6A75E]' : 'text-[#7A7A7A] opacity-0 translate-x-4'}`} />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. ELITE TAB EXPERIENCE */}
            <section className="py-32 px-8 max-w-[1440px] mx-auto">
                <div className="flex flex-wrap bg-[#161618] border border-[#C6A75E]/20 mb-20">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 min-w-[160px] py-8 flex items-center justify-center gap-4 transition-all duration-700 border-r border-[#C6A75E]/10 last:border-r-0 ${activeTab === tab.id ? 'bg-[#C6A75E]/10 text-[#C6A75E]' : 'text-[#7A7A7A] hover:bg-white/5 hover:text-[#B5B5B5]'}`}
                        >
                            <span className="text-[10px] tracking-[3px] uppercase font-bold">{tab.label}</span>
                        </button>
                    ))}
                </div>

                <div className="min-h-[600px] bg-[#161618] border border-white/5 p-12 lg:p-20 rounded-3xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6 }}
                            className={`${technicalDetails[activeTab]?.pdf ? 'block' : 'grid grid-cols-1 lg:grid-cols-2 gap-20 items-start'}`}
                        >
                            {technicalDetails[activeTab]?.pdf ? (
                                <div className="w-full space-y-8">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-[1px] bg-[#C6A75E]" />
                                            <span className="text-[#C6A75E] tracking-[6px] text-[10px] font-bold uppercase">Official Layout Blueprint</span>
                                        </div>
                                        <a
                                            href={technicalDetails[activeTab]?.pdf}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-8 py-3 border border-[#C6A75E]/30 text-[#C6A75E] text-[9px] tracking-[3px] uppercase font-bold hover:bg-[#C6A75E] hover:text-black transition-all"
                                        >
                                            View Original
                                        </a>
                                    </div>
                                    <div className="w-full h-[1000px] rounded-2xl overflow-hidden border border-white/10 shadow-3xl bg-black">
                                        <iframe
                                            src={`${technicalDetails[activeTab]?.pdf}#toolbar=0&navpanes=0`}
                                            className="w-full h-full"
                                            title="Layout Plan"
                                        />
                                    </div>
                                </div>
                            ) : technicalDetails[activeTab]?.xlsx ? (
                                <div className="w-full space-y-12 py-12">
                                    <div className="flex flex-col items-center text-center space-y-8">
                                        <div className="w-24 h-24 rounded-2xl bg-[#C6A75E]/10 flex items-center justify-center text-[#C6A75E] border border-[#C6A75E]/20">
                                            <FileText className="w-10 h-10" />
                                        </div>
                                        <div className="space-y-4">
                                            <h3 className="text-3xl font-serif italic text-white">{technicalDetails[activeTab]?.title}</h3>
                                            <p className="text-[#B5B5B5] max-w-xl mx-auto font-light leading-relaxed">
                                                The detailed plot sizes and measurements are available in the official project spreadsheet.
                                                Download the file below to view the comprehensive Phase 1 layout details.
                                            </p>
                                        </div>
                                        <div className="flex flex-wrap justify-center gap-12 pt-8">
                                            {(technicalDetails[activeTab]?.list || []).map((item: string, idx: number) => (
                                                <div key={idx} className="flex items-center gap-3">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#C6A75E]" />
                                                    <span className="text-[10px] tracking-[2px] uppercase text-[#7A7A7A] font-bold">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <a
                                            href={technicalDetails[activeTab]?.xlsx}
                                            download
                                            className="mt-12 group flex items-center gap-6 bg-[#C6A75E] text-black px-12 py-6 text-[10px] tracking-[4px] uppercase font-black shadow-2xl hover:bg-[#E8D8A0] transition-all duration-500"
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

                                        {activeTab === 'wip' && (
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

                                        {(technicalDetails[activeTab]?.images || [
                                            { src: "https://images.unsplash.com/photo-1503387762-592dea58ef01?q=80&w=800", caption: "Architectural Vision", type: 'Images' },
                                            { src: "https://images.unsplash.com/photo-1541944743827-e04bb645d993?q=80&w=1080", caption: "Construction Update Video", type: 'Videos' }
                                        ]).filter((m: any) => mediaFilter === 'All' || m.type === mediaFilter || !m.type).map((img: any, idx: number) => (
                                            <motion.div
                                                key={idx}
                                                whileHover={{ scale: 1.02 }}
                                                className="relative aspect-video overflow-hidden border border-white/10 group rounded-xl shadow-2xl bg-black"
                                            >
                                                {img.type === 'Videos' ? (
                                                    <video
                                                        src={img.src}
                                                        className="w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0"
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
                                                    <img src={img.src} className="w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0" alt="Tech" />
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
                                                    <span className="text-[#C6A75E] text-[8px] tracking-[4px] uppercase font-bold border-l-2 border-[#C6A75E] pl-3">
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
                                                {technicalDetails[activeTab]?.title || "Project Feature"}
                                            </h3>
                                        </div>

                                        <ul className="grid grid-cols-1 gap-y-8">
                                            {(technicalDetails[activeTab]?.list || [
                                                "Premium international standards",
                                                "Architectural excellence in every detail",
                                                "Sustainable development practices",
                                                "State-of-the-art infrastructure"
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
                                            {activeTab === 'ebroucher' ? (
                                                <button className="group flex items-center gap-6 bg-[#C6A75E] text-black px-12 py-6 text-[10px] tracking-[4px] uppercase font-black hover:bg-[#E8D8A0] transition-all duration-500 shadow-2xl">
                                                    GET THE BROCHURE <FileText className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
                                                </button>
                                            ) : (
                                                <button className="group flex items-center gap-6 text-[#C6A75E] text-[10px] tracking-[5px] uppercase font-black border-b border-[#C6A75E]/0 hover:border-[#C6A75E]/40 pb-3 transition-all duration-500">
                                                    REQUEST DOCUMENTS <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-3" />
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





            {/* 7. READY TO EXPERIENCE CTA */}
            < section className="relative py-40 overflow-hidden group" >
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070"
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
                            Ready to experience {data.location}'s most prestigious {data.type.toLowerCase()}?
                        </h2>
                        <p className="text-[#C6A75E] text-lg tracking-[4px] uppercase font-bold">
                            Schedule a visit to our model {data.type.toLowerCase()}
                        </p>
                        <Link to="/#contact">
                            <button className="mt-10 px-12 py-5 border border-[#C6A75E] text-[#C6A75E] hover:bg-[#C6A75E] hover:text-black transition-all duration-500 text-[10px] tracking-[6px] uppercase font-black">
                                Contact Now
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section >

            {/* 8. FAQ SECTION */}
            < section className="relative py-40 bg-[#0B0B0D] overflow-hidden" >
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2070"
                        className="w-full h-full object-cover grayscale"
                        alt="FAQ BG"
                    />
                </div>

                <div className="max-w-[1440px] mx-auto px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <div className="space-y-6">
                            <span className="text-[#C6A75E] tracking-[8px] text-[10px] font-bold uppercase block">Information Hub</span>
                            <h2 className="text-6xl md:text-8xl text-white font-serif italic uppercase">FAQs</h2>
                            <div className="w-20 h-1 bg-[#C6A75E]" />
                        </div>

                        <div className="space-y-4 bg-black/60 backdrop-blur-xl p-8 lg:p-12 border border-white/5 rounded-3xl">
                            {(data.faqs || [
                                { q: "Is the project RERA registered?", a: "Yes, this is a fully approved project with RERA certification for absolute peace of mind." },
                                { q: "What options are available?", a: "We offer a variety of sizes and configurations tailored to premium lifestyles." },
                                { q: "What makes this project unique?", a: "Our projects integrate world-class amenities with sustainable design and prime locations." },
                                { q: "Is financing available?", a: "Yes, we have tie-ups with leading banks for easy loan facilities." }
                            ]).map((faq: any, idx: number) => (
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
            </section >
        </div >
    );
}
