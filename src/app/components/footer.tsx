import { motion } from 'motion/react';
import { Linkedin, Twitter, Instagram, ArrowUp, Mail, Phone, MapPin, Facebook, Youtube, AtSign } from 'lucide-react';
import { Link } from 'react-router-dom';

// @ts-ignore
import navlogo from './figma/images/navlogo.png';

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
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              {/* <h2 className="text-4xl text-[#C6A75E] tracking-[6px]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
                TATITO
              </h2> */}
              <Link to="/" className="block">
                <img
                  src={navlogo}
                  alt="Tatito Logo"
                  className="h-40 w-auto pl-14 brightness-110 contrast-125 object-contain hover:scale-105 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(198,167,94,0.2)]"
                />
              </Link>
            </div>
            <p className="max-w-xs text-[#7A7A7A] text-sm leading-relaxed font-light tracking-widest uppercase">
              Discover premium open plots, apartments, villas, interiors, and farm lands in prime locations.
              We help you find the perfect property for living, investment, and future growth.            </p>

            {/* Social Icons Discovery Row */}
            <div className="flex flex-wrap gap-5">
              {[
                { Icon: Mail, href: 'mailto:tatitodevelopersandpromoters@gmail.com', label: 'Gmail' },
                { Icon: Instagram, href: 'https://www.instagram.com/tatitodevelopersandpromoters/', label: 'Instagram' },
                { Icon: Facebook, href: 'https://www.facebook.com/tatitodevelopersandpromoters', label: 'Facebook' },
                { Icon: AtSign, href: 'https://www.threads.com/@tatitodevelopersandpromoters', label: 'Threads' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/company/tatito-developers-promoters/', label: 'LinkedIn' },
                { Icon: Twitter, href: 'https://x.com/TatitoPromoters', label: 'X' },
                { Icon: Youtube, href: 'https://www.youtube.com/channel/UCR6TzUQnfWGVHcy9qEHkTkw', label: 'Youtube' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[#C6A75E]/20 flex items-center justify-center text-[#C6A75E] hover:bg-[#C6A75E] hover:text-black transition-all duration-500 hover:shadow-[0_0_20px_rgba(198,167,94,0.4)] group"
                  title={social.label}
                >
                  <social.Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Tattio Nodes Nav Group */}
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-[10px] tracking-[4px] uppercase text-[#C6A75E] font-bold">Tattio EcoSystem</h4>
            <ul className="space-y-4 text-xs font-light tracking-widest text-[#B5B5B5]">
              <li className="hover:text-[#C6A75E] transition-colors"><Link to="/">Tatito Edverse</Link></li>
              <li className="hover:text-[#C6A75E] transition-colors"><Link to="/">Tattio Career Hub</Link></li>
              <li className="hover:text-[#C6A75E] transition-colors"><Link to="/">Tatito Nexus</Link></li>

              <li className="hover:text-[#C6A75E] transition-colors"><Link to="/">Tattio Fashions</Link></li>
              <li className="hover:text-[#C6A75E] transition-colors"><Link to="/">Tatito Civic One</Link></li>
              <li className="hover:text-[#C6A75E] transition-colors"><Link to="/">Eadvocate Services</Link></li>

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
              <li className="hover:text-[#C6A75E] transition-colors"><Link to="/">Interiors</Link></li>
              <li className="hover:text-[#C6A75E] transition-colors"><Link to="/">Individal Houses</Link></li>
              <li className="hover:text-[#C6A75E] transition-colors"><Link to="/">Farm Lands</Link></li>
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


                  Tirupati, Andhra Pradesh<br />

                  517501, India


                </p>
              </div>
              <div className="flex gap-4">
                <Phone className="w-4 h-4 text-[#C6A75E] shrink-0" />
                <p className="text-xs text-[#B5B5B5] tracking-widest">+91 91543 55555 , +91 70937 04706

                </p>
              </div>
              <div className="flex gap-4">
                <Mail className="w-4 h-4 text-[#C6A75E] shrink-0" />
                <p className="text-xs text-[#B5B5B5] tracking-widest">tatitoprojects@gmail.com,

                  support@tatitoprojects.com<br />
                  contact@tatitodevelopers.com</p>
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
