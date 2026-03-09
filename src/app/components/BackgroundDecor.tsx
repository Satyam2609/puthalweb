"use client";

import React from "react";
import { Sparkles, Pentagon, Hexagon } from "lucide-react";

const BackgroundDecor = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none select-none bg-[#fdfaff]">
            {/* Static Ambient Gradients - Soft Blooms */}
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-300/[0.03] rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[700px] h-[700px] bg-indigo-300/[0.03] rounded-full blur-[130px]" />
            <div className="absolute top-[40%] left-[-8%] w-[500px] h-[500px] bg-violet-200/[0.02] rounded-full blur-[110px]" />
            <div className="absolute top-[15%] right-[20%] w-[400px] h-[400px] bg-fuchsia-200/[0.02] rounded-full blur-[100px]" />

            {/* Static Geometric Wireframes (Varied & Faint) */}
            <div className="absolute top-[12%] left-[8%] w-40 h-40 border-[1px] border-purple-500/[0.04] rounded-[2.5rem] rotate-[15deg]">
                <div className="absolute inset-4 border border-purple-300/[0.03] rounded-[1.5rem]" />
            </div>

            <div className="absolute bottom-[18%] right-[12%] w-56 h-56 border-[1px] border-indigo-500/[0.04] rounded-full -rotate-12">
                <div className="absolute inset-8 border border-indigo-300/[0.03] rounded-full" />
            </div>

            <div className="absolute top-[65%] left-[5%] w-32 h-32 border-[1px] border-violet-500/[0.04] rounded-[1.5rem] rotate-[35deg]" />
            <div className="absolute top-[35%] right-[6%] w-44 h-44 border-[1px] border-fuchsia-500/[0.04] rounded-[2.5rem] -rotate-[20deg]" />

            {/* Scattered Static Accents (Minimalist Icons at low opacity) */}
            <div className="absolute top-[28%] right-[18%] opacity-[0.04] text-purple-600">
                <Sparkles size={24} />
            </div>
            <div className="absolute bottom-[38%] left-[12%] opacity-[0.04] text-indigo-600">
                <Pentagon size={32} />
            </div>
            <div className="absolute top-[58%] right-[10%] opacity-[0.04] text-violet-600">
                <Hexagon size={28} />
            </div>

            {/* Refined Modular Texture (Very light Cross Pattern) */}
            <div className="absolute inset-0 opacity-[0.01]"
                style={{
                    backgroundImage: `linear-gradient(to right, #9333ea 0.5px, transparent 0.5px), linear-gradient(to bottom, #9333ea 0.5px, transparent 0.5px)`,
                    backgroundSize: '120px 120px'
                }}
            />

            {/* Fine Grain/Dot overlay for detail */}
            <div className="absolute inset-0 opacity-[0.015]"
                style={{
                    backgroundImage: `radial-gradient(#9333ea 0.5px, transparent 0.5px)`,
                    backgroundSize: '40px 40px'
                }}
            />
        </div>
    );
};

export default BackgroundDecor;
