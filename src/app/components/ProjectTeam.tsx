import React from 'react';
import { motion } from 'motion/react';

const teamMembers = [
    { name: "Jonathan Sterling", role: "Principal Architect", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" },
    { name: "Victoria Chen", role: "Design Director", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400" },
    { name: "Marcus Aurelius", role: "Project Lead", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" },
    { name: "Sarah Jenkins", role: "Quality Assurance", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400" },
    { name: "Elena Rodriguez", role: "Landscape Design", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400" },
    { name: "David Chen", role: "Civil Engineer", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400" },
    // Duplicated for seamless loop
    { name: "Jonathan Sterling", role: "Principal Architect", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400" },
    { name: "Victoria Chen", role: "Design Director", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400" },
    { name: "Marcus Aurelius", role: "Project Lead", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" },
    { name: "Sarah Jenkins", role: "Quality Assurance", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400" },
    { name: "Elena Rodriguez", role: "Landscape Design", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400" },
    { name: "David Chen", role: "Civil Engineer", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400" }
];

export const ProjectTeam = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-black/60 border-y border-[#C6A75E]/10">
            <div className="max-w-[1440px] mx-auto px-8 mb-16">
                <span className="text-[#C6A75E] tracking-[8px] text-[10px] font-black uppercase mb-3 block">Project Execution</span>
                <h2 className="text-4xl text-white font-serif italic">Visionary <span className="text-[#C6A75E]">Minds</span></h2>
            </div>

            <div className="relative overflow-hidden">
                <motion.div
                    className="flex gap-10 px-8"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        ease: "linear",
                        duration: 30,
                        repeat: Infinity,
                    }}
                >
                    {teamMembers.map((member, i) => (
                        <div
                            key={i}
                            className="min-w-[300px] group relative aspect-[3/4] overflow-hidden rounded-3xl border border-white/5 bg-[#161618]"
                        >
                            <img
                                src={member.img}
                                alt={member.name}
                                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1500ms]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                            <div className="absolute bottom-8 left-8 right-8">
                                <h4 className="text-white text-xl font-serif">{member.name}</h4>
                                <p className="text-[#C6A75E] text-[10px] tracking-[3px] uppercase font-bold mt-1">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
