import { motion } from 'motion/react';
import { Linkedin, Twitter, Instagram, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505]/90 backdrop-blur-xl pt-32 pb-16 px-8 relative overflow-hidden border-t border-[#C6A75E]/20">

      {/* 1. LARGE SUBTLE LOGO WATERMARK */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] text-[20rem] font-bold select-none pointer-events-none uppercase tracking-widest whitespace-nowrap" style={{ fontFamily: "'Playfair Display', serif" }}>
        TATITO
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">

        {/* Main Footer Layout: Brand & Quick Discovery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">

          {/* Logo Brand Segment */}
          <div className="lg:col-span-4 space-y-10">
            <h2 className="text-4xl text-[#C6A75E] tracking-[6px]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
              TATITO
            </h2>
            <p className="max-w-xs text-[#7A7A7A] text-sm leading-relaxed leading-relaxed font-light tracking-widest uppercase">
              The Gold Standard of Architecture and Investment Integrity. Globally Recognized for Excellence Since 1995.
            </p>

            {/* Social Icons Discovery Row */}
            <div className="flex gap-8">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <button key={i} className="text-[#C6A75E] hover:text-[#E8D8A0] transition-all duration-500 hover:shadow-[0_0_20px_rgba(198,167,94,0.4)]">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Tattio Nodes Nav Group */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-[10px] tracking-[4px] uppercase text-[#C6A75E] font-bold">Tattio Nodes</h4>
            <ul className="space-y-4 text-xs font-light tracking-widest text-[#B5B5B5]">
              <li className="hover:text-[#C6A75E] transition-colors"><Link to="/">Tatito Edverse</Link></li>
              <li className="hover:text-[#C6A75E] transition-colors"><Link to="/">Tattio Fashions</Link></li>
              <li className="hover:text-[#C6A75E] transition-colors"><Link to="/">Tattio Career Hub</Link></li>
              <li className="hover:text-[#C6A75E] transition-colors"><Link to="/">Tatito Nexus</Link></li>
              <li className="hover:text-[#C6A75E] transition-colors"><Link to="/">Tatito Civic One</Link></li>
              <li className="hover:text-[#C6A75E] transition-colors"><Link to="/">Tattio Health+</Link></li>
            </ul>
          </div>

          {/* Quick Links Nav Group */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-[10px] tracking-[4px] uppercase text-[#C6A75E] font-bold">Quick Links</h4>
            <ul className="space-y-4 text-xs font-light tracking-widest text-[#B5B5B5]">
              <li className="hover:text-[#C6A75E] transition-colors"><Link to="/">Home</Link></li>
              <li className="hover:text-[#C6A75E] transition-colors"><Link to="/about">About Us</Link></li>
              <li className="hover:text-[#C6A75E] transition-colors"><Link to="/">Open Plots</Link></li>
              <li className="hover:text-[#C6A75E] transition-colors"><Link to="/">Apartments</Link></li>
              <li className="hover:text-[#C6A75E] transition-colors"><Link to="/">Villas</Link></li>
              <li className="hover:text-[#C6A75E] transition-colors"><Link to="/">Contact</Link></li>
            </ul>
          </div>

          {/* Core Contact Segment */}
          <div className="lg:col-span-4 space-y-8">
            <h4 className="text-[10px] tracking-[4px] uppercase text-[#C6A75E] font-bold">Headquarters</h4>
            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="w-4 h-4 text-[#C6A75E] mt-1 shrink-0" />
                <p className="text-xs text-[#B5B5B5] leading-relaxed tracking-widest uppercase">
                  VIP Road, Siripuram<br />
                  Visakhapatnam, AP 530003
                </p>
              </div>
              <div className="flex gap-4">
                <Phone className="w-4 h-4 text-[#C6A75E] shrink-0" />
                <p className="text-xs text-[#B5B5B5] tracking-widest">+91 91543 55555</p>
              </div>
              <div className="flex gap-4">
                <Mail className="w-4 h-4 text-[#C6A75E] shrink-0" />
                <p className="text-xs text-[#B5B5B5] tracking-widest">contact@tatitodevelopers.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. THIN GOLD SEPARATOR & LEGAL BOTTOM ROW */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C6A75E]/30 to-transparent mb-12" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex gap-10 text-[9px] tracking-[3px] uppercase text-[#7A7A7A]">
            <Link to="/" className="hover:text-[#C6A75E] transition-colors">Privacy Charter</Link>
            <Link to="/" className="hover:text-[#C6A75E] transition-colors">Terms of Investment</Link>
            <Link to="/" className="hover:text-[#C6A75E] transition-colors">Legal Disclosure</Link>
          </div>

          <div className="text-[9px] tracking-[3px] uppercase text-[#7A7A7A]">
            © 2026 TATITO Developments. The Sovereign of Real Estate.
          </div>

          {/* Elegant Scroll To Top Discovery Circle */}
          <button
            onClick={scrollToTop}
            className="w-14 h-14 border border-[#C6A75E]/40 rounded-full flex items-center justify-center text-[#7A7A7A] hover:bg-[#C6A75E] hover:text-black hover:border-[#C6A75E] transition-all duration-700 hover:shadow-[0_0_20px_rgba(198,167,94,0.4)]"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
