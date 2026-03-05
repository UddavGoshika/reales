import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'motion/react';

const API_BASE = 'http://localhost:5000/api';

// --- BLOCK RENDERERS ---

const ProjectExecution = ({ content }: any) => {
    return (
        <section className="py-24 bg-[#111113] border-y border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C6A75E]/5 blur-[120px] rounded-full"></div>
            <div className="max-w-[1440px] mx-auto px-8 relative z-10 flex flex-col items-center text-center">
                <span className="text-[#C6A75E] tracking-[10px] uppercase text-[12px] font-bold mb-6 block drop-shadow-lg">
                    {content.heading || 'Project Execution'}
                </span>
                <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 tracking-tighter">
                    {content.description || 'Visionary Minds'}
                </h2>
                <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C6A75E] to-transparent"></div>
            </div>
        </section>
    );
};

const Hero = ({ content }: any) => (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img src={content.backgroundImage} className="absolute inset-0 w-full h-full object-cover brightness-[0.4]" alt="" />
        <div className="relative z-10 text-center px-8">
            <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 uppercase tracking-widest">{content.title}</h1>
            <p className="text-[#C6A75E] text-2xl font-serif italic">{content.subtitle}</p>
        </div>
    </section>
);

const Features = ({ content }: any) => (
    <section className="py-20 px-8 bg-[#0B0B0D]">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif text-white mb-6">{content.heading}</h2>
            <p className="text-gray-400 text-lg leading-relaxed">{content.description}</p>
        </div>
    </section>
);

const FAQ = ({ content }: any) => (
    <section className="py-20 bg-[#111113] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-8">
            <h2 className="text-3xl font-serif text-white mb-10 text-center uppercase tracking-widest shadow-white/5">{content.title || 'FAQ'}</h2>
            <div className="space-y-6">
                {content.items?.map((item: any, idx: number) => (
                    <div key={idx} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                        <p className="text-[#C6A75E] font-bold mb-2">Q: {item.q}</p>
                        <p className="text-gray-400 italic">A: {item.a}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Testimonials = ({ content }: any) => (
    <section className="py-20 bg-[#0B0B0D]">
        <div className="max-w-[1440px] mx-auto px-8 text-center">
            <h2 className="text-4xl font-serif text-white mb-16 italic">{content.heading || 'Testimonials'}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                {content.list?.map((item: any, idx: number) => (
                    <div key={idx} className="p-8 bg-[#111113] border border-white/5 rounded-3xl relative overflow-hidden group hover:border-[#C6A75E]/30 transition-all">
                        <div className="text-[#C6A75E] text-4xl mb-4 font-serif">“</div>
                        <p className="text-gray-400 mb-6 italic">{item.feedback}</p>
                        <p className="text-white font-bold uppercase tracking-widest text-xs">— {item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// --- MAIN RENDERER ---

export const CMSSectionsRenderer = ({ slug }: { slug: string }) => {
    const [sections, setSections] = useState<any[]>([]);

    useEffect(() => {
        const fetchSections = async () => {
            try {
                // First get the page by slug
                const pagesRes = await axios.get(`${API_BASE}/pages`);
                const page = pagesRes.data.find((p: any) => p.slug === slug);
                if (page) {
                    const sectionsRes = await axios.get(`${API_BASE}/pages/${page._id}/sections`);
                    setSections(sectionsRes.data);
                }
            } catch (err) {
                console.error("CMS Fetch error:", err);
            }
        };
        fetchSections();
    }, [slug]);

    if (sections.length === 0) return null;

    return (
        <div className="cms-sections-container">
            {sections.map(section => {
                switch (section.type) {
                    case 'ProjectExecution': return <ProjectExecution key={section._id} content={section.content} />;
                    case 'Hero': return <Hero key={section._id} content={section.content} />;
                    case 'Features': return <Features key={section._id} content={section.content} />;
                    case 'FAQ': return <FAQ key={section._id} content={section.content} />;
                    case 'Testimonials': return <Testimonials key={section._id} content={section.content} />;
                    default: return null;
                }
            })}
        </div>
    );
};
