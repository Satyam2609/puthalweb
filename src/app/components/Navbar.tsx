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
        { name: "About", href: "/about" },
        { name: "Support", href: "#" },
        { name: "Services", href: "/services" },
        { name: "Journal", href: "#" },
        { name: "Expertise", href: "#" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out ${isScrolled
                ? "py-4 bg-white/70 backdrop-blur-xl border-b border-purple-100/30 shadow-[0_2px_20px_-10px_rgba(168,85,247,0.1)]"
                : "py-8 bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-8 md:px-12 flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center gap-4 cursor-pointer group">
                    <div className="relative">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-purple-200 group-hover:rotate-12 transition-transform duration-500">
                            <Sparkles size={20} fill="currentColor" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                       
                        <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-slate-400 mt-1">Wellness Hub</span>
                    </div>
                </div>

                {/* Navigation Items */}
                <div className="hidden md:flex items-center gap-12">
                    <div className="flex items-center gap-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative text-[13px] font-bold text-slate-500 hover:text-purple-600 transition-all duration-300 group uppercase tracking-widest"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>

                    <button className="relative group px-7 py-3 overflow-hidden rounded-full transition-all duration-500">
                        <span className="relative z-10 text-xs font-black uppercase tracking-widest text-[#1a0a2a] group-hover:text-white transition-colors duration-300 flex items-center gap-3">
                            Get Started
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-transparent border-2 border-[#1a0a2a] rounded-full group-hover:bg-[#1a0a2a] transition-all duration-500"></div>
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-3 rounded-2xl bg-black/5 text-slate-600 hover:text-purple-600 transition-all"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Overlay Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="md:hidden fixed inset-0 z-[110] bg-white p-12 flex flex-col justify-center items-start gap-12"
                    >
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="absolute top-10 right-10 p-4 bg-slate-50 rounded-full"
                        >
                            <X size={32} />
                        </button>

                        <div className="flex flex-col gap-8">
                            {navLinks.map((link, idx) => (
                                <motion.a
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-5xl font-black text-[#1a0a2a] border-b-4 border-transparent hover:border-purple-600 transition-all uppercase tracking-tighter"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>

                        <button className="w-full py-6 bg-[#1a0a2a] text-white text-xl font-black uppercase tracking-[0.2em] rounded-3xl mt-auto flex justify-center items-center gap-4">
                            Join Puthal
                            <ArrowRight size={24} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
