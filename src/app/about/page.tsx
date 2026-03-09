"use client";

import React from "react";
import { motion } from "framer-motion";
import { Eye, Target, Users, Heart, TrendingUp } from "lucide-react";

const whoWeServe = [
    {
        title: "Young Professionals",
        description: "Managing work stress and maintaining work-life balance",
        icon: Users,
        color: "bg-purple-100 text-purple-600"
    },
    {
        title: "Students",
        description: "Coping with academic pressure and personal challenges",
        icon: Heart,
        color: "bg-purple-100 text-purple-600"
    },
    {
        title: "Anyone Seeking Support",
        description: "Individuals looking to improve their mental wellness",
        icon: TrendingUp,
        color: "bg-purple-100 text-purple-600"
    }
];

const fieldWorkDetails = [
    {
        value: "10,000+",
        label: "PEOPLE REACHED",
        name: "Community Outreach",
        desc: "Conducting mental health awareness programs in local communities, schools, and workplaces. Our team has reached over 10,000 individuals through workshops and seminars."
    },
    {
        value: "50+",
        label: "SUPPORT GROUPS",
        name: "Support Groups",
        desc: "Organizing and facilitating peer support groups where individuals can share experiences and find community. We've established 50+ active support groups across regions."
    },
    {
        value: "100+",
        label: "PROFESSIONALS",
        name: "Collaboration with Professionals",
        desc: "Partnering with certified mental health professionals to ensure evidence-based practices. Our network includes psychologists, psychiatrists, and counselors."
    },
];

