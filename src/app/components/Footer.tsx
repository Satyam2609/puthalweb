"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Twitter, Instagram, Linkedin, Github, ExternalLink } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {
            title: "Company",
            links: [
                { name: "About Us", href: "/about" },
                { name: "Our Services", href: "/services" },
                { name: "Contact", href: "/contact" },
                { name: "Careers", href: "/careers" }
            ]
        },
        {
            title: "Support",
            links: [
                { name: "Help Center", href: "/help" },
                { name: "Terms of Service", href: "/terms" },
                { name: "Privacy Policy", href: "/privacy" },
                { name: "FAQ", href: "/faq" }
            ]
        }
    ];

    const socialLinks = [
        { icon: Twitter, href: "#", name: "Twitter" },
        { icon: Instagram, href: "#", name: "Instagram" },
        { icon: Linkedin, href: "#", name: "LinkedIn" },
        { icon: Github, href: "#", name: "GitHub" }
    ];

    return (
        <footer className="bg-white border-t border-purple-50 pt-24 pb-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-100 to-transparent" />

            <div className="max-w-7xl mx-auto px-8 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
                    {/* Brand Section */}
                    <div className="lg:col-span-5 space-y-8">
                        <Link href="/" className="inline-block">
                            <h2 className="text-3xl font-black tracking-tighter text-[#1a0a2a]">
                                Puthal<span className="text-purple-600">Web</span>
                            </h2>
                        </Link>
                        <p className="text-slate-500 font-medium leading-relaxed max-w-sm">
                            Empowering the next generation of digital wellness through innovative technology and human-centric design.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-slate-600 group cursor-pointer hover:text-purple-600 transition-colors">
                                <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                                    <Mail size={18} />
                                </div>
                                <span className="text-sm font-bold">rochakjainjs2005@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-600 group cursor-pointer hover:text-purple-600 transition-colors">
                                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                                    <Phone size={18} />
                                </div>
                                <span className="text-sm font-bold">+91 7724816439</span>
                            </div>
                        </div>
                    </div>

                    {/* Links Sections */}
                    <div className="lg:col-span-4 grid grid-cols-2 gap-8">
                        {footerLinks.map((section, idx) => (
                            <div key={idx} className="space-y-6">
                                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#1a0a2a]">
                                    {section.title}
                                </h3>
                                <ul className="space-y-4">
                                    {section.links.map((link, linkIdx) => (
                                        <li key={linkIdx}>
                                            <Link
                                                href={link.href}
                                                className="text-slate-500 hover:text-purple-600 text-sm font-semibold transition-colors flex items-center gap-1 group"
                                            >
                                                {link.name}
                                                <ExternalLink size={12} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Newsletter/Socials Section */}
                    <div className="lg:col-span-3 space-y-8">
                        <div className="space-y-6">
                            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#1a0a2a]">
                                Follow Us
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {socialLinks.map((social, idx) => (
                                    <motion.a
                                        key={idx}
                                        href={social.href}
                                        whileHover={{ y: -4 }}
                                        className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300 shadow-sm"
                                        title={social.name}
                                    >
                                        <social.icon size={20} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 bg-purple-50 rounded-[2rem] border border-purple-100">
                            <p className="text-xs font-bold text-purple-900 leading-relaxed">
                                Join our community and stay updated with the latest in digital wellness.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-400 text-xs font-medium">
                        © {currentYear} PuthalWeb. All rights reserved.
                    </p>
                    <div className="flex items-center gap-8">
                        <Link href="/privacy" className="text-slate-400 hover:text-purple-600 text-[10px] font-black uppercase tracking-widest transition-colors">
                            Privacy
                        </Link>
                        <Link href="/terms" className="text-slate-400 hover:text-purple-600 text-[10px] font-black uppercase tracking-widest transition-colors">
                            Terms
                        </Link>
                        <Link href="/cookies" className="text-slate-400 hover:text-purple-600 text-[10px] font-black uppercase tracking-widest transition-colors">
                            Cookies
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
