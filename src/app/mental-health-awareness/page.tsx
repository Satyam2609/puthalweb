"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    HeartPulse,
    Brain,
    Users,
    Activity,
    Wind,
    BatteryWarning,
    ChevronRight,
    Info,
    ArrowRight
} from "lucide-react";
import Navbar from "@/app/components/Navbar";

const conditions = [
    {
        id: "depression",
        title: "Depression",
        icon: <HeartPulse className="w-8 h-8 text-purple-600" />,
        description: "A mood disorder that causes a persistent feeling of sadness and loss of interest in daily activities.",
        symptoms: ["Persistent sadness", "Loss of interest", "Changes in sleep/appetite", "Fatigue"],
        color: "from-purple-500/10 to-indigo-500/10",
        borderColor: "border-purple-200/50"
    },
    {
        id: "anxiety",
        title: "Anxiety Disorders",
        icon: <Brain className="w-8 h-8 text-indigo-600" />,
        description: "Characterized by significant feelings of anxiety and fear that interfere with daily life.",
        symptoms: ["Excessive worry", "Restlessness", "Rapid heart rate", "Difficulty concentrating"],
        color: "from-indigo-500/10 to-blue-500/10",
        borderColor: "border-indigo-200/50"
    },
    {
        id: "social-anxiety",
        title: "Social Anxiety",
        icon: <Users className="w-8 h-8 text-blue-600" />,
        description: "An intense, persistent fear of being watched and judged by others affecting social interactions.",
        symptoms: ["Fear of judgement", "Avoiding social events", "Physical symptoms like sweating", "Over-analysis"],
        color: "from-blue-500/10 to-cyan-500/10",
        borderColor: "border-blue-200/50"
    },
    {
        id: "ocd",
        title: "OCD (Obsessive Compulsive)",
        icon: <Activity className="w-8 h-8 text-teal-600" />,
        description: "A pattern of unwanted thoughts and fears (obsessions) that lead you to do repetitive behaviors (compulsions).",
        symptoms: ["Intrusive thoughts", "Compulsive behaviors", "Need for order", "Excessive doubting"],
        color: "from-teal-500/10 to-emerald-500/10",
        borderColor: "border-teal-200/50"
    },
    {
        id: "panic",
        title: "Panic Attacks",
        icon: <Wind className="w-8 h-8 text-purple-500" />,
        description: "Sudden episodes of intense fear that trigger severe physical reactions when there is no real danger.",
        symptoms: ["Heart palpitations", "Shortness of breath", "Fear of losing control", "Chest pain"],
        color: "from-fuchsia-500/10 to-purple-500/10",
        borderColor: "border-fuchsia-200/50"
    },
    {
        id: "burnout",
        title: "Stress & Burnout",
        icon: <BatteryWarning className="w-8 h-8 text-rose-500" />,
        description: "A state of emotional, physical, and mental exhaustion caused by excessive and prolonged stress.",
        symptoms: ["Chronic fatigue", "Cynicism", "Reduced performance", "Lack of motivation"],
        color: "from-rose-500/10 to-orange-500/10",
        borderColor: "border-rose-200/50"
    }
];

export default function MentalHealthAwareness() {
    const [activeCondition, setActiveCondition] = useState<string | null>(null);

    return (
        <main className="min-h-screen bg-slate-50 font-sans selection:bg-purple-200 selection:text-purple-900 overflow-hidden">

            {/* Background Gradients */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-300/20 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-300/20 blur-[120px]" />
            </div>

            <div className="relative z-10 pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/50 border border-purple-200 text-purple-700 text-sm font-semibold mb-6 backdrop-blur-md">
                        <Info size={16} />
                        <span>Understanding the Mind</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
                        Mental Health <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Awareness</span>
                    </h1>
                    <p className="text-lg text-slate-600 leading-relaxed font-medium">
                        Explore common mental health conditions, understand their symptoms, and remember that seeking help is a sign of strength. You are not alone on this journey.
                    </p>
                </motion.div>

                {/* Interactive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {conditions.map((condition, index) => (
                        <motion.div
                            key={condition.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            onClick={() => setActiveCondition(activeCondition === condition.id ? null : condition.id)}
                            className={`
                relative p-8 rounded-3xl cursor-pointer
                bg-white/60 backdrop-blur-xl border ${condition.borderColor}
                shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(168,85,247,0.1)]
                transition-all duration-300 group overflow-hidden
              `}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${condition.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {condition.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-slate-900 mb-3">{condition.title}</h3>
                                <p className="text-slate-600 font-medium leading-relaxed mb-6">
                                    {condition.description}
                                </p>

                                <AnimatePresence>
                                    {activeCondition === condition.id && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pt-4 border-t border-slate-200/60">
                                                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Common Symptoms</h4>
                                                <ul className="space-y-2">
                                                    {condition.symptoms.map((symptom, i) => (
                                                        <li key={i} className="flex items-center gap-2 text-slate-600 text-sm font-medium">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                                            {symptom}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <div className="mt-6 flex items-center text-sm font-bold text-purple-600 group/link">
                                    {activeCondition === condition.id ? "Show Less" : "Learn More"}
                                    <ChevronRight size={16} className={`ml-1 transition-transform duration-300 ${activeCondition === condition.id ? "rotate-90" : "group-hover/link:translate-x-1"}`} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-24 p-12 rounded-[2.5rem] bg-gradient-to-br from-[#1a0a2a] to-[#2a104a] text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px]" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px]" />

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Need Someone to Talk To?</h2>
                        <p className="text-purple-100/80 text-lg mb-8 font-medium">
                            Professional help is available. Don't hesitate to reach out if you or someone you know is struggling.
                        </p>
                        <button className="bg-white text-[#1a0a2a] px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 flex items-center gap-3 mx-auto">
                            Get Professional Help
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </motion.div>

            </div>
        </main>
    );
}
