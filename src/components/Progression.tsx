import React from 'react';
import { ChevronsUp, Map, Lock, Unlock } from 'lucide-react';

// 升级项组件
const UpgradeItem = ({ title, desc, priority }: { title: string, desc: string, priority: string }) => (
    <div className="flex gap-4">
        <div className="w-12 h-12 bg-surfaceHighlight rounded-lg flex items-center justify-center shrink-0 border border-text-main/5">
            <ChevronsUp className="w-6 h-6 text-neon-green" />
        </div>
        <div>
            <h4 className="text-lg font-bold text-text-main">{title} <span className="text-xs font-normal text-text-muted ml-2 bg-text-main/5 px-2 py-0.5 rounded">Pri: {priority}</span></h4>
            <p className="text-text-muted text-base mt-2 leading-relaxed">{desc}</p>
        </div>
    </div>
);

// 区域组件
const Zone = ({ name, speedReq, desc, loot, status }: { name: string, speedReq: string, desc: string, loot: string, status: 'locked' | 'unlocked' }) => (
    <div className="relative pl-8">
        <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 ${status === 'locked' ? 'bg-background border-text-muted' : 'bg-neon-cyan border-neon-cyan'}`}></div>
        <div className="glass-panel p-5 rounded-lg border border-text-main/5">
            <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-bold text-text-main">{name}</h3>
                <span className="flex items-center gap-1 text-xs font-mono text-neon-purple bg-neon-purple/10 px-2 py-1 rounded">
                    {status === 'locked' ? <Lock className="w-3 h-3" /> : <Unlock className="w-3 h-3" />} {speedReq}
                </span>
            </div>
            <p className="text-text-muted text-base mb-3 leading-relaxed">{desc}</p>
            <div className="text-sm font-semibold text-text-muted">Avg Loot: <span className="text-text-main">{loot}</span></div>
        </div>
    </div>
);

const Progression: React.FC = () => {
    return (
        <div className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* 基地与升级 */}
            <div className="mb-20">
                <h2 className="text-3xl font-bold text-text-main mb-8 flex items-center justify-center gap-3">
                    <ChevronsUp className="text-neon-green" /> Base & Upgrades Priority
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <UpgradeItem
                            title="Walk Speed"
                            desc="The most critical stat. Increases movement speed allowing access to new zones."
                            priority="High"
                        />
                        <UpgradeItem
                            title="Jump Power"
                            desc="Essential for verticality in the Toxic and Void zones. Don't neglect this."
                            priority="Medium"
                        />
                        <UpgradeItem
                            title="Bag Capacity"
                            desc="Increases how many Brainrots you can carry per run. Maximize this for AFK farming."
                            priority="High (Mid-Game)"
                        />
                    </div>
                    <div className="bg-surface p-6 rounded-xl border border-text-main/10">
                        <h3 className="text-xl font-bold text-text-main mb-4">Strategic Advice</h3>
                        <div className="space-y-4">
                            <div className="p-3 bg-text-main/5 rounded-lg border-l-2 border-neon-cyan">
                                <span className="block text-neon-cyan font-bold text-xs uppercase mb-1">Early Game</span>
                                <p className="text-sm text-text-muted">Pour 80% of your cash into <strong>Walk Speed</strong>. Ignore Base Aesthetics. Your goal is to reach the Sandy Zone ASAP.</p>
                            </div>
                            <div className="p-3 bg-text-main/5 rounded-lg border-l-2 border-neon-purple">
                                <span className="block text-neon-purple font-bold text-xs uppercase mb-1">Mid Game</span>
                                <p className="text-sm text-text-muted">Balance <strong>Bag Capacity</strong> with Rebirths. If a Rebirth takes less than 10 minutes to recover from, do it.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 区域 */}
            <div>
                <h2 className="text-3xl font-bold text-text-main mb-8 flex items-center justify-center gap-3">
                    <Map className="text-neon-cyan" /> Zones & Progression
                </h2>

                <div className="relative border-l-2 border-text-main/10 ml-4 space-y-12">
                    <Zone
                        name="Normal Zone"
                        speedReq="0 - 25 Speed"
                        desc="The starting area. Flat terrain, easy safe spots. Good for learning wave timing."
                        loot="Common / Uncommon"
                        status="unlocked"
                    />
                    <Zone
                        name="Sandy Shores"
                        speedReq="26 - 55 Speed"
                        desc="Introduction to verticality. Use palm trees and rocks to survive. Waves move slightly faster here."
                        loot="Uncommon / Rare"
                        status="unlocked"
                    />
                    <Zone
                        name="The Void"
                        speedReq="85+ Speed"
                        desc="Pitch black environment with neon platforms. One slip equals death. Highest risk, highest reward."
                        loot="Legendary / Celestial"
                        status="locked"
                    />
                </div>
            </div>
        </div>
    );
};

export default Progression;
