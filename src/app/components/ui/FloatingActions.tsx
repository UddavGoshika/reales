import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Phone, Calendar, FileText, X, Send, User, Mail, MessageSquare } from 'lucide-react';

export function FloatingActions() {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const sideActions = [
        { icon: <MessageCircle className="w-5 h-5" />, label: 'WhatsApp', color: '#25D366' },
        { icon: <Phone className="w-5 h-5" />, label: 'Call Us', color: '#C6A75E' },
        { icon: <Mail className="w-5 h-5" />, label: 'Contact Us', color: '#C6A75E' },
        { icon: <Calendar className="w-5 h-5" />, label: 'Schedule View', color: '#C6A75E' },
        { icon: <FileText className="w-5 h-5" />, label: 'Brochure', color: '#C6A75E' },
    ];

    return (
        <>
            {/* 1. SIDEBAR ICON STACK - Flush Right Edge */}
            <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[200] flex flex-col gap-2">
                {sideActions.map((action, index) => (
                    <motion.button
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative w-14 h-14 bg-black/20 backdrop-blur-2xl border border-[#C6A75E]/40 flex items-center justify-center hover:bg-[#C6A75E] hover:text-black transition-all duration-700 shadow-2xl text-[#C6A75E] border-r-0 rounded-l-xl"
                    >
                        {action.icon}

                        {/* Tooltip */}
                        <span className="absolute right-16 px-4 py-2 bg-[#C6A75E] text-black text-[10px] tracking-[2px] font-black uppercase rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none whitespace-nowrap shadow-[0_0_20px_rgba(198,167,94,0.3)]">
                            {action.label}
                            <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-[#C6A75E] rotate-45" />
                        </span>
                    </motion.button>
                ))}
            </div>

            {/* 2. BOTTOM ACTION BUTTONS */}
            <div className="fixed right-4 bottom-4 md:right-12 md:bottom-12 z-[200] flex flex-col md:flex-row items-end md:items-center gap-4 md:gap-6">
                {/* Contact Us Button */}
                <motion.button
                    onClick={() => setIsFormOpen(true)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="px-6 py-4 md:px-10 md:py-5 bg-black/40 backdrop-blur-2xl border border-[#C6A75E]/60 text-[#C6A75E] text-[9px] md:text-[10px] tracking-[3px] md:tracking-[4px] font-black uppercase rounded-full hover:bg-[#C6A75E] hover:text-black transition-all duration-700 shadow-2xl"
                >
                    Contact Us
                </motion.button>

                {/* Get Brochure Button */}
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="group relative px-6 py-4 md:px-10 md:py-5 bg-[#C6A75E] text-black rounded-full flex items-center gap-3 md:gap-4 shadow-[0_20px_60px_rgba(198,167,94,0.3)] overflow-hidden transition-all duration-700 hover:scale-105"
                >
                    <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                    <FileText className="w-4 h-4 md:w-5 md:h-5 relative z-10" />
                    <span className="text-[10px] md:text-[11px] tracking-[3px] md:tracking-[4px] font-black uppercase relative z-10">Get Brochure</span>
                </motion.button>
            </div>

            {/* 3. QUICK CONTACT FORM OVERLAY - Centered Fixed Modal */}
            <AnimatePresence>
                {isFormOpen && (
                    <>
                        {/* Backdrop Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsFormOpen(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[250]"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 100 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 100 }}
                            className="fixed inset-x-4 top-1/2 -translate-y-1/2 md:inset-auto md:right-12 md:bottom-32 md:translate-y-0 w-auto md:w-[450px] bg-[#0B0B0D] border border-[#C6A75E]/30 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,1)] overflow-hidden z-[300]"
                        >
                            {/* Form Header */}
                            <div className="bg-[#161618] px-8 md:px-10 py-6 md:py-8 border-b border-[#C6A75E]/10 flex justify-between items-center">
                                <div>
                                    <h3 className="text-xl text-[#F5F5F5] font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>Quick Enquiry</h3>
                                    <p className="text-[9px] tracking-[2px] text-[#C6A75E] uppercase font-bold mt-1">Direct Priority Service</p>
                                </div>
                                <button
                                    onClick={() => setIsFormOpen(false)}
                                    className="w-10 h-10 rounded-full bg-black/40 border border-[#C6A75E]/20 flex items-center justify-center text-[#7A7A7A] hover:text-[#C6A75E] transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Form Body */}
                            <div className="p-8 md:p-10 space-y-6 md:space-y-8">
                                <div className="relative">
                                    <User className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C6A75E]" />
                                    <input
                                        type="text"
                                        placeholder="Your Full Name"
                                        className="w-full bg-transparent border-b border-[#C6A75E]/20 pl-10 py-3 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#C6A75E] transition-all placeholder:text-[#333]"
                                    />
                                </div>
                                <div className="relative">
                                    <Mail className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C6A75E]" />
                                    <input
                                        type="email"
                                        placeholder="Official Email Address"
                                        className="w-full bg-transparent border-b border-[#C6A75E]/20 pl-10 py-3 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#C6A75E] transition-all placeholder:text-[#333]"
                                    />
                                </div>
                                <div className="relative">
                                    <Phone className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C6A75E]" />
                                    <input
                                        type="tel"
                                        placeholder="Contact Number"
                                        className="w-full bg-transparent border-b border-[#C6A75E]/20 pl-10 py-3 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#C6A75E] transition-all placeholder:text-[#333]"
                                    />
                                </div>
                                <div className="relative">
                                    <MessageSquare className="absolute left-0 top-4 w-4 h-4 text-[#C6A75E]" />
                                    <textarea
                                        rows={3}
                                        placeholder="Special Requirements..."
                                        className="w-full bg-transparent border-b border-[#C6A75E]/20 pl-10 py-3 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#C6A75E] transition-all placeholder:text-[#333] resize-none"
                                    />
                                </div>

                                <button className="w-full py-5 bg-[#C6A75E] text-black text-[10px] tracking-[5px] font-black uppercase rounded-xl shadow-[0_10px_30px_rgba(198,167,94,0.2)] hover:shadow-[0_15px_40px_rgba(198,167,94,0.4)] transition-all flex items-center justify-center gap-4 group">
                                    SEND PRIORITY REQUEST
                                    <Send className="w-3 h-3 transition-transform group-hover:translate-x-2 group-hover:-translate-y-1" />
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
