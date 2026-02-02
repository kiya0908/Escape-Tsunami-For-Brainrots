import React from 'react';
import { Radiation, Key, Gift } from 'lucide-react';

const EventsSecrets: React.FC = () => {
    return (
        <div className="py-16 md:py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* 标题区域 */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-text-main mb-4">Events & Secrets</h2>
                    <p className="text-text-muted max-w-2xl mx-auto">Discover hidden areas, limited-time events, and special codes to boost your progress.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* 辐射事件 */}
                    <div className="glass-panel p-8 rounded-2xl border border-neon-green/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Radiation className="w-32 h-32 text-neon-green" />
                        </div>

                        <h3 className="text-2xl font-bold text-text-main mb-4 flex items-center gap-2">
                            <Radiation className="text-neon-green" /> Radioactive Events
                        </h3>

                        <p className="text-text-muted mb-6 text-base leading-relaxed">
                            Every 30-45 minutes, a Radioactive Tsunami hits. The water turns green, and <strong className="text-neon-green">Radioactive Coins</strong> spawn.
                        </p>

                        <div className="space-y-5">
                            <div className="bg-surface/50 p-4 rounded-lg border-l-2 border-neon-green">
                                <h4 className="font-bold text-text-main mb-2">Objective A: Bomb Defusal</h4>
                                <p className="text-base text-text-muted leading-relaxed">Locate bombs spawned in random zones. Interact to diffuse for massive coin rewards.</p>
                            </div>
                            <div className="bg-surface/50 p-4 rounded-lg border-l-2 border-neon-green">
                                <h4 className="font-bold text-text-main mb-2">Objective B: The Green Tunnel</h4>
                                <p className="text-base text-text-muted leading-relaxed">A secret tunnel opens in Sandy Zone during event. Complete parkour inside for exclusive Radioactive Brainrots.</p>
                            </div>
                        </div>
                    </div>

                    {/* 秘密与代码 */}
                    <div className="space-y-8">
                        <div className="bg-surface p-6 rounded-xl border border-neon-purple/20">
                            <h3 className="text-xl font-bold text-text-main mb-3 flex items-center gap-2">
                                <Key className="text-neon-purple" /> Secrets & Hidden Areas
                            </h3>
                            <p className="text-text-muted text-base mb-4 leading-relaxed">
                                The map is full of illusory walls and invisible platforms. We&apos;ve compiled a full guide with screenshots.
                            </p>
                            <ul className="space-y-3 text-base text-text-muted">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-neon-purple"></span> Secret Room behind the waterfall (Lobby)
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-neon-purple"></span> Invisible ladder in the Void Zone
                                </li>
                            </ul>
                            <button className="mt-4 text-neon-purple text-sm font-bold hover:underline">View All Secret Locations &rarr;</button>
                        </div>

                        <div className="bg-surface p-6 rounded-xl border border-neon-cyan/20">
                            <h3 className="text-xl font-bold text-text-main mb-3 flex items-center gap-2">
                                <Gift className="text-neon-cyan" /> Active Codes
                            </h3>
                            <div className="bg-black/40 rounded p-3 font-mono text-neon-cyan text-sm mb-2 flex justify-between">
                                <span>TSUNAMI2024</span>
                                <span className="text-gray-500 text-xs">Expires soon</span>
                            </div>
                            <div className="bg-black/40 rounded p-3 font-mono text-neon-cyan text-sm mb-4 flex justify-between">
                                <span>BRAINROT_GOD</span>
                                <span className="text-gray-500 text-xs">Active</span>
                            </div>
                            <p className="text-xs text-text-muted">
                                To redeem: Open menu &gt; Settings &gt; Blue Bird Icon. Codes are case-sensitive!
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default EventsSecrets;
