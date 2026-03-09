"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Home, Info, Stethoscope, BookOpen, Mail, Leaf } from "lucide-react";

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
        { name: "Home", href: "/", icon: Home },
        { name: "About", href: "/about", icon: Info },
        { name: "Awareness", href: "/mental-health-awareness", icon: Leaf },
        { name: "Services", href: "/services", icon: Stethoscope },
        { name: "Contact", href: "/contact", icon: Mail },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out px-4 sm:px-6 md:px-12 ${isScrolled
                ? "pt-4"
                : "pt-8"
                }`}
        >
            <div className={`mx-auto max-w-7xl flex justify-between items-center transition-all duration-500 px-6 py-3 ${isScrolled
                ? "bg-white/80 backdrop-blur-xl border border-purple-100 shadow-[0_8px_30px_rgb(147,51,234,0.08)] rounded-full"
                : "bg-transparent border border-transparent rounded-none"
                }`}>
                {/* Logo Section */}
                <div className="flex items-center gap-4 cursor-pointer group">
                    <img src="/logo.png" alt="Puthal" className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-500" />
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

                    <button className="relative group px-6 py-2.5 overflow-hidden rounded-full transition-all duration-500 shadow-sm hover:shadow-md">
                        <span className="relative z-10 text-xs font-bold uppercase tracking-widest text-[#1a0a2a] group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                            Get Started
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-purple-50 border border-purple-200 rounded-full group-hover:bg-[#1a0a2a] group-hover:border-[#1a0a2a] transition-all duration-400"></div>
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2.5 rounded-2xl bg-purple-50 border border-purple-100 text-purple-600 hover:bg-purple-100 transition-all"
                >
                    <AnimatePresence mode="wait">
                        {isMobileMenuOpen ? (
                            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                <X size={22} />
                            </motion.div>
                        ) : (
                            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                <Menu size={22} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </div>

            {/* Mobile Overlay Backdrop */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="md:hidden fixed inset-0 z-[108] bg-black/30 backdrop-blur-sm"
                        />

                        {/* Bottom Drawer */}
                        <motion.div
                            key="drawer"
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "100%", opacity: 0 }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="md:hidden fixed bottom-0 left-0 right-0 z-[109] bg-white/95 backdrop-blur-2xl rounded-t-[2.5rem] px-6 pt-5 pb-10 shadow-[0_-20px_60px_rgba(147,51,234,0.15)]"
                        >
                            {/* Drag Handle */}
                            <div className="w-10 h-1 bg-slate-200 rounded-full mx-auto mb-6" />

                            {/* Logo + Close row */}
                            <div className="flex items-center justify-between mb-6 px-1">
                                <img src="/logo.png" alt="Puthal" className="h-9 w-auto object-contain" />
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-red-50 hover:text-red-500 transition-all"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            {/* Nav Links */}
                            <div className="flex flex-col gap-2 mb-8">
                                {navLinks.map((link, idx) => {
                                    const Icon = link.icon;
                                    return (
                                        <motion.a
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.07, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                            className="flex items-center gap-4 px-4 py-3.5 rounded-2xl hover:bg-purple-50 transition-all group"
                                        >
                                            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-600 transition-all duration-300">
                                                <Icon size={18} className="text-purple-600 group-hover:text-white transition-colors duration-300" />
                                            </div>
                                            <span className="text-base font-semibold text-[#1a0a2a] tracking-wide">{link.name}</span>
                                            <ArrowRight size={16} className="ml-auto text-slate-300 group-hover:text-purple-500 group-hover:translate-x-1 transition-all duration-300" />
                                        </motion.a>
                                    );
                                })}
                            </div>

                            {/* CTA Button */}
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.4 }}
                                className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold tracking-widest rounded-2xl flex justify-center items-center gap-3 shadow-lg shadow-purple-200 hover:shadow-purple-300 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                            >
                                Get Started Free
                                <ArrowRight size={18} />
                            </motion.button>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;


