"use client";

import React from "react";
import { motion } from "framer-motion";
import { Wind, BookOpen, Headphones, Shield, HeartPulse, Users, CheckCircle, ArrowRight } from "lucide-react";

export default function ServicesPage() {
    const services = [
        {
            title: "Breathing Nature",
            description: "Reconnect with your inner peace through guided breathing exercises inspired by natural rhythms.",
            icon: <Wind size={32} className="text-purple-600 mb-6" />,
            color: "from-purple-50 to-indigo-50"
        },
        {
            title: "Tune Journaling",
            description: "Express your thoughts and track your emotional journey with our intuitive journaling platform.",
            icon: <BookOpen size={32} className="text-purple-600 mb-6" />,
            color: "from-indigo-50 to-blue-50"
        },
        {
            title: "Guided Mediation",
            description: "Find clarity and focus with curated meditation sessions tailored to your mental state.",
            icon: <Headphones size={32} className="text-purple-600 mb-6" />,
            color: "from-blue-50 to-cyan-50"
        },
        {
            title: "Recovery Tool",
            description: "Structured programs and tools designed to support your path to mental and emotional recovery.",
            icon: <Shield size={32} className="text-purple-600 mb-6" />,
            color: "from-cyan-50 to-teal-50"
        },
        {
            title: "Mental Health Assistant",
            description: "24/7 AI-powered companion providing support, coping strategies, and a listening ear.",
            icon: <HeartPulse size={32} className="text-purple-600 mb-6" />,
            color: "from-teal-50 to-emerald-50"
        },
        {
            title: "Community Support",
            description: "Join safe, moderated spaces to connect with others sharing similar wellness journeys.",
            icon: <Users size={32} className="text-purple-600 mb-6" />,
            color: "from-emerald-50 to-green-50"
        }
    ];

    const reasons = [
        {
            title: "Evidence-Based Approach",
            description: "All our tools and methodologies are grounded in clinical research and professional psychological practices."
        },
        {
            title: "Personalized Experience",
            description: "We adapt to your unique needs, providing customized pathways for your personal wellness journey."
        },
        {
            title: "Privacy First",
            description: "Your data and personal reflections are protected with enterprise-grade encryption and strictest privacy policies."
        },
        {
            title: "Holistic Ecosystem",
            description: "We treat wellness as a complete ecosystem, addressing mind, body, and emotional well-being together."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 pt-32 pb-24 overflow-hidden">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl flex flex-col items-center"
                >
                    <span className="text-sm font-bold tracking-widest text-purple-600 uppercase mb-6 bg-purple-100 py-2 px-6 rounded-full">
                        Our Offerings
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight tracking-tight mb-8">
                        Comprehensive <br /> Wellness Solutions
                    </h1>
                    <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed mb-12 max-w-2xl">
                        Discover a holistic suite of tools designed to nurture your mind, body, and spirit. From guided exercises to AI assistance, we provide everything you need for mental clarity.
                    </p>
                    <button className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-purple-600 transition-colors duration-500 group">
                        Start Your Journey
                        <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                    </button>
                </motion.div>
            </section>

            {/* Services Section */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 mb-40">
                <div className="flex flex-col items-center mb-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">Explore Our Services</h2>
                    <div className="w-24 h-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-wrap justify-center gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] flex flex-col p-10 rounded-3xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(168,85,247,0.1)] transition-all duration-500 hover:-translate-y-2 border border-slate-100 group"
                        >
                            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.color} mb-8 group-hover:scale-110 transition-transform duration-500`}>
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{service.title}</h3>
                            <p className="text-slate-500 leading-relaxed flex-grow">
                                {service.description}
                            </p>
                            <div className="mt-8 flex items-center gap-2 text-purple-600 font-bold text-sm uppercase tracking-widest cursor-pointer group-hover:gap-4 transition-all duration-300">
                                Learn More <ArrowRight size={16} />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Why Choose Us Section */}
            <section className="bg-slate-900 text-white py-32 mt-20 relative overflow-hidden">
                {/* Abstract background elements */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

                <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-20">

                        <div className="w-full lg:w-2/5 flex flex-col justify-center">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <span className="text-sm font-bold tracking-widest text-purple-400 uppercase mb-6 inline-block">The Puthal Difference</span>
                                <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8 leading-tight">Why Choose Us?</h2>
                                <p className="text-slate-400 text-lg leading-relaxed mb-10 border-l-4 border-purple-500 pl-4">
                                    We blend advanced technology with proven psychological principles to create a sanctuary for your mind. Our commitment is entirely focused on your growth and sustained well-being.
                                </p>
                                <button className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-purple-100 transition-colors duration-300 uppercase tracking-widest text-sm">
                                    Join Our Community
                                </button>
                            </motion.div>
                        </div>

                        <div className="w-full lg:w-3/5">
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="flex flex-wrap gap-6"
                            >
                                {reasons.map((reason, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className="w-full sm:w-[calc(50%-0.75rem)] flex flex-col p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-500"
                                    >
                                        <CheckCircle className="text-purple-400 mb-6" size={28} />
                                        <h3 className="text-xl font-bold mb-4 tracking-tight">{reason.title}</h3>
                                        <p className="text-slate-400 leading-relaxed text-sm">
                                            {reason.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="max-w-5xl mx-auto px-6 md:px-12 py-32 text-center relative z-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-gradient-to-br from-purple-100 to-indigo-50 rounded-[3rem] p-16 md:p-24 flex flex-col items-center border border-white shadow-xl shadow-purple-900/5 relative overflow-hidden"
                >
                    {/* Decorative shapes inside CTA */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-200/40 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6 relative z-10">Ready to prioritize yourself?</h2>
                    <p className="text-slate-600 text-lg mb-10 max-w-2xl font-medium relative z-10">
                        Take the first step towards a more balanced, peaceful, and resilient version of you.
                    </p>
                    <button className="relative z-10 bg-purple-600 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-slate-900 shadow-xl shadow-purple-600/30 hover:shadow-xl hover:shadow-slate-900/20 transition-all duration-500 hover:-translate-y-1">
                        Get Started Free
                    </button>
                </motion.div>
            </section>
        </div>
    );
}
