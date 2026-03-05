import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, ChevronRight, Diamond, GraduationCap, Briefcase, Globe, Building2, HeartPulse, Construction, Shirt, ArrowUpRight, Search, MapPin, Map, LocateFixed, LayoutGrid, Hash, ArrowUpDown, RotateCcw } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// @ts-ignore
import navlogo from './figma/images/navlogo.png';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredPlot, setHoveredPlot] = useState<string | null>(null);
  const location = useLocation();
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedPincode, setSelectedPincode] = useState('');
  const [selectedSort, setSelectedSort] = useState('');

  const filterOptions = {
    states: ['Andhra Pradesh', 'Telangana', 'Karnataka'],
    districts: ['Visakhapatnam', 'Vizianagaram', 'Srikakulam', 'Hyderabad'],
    cities: ['Vizag City', 'Bheemili', 'Gajuwaka', 'Madhapur', 'Gachibowli'],
    types: ['Open Plots', 'Apartments', 'Villas', 'Duplex', 'Farm Lands'],
    pincodes: ['530001', '530017', '530045', '531162', '500081'],
    sorts: ['Price: Low to High', 'Price: High to Low']
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    {
      name: 'OPEN PLOTS',
      path: '/open-plots',
      dropdown: [
        { name: 'Astra Valley', path: '/project/astra-valley' },
        { name: 'Goutam Valley', path: '/project/goutam-valley' },
        { name: 'The Royal Estate', path: '/real-estate' }
      ]
    },
    { name: 'APARTMENTS', path: '/category/apartments' },
    { name: 'VILLAS', path: '/category/villas' },
    { name: 'INTERIORS', path: '/interiors' },
    { name: 'INDIVIDUAL HOUSES', path: '/category/duplex' },
    { name: 'FARM LANDS', path: '/category/farms' },
  ];

  const ecoSystemLinks = [
    { name: 'Tatito Edverse', path: '#', icon: <GraduationCap className="w-4 h-4" /> },
    { name: 'Tattio Career Hub', path: '#', icon: <Briefcase className="w-4 h-4" /> },
    { name: 'Tatito Nexus', path: '#', icon: <Globe className="w-4 h-4" /> },
    { name: 'Tattio Fashions', path: '#', icon: <Shirt className="w-4 h-4" /> },
    { name: 'Tatito Civic One', path: '#', icon: <Building2 className="w-4 h-4" /> },
    { name: 'Tattio Health+', path: '#', icon: <HeartPulse className="w-4 h-4" /> },
  ];

  const handleLinkClick = (path: string) => {
    setIsOpen(false);
    if (path.includes('#')) {
      const id = path.split('#')[1];
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 bg-white/[0.001] backdrop-blur-2xl border border-[#C6A75E]/40 rounded-none shadow-[0_15px_60px_rgba(0,0,0,0.3)]`}>
      <nav className="p-0 relative">
        <div className="flex">
          {/* DESKTOP LOGO COLUMN - Spans all 3 rows vertically */}
          <div className="hidden lg:flex items-center justify-center px-6 border-r border-[#C6A75E]/20 shrink-0 relative group bg-white/[0.01]">
            <div className="absolute -inset-4 bg-[#C6A75E]/5 scale-0 group-hover:scale-100 transition-transform duration-1000 rounded-full blur-[40px]" />
            <Link to="/" className="relative z-10 block">
              <img
                src={navlogo}
                alt="Tatito Logo"
                className="h-36 w-auto brightness-110 contrast-125 object-contain transition-all duration-1000 hover:scale-105 drop-shadow-[0_0_15px_rgba(198,167,94,0.2)]"
              />
            </Link>
          </div>

          {/* RIGHT CONTENT COLUMN - Houses the 3 rows stacked vertically */}
          <div className="flex-1 flex flex-col min-w-0">

            {/* ROW 1: MAIN NAVIGATION */}
            <div className={`transition-all duration-700 flex items-center justify-between px-4 lg:px-8 py-2 md:py-4 bg-white/[0.005]`}>
              {/* Mobile/Tablet Logo Visibility */}
              <div className="lg:hidden flex items-center gap-2">
                <Link to="/" className="flex items-center gap-2 group shrink-0">
                  <img src={navlogo} alt="Tatito Logo" className="h-8 md:h-12 w-auto brightness-110 contrast-125" />
                </Link>
              </div>

              {/* Desktop Nav Links & Invest Button */}
              <div className="hidden lg:flex flex-1 items-center justify-between ml-4">
                <div className="flex-1 flex items-center justify-center gap-2 xl:gap-6">
                  {navLinks.map((link) => (
                    <div key={link.name} className="relative group/nav-item">
                      {link.dropdown ? (
                        <div
                          className="flex items-center gap-1.5 cursor-pointer py-2"
                          onMouseEnter={() => setHoveredPlot(link.name)}
                          onMouseLeave={() => setHoveredPlot(null)}
                        >
                          <Link to={link.path || '#'} onClick={() => link.path && handleLinkClick(link.path)} className="text-[9px] xl:text-[11px] tracking-[2px] xl:tracking-[3px] font-black text-[#F5F5F5] group-hover/nav-item:text-[#C6A75E] transition-all duration-500 uppercase whitespace-nowrap">
                            {link.name}
                          </Link>
                          <ChevronDown className="w-3 h-3 text-[#C6A75E]/60 transition-transform duration-500 group-hover/nav-item:rotate-180" />

                          <AnimatePresence>
                            {hoveredPlot === link.name && (
                              <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-[150]"
                              >
                                <div className="bg-[#0B0B0D]/98 border border-white/10 p-5 min-w-[220px] rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,1)] backdrop-blur-3xl overflow-hidden">
                                  <div className="space-y-4">
                                    {link.dropdown.map((item: any) => (
                                      <Link
                                        key={item.name}
                                        to={item.path}
                                        className="flex items-center gap-4 text-[10px] tracking-[2px] text-[#B5B5B5] hover:text-[#C6A75E] transition-all duration-500 hover:translate-x-2 group/item"
                                      >
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#C6A75E]/20 group-hover/item:bg-[#C6A75E]" />
                                        {item.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link to={link.path} onClick={() => handleLinkClick(link.path)} className="relative group/link flex flex-col items-center py-2">
                          <span className="text-[9px] xl:text-[11px] tracking-[2px] xl:tracking-[3px] font-black text-[#F5F5F5] group-hover/link:text-[#C6A75E] transition-all duration-700 uppercase whitespace-nowrap">
                            {link.name}
                          </span>
                          <div className="w-0 h-[2px] bg-[#C6A75E] absolute bottom-0 transition-all duration-700 group-hover/link:w-full" />
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                <Link to="/invest" className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#C6A75E] to-[#E8D8A0] text-black text-[10px] tracking-[3px] font-black hover:scale-105 transition-all duration-700 shadow-[0_10px_30px_rgba(198,167,94,0.3)] rounded-full group/invest whitespace-nowrap ml-4">
                  INVEST
                </Link>
              </div>

              {/* Mobile Menu Button - Accessible on Tablet too */}
              <div className="flex items-center gap-4 lg:hidden">
                <button
                  className="text-[#C6A75E] border border-[#C6A75E]/20 p-2 md:p-3 rounded-xl bg-white/[0.03] hover:bg-[#C6A75E]/10 transition-all"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Toggle navigation"
                >
                  {isOpen ? <X className="w-5 h-5 md:w-6 md:h-6" /> : <Menu className="w-5 h-5 md:w-6 md:h-6" />}
                </button>
              </div>
            </div>

            {/* ROW 2: ECO-SYSTEM SHORTCUTS - Responsive horizontal scroll on small devices */}
            <div className="py-2.5 border-t border-white/5 bg-white/[0.005] overflow-x-auto no-scrollbar">
              <div className="flex justify-start md:justify-center gap-2 md:gap-3 px-4 md:px-6 min-w-max md:min-w-0 mx-auto">
                {ecoSystemLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="flex items-center gap-1.5 md:gap-2 px-2.5 md:px-3.5 py-1.5 bg-white/[0.01] border border-white/5 rounded-full text-[8px] md:text-[10px] tracking-[1px] md:tracking-[2px] font-bold text-[#B5B5B5]/60 hover:text-[#C6A75E] hover:border-[#C6A75E]/30 hover:bg-white/[0.03] transition-all duration-500 uppercase whitespace-nowrap group"
                  >
                    <span className="text-[#C6A75E]/50 group-hover:text-[#C6A75E] transition-colors scale-75 md:scale-90">{link.icon}</span>
                    <span className="hidden sm:inline">{link.name}</span>
                    <span className="sm:hidden">{link.name.split(' ').pop()}</span>
                    <ArrowUpRight className="w-2 md:w-2.5 h-2 md:h-2.5 opacity-10 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>

            {/* ROW 3: SEARCH FILTERS */}
            <div className={`hidden lg:block bg-white/[0.005] transition-all duration-700 py-2.5 border-t border-white/5`}>
              <div className="w-full px-6 flex items-center justify-center gap-1.5">
                <FilterSelect label="State" icon={<MapPin className="w-3 h-3" />} options={filterOptions.states} value={selectedState} onChange={setSelectedState} />
                <FilterSelect label="District" icon={<Map className="w-3 h-3" />} options={filterOptions.districts} value={selectedDistrict} onChange={setSelectedDistrict} />
                <FilterSelect label="City" icon={<LocateFixed className="w-3 h-3" />} options={filterOptions.cities} value={selectedCity} onChange={setSelectedCity} />
                <PincodeSelect icon={<Hash className="w-3 h-3" />} options={filterOptions.pincodes} value={selectedPincode} onChange={setSelectedPincode} />
                <FilterSelect label="Type" icon={<LayoutGrid className="w-3 h-3" />} options={filterOptions.types} value={selectedType} onChange={setSelectedType} />
                <FilterSelect label="Sort" icon={<ArrowUpDown className="w-3 h-3" />} options={filterOptions.sorts} value={selectedSort} onChange={setSelectedSort} />

                <div className="flex-1 max-w-[140px] relative group transition-all duration-700">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-[#C6A75E]/50 z-10" />
                  <input
                    type="text"
                    placeholder="SEARCH..."
                    className="w-full bg-white/[0.01] border border-white/5 rounded-xl py-2.5 pl-10 pr-4 text-[10px] tracking-[2px] text-[#F5F5F5]/80 focus:outline-none focus:border-[#C6A75E]/30 focus:bg-white/[0.03] transition-all duration-500 placeholder:text-white/5 uppercase font-bold"
                  />
                </div>

                <button
                  onClick={() => {
                    setSelectedState('');
                    setSelectedDistrict('');
                    setSelectedCity('');
                    setSelectedPincode('');
                    setSelectedType('');
                    setSelectedSort('');
                  }}
                  className="p-2 border border-white/5 rounded-xl text-[#7A7A7A]/40 hover:text-[#C6A75E] hover:border-[#C6A75E]/20 hover:bg-white/[0.02] transition-all group bg-white/[0.005]"
                  title="Reset Filters"
                >
                  <RotateCcw className="w-3 h-3 group-hover:rotate-[-180deg] transition-transform duration-700" />
                </button>

                <button className="flex items-center gap-2.5 px-5 py-2.5 bg-[#C6A75E] text-black text-[10px] tracking-[2px] font-black rounded-xl hover:scale-105 transition-all duration-500 shadow-md uppercase">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-[#0B0B0D] z-[120] overflow-y-auto"
          >
            <div className="min-h-screen flex flex-col p-8 pt-24 gap-12">
              <button className="absolute top-8 right-8 text-[#C6A75E] p-4 bg-white/[0.05] rounded-xl" onClick={() => setIsOpen(false)}>
                <X className="w-8 h-8" />
              </button>

              <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center justify-center mb-4">
                <img src={navlogo} alt="Logo" className="h-16 w-auto" />
              </Link>

              <div className="w-full max-w-md mx-auto relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C6A75E]" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-[#161618] border border-[#C6A75E]/30 rounded-2xl py-5 pl-16 pr-8 text-[12px] tracking-[3px] text-[#F5F5F5] focus:outline-none focus:border-[#C6A75E] transition-all duration-500 placeholder:text-[#555] uppercase font-bold"
                />
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + (i * 0.05) }}
                    className="border-b border-white/5 pb-4"
                  >
                    <Link
                      to={link.path || '#'}
                      onClick={() => handleLinkClick(link.path || '#')}
                      className="text-2xl text-[#F5F5F5] hover:text-[#C6A75E] transition-all duration-500 font-serif italic tracking-widest flex items-center justify-between group"
                    >
                      {link.name}
                      <ChevronRight className="w-5 h-5 text-[#C6A75E]/20 group-hover:text-[#C6A75E] transition-all" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                {ecoSystemLinks.map((link, i) => (
                  <Link
                    key={i}
                    to={link.path}
                    className="flex items-center gap-3 p-4 bg-white/[0.02] border border-white/5 rounded-2xl text-[10px] tracking-[2px] font-bold text-[#B5B5B5] hover:text-[#C6A75E] transition-all"
                  >
                    <span className="text-[#C6A75E]/40">{link.icon}</span>
                    <span className="truncate">{link.name.split(' ').pop()}</span>
                  </Link>
                ))}
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="mt-8 w-full py-6 bg-gradient-to-r from-[#C6A75E] to-[#E8D8A0] text-black text-sm tracking-[6px] font-black uppercase rounded-2xl shadow-2xl"
              >
                INVEST NOW
              </button>

              <div className="text-center py-8">
                <p className="text-[10px] tracking-[4px] text-[#7A7A7A] uppercase">© 2024 Tatito Group</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FilterSelect({ label, icon, options, value, onChange }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="relative group/filter" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => { setIsOpen(false); setSearchTerm(''); }}>
      <div className={`flex items-center gap-2 px-3 py-2.5 bg-white/[0.01] border border-white/5 rounded-xl cursor-pointer hover:border-[#C6A75E]/30 transition-all duration-500 min-w-[100px] shadow-sm ${isOpen ? 'border-[#C6A75E]/20 bg-white/[0.03]' : ''}`}>
        <div className="text-[#C6A75E] opacity-50 scale-100">
          {icon}
        </div>
        <span className="text-[10px] text-[#F5F5F5]/70 tracking-[2px] uppercase font-bold truncate">
          {value || label}
        </span>
        <ChevronDown className={`w-2.5 h-2.5 text-[#C6A75E]/40 ml-auto transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-3 w-[200px] z-[200] perspective-1000"
          >
            <div className="bg-[#0B0B0D]/95 border border-white/10 rounded-2xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.9)] backdrop-blur-3xl p-2">
              <div className="relative mb-2 px-2 pt-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 text-[#C6A75E]/40" />
                <input
                  type="text"
                  placeholder={`Search ${label}...`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/5 rounded-lg py-1.5 pl-8 pr-3 text-[8px] tracking-[1px] text-[#F5F5F5] focus:outline-none focus:border-[#C6A75E]/20"
                />
              </div>
              <div className="max-h-[250px] overflow-y-auto custom-scrollbar">
                {options.filter((opt: string) => opt.toLowerCase().includes(searchTerm.toLowerCase())).map((opt: string) => (
                  <div
                    key={opt}
                    onClick={() => { onChange(opt); setIsOpen(false); setSearchTerm(''); }}
                    className={`px-4 py-2.5 text-[9px] tracking-[2px] font-bold uppercase cursor-pointer rounded-lg transition-all duration-300 flex items-center justify-between group/item ${value === opt ? 'bg-[#C6A75E] text-black' : 'text-[#B5B5B5] hover:text-[#C6A75E] hover:bg-white/5'}`}
                  >
                    {opt}
                    {value === opt && <div className="w-1 h-1 rounded-full bg-black shadow-sm" />}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
// Custom Pincode Select with Search Input logic
function PincodeSelect({ icon, options, value, onChange }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchPin, setSearchPin] = useState('');

  return (
    <div className="relative group/filter" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => { setIsOpen(false); setSearchPin(''); }}>
      <div className={`flex items-center gap-2 px-3 py-2.5 bg-white/[0.01] border border-white/5 rounded-xl cursor-pointer hover:border-[#C6A75E]/30 transition-all duration-500 min-w-[100px] shadow-sm ${isOpen ? 'border-[#C6A75E]/20 bg-white/[0.03]' : ''}`}>
        <div className="text-[#C6A75E] opacity-50 scale-100">
          {icon}
        </div>
        <span className="text-[10px] text-[#F5F5F5]/70 tracking-[2px] uppercase font-bold truncate">
          {value || 'PINCODE'}
        </span>
        <ChevronDown className={`w-2.5 h-2.5 text-[#C6A75E]/40 ml-auto transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-3 w-[220px] z-[200] perspective-1000"
          >
            <div className="bg-[#111113]/90 border border-white/10 rounded-2xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.9)] backdrop-blur-3xl p-4">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-[#C6A75E]/50" />
                <input
                  type="text"
                  placeholder="Enter Pincode..."
                  value={searchPin}
                  onChange={(e) => setSearchPin(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      onChange(searchPin);
                      setIsOpen(false);
                      setSearchPin('');
                    }
                  }}
                  className="w-full bg-white/[0.03] border border-white/5 rounded-lg py-2 pl-9 pr-4 text-[9px] tracking-[2px] text-white focus:outline-none focus:border-[#C6A75E]/40"
                />
              </div>

              <div className="max-h-[200px] overflow-y-auto custom-scrollbar space-y-1">
                {options.filter((opt: string) => opt.includes(searchPin)).map((opt: string) => (
                  <div
                    key={opt}
                    onClick={() => { onChange(opt); setIsOpen(false); setSearchPin(''); }}
                    className={`px-4 py-2.5 text-[9px] tracking-[2px] font-bold uppercase cursor-pointer rounded-lg transition-all duration-300 flex items-center justify-between group/item ${value === opt ? 'bg-[#C6A75E] text-black' : 'text-[#B5B5B5] hover:text-[#C6A75E] hover:bg-white/5'}`}
                  >
                    {opt}
                    {value === opt && <div className="w-1 h-1 rounded-full bg-black shadow-sm" />}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
