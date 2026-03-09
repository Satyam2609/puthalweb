"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe, ArrowRight } from "lucide-react";

const ContactPage = () => {
    return (
        <div className="relative min-h-screen bg-[#fdfaff] pt-32 pb-20 overflow-hidden text-[#1a0a2a]">
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-100/40 rounded-full blur-[120px]" />
                <div className="absolute bottom-[20%] left-[-5%] w-[40%] h-[40%] bg-indigo-100/30 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header Section */}
                <header className="mb-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-100 bg-white/60 backdrop-blur-md shadow-sm mb-6"
                    >
                        <MessageSquare size={14} className="text-purple-600" />
                        <span className="text-[10px] uppercase font-black tracking-[0.2em] text-purple-900">Get In Touch</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black tracking-[-0.04em] leading-[1.1] mb-6 text-purple-600"
                    >
                        Get in Touch
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed"
                    >
                        Have questions? We&apos;re here to help. Reach out to us and we&apos;ll get back to you as soon as possible.
                    </motion.p>
                </header>

                {/* Contact Info Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="max-w-4xl mx-auto p-12 bg-white rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(147,51,234,0.08)] border border-purple-50/50 mb-32 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50" />

                    <h3 className="text-2xl font-black text-center mb-16 tracking-tight">Contact Us</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        {/* Phone */}
                        <div className="space-y-4 group">
                            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto transition-transform duration-500 group-hover:scale-110">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">Phone</h4>
                                <p className="text-slate-500 text-sm font-medium">+91 7724816439</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="space-y-4 group">
                            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto transition-transform duration-500 group-hover:scale-110">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">Email</h4>
                                <p className="text-slate-500 text-sm font-medium break-all px-2">rochakjainjs2005@gmail.com</p>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="space-y-4 group">
                            <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto transition-transform duration-500 group-hover:scale-110">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">Address</h4>
                                <p className="text-slate-500 text-xs font-medium leading-relaxed">
                                    Near jain Temple, Main Market<br />
                                    Badagaon, Tikamgarh, Madhya Pradesh
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Our Approach Section */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-black text-purple-600 mb-4"
                        >
                            Our Approach
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-500 font-medium"
                        >
                            How Puthal helps you step by step in your mental wellness journey
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { step: 1, title: "Initial Contact", desc: "Reach out to us through our contact form, email, or phone. We'll respond within 24 hours." },
                            { step: 2, title: "Assessment", desc: "Our team will assess your needs through our AI-powered chatbot or a consultation call." },
                            { step: 3, title: "Personalized Plan", desc: "Based on your mental health checklist, we create a customized wellness plan for you." },
                            { step: 4, title: "Ongoing Support", desc: "Access our tools and resources, with continuous monitoring and professional guidance." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 bg-white rounded-3xl border border-purple-50 shadow-sm hover:shadow-xl hover:shadow-purple-100/20 transition-all duration-500 relative group overflow-hidden"
                            >
                                <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm mb-6 group-hover:scale-110 transition-transform">
                                    {item.step}
                                </div>
                                <h3 className="text-lg font-bold mb-3 text-purple-900">{item.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Help Banner Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative p-12 md:p-16 rounded-[3rem] bg-purple-600 text-white text-center shadow-2xl overflow-hidden shadow-purple-200"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-8 backdrop-blur-md">
                            <Clock size={32} />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black mb-8 leading-[1.2]">We&apos;re Here to Help</h2>
                        <p className="text-purple-50 mb-10 text-base md:text-lg font-medium leading-relaxed">
                            Our support team is committed to responding to all inquiries within 24 hours. Your mental wellness is our priority.
                        </p>
                        <div className="inline-block px-6 py-2 rounded-full border border-white/30 bg-white/10 text-[10px] uppercase font-black tracking-[0.2em] backdrop-blur-sm">
                            Available Monday - Friday: 9:00 AM - 6:00 PM IST
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactPage;
