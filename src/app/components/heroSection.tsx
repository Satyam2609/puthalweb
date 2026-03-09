"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { Sparkles, Star, Users, Heart, Shield, Clock, Music, Wind, PenTool, Brain, MessageSquare } from "lucide-react";

const FloatingCard = ({ children, className, delay = 0 }: { children: React.ReactNode, className: string, delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
            duration: 1.4,
            delay,
            ease: [0.22, 1, 0.36, 1]
        }}
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
        className={`absolute p-5 bg-white/70 backdrop-blur-xl border border-purple-100/50 rounded-2xl shadow-[0_20px_40px_-15px_rgba(168,85,247,0.08)] z-20 hidden lg:flex items-center gap-4 ${className}`}
    >
        {children}
    </motion.div>
);

const HeroSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.98]);

    const scaleReveal: Variants = {
        hidden: { opacity: 0 },
        visible: (i: number) => ({
            opacity: 1,
            transition: {
                duration: 1.2,
                delay: 0.1 + i * 0.15,
                ease: [0.22, 1, 0.36, 1],
            },
        }),
    };

    const slowFade: Variants = {
        hidden: { opacity: 0 },
        visible: (i: number) => ({
            opacity: 1,
            transition: {
                duration: 1,
                delay: 0.4 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
            },
        }),
    };

    return (
        <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center bg-[#fdfaff] overflow-hidden pt-32 pb-20">
            {/* Premium Background Ambiance */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-5%] w-[45%] h-[45%] bg-purple-200/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[45%] h-[45%] bg-indigo-200/15 rounded-full blur-[100px]" />

                {/* Subtle Geometric Detail */}
                <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `radial-gradient(#1a0a2a 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
            </div>

            <motion.div
                style={{ opacity, scale }}
                className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col items-center text-center"
            >
                {/* Refined Center Badge */}
                <motion.div
                    variants={slowFade}
                    initial="hidden"
                    animate="visible"
                    custom={0}
                    className="px-4 py-1.5 rounded-full border border-purple-100 bg-white/40 backdrop-blur-sm shadow-sm flex items-center gap-2 mb-10"
                >
                    <Sparkles size={14} className="text-purple-600" />
                    <span className="text-[10px] uppercase font-black tracking-[0.2em] text-purple-900/70">Trusted by over 12K+ Users Globally</span>
                </motion.div>

                {/* Hero Typography Section */}
                <div className="max-w-5xl mx-auto mb-16">
                    <h1 className="text-7xl md:text-[9.5rem] font-black tracking-[-0.05em] leading-[0.85] text-[#1a0a2a] mb-10 overflow-hidden">
                        <motion.span
                            variants={scaleReveal}
                            initial="hidden"
                            animate="visible"
                            custom={0}
                            className="block"
                        >
                            Peace of Mind.
                        </motion.span>
                        <motion.span
                            variants={scaleReveal}
                            initial="hidden"
                            animate="visible"
                            custom={1}
                            className="block text-purple-600"
                        >
                            Redefined.
                        </motion.span>
                    </h1>

                    <motion.div
                        variants={scaleReveal}
                        initial="hidden"
                        animate="visible"
                        custom={2}
                        className="max-w-2xl mx-auto"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-400 mb-6 tracking-tight leading-tight">
                            Mann ki Uthal, <span className="text-purple-600 font-black">Solve on Puthal.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed">
                            Your comprehensive sanctuary for mental wellness. Navigate your emotional journey with professional tools and guided support.
                        </p>
                    </motion.div>
                </div>




                {/* Floating Cards (Positioned to avoid overlap with central text) */}
                <FloatingCard className="top-[8%] left-[-4%] -rotate-3" delay={1.0}>
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                        <Users size={20} />
                    </div>
                    <div className="text-left">
                        <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1">Wellness Hub</p>
                        <p className="text-base font-black text-[#1a0a2a]">50+ Experts</p>
                    </div>
                </FloatingCard>

                <FloatingCard className="bottom-[25%] left-[-2%] rotate-2" delay={1.4}>
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                        <MessageSquare size={20} />
                    </div>
                    <div className="text-left">
                        <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1">AI Assistant</p>
                        <p className="text-base font-black text-[#1a0a2a]">24/7 Support</p>
                    </div>
                </FloatingCard>

                <FloatingCard className="top-[15%] right-[-4%] rotate-3" delay={1.2}>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                        <Music size={20} />
                    </div>
                    <div className="text-left">
                        <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1">Nature Tunes</p>
                        <p className="text-base font-black text-[#1a0a2a]">Deep Focus</p>
                    </div>
                </FloatingCard>

                <FloatingCard className="bottom-[20%] right-[-2%] -rotate-2" delay={1.6}>
                    <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                        <Wind size={20} />
                    </div>
                    <div className="text-left">
                        <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 leading-none mb-1">Breathing</p>
                        <p className="text-base font-black text-[#1a0a2a]">Guided Setup</p>
                    </div>
                </FloatingCard>
            </motion.div>

            {/* Modern Partner Logotypes */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 1, delay: 1.8 }}
                className="mt-auto w-full pt-24 border-t border-purple-50/50"
            >
                <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-12 grayscale">
                    {["TECHMIND", "ELVATE", "COREWELL", "SENTIEN", "MINDSET"].map((brand) => (
                        <span key={brand} className="text-sm font-black tracking-[0.5em] text-[#1a0a2a]">
                            {brand}
                        </span>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
