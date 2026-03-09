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
        <div className="pt-32 pb-24 bg-[#fdfaff] min-h-screen text-slate-800 font-sans">

            {/* Header Section */}
            <section className="max-w-4xl mx-auto px-6 md:px-12 text-center mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-6 tracking-tight">
                        About Puthal
                    </h1>
                    <p className="text-[15px] md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
                        Empowering individuals to prioritize their mental health through accessible, compassionate, and evidence-based support.
                    </p>
                </motion.div>
            </section>

            {/* Vision & Mission Section */}
            <section className="max-w-6xl mx-auto px-6 md:px-12 mb-32">
                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-white rounded-[2rem] p-10 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(168,85,247,0.08)] transition-all duration-500 border border-slate-50"
                    >
                        <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-8">
                            <Eye size={24} className="text-purple-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-[#1a0a2a] mb-4">Our Vision</h2>
                        <p className="text-slate-500 text-[15px] leading-relaxed font-medium">
                            To create a world where mental health support is accessible to everyone, breaking the stigma and empowering individuals to seek help without hesitation. We envision a society where emotional well-being is prioritized and celebrated.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white rounded-[2rem] p-10 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(168,85,247,0.08)] transition-all duration-500 border border-slate-50"
                    >
                        <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-8">
                            <Target size={24} className="text-purple-600" />
                        </div>
                        <h2 className="text-2xl font-bold text-[#1a0a2a] mb-4">Our Mission</h2>
                        <p className="text-slate-500 text-[15px] leading-relaxed font-medium">
                            To provide comprehensive, technology-driven mental health solutions that combine professional expertise with user-friendly tools. We aim to make mental wellness accessible, affordable, and effective for all individuals, regardless of their background or circumstances.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Who We Serve Section */}
            <section className="max-w-6xl mx-auto px-6 md:px-12 mb-32">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-black text-[#1a0a2a] tracking-tight mb-4">Who We Serve</h2>
                        <p className="text-slate-500 text-[15px] max-w-xl mx-auto font-medium">
                            Our services are designed for everyone seeking to improve their mental well-being
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {whoWeServe.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(168,85,247,0.08)] transition-all duration-500 border border-slate-50 flex flex-col items-center"
                        >
                            <div className={`w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center mb-6`}>
                                <item.icon size={24} className="text-purple-600" />
                            </div>
                            <h3 className="text-lg font-bold text-[#1a0a2a] mb-3">{item.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Our Field Work Section */}
            <section className="max-w-6xl mx-auto px-6 md:px-12 mb-16">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-black text-[#1a0a2a] tracking-tight mb-4">Our Field Work</h2>
                        <p className="text-slate-500 text-[15px] max-w-xl mx-auto font-medium">
                            Making a real difference in communities through direct engagement and support
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {fieldWorkDetails.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(168,85,247,0.08)] transition-all duration-500 border border-slate-50 flex flex-col items-center"
                        >
                            <div className="mb-6">
                                <h3 className="text-4xl md:text-5xl font-black text-purple-600 mb-2 truncate">
                                    {item.value}
                                </h3>
                                <p className="text-xs font-bold text-purple-600 uppercase tracking-widest">
                                    {item.label}
                                </p>
                            </div>
                            <h4 className="text-base font-bold text-[#1a0a2a] mb-3">
                                {item.name}
                            </h4>
                            <p className="text-slate-500 text-[13px] leading-relaxed font-medium text-justify md:text-center text-last-center">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default AboutPage;
