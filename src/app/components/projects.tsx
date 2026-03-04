import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router-dom';
import { Ruler, MapPin, DollarSign, ArrowRight, Search, Filter, ChevronDown, X, Globe } from 'lucide-react';
import { ArchitecturalCurves } from './ui/ArchitecturalCurves';

const projects = [
  {
    id: 1,
    name: 'Astra Valley',
    type: 'Open Plots',
    location: { state: 'Andhra Pradesh', district: 'Visakhapatnam', city: 'Madugula' },
    image: 'https://images.unsplash.com/photo-1628592102171-0775d2ff0036?q=80&w=2070',
    link: '/project/astra-valley',
    sqft: '2,500',
    price: 650000, // Based on priceDisplay if needed, but keeping existing logic
    priceDisplay: '6.5L*'
  },
  {
    id: 2,
    name: 'Goutam Valley',
    type: 'Luxury Plots',
    location: { state: 'Andhra Pradesh', district: 'Visakhapatnam', city: 'Bheemili' },
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013',
    link: '/project/goutam-valley',
    sqft: '3,800',
    price: 25000000,
    priceDisplay: '2.5Cr'
  },
  {
    id: 3,
    name: 'The Royal Estate',
    type: 'Apartments',
    location: { state: 'Andhra Pradesh', district: 'Visakhapatnam', city: 'Siripuram' },
    image: 'https://images.unsplash.com/photo-1762245464399-2db6f46c580a?q=80&w=1080',
    link: '#',
    sqft: '5,000',
    price: 50000000,
    priceDisplay: '5.0Cr'
  },
  {
    id: 4,
    name: 'Green View Farms',
    type: 'Farms',
    location: { state: 'Andhra Pradesh', district: 'Vizianagaram', city: 'Chipurupalle' },
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000',
    link: '#',
    sqft: '10,000',
    price: 8000000,
    priceDisplay: '80L'
  },
  {
    id: 5,
    name: 'Skyline Duplex',
    type: 'Duplex',
    location: { state: 'Telangana', district: 'Hyderabad', city: 'Madhapur' },
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070',
    link: '#',
    sqft: '3,200',
    price: 18000000,
    priceDisplay: '1.8Cr'
  },
  {
    id: 6,
    name: 'Imperial Villas',
    type: 'Villas',
    location: { state: 'Telangana', district: 'Hyderabad', city: 'Gachibowli' },
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2070',
    link: '#',
    sqft: '4,500',
    price: 35000000,
    priceDisplay: '3.5Cr'
  }
];

const categories = ['All', 'Astra Valley', 'Goutam Valley', 'Apartments', 'Open Plots (Royal Estates)', 'Villas', 'Duplex', 'Farms'];

const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under 1Cr', min: 0, max: 10000000 },
  { label: '1Cr - 2.5Cr', min: 10000000, max: 25000000 },
  { label: 'Above 2.5Cr', min: 25000000, max: Infinity }
];