const AboutPage = () => {
    return (
        <div className="relative pt-32 pb-24 bg-[#fdfaff] min-h-screen text-slate-800 font-sans overflow-hidden">
            {/* Premium Background Ambiance */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                {/* Gradient Blooms */}
                <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-purple-200/20 rounded-full blur-[120px]" />
                <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-indigo-200/15 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] left-[10%] w-[45%] h-[45%] bg-violet-200/15 rounded-full blur-[100px]" />

                {/* Subtle Geometric Detail */}
                <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: `radial-gradient(#1a0a2a 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />

                {/* Large Background Decorative Icons */}
                <div className="absolute top-[15%] right-[5%] opacity-[0.03] text-purple-900 -rotate-12">
                    <Heart size={400} strokeWidth={0.5} />
                </div>
                <div className="absolute bottom-[20%] left-[2%] opacity-[0.02] text-indigo-900 rotate-12">
                    <Users size={350} strokeWidth={0.5} />
                </div>
            </div>

            <div className="relative z-10 w-full">
                {/* Header Section */}
                <section className="max-w-5xl mx-auto px-6 md:px-12 text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-100 bg-white/40 backdrop-blur-sm shadow-sm mb-8">
                            <Eye size={14} className="text-purple-600" />
                            <span className="text-[10px] uppercase font-black tracking-[0.2em] text-purple-900/70">Empowering Minds</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black text-[#1a0a2a] mb-10 tracking-tight leading-[0.9]">
                            About <span className="text-purple-600">Puthal.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-semibold">
                            Empowering individuals to prioritize their mental health through accessible, compassionate, and evidence-based support.
                        </p>
                    </motion.div>
                </section>

                {/* Vision & Mission Section */}
                <section className="max-w-7xl mx-auto px-6 md:px-12 mb-40">
                    <div className="grid md:grid-cols-2 gap-10 md:gap-14">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="group bg-white/70 backdrop-blur-xl rounded-[3.5rem] p-12 md:p-16 shadow-[0_20px_50px_-20px_rgba(168,85,247,0.08)] border border-purple-100/50 relative overflow-hidden h-full"
                        >
                            <div className="absolute top-0 right-0 p-12 opacity-[0.03] text-purple-600">
                                <Eye size={200} strokeWidth={0.5} />
                            </div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-purple-100 rounded-3xl flex items-center justify-center mb-10">
                                    <Eye size={32} className="text-purple-600" />
                                </div>
                                <h2 className="text-4xl font-black text-[#1a0a2a] mb-6 tracking-tight">Our Vision</h2>
                                <p className="text-slate-500 text-lg leading-relaxed font-semibold">
                                    To create a world where mental health support is accessible to everyone, breaking the stigma and empowering individuals to seek help without hesitation. We envision a society where emotional well-being is prioritized and celebrated.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="group bg-white/70 backdrop-blur-xl rounded-[3.5rem] p-12 md:p-16 shadow-[0_20px_50px_-20px_rgba(168,85,247,0.08)] border border-purple-100/50 relative overflow-hidden h-full"
                        >
                            <div className="absolute top-0 right-0 p-12 opacity-[0.03] text-purple-600">
                                <Target size={200} strokeWidth={0.5} />
                            </div>
                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-purple-100 rounded-3xl flex items-center justify-center mb-10">
                                    <Target size={32} className="text-purple-600" />
                                </div>
                                <h2 className="text-4xl font-black text-[#1a0a2a] mb-6 tracking-tight">Our Mission</h2>
                                <p className="text-slate-500 text-lg leading-relaxed font-semibold">
                                    To provide comprehensive, technology-driven mental health solutions that combine professional expertise with user-friendly tools. We aim to make mental wellness accessible, affordable, and effective for all individuals, regardless of their background or circumstances.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Who We Serve Section */}
                <section className="max-w-7xl mx-auto px-6 md:px-12 mb-40">
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-6xl font-black text-[#1a0a2a] tracking-tight mb-6">Who We Serve</h2>
                            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-semibold">
                                Our services are designed for everyone seeking to improve their mental well-being
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {whoWeServe.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.15 }}
                                className="group bg-white border border-purple-100 p-10 md:p-12 rounded-[3.5rem] shadow-[0_10px_30px_-10px_rgba(168,85,247,0.05)] hover:shadow-[0_30px_60px_-15px_rgba(168,85,247,0.1)] transition-all duration-500 flex flex-col items-start text-left"
                            >
                                <div className={`w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-8`}>
                                    <item.icon size={28} className="text-purple-600" />
                                </div>
                                <h3 className="text-2xl font-black text-[#1a0a2a] mb-4 tracking-tight group-hover:text-purple-600 transition-colors duration-300">{item.title}</h3>
                                <p className="text-slate-500 text-base leading-relaxed font-semibold">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Our Field Work Section */}
                <section className="relative py-32 md:py-48 px-6 overflow-hidden">
                    {/* Unique Impact Section Background */}
                    <div className="absolute inset-0 bg-[#f8f5ff] z-0">
                        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `linear-gradient(#1a0a2a 1px, transparent 1px), linear-gradient(90deg, #1a0a2a 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
                    </div>

                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="text-center mb-24">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="text-4xl md:text-6xl font-black text-[#1a0a2a] tracking-tight mb-6">Our Field Work</h2>
                                <p className="text-xl text-slate-500 max-w-2xl mx-auto font-semibold">
                                    Making a real difference in communities through direct engagement and support
                                </p>
                            </motion.div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12">
                            {fieldWorkDetails.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                                    className="bg-white/40 backdrop-blur-sm rounded-[3.5rem] p-10 md:p-14 border border-white h-full flex flex-col items-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.02)]"
                                >
                                    <div className="mb-10">
                                        <h3 className="text-5xl md:text-7xl font-black text-purple-600 mb-2">
                                            {item.value}
                                        </h3>
                                        <p className="text-[10px] font-black text-purple-600/60 uppercase tracking-[0.3em]">
                                            {item.label}
                                        </p>
                                    </div>
                                    <h4 className="text-2xl font-black text-[#1a0a2a] mb-6 tracking-tight">
                                        {item.name}
                                    </h4>
                                    <p className="text-slate-500 text-base leading-relaxed font-semibold">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutPage;
