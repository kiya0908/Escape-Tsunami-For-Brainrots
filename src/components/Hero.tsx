import React from 'react';
import { BookOpen, ShieldAlert, Cpu } from 'lucide-react';

// 特性卡片组件
const Feature = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <div className="glass-panel p-6 rounded-xl border border-text-main/5">
        <div className="mb-4 p-3 bg-surfaceHighlight/50 rounded-lg w-fit">
            {icon}
        </div>
        <h3 className="text-lg font-bold text-text-main mb-3">{title}</h3>
        <p className="text-text-muted text-base leading-relaxed">{desc}</p>
    </div>
);

const Hero: React.FC = () => {
    return (
        <div className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
            {/* 背景装饰 */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
                <div className="absolute top-20 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[100px]" />
                <div className="absolute top-40 right-1/4 w-80 h-80 bg-neon-purple/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-flex items-center px-3 py-1 rounded-full border border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan text-sm font-medium mb-6">
                    <span className="relative flex h-2 w-2 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-cyan"></span>
                    </span>
                    Updated for Latest Tsunami Patch
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-text-main mb-6">
                    Escape Tsunami For Brainrots <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple text-glow">
                        Ultimate Wiki, Guides & Tools
                    </span>
                </h1>

                <p className="mt-4 max-w-2xl mx-auto text-xl text-text-muted">
                    Your ultimate Escape Tsunami For Brainrots resource hub. Master tsunami survival mechanics, optimize base income in ETFB, find rare brainrot collectibles, and dominate the leaderboards. The definitive Escape Tsunami For Brainrots guide for beginners and pros alike.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <a href="#brainrots" className="px-8 py-4 rounded-lg bg-neon-cyan text-background font-bold text-lg hover:bg-opacity-90 transition-all shadow-[0_0_20px_rgba(8,170,247,0.3)] hover:shadow-[0_0_30px_rgba(8,170,247,0.5)]">
                        Browse Brainrots
                    </a>
                    <a href="#guide" className="px-8 py-4 rounded-lg border border-text-main/20 bg-surface/50 text-text-main font-semibold text-lg hover:bg-surfaceHighlight backdrop-blur-sm transition-all">
                        Start Guide
                    </a>
                </div>

                {/* 游戏嵌入 Iframe */}
                <div className="mt-16 w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-text-main/10 relative bg-black aspect-video">
                    <iframe
                        src="https://hotgames.io/escape-tsunami-for-brainrots.embed"
                        className="absolute top-0 left-0 w-full h-full"
                        style={{ border: 'none' }}
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title="Escape Tsunami For Brainrots Game"
                    ></iframe>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    <Feature
                        icon={<BookOpen className="w-6 h-6 text-neon-cyan" />}
                        title="ETFB Brainrot Encyclopedia"
                        desc="Complete Escape Tsunami For Brainrots database with detailed stats, rarities, and spawn locations for every brainrot collectible."
                    />
                    <Feature
                        icon={<ShieldAlert className="w-6 h-6 text-neon-purple" />}
                        title="Tsunami Survival Strategy"
                        desc="Master Escape Tsunami For Brainrots with step-by-step strategies to survive waves, find safe spots, and maximize your farming efficiency."
                    />
                    <Feature
                        icon={<Cpu className="w-6 h-6 text-neon-green" />}
                        title="ETFB Optimization Tools"
                        desc="Escape Tsunami For Brainrots calculators to plan upgrades, estimate income, and time your rebirths for maximum progression."
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
