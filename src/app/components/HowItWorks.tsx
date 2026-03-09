"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, Smartphone, Heart } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Download & Register",
        description: "Get our app from the Play Store. Log in and provide accurate responses to our chatbot for a personalized experience.",
        subtext: "Your mental health checklist will be generated based on your answers.",
        icon: Download,
        gradient: "from-purple-500 to-indigo-600",
    },
    {
        number: "02",
        title: "Use Our Services",
        description: "Access breathing exercises, nature tunes, journaling, and more through our intuitive interface.",
        subtext: "If your stress level is low, utilize our services and earn beneficial points!",
        icon: Smartphone,
        gradient: "from-indigo-600 to-violet-600",
    },
    {
        number: "03",
        title: "Get Professional Help",
        description: "If your stress level is high, the app recommends visiting the nearest doctor for professional support.",
        subtext: "Use online meditation and recovery tools for faster improvement alongside professional care.",
        icon: Heart,
        gradient: "from-violet-600 to-purple-500",
    },
];

const HowItWorks = () => {
    return (
        <section className="py-24 px-6 relative overflow-hidden bg-[#fdfaff]">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-purple-200 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-indigo-200 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-purple-600 font-bold tracking-widest uppercase text-sm mb-4 inline-block"
                    >
                        Process
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-[#1a0a2a] mb-6"
                    >
                        How Our Services Work
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="h-1.5 w-24 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto rounded-full mb-6"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-slate-500 font-medium max-w-2xl mx-auto"
                    >
                        A simple three-step process to start your wellness journey
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.2 }}
                            className="relative group h-full"
                        >
                            {/* Connector Line for Desktop */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-24 left-[80%] w-[40%] h-[2px] bg-dashed border-t-2 border-dashed border-purple-200 z-0"></div>
                            )}

                            <div className="bg-white/70 backdrop-blur-xl border border-purple-100 p-10 rounded-[40px] shadow-[0_20px_60px_-15px_rgba(147,51,234,0.06)] hover:shadow-[0_40px_100px_-20px_rgba(147,51,234,0.12)] transition-all duration-500 flex flex-col items-center text-center h-full relative z-10 border-b-[6px] border-b-transparent hover:border-b-purple-500">

                                <div className="absolute top-6 right-8 text-6xl font-black text-purple-600/5 select-none transition-colors group-hover:text-purple-600/10">
                                    {step.number}
                                </div>

                                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-8 shadow-lg shadow-purple-200 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                                    <step.icon className="text-white" size={32} />
                                </div>

                                <h3 className="text-2xl font-extrabold text-[#1a0a2a] mb-4 group-hover:text-purple-600 transition-colors">
                                    {step.title}
                                </h3>

                                <p className="text-slate-600 leading-relaxed font-medium mb-6">
                                    {step.description}
                                </p>

                                <div className="mt-auto pt-6 border-t border-purple-50 w-full">
                                    <p className="text-sm font-semibold text-purple-600 opacity-80">
                                        {step.subtext}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
