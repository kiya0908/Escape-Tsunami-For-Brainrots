import React from 'react';
import { ArrowDown, ArrowRight, Sword, Shield, Zap, Coins, Trophy } from 'lucide-react';
import VideoSection from './VideoSection';

// 步骤组件
const LoopStep = ({ step, text, isLast }: { step: string, text: string, isLast?: boolean }) => (
    <div className="flex flex-col items-center">
        <div className="flex flex-col items-center p-4 bg-surface rounded-lg border border-text-main/10 w-full">
            <span className="text-neon-purple font-bold text-base mb-2">Step {step}</span>
            <span className="text-text-main font-semibold text-center text-base">{text}</span>
        </div>
        {/* 移动端垂直连接线 */}
        {!isLast && (
            <div className="md:hidden flex flex-col items-center py-3">
                <ArrowDown className="w-5 h-5 text-text-muted" />
            </div>
        )}
    </div>
);

// 特性卡片组件
const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <div className="glass-panel p-6 rounded-xl border border-text-main/5 hover:bg-surfaceHighlight/50 transition-colors">
        <div className="mb-4 p-3 bg-surfaceHighlight/50 rounded-lg w-fit">
            {icon}
        </div>
        <h4 className="text-lg font-bold text-text-main mb-3">{title}</h4>
        <p className="text-text-muted text-base leading-relaxed">{desc}</p>
    </div>
);

const IntroSection: React.FC = () => {
    const steps = [
        { step: "1", text: "Run & Explore", desc: "Navigate through dangerous zones filled with scattered Brainrots" },
        { step: "2", text: "Dodge Tsunami", desc: "Survive periodic elemental waves that sweep through the map" },
        { step: "3", text: "Collect Loot", desc: "Gather Brainrots and return them safely to your base" },
        { step: "4", text: "Upgrade Base", desc: "Use income to boost your stats and bag capacity" },
        { step: "5", text: "Rebirth", desc: "Reset for permanent multipliers and access new zones" },
    ];

    const features = [
        {
            icon: <Sword className="w-6 h-6 text-neon-cyan" />,
            title: "Dynamic Tsunami System",
            desc: "Multiple elemental waves—Fire, Ice, Lightning, and more—each with unique behaviors. Master the timing and patterns to survive every encounter. Higher zones bring deadlier tsunamis with faster frequencies."
        },
        {
            icon: <Shield className="w-6 h-6 text-neon-purple" />,
            title: "Base Building Tycoon",
            desc: "Build and upgrade your personal sanctuary. Each Brainrot placed generates passive income, creating a rewarding progression system. Strategize your collection to maximize profit per minute."
        },
        {
            icon: <Zap className="w-6 h-6 text-neon-green" />,
            title: "Character Progression",
            desc: "Upgrade your movement speed, jump height, and inventory capacity. These stats are crucial for surviving late-game zones and carrying valuable loot. Every upgrade brings you closer to the deepest areas."
        },
        {
            icon: <Coins className="w-6 h-6 text-neon-cyan" />,
            title: "Rare Collectibles",
            desc: "Discover hundreds of Brainrot characters ranging from Common to Legendary rarities. Each has unique spawn patterns and values. Complete your collection and show off your rarest finds."
        },
        {
            icon: <Trophy className="w-6 h-6 text-neon-purple" />,
            title: "Rebirth System",
            desc: "When you've mastered your current zone, rebirth for permanent multipliers. Each rebirth unlocks access to new, more dangerous areas with exponentially better rewards. The cycle never ends."
        },
        {
            icon: <ArrowDown className="w-6 h-6 text-neon-green" />,
            title: "Community Events",
            desc: "Participate in special events with exclusive Brainrot drops. Limited-time opportunities to acquire rare collectibles not found anywhere else. Stay connected to never miss these moments."
        }
    ];

    return (
        <div className="py-16 md:py-20 bg-surface/30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-text-main mb-4">What is Escape Tsunami For Brainrots?</h2>
                    <div className="h-1 w-20 bg-neon-purple mx-auto rounded-full"></div>
                </div>

                <div className="prose prose-invert max-w-none text-text-muted text-lg leading-[1.8] space-y-8">
                    <p>
                        <strong className="text-neon-cyan">Escape Tsunami For Brainrots</strong> (also known as ETFB) is a high-stakes survival and collection game on Roblox. This thrilling experience blends the excitement of outrunning massive elemental waves with the chaotic fun of collecting &quot;brainrot&quot; meme characters. ETFB isn&apos;t just a running simulator—it&apos;s a base-building tycoon wrapped in a disaster survival package.
                    </p>
                    <p>
                        The core gameplay loop is addictive: you enter dangerous zones to scavenge for Brainrots while dodging periodic, deadly tsunamis. Successfully bringing these items back to your base generates passive income. You use that money to upgrade your speed, jump height, and bag capacity, allowing you to venture into deeper, more dangerous zones for rarer loot.
                    </p>

                    {/* 步骤流：移动端垂直，桌面端水平 */}
                    <div className="mt-8">
                        <div className="text-center mb-6">
                            <h3 className="text-xl font-bold text-text-main mb-2">Gameplay Loop</h3>
                            <p className="text-text-muted text-base">Master these 5 essential steps</p>
                        </div>

                        {/* 移动端：垂直布局 */}
                        <div className="flex flex-col gap-0 md:hidden">
                            {steps.map((s, idx) => (
                                <LoopStep
                                    key={s.step}
                                    step={s.step}
                                    text={s.text}
                                    isLast={idx === steps.length - 1}
                                />
                            ))}
                        </div>

                        {/* 桌面端：水平布局 */}
                        <div className="hidden md:grid md:grid-cols-9 gap-3 items-center">
                            {steps.map((s, idx) => (
                                <React.Fragment key={s.step}>
                                    <div className="flex flex-col items-center p-4 bg-surface rounded-lg border border-text-main/10">
                                        <span className="text-neon-purple font-bold text-base mb-2">Step {s.step}</span>
                                        <span className="text-text-main font-semibold text-center text-base">{s.text}</span>
                                    </div>
                                    {idx < steps.length - 1 && (
                                        <ArrowRight className="w-6 h-6 text-text-muted mx-auto" />
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    {/* 详细说明 */}
                    <div className="mt-12">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-text-main mb-2">Key Features</h3>
                            <p className="text-text-muted text-base">What makes ETFB unique</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features.map((feature, idx) => (
                                <FeatureCard
                                    key={idx}
                                    icon={feature.icon}
                                    title={feature.title}
                                    desc={feature.desc}
                                />
                            ))}
                        </div>
                    </div>

                    {/* 视频区域 */}
                    <div className="mt-16">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-text-main mb-2">Watch & Learn</h3>
                            <p className="text-text-muted text-base">See the gameplay in action</p>
                        </div>
                        <VideoSection videoIds={['o7EQ33MX2_8', 'kq9n33Qn6YQ']} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroSection;
