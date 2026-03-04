import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Diamond, GraduationCap, Briefcase, Globe, Building2, HeartPulse, Construction, Shirt, ArrowUpRight, Search, MapPin, Map, LocateFixed, LayoutGrid } from 'lucide-react';
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

  const filterOptions = {
    states: ['Andhra Pradesh', 'Telangana', 'Karnataka'],
    districts: ['Visakhapatnam', 'Vizianagaram', 'Srikakulam', 'Hyderabad'],
    cities: ['Vizag City', 'Bheemili', 'Gajuwaka', 'Madhapur', 'Gachibowli'],
    types: ['Open Plots', 'Apartments', 'Villas', 'Duplex', 'Farm Lands']
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
      dropdown: [
        {
          name: 'VMRDA Approved',
          items: [
            { name: 'Astra Valley', path: '/project/astra-valley' },
            { name: 'Goutam Valley', path: '/project/goutam-valley' }
          ]
        },
        {
          name: 'Gram Panchayat',
          items: [
            { name: 'The Royal Estate', path: '/real-estate' }
          ]
        }
      ]
    },
    { name: 'APARTMENTS', path: '/category/apartments' },
    { name: 'VILLAS', path: '/category/villas' },
    { name: 'DUPLEX', path: '/category/duplex' },
    { name: 'FARM LANDS', path: '/category/farms' },
    // { name: 'CONTACT', path: '/#contact' }
  ];

  const ecoSystemLinks = [
    { name: 'Tatito Edverse', path: '#', icon: <GraduationCap className="w-4 h-4" /> },
    { name: 'Tattio Fashions', path: '#', icon: <Shirt className="w-4 h-4" /> },
    { name: 'Tattio Career Hub', path: '#', icon: <Briefcase className="w-4 h-4" /> },
    { name: 'Tatito Nexus', path: '#', icon: <Globe className="w-4 h-4" /> },
    { name: 'Tatito Civic One', path: '#', icon: <Building2 className="w-4 h-4" /> },
    { name: 'Tattio Health+', path: '#', icon: <HeartPulse className="w-4 h-4" /> },
    // { name: 'Tatito Developer & Promoter', path: '#', icon: <Construction className="w-4 h-4" /> }
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
    <div className={`fixed top-4 left-4 right-4 z-[100] transition-all duration-700 bg-[#111113]/85 backdrop-blur-3xl border-2 border-[#C6A75E]/60 rounded-[32px] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.6)] ${isScrolled ? 'max-w-[1400px] mx-auto' : ''}`}>
      <nav className="p-1">
        {/* 1. MAIN NAVIGATION ROW */}
        <div className={`transition-all duration-700 flex items-center justify-between px-10 ${isScrolled ? 'py-1' : 'py-2'}`}>
          <Link to="/" className="flex items-center gap-4 group shrink-0">
            <div className="relative">
              <div className="absolute -inset-2 bg-[#C6A75E]/10 scale-0 group-hover:scale-100 transition-transform duration-1000 rounded-full blur-xl" />
              <img src={navlogo} alt="Tatito Logo" className={`${isScrolled ? 'h-12' : 'h-18'} w-auto relative z-10 brightness-110 contrast-125 object-contain transition-all duration-700`} />
            </div>
          </Link>

          <div className="hidden xl:flex items-center gap-10">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <div
                    className="flex items-center gap-2 cursor-pointer"
                    onMouseEnter={() => setHoveredPlot(link.name)}
                    onMouseLeave={() => setHoveredPlot(null)}
                  >
                    <span className="text-[11px] tracking-[3px] font-black text-[#F5F5F5] group-hover:text-[#C6A75E] transition-all duration-500 uppercase whitespace-nowrap">
                      {link.name}
                    </span>
                    <ChevronDown className="w-2.5 h-2.5 text-[#C6A75E] transition-transform duration-500 group-hover:rotate-180" />

                    <AnimatePresence>
                      {hoveredPlot === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-6 z-[150]"
                        >
                          <div className="bg-[#161618] border border-[#C6A75E]/30 p-8 min-w-[300px] rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.9)] backdrop-blur-2xl">
                            <div className="space-y-8">
                              {link.dropdown.map((sub) => (
                                <div key={sub.name} className="space-y-4">
                                  <span className="text-[9px] tracking-[3px] uppercase text-[#C6A75E] font-bold opacity-80">{sub.name}</span>
                                  <div className="pl-4 space-y-3 border-l border-[#C6A75E]/15">
                                    {sub.items.map((item) => (
                                      <Link key={item.name} to={item.path} className="flex items-center gap-3 text-[10px] tracking-[1px] text-[#B5B5B5] hover:text-[#C6A75E] transition-all duration-500 hover:translate-x-2">
                                        <div className="w-1 h-1 rounded-full bg-[#C6A75E]/30" />
                                        {item.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link to={link.path} onClick={() => handleLinkClick(link.path)} className="relative group/link flex flex-col items-center">
                    <span className="text-[11px] tracking-[3px] font-black text-[#F5F5F5] group-hover/link:text-[#C6A75E] transition-all duration-700 uppercase whitespace-nowrap">
                      {link.name}
                    </span>
                    <div className="w-0 h-[2px] bg-[#C6A75E] mt-0.5 transition-all duration-700 group-hover/link:w-full" />
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center relative group max-w-[160px] transition-all duration-700">
              <Search className="absolute left-4 w-3.5 h-3.5 text-[#C6A75E] z-10" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-white/[0.03] border border-white/10 rounded-full py-2.5 pl-11 pr-6 text-[9px] tracking-[2px] text-[#F5F5F5] focus:outline-none focus:border-[#C6A75E]/40 focus:bg-black/40 transition-all duration-500 placeholder:text-white/20 uppercase font-bold"
              />
            </div>

            <Link to="/invest" className="hidden lg:flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-[#C6A75E] to-[#E8D8A0] text-black text-[10px] tracking-[4px] font-black hover:scale-105 transition-all duration-700 shadow-xl rounded-full group/invest whitespace-nowrap">
              INVEST
            </Link>

            <button className="xl:hidden text-[#C6A75E] border border-[#C6A75E]/20 p-2.5 rounded-xl" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* 2. ECO-SYSTEM NAVIGATION ROW */}
        <div className="border-t border-white/5 py-1.5 bg-white/[0.01]">
          <div className="flex flex-wrap justify-center gap-2 px-6">
            {ecoSystemLinks.map((link) => (
              <Link key={link.name} to={link.path} className="flex items-center gap-2 px-3 py-1 bg-black/20 border border-white/10 rounded-full text-[8px] tracking-[2px] font-bold text-[#B5B5B5]/60 hover:text-[#C6A75E] hover:border-[#C6A75E]/30 transition-all duration-500 uppercase whitespace-nowrap">
                <span className="text-[#C6A75E]/60 scale-75">{link.icon}</span>
                {link.name}
                <ArrowUpRight className="w-2 h-2 opacity-20" />
              </Link>
            ))}
          </div>
        </div>

        {/* 3. CLEAN FILTERS ROW */}
        <div className={`hidden lg:block border-t border-white/5 bg-black/20 transition-all duration-700 ${isScrolled ? 'py-1.5' : 'py-2.5'}`}>
          <div className="max-w-[1400px] mx-auto px-10 flex items-center justify-center gap-4">
            <FilterSelect label="State" icon={<MapPin className="w-3.5 h-3.5" />} options={filterOptions.states} value={selectedState} onChange={setSelectedState} />
            <FilterSelect label="District" icon={<Map className="w-3.5 h-3.5" />} options={filterOptions.districts} value={selectedDistrict} onChange={setSelectedDistrict} />
            <FilterSelect label="City" icon={<LocateFixed className="w-3.5 h-3.5" />} options={filterOptions.cities} value={selectedCity} onChange={setSelectedCity} />
            <FilterSelect label="Type" icon={<LayoutGrid className="w-3.5 h-3.5" />} options={filterOptions.types} value={selectedType} onChange={setSelectedType} />
            <button className="flex items-center gap-3 px-6 py-2 bg-[#C6A75E] text-black text-[9px] tracking-[3px] font-black rounded-xl hover:scale-105 transition-all duration-500 shadow-lg uppercase">
              Search
            </button>
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
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-[#111113] z-[120] flex flex-col items-center justify-center gap-10"
          >
            <button className="absolute top-12 right-12 text-[#C6A75E]" onClick={() => setIsOpen(false)}>
              <X className="w-12 h-12" />
            </button>

            <div className="w-[80%] relative mb-6">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C6A75E]" />
              <input
                type="text"
                placeholder="Search Estates..."
                className="w-full bg-[#161618] border border-[#C6A75E]/30 rounded-full py-5 pl-16 pr-8 text-[12px] tracking-[3px] text-[#F5F5F5] focus:outline-none focus:border-[#C6A75E] transition-all duration-500 placeholder:text-[#7A7A7A] uppercase font-bold"
              />
            </div>

            {navLinks.map((link, i) => (
              <motion.div key={link.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + (i * 0.1) }}>
                <Link to={link.path || '#'} onClick={() => handleLinkClick(link.path || '#')} className="text-4xl text-[#F5F5F5] hover:text-[#C6A75E] transition-all duration-500 font-serif italic">
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Custom Premium Filter Select Component
function FilterSelect({ label, icon, options, value, onChange }: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group/filter" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <div className={`flex items-center gap-4 px-6 py-2.5 bg-[#161618]/60 border border-[#C6A75E]/20 rounded-xl cursor-pointer hover:border-[#C6A75E]/60 transition-all duration-500 min-w-[180px] shadow-lg ${isOpen ? 'border-[#C6A75E]' : ''}`}>
        <div className="p-1.5 rounded-lg bg-[#C6A75E]/10 text-[#C6A75E]">
          {icon}
        </div>
        <div className="flex flex-col">
          <span className="text-[7px] text-[#C6A75E] tracking-[2px] uppercase font-bold mb-0.5">{label}</span>
          <span className="text-[10px] text-[#F5F5F5] tracking-[2px] uppercase font-black truncate max-w-[110px]">
            {value || `Any ${label}`}
          </span>
        </div>
        <ChevronDown className={`w-3 h-3 text-[#C6A75E] ml-auto transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-3 w-full z-[200] perspective-1000"
          >
            <div className="bg-[#111113] border border-[#C6A75E]/30 rounded-2xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.9)] backdrop-blur-2xl">
              <div className="max-h-[300px] overflow-y-auto custom-scrollbar p-2">
                {options.map((opt: string) => (
                  <div
                    key={opt}
                    onClick={() => { onChange(opt); setIsOpen(false); }}
                    className={`px-5 py-3.5 text-[10px] tracking-[2px] font-bold uppercase cursor-pointer rounded-xl transition-all duration-300 flex items-center justify-between group/item ${value === opt ? 'bg-[#C6A75E] text-black' : 'text-[#B5B5B5] hover:text-[#C6A75E] hover:bg-white/5'}`}
                  >
                    {opt}
                    {value === opt && <div className="w-1.5 h-1.5 rounded-full bg-black shadow-sm" />}
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
