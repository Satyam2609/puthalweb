"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, ArrowRight } from "lucide-react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Awareness", href: "/mental-health-awareness" },
        { name: "Services", href: "/services" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 w-full z-[100] px-4 sm:px-6 md:px-12 ${isScrolled ? "pt-4" : "pt-8"}`}
        >
            <div
                className={`mx-auto max-w-7xl flex justify-between items-center transition-all duration-500 px-10 py-3 ${isScrolled
                    ? "bg-white/90 backdrop-blur-xl border border-purple-100/50 shadow-[0_15px_40px_-15px_rgba(168,85,247,0.12)] rounded-full"
                    : "bg-white/70 backdrop-blur-lg border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full"
                    }`}
            >
                {/* Logo Section */}
                <div className="flex items-center gap-3 cursor-pointer group">
                    <div
                        className="relative"
                    >
                        <div className="w-full h-10 rounded-full bg-gradient-to-tr from-[#3b82f6] to-[#2563eb] text-white ">
                            <img src="/logo.png" alt="P" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* Navigation Items - Centered */}
                <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="relative text-[11px] font-black uppercase tracking-[0.15em] text-[#475569] hover:text-[#581c87] transition-all duration-300 group"
                        >
                            {link.name}
                            <span
                                className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-purple-600 transition-all duration-300 group-hover:w-1/2"
                            ></span>
                        </a>
                    ))}
                </div>

                {/* CTA & Mobile Toggle */}
                <div className="flex items-center gap-6">
                    <button
                        className="hidden md:flex relative group px-6 py-2.5 overflow-hidden rounded-full transition-all duration-500 border border-purple-200 bg-purple-50/40 hover:bg-[#581c87] shadow-sm hover:shadow-purple-100"
                    >
                        <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.2em] text-[#3b0764] group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                            GET STARTED
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2.5 rounded-full bg-slate-50 text-slate-600 hover:text-purple-600 transition-all border border-slate-100"
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Overlay Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -20 }}
                        className="lg:hidden absolute top-24 left-4 right-4 z-[110] bg-white rounded-[2.5rem] p-10 shadow-[0_30px_60px_-15px_rgba(168,85,247,0.25)] border border-purple-50"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link, idx) => (
                                <motion.a
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-3xl font-black text-[#1a0a2a] hover:text-purple-600 transition-all uppercase tracking-tighter py-2 border-b border-slate-50"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>

                        <button className="w-full py-5 bg-[#1a0a2a] text-white text-sm font-black uppercase tracking-widest rounded-2xl mt-10 flex justify-center items-center gap-4">
                            Get Started
                            <ArrowRight size={20} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
