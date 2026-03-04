import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Hero } from './components/hero';
import { About } from './components/about';
import { Projects } from './components/projects';
import { Developers } from './components/developers';
import { Gallery } from './components/gallery';
import { Testimonials } from './components/testimonials';
import { FAQ } from './components/faq';
import { Contact } from './components/contact';
import { Footer } from './components/footer';
import ProjectDetail from './pages/ProjectDetail';
import CategoryDetail from './pages/CategoryDetail';
import AboutPage from './pages/AboutPage';
import InvestPage from './pages/InvestPage';
import RealEstatePage from './pages/RealEstatePage';
import OpenPlotsPage from './pages/OpenPlotsPage';

import { LuxuryDivider } from './components/ui/luxury-divider';
import { FloatingActions } from './components/ui/FloatingActions';

function Home() {
  return (
    <>
      <Hero />
      <LuxuryDivider />
      <Projects />
      <LuxuryDivider />
      <About />
      <LuxuryDivider />
      <Developers />
      <LuxuryDivider />
      <Gallery />
      <LuxuryDivider />
      <Testimonials />
      <LuxuryDivider />
      <FAQ />
      <LuxuryDivider />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <Router>
      {/* 0. Visibility Heartbeat (Diagnostic) */}
      {/* <div className="fixed top-4 right-4 z-[9999] text-[8px] tracking-[4px] uppercase text-[#C6A75E] opacity-50 pointer-events-none">
        System Status: Operational
      </div> */}

      <div className="bg-[#0B0B0D] text-[#F5F5F5] min-h-screen relative overflow-x-hidden selection:bg-[#C6A75E] selection:text-black" style={{ fontFamily: "'DM Sans', sans-serif" }}>

        {/* 1. LAYERED BACKGROUND DEPTH SYSTEM */}

        {/* Underlying Blueprint Texture (2% Opacity) */}
        <div className="fixed inset-0 pointer-events-none z-[0] opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10L10 90M10 10L90 10' stroke='%23C6A75E' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
        }} />

        {/* Ambient Gold Radial Glows (Minimized for Restraint) */}
        <div className="fixed inset-0 pointer-events-none z-[0]">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[radial-gradient(circle,rgba(198,167,94,0.06)_0%,transparent_70%)]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[radial-gradient(circle,rgba(198,167,94,0.06)_0%,transparent_70%)]" />
        </div>

        {/* Global Grain/Noise Overlay */}
        <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.012]" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/black-linen.png")' }} />

        {/* 1.5. REFINED ARCHITECTURAL GOLDEN CURVES */}
        <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.07] overflow-hidden">
          <svg className="absolute w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Organic flowing architectural contour lines */}
            <path d="M-200 800C100 600 500 900 800 500C1100 100 1500 600 1800 300" stroke="#C6A75E" strokeWidth="0.5" />
            <path d="M-300 500C0 300 400 700 700 300C1000 -100 1400 400 1700 100" stroke="#C6A75E" strokeWidth="0.5" />
            <path d="M-100 1000C200 800 600 1100 900 700C1200 300 1600 800 1900 500" stroke="#C6A75E" strokeWidth="0.5" />

            {/* Large subtle geometric arcs */}
            <circle cx="1400" cy="100" r="600" stroke="#C6A75E" strokeWidth="0.2" />
            <circle cx="40" cy="850" r="400" stroke="#C6A75E" strokeWidth="0.2" />
          </svg>
        </div>

        <div className="relative z-[2] pt-0">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/category/:type" element={<CategoryDetail />} />
            <Route path="/invest" element={<InvestPage />} />
            <Route path="/real-estate" element={<RealEstatePage />} />
            <Route path="/open-plots" element={<OpenPlotsPage />} />
          </Routes>
          <Footer />
          <FloatingActions />
        </div>
      </div>
    </Router>
  );
}