export function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Hierarchical Location State
  const [selectedState, setSelectedState] = useState('All States');
  const [selectedDistrict, setSelectedDistrict] = useState('All Districts');
  const [selectedCity, setSelectedCity] = useState('All Cities');

  const [activePriceRange, setActivePriceRange] = useState(priceRanges[0]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Derive Location Options based on selection
  const availableStates = useMemo(() => ['All States', ...new Set(projects.map(p => p.location.state))], []);

  const availableDistricts = useMemo(() => {
    const filtered = projects.filter(p => selectedState === 'All States' || p.location.state === selectedState);
    return ['All Districts', ...new Set(filtered.map(p => p.location.district))];
  }, [selectedState]);

  const availableCities = useMemo(() => {
    const filtered = projects.filter(p =>
      (selectedState === 'All States' || p.location.state === selectedState) &&
      (selectedDistrict === 'All Districts' || p.location.district === selectedDistrict)
    );
    return ['All Cities', ...new Set(filtered.map(p => p.location.city))];
  }, [selectedState, selectedDistrict]);

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.city.toLowerCase().includes(searchQuery.toLowerCase());

      let matchesCategory = false;
      if (activeCategory === 'All') {
        matchesCategory = true;
      } else if (activeCategory === 'Astra Valley') {
        matchesCategory = project.name === 'Astra Valley';
      } else if (activeCategory === 'Goutam Valley') {
        matchesCategory = project.name === 'Goutam Valley';
      } else if (activeCategory === 'Open Plots (Royal Estates)') {
        matchesCategory = project.name === 'The Royal Estate' || project.type === 'Luxury Plots';
      } else {
        matchesCategory = project.type === activeCategory;
      }

      const matchesState = selectedState === 'All States' || project.location.state === selectedState;
      const matchesDistrict = selectedDistrict === 'All Districts' || project.location.district === selectedDistrict;
      const matchesCity = selectedCity === 'All Cities' || project.location.city === selectedCity;

      const matchesPrice = project.price >= activePriceRange.min && project.price <= activePriceRange.max;

      return matchesSearch && matchesCategory && matchesState && matchesDistrict && matchesCity && matchesPrice;
    });
  }, [searchQuery, activeCategory, selectedState, selectedDistrict, selectedCity, activePriceRange]);

  return (
    <section id="projects" className="py-32 px-8 relative overflow-hidden bg-[#0B0B0D]">
      {/* 0. OUTER GOLDEN BORDER ENVELOPE */}
      <div className="absolute inset-4 border border-[#C6A75E]/10 rounded-[3rem] pointer-events-none z-[1]" />

      {/* Architectural Accent Curves */}
      <ArchitecturalCurves className="rotate-90" opacity={0.06} />

      {/* Underlying Section Title Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-bold text-[#C6A75E]/[0.03] select-none pointer-events-none uppercase" style={{ fontFamily: "'Playfair Display', serif" }}>
        Projects
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10 bg-[radial-gradient(circle_at_center,rgba(198,167,94,0.08)_0%,transparent_70%)] rounded-[3rem] p-12">

        {/* Section Heading - Royal Discipline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#C6A75E] tracking-[6px] text-xs font-bold uppercase mb-4 block">Our Portfolio</span>
          <h2 className="text-4xl md:text-5xl mb-6 text-[#C6A75E]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
            Signature Estates
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent mx-auto" />
        </motion.div>

        {/* 1. LUXURY FILTER SYSTEM */}
        <div className="mb-16 space-y-8">
          {/* Search & Main Category Filters */}
          <div className="flex flex-col xl:flex-row gap-8 items-center justify-between">
            {/* Category Pill Filters */}
            <div className="flex flex-wrap justify-center gap-4 order-2 xl:order-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-[10px] tracking-[2px] font-bold uppercase transition-all duration-500 border ${activeCategory === cat
                    ? 'bg-[#C6A75E] text-black border-[#C6A75E]'
                    : 'border-[#C6A75E]/20 text-[#7A7A7A] hover:border-[#C6A75E]/50 hover:text-[#C6A75E]'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full xl:max-w-xs order-1 xl:order-2 group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C6A75E] transition-transform duration-500 group-focus-within:scale-110" />
              <input
                type="text"
                placeholder="Search by name or city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#161618]/60 border border-[#C6A75E]/20 rounded-full py-4 pl-14 pr-8 text-[11px] tracking-[2px] text-[#F5F5F5] focus:outline-none focus:border-[#C6A75E] transition-all duration-700 placeholder:text-[#333] uppercase font-bold"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-5 top-1/2 -translate-y-1/2 text-[#7A7A7A] hover:text-[#C6A75E]">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Location & Price Dropdown Filters */}
          <div className="flex flex-wrap justify-center gap-6">
            {/* State Filter */}
            <div className="relative group">
              <div className="flex items-center gap-3 px-8 py-3 bg-[#161618] border border-[#C6A75E]/20 rounded-xl cursor-pointer hover:border-[#C6A75E]/40 transition-all">
                <Globe className="w-4 h-4 text-[#C6A75E]" />
                <span className="text-[10px] tracking-[3px] uppercase font-bold text-[#B5B5B5]">{selectedState}</span>
                <ChevronDown className="w-3 h-3 text-[#C6A75E]" />
              </div>
              <div className="absolute top-full left-0 mt-2 w-full min-w-[200px] bg-[#161618] border border-[#C6A75E]/20 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 z-[100] shadow-2xl p-4 space-y-2">
                {availableStates.map(state => (
                  <button
                    key={state}
                    onClick={() => {
                      setSelectedState(state);
                      setSelectedDistrict('All Districts');
                      setSelectedCity('All Cities');
                    }}
                    className={`w-full text-left px-4 py-2 rounded-lg text-[9px] tracking-[2px] uppercase font-bold transition-colors ${selectedState === state ? 'bg-[#C6A75E] text-black' : 'text-[#7A7A7A] hover:bg-[#C6A75E]/10 hover:text-[#C6A75E]'}`}
                  >
                    {state}
                  </button>
                ))}
              </div>
            </div>

            {/* District Filter */}
            <div className="relative group">
              <div className="flex items-center gap-3 px-8 py-3 bg-[#161618] border border-[#C6A75E]/20 rounded-xl cursor-pointer hover:border-[#C6A75E]/40 transition-all">
                <MapPin className="w-4 h-4 text-[#C6A75E]" />
                <span className="text-[10px] tracking-[3px] uppercase font-bold text-[#B5B5B5]">{selectedDistrict}</span>
                <ChevronDown className="w-3 h-3 text-[#C6A75E]" />
              </div>
              <div className="absolute top-full left-0 mt-2 w-full min-w-[200px] bg-[#161618] border border-[#C6A75E]/20 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 z-[100] shadow-2xl p-4 space-y-2">
                {availableDistricts.map(dist => (
                  <button
                    key={dist}
                    onClick={() => {
                      setSelectedDistrict(dist);
                      setSelectedCity('All Cities');
                    }}
                    className={`w-full text-left px-4 py-2 rounded-lg text-[9px] tracking-[2px] uppercase font-bold transition-colors ${selectedDistrict === dist ? 'bg-[#C6A75E] text-black' : 'text-[#7A7A7A] hover:bg-[#C6A75E]/10 hover:text-[#C6A75E]'}`}
                  >
                    {dist}
                  </button>
                ))}
              </div>
            </div>

            {/* City Filter */}
            <div className="relative group">
              <div className="flex items-center gap-3 px-8 py-3 bg-[#161618] border border-[#C6A75E]/20 rounded-xl cursor-pointer hover:border-[#C6A75E]/40 transition-all">
                <MapPin className="w-4 h-4 text-[#C6A75E]" />
                <span className="text-[10px] tracking-[3px] uppercase font-bold text-[#B5B5B5]">{selectedCity}</span>
                <ChevronDown className="w-3 h-3 text-[#C6A75E]" />
              </div>
              <div className="absolute top-full left-0 mt-2 w-full min-w-[200px] bg-[#161618] border border-[#C6A75E]/20 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 z-[100] shadow-2xl p-4 space-y-2">
                {availableCities.map(city => (
                  <button
                    key={city}
                    onClick={() => setSelectedCity(city)}
                    className={`w-full text-left px-4 py-2 rounded-lg text-[9px] tracking-[2px] uppercase font-bold transition-colors ${selectedCity === city ? 'bg-[#C6A75E] text-black' : 'text-[#7A7A7A] hover:bg-[#C6A75E]/10 hover:text-[#C6A75E]'}`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="relative group">
              <div className="flex items-center gap-3 px-8 py-3 bg-[#161618] border border-[#C6A75E]/20 rounded-xl cursor-pointer hover:border-[#C6A75E]/40 transition-all">
                <DollarSign className="w-4 h-4 text-[#C6A75E]" />
                <span className="text-[10px] tracking-[3px] uppercase font-bold text-[#B5B5B5]">{activePriceRange.label}</span>
                <ChevronDown className="w-3 h-3 text-[#C6A75E]" />
              </div>
              <div className="absolute top-full right-0 mt-2 w-full min-w-[200px] bg-[#161618] border border-[#C6A75E]/20 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 z-[100] shadow-2xl p-4 space-y-2">
                {priceRanges.map(range => (
                  <button
                    key={range.label}
                    onClick={() => setActivePriceRange(range)}
                    className={`w-full text-left px-4 py-2 rounded-lg text-[9px] tracking-[2px] uppercase font-bold transition-colors ${activePriceRange.label === range.label ? 'bg-[#C6A75E] text-black' : 'text-[#7A7A7A] hover:bg-[#C6A75E]/10 hover:text-[#C6A75E]'}`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Investment-Grade Project Cards Grid */}
        <AnimatePresence mode='popLayout'>
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link
                  to={project.link}
                  className="group relative block bg-[#161618] border border-[#C6A75E]/30 p-4 transition-all duration-700 hover:border-[#C6A75E] hover:shadow-[0_0_40px_rgba(198,167,94,0.25)] hover:-translate-y-2 rounded-[2rem] overflow-hidden"
                >
                  {/* Card Media */}
                  <div className="relative h-[440px] overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                    />

                    {/* Category Overlay */}
                    <div className="absolute top-6 left-6 z-20">
                      <span className="px-4 py-1.5 bg-black/60 backdrop-blur-md border border-[#C6A75E]/30 text-[#C6A75E] text-[9px] tracking-[3px] uppercase font-bold">
                        {project.type}
                      </span>
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/60 to-transparent z-10" />

                    {/* Price Badge */}
                    <div className="absolute bottom-6 right-6 z-20">
                      <span className="px-5 py-2 bg-[#C6A75E] text-black text-[12px] tracking-[2px] font-black shadow-xl">
                        {project.priceDisplay}
                      </span>
                    </div>
                  </div>

                  {/* Content Panel */}
                  <div className="pt-8 pb-4 px-4">
                    <h3 className="text-3xl mb-4 text-[#F5F5F5] group-hover:text-[#C6A75E] transition-colors duration-500 font-medium" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {project.name}
                    </h3>

                    {/* Location Detail */}
                    <div className="flex items-center gap-6 text-[#7A7A7A] mb-8">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#C6A75E]" />
                        <span className="text-[10px] tracking-[2px] uppercase font-medium">
                          {project.location.city}, {project.location.district}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Ruler className="w-3.5 h-3.5 text-[#C6A75E]" />
                        <span className="text-[10px] tracking-[2px] uppercase font-medium">{project.sqft} SQ FT</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between border-t border-white/5 pt-6">
                      <span className="text-[9px] tracking-[4px] font-bold text-[#F5F5F5] group-hover:text-[#C6A75E] transition-all duration-500">
                        ANALYZE INVESTMENT
                      </span>
                      <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#C6A75E] transition-all duration-500">
                        <ArrowRight className="w-4 h-4 text-[#7A7A7A] group-hover:text-[#C6A75E] transition-all duration-500" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="py-40 text-center">
            <h3 className="text-2xl text-[#C6A75E] font-serif mb-4">No Matching Estates</h3>
            <p className="text-[#7A7A7A] text-sm uppercase tracking-[4px]">Adjust your filters to refine your search</p>
          </div>
        )}

        {/* Global Action CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <button className="px-16 py-5 border border-[#C6A75E]/30 text-[#C6A75E] font-bold tracking-[6px] text-[10px] transition-all duration-500 hover:bg-[#C6A75E] hover:text-black uppercase">
            EXPLORE FULL CINEMATIC ARCHIVE
          </button>
        </motion.div>
      </div>
    </section>
  );
}
