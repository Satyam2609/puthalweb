"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Brain, Music, PenTool, Activity } from "lucide-react";

const services = [
    {
        title: "Breathing Exercises",
        description: "Guided breathing techniques to calm your mind and reduce stress",
        icon: Brain,
        color: "bg-purple-100",
        iconColor: "text-purple-600",
    },
    {
        title: "Nature Tunes",
        description: "Soothing natural sounds to help you relax and find peace",
        icon: Music,
        color: "bg-indigo-100",
        iconColor: "text-indigo-600",
    },
    {
        title: "Journaling",
        description: "Express your thoughts and track your mental wellness journey",
        icon: PenTool,
        color: "bg-violet-100",
        iconColor: "text-violet-600",
    },
    {
        title: "Meditation & Recovery",
        description: "Professional meditation sessions for your mental health",
        icon: Activity,
        color: "bg-pink-100",
        iconColor: "text-pink-600",
    },
];

const slowFloat = {};
const slowFloatReverse = {};

const smoothReveal: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
        opacity: 1,
        transition: {
            duration: 0.8,
            delay: i * 0.1,
            ease: "easeOut",
        },
    }),
};

const ServicesSection = () => {
    return (
        <section className="py-24 px-6 bg-gradient-to-b from-white to-purple-50/30 overflow-hidden relative">
            {/* Background Decorative Symbols */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute -left-20 top-20 opacity-[0.08] text-purple-600">
                    <Brain size={500} strokeWidth={0.5} />
                </div>
                <div className="absolute -right-32 bottom-20 opacity-[0.06] text-pink-600">
                    <Activity size={600} strokeWidth={0.5} />
                </div>
                <div className="absolute left-[30%] -bottom-20 opacity-[0.06] text-indigo-600">
                    <Music size={400} strokeWidth={0.5} />
                </div>
                <div className="absolute right-[20%] -top-20 opacity-[0.06] text-violet-600">
                    <PenTool size={350} strokeWidth={0.5} />
                </div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        variants={smoothReveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0}
                        className="text-4xl md:text-5xl font-black text-[#1a0a2a] mb-4"
                    >
                        Our Services
                    </motion.h2>
                    <motion.p
                        variants={smoothReveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={1}
                        className="text-lg text-slate-500 font-medium max-w-2xl mx-auto"
                    >
                        Comprehensive mental wellness tools designed to support your journey
                    </motion.p>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={smoothReveal}
                            custom={index + 2}
                            whileHover={{ transition: { duration: 0.2, ease: "easeOut" } }}
                            className="group p-10 md:p-14 rounded-[3.5rem] bg-white border border-purple-100 shadow-[0_10px_30px_-10px_rgba(168,85,247,0.08)] hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.12)] transition-all duration-500 overflow-hidden relative"
                        >
                            {/* Subtle Background Mesh/Gradient inside card */}
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-purple-50/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative z-10">
                                <div className={`w-20 h-20 ${service.color} rounded-3xl flex items-center justify-center mb-10 transition-transform duration-500`}>
                                    <service.icon className={service.iconColor} size={44} />
                                </div>
                                <h3 className="text-3xl md:text-4xl font-black text-[#1a0a2a] mb-6 group-hover:text-purple-600 transition-colors duration-500 tracking-tight">
                                    {service.title}
                                </h3>
                                <p className="text-slate-500 leading-relaxed font-semibold text-base md:text-lg max-w-sm">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;
