"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Wind, BookOpen, Headphones, Shield, HeartPulse, Users, CheckCircle, ArrowRight } from "lucide-react";

export default function ServicesPage() {
    const services = [
        {
            title: "Breathing Nature",
            description: "Reconnect with your inner peace through guided breathing exercises inspired by natural rhythms.",
            icon: <Wind size={36} className="text-purple-600 mb-8" />,
            color: "from-purple-50 to-indigo-50"
        },
        {
            title: "Tune Journaling",
            description: "Express your thoughts and track your emotional journey with our intuitive journaling platform.",
            icon: <BookOpen size={36} className="text-purple-600 mb-8" />,
            color: "from-indigo-50 to-blue-50"
        },
        {
            title: "Guided Mediation",
            description: "Find clarity and focus with curated meditation sessions tailored to your mental state.",
            icon: <Headphones size={36} className="text-purple-600 mb-8" />,
            color: "from-blue-50 to-cyan-50"
        },
        {
            title: "Recovery Tool",
            description: "Structured programs and tools designed to support your path to mental and emotional recovery.",
            icon: <Shield size={36} className="text-purple-600 mb-8" />,
            color: "from-cyan-50 to-teal-50"
        },
        {
            title: "Mental Health Assistant",
            description: "24/7 AI-powered companion providing support, coping strategies, and a listening ear.",
            icon: <HeartPulse size={36} className="text-purple-600 mb-8" />,
            color: "from-teal-50 to-emerald-50"
        },
        {
            title: "Community Support",
            description: "Join safe, moderated spaces to connect with others sharing similar wellness journeys.",
            icon: <Users size={36} className="text-purple-600 mb-8" />,
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

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20, scale: 0.98 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <div className="relative min-h-screen bg-[#fdfaff] text-slate-800 pt-32 pb-24 overflow-hidden">
            {/* Background Ambiance */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute top-[-5%] left-[-5%] w-[45%] h-[45%] bg-purple-200/15 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-indigo-200/15 rounded-full blur-[120px]" />

                {/* Geometric Grid Texture */}
                <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: `radial-gradient(#1a0a2a 1px, transparent 1px)`, backgroundSize: "50px 50px" }} />

                {/* Decorative Background Icons */}
                <div className="absolute top-[15%] left-[5%] opacity-[0.03] text-purple-900 -rotate-12">
                    <Wind size={400} strokeWidth={0.5} />
                </div>
                <div className="absolute bottom-[20%] right-[2%] opacity-[0.02] text-indigo-900 rotate-12">
                    <BookOpen size={350} strokeWidth={0.5} />
                </div>
            </div>

            <div className="relative z-10">
                {/* Hero Section */}
                <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32 text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="max-w-4xl mx-auto flex flex-col items-center"
                    >
                        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-purple-100 bg-white/50 backdrop-blur-sm shadow-sm mb-10">
                            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
                            <span className="text-[11px] uppercase font-black tracking-[0.3em] text-purple-900/80">Our Wellness Offerings</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black text-[#1a0a2a] leading-[0.9] tracking-tight mb-10">
                            Comprehensive <br /> <span className="text-purple-600">Solutions.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-500 font-semibold leading-relaxed mb-12 max-w-3xl">
                            Discover a holistic suite of tools designed to nurture your mind, body, and spirit. From guided exercises to AI assistance, we provide everything you need for mental clarity.
                        </p>
                        <button className="bg-[#1a0a2a] text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-purple-600 transition-all duration-300 shadow-[0_15px_40px_-10px_rgba(26,10,42,0.3)] hover:shadow-[0_20px_50px_-10px_rgba(147,51,234,0.3)]">
                            Start Your Journey
                        </button>
                    </motion.div>
                </section>

                {/* Services Grid Section */}
                <section className="max-w-7xl mx-auto px-6 md:px-12 mb-40">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-black text-[#1a0a2a] tracking-tight mb-6">Explore Our Services</h2>
                        <div className="w-32 h-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mx-auto" />
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14"
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group p-12 rounded-[3.5rem] bg-white border border-purple-50 shadow-[0_15px_50px_-15px_rgba(168,85,247,0.08)] hover:shadow-[0_25px_60px_-15px_rgba(168,85,247,0.12)] transition-all duration-500 relative overflow-hidden"
                            >
                                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center bg-gradient-to-br ${service.color} mb-10 transition-transform duration-500`}>
                                    {service.icon}
                                </div>
                                <h3 className="text-3xl font-black text-[#1a0a2a] mb-6 tracking-tight group-hover:text-purple-600 transition-colors duration-300">{service.title}</h3>
                                <p className="text-slate-500 leading-relaxed font-semibold text-lg flex-grow">
                                    {service.description}
                                </p>
                                <div className="mt-10 pt-8 border-t border-slate-50 flex items-center gap-3 text-purple-600 font-black text-[11px] uppercase tracking-[0.2em] cursor-pointer">
                                    Learn More <ArrowRight size={18} />
                                </div>

                                {/* Subtle corner decoration inside card */}
                                <div className="absolute top-0 right-0 p-10 opacity-[0.02] text-purple-600 -z-10">
                                    {service.icon}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                {/* Why Choose Us Section */}
                <section className="relative py-40 px-6 overflow-hidden">
                    {/* Dark Section Background */}
                    <div className="absolute inset-0 bg-[#0a0510] z-0">
                        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />
                    </div>

                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="flex flex-col lg:flex-row gap-24 items-center">
                            <div className="w-full lg:w-5/12">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1 }}
                                >
                                    <span className="text-[11px] font-black tracking-[0.3em] text-purple-400 uppercase mb-8 inline-block">The Puthal Difference</span>
                                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-10 leading-[0.9]">Why Choose <span className="text-purple-500">Us?</span></h2>
                                    <p className="text-slate-400 text-xl leading-relaxed mb-12 border-l-4 border-purple-500 pl-8 font-medium">
                                        We blend advanced technology with proven psychological principles to create a sanctuary for your mind. Our commitment is entirely focused on your growth and sustained well-being.
                                    </p>
                                    <button className="bg-white text-[#1a0a2a] px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-purple-100 transition-all duration-300 shadow-xl shadow-white/5">
                                        Join Our Community
                                    </button>
                                </motion.div>
                            </div>

                            <div className="w-full lg:w-7/12">
                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-8"
                                >
                                    {reasons.map((reason, index) => (
                                        <motion.div
                                            key={index}
                                            variants={itemVariants}
                                            className="bg-white/5 border border-white/10 backdrop-blur-md rounded-[3rem] p-10 hover:bg-white/10 transition-all duration-500"
                                        >
                                            <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-8">
                                                <CheckCircle className="text-purple-400" size={24} />
                                            </div>
                                            <h3 className="text-2xl font-black text-white mb-4 tracking-tight leading-tight">{reason.title}</h3>
                                            <p className="text-slate-400 leading-relaxed font-semibold text-base">
                                                {reason.description}
                                            </p>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="max-w-7xl mx-auto px-6 md:px-12 py-40">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="bg-gradient-to-br from-purple-100/50 to-indigo-50/50 rounded-[4rem] p-20 md:p-32 border border-white backdrop-blur-sm text-center relative overflow-hidden"
                    >
                        {/* Decorative blobs inside CTA */}
                        <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-white/40 rounded-full blur-3xl" />
                        <div className="absolute bottom-[-20%] left-[-10%] w-96 h-96 bg-purple-200/40 rounded-full blur-3xl" />

                        <h2 className="text-5xl md:text-7xl font-black text-[#1a0a2a] tracking-tight mb-10 relative z-10 leading-[0.9]">
                            Ready to prioritize <br /> <span className="text-purple-600">yourself?</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-slate-600 mb-14 max-w-2xl mx-auto font-semibold relative z-10">
                            Take the first step towards a more balanced, peaceful, and resilient version of you.
                        </p>
                        <button className="relative z-10 bg-[#1a0a2a] text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-sm hover:bg-purple-600 transition-all duration-300 shadow-2xl shadow-purple-900/20 active:scale-95">
                            Get Started Free
                        </button>
                    </motion.div>
                </section>
            </div>
        </div>
    );
}
