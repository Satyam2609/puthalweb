"use client";

import React from "react";
import { motion } from "framer-motion";
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

const ServicesSection = () => {
    return (
        <section className="py-24 px-6 bg-gradient-to-b from-white to-purple-50/30">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-black text-[#1a0a2a] mb-4"
                    >
                        Our Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-lg text-slate-500 font-medium max-w-2xl mx-auto"
                    >
                        Comprehensive mental wellness tools designed to support your journey
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ staggerChildren: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                            whileHover={{ y: -5, transition: { duration: 0.3 } }}
                            className="group p-8 rounded-3xl bg-white border border-purple-100/50 shadow-[0_20px_50px_-20px_rgba(168,85,247,0.1)] hover:shadow-[0_40px_80px_-30px_rgba(168,85,247,0.2)] transition-all duration-500"
                        >
                            <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                <service.icon className={service.iconColor} size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-[#1a0a2a] mb-3 group-hover:text-purple-600 transition-colors duration-300">
                                {service.title}
                            </h3>
                            <p className="text-slate-500 leading-relaxed font-medium text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;
