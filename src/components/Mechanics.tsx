import React from 'react';
import { Move, Waves, ShieldCheck, Database, Zap, Repeat } from 'lucide-react';

interface MechanicCardProps {
    icon: React.ReactNode;
    title: string;
    content: React.ReactNode;
    isDanger?: boolean;
}

// 机制卡片组件
const MechanicCard: React.FC<MechanicCardProps> = ({ icon, title, content, isDanger }) => (
    <div className={`glass-panel p-6 rounded-xl border ${isDanger ? 'border-neon-danger/30' : 'border-text-main/5'} hover:bg-surfaceHighlight transition-colors`}>
        <div className="flex items-center gap-3 mb-4">
            <div className={`p-2 rounded-lg ${isDanger ? 'bg-neon-danger/10' : 'bg-text-main/5'}`}>
                {icon}
            </div>
            <h3 className={`text-xl font-bold ${isDanger ? 'text-neon-danger' : 'text-text-main'}`}>{title}</h3>
        </div>
        <div className="text-text-muted text-base leading-relaxed">
            {content}
        </div>
    </div>
);

const Mechanics: React.FC = () => {
    return (
        <div className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">How Escape Tsunami For Brainrots Works <span className="text-neon-cyan text-xl block md:inline md:ml-2 font-normal opacity-80">ETFB Core Mechanics Guide</span></h2>
                <p className="text-text-muted max-w-2xl mx-auto">Understanding Escape Tsunami For Brainrots fundamental systems is the key to surviving the Void Zone and maximizing your Cash Per Second (CPS) in ETFB.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <MechanicCard
                    icon={<Move className="text-neon-cyan" />}
                    title="ETFB Controls & Movement"
                    content={
                        <>
                            <p className="mb-3">Mastering movement in Escape Tsunami For Brainrots is your primary defense. The ETFB physics engine allows for momentum-based jumps.</p>
                            <ul className="list-disc pl-4 space-y-2 text-base text-text-muted">
                                <li><strong className="text-text-main">Sprint Management:</strong> Don&apos;t deplete stamina before a jump in Escape Tsunami For Brainrots.</li>
                                <li><strong className="text-text-main">Camera Angles:</strong> Always keep the tsunami wave spawn point in your peripheral vision.</li>
                                <li><strong className="text-text-main">Slide/Dash:</strong> Use sliding (C or Ctrl) to gain speed down slopes in ETFB.</li>
                            </ul>
                        </>
                    }
                />

                <MechanicCard
                    icon={<Waves className="text-neon-danger" />}
                    title="ETFB Tsunami System"
                    isDanger
                    content={
                        <>
                            <p className="mb-3">Tsunami waves in Escape Tsunami For Brainrots spawn on a timer. The further you are from spawn, the harder it is to escape the tsunami.</p>
                            <ul className="list-disc pl-4 space-y-2 text-base text-text-muted">
                                <li><strong className="text-text-main">Risk vs Reward:</strong> High-value brainrots in ETFB are in deep zones, far from safety.</li>
                                <li><strong className="text-text-main">Impact:</strong> Getting hit by tsunami ragdolls you and drops 50% of current bag loot.</li>
                                <li><strong className="text-text-main">Warning Signs:</strong> Listen for the siren and watch for the water receding in Escape Tsunami For Brainrots.</li>
                            </ul>
                        </>
                    }
                />

                <MechanicCard
                    icon={<ShieldCheck className="text-neon-green" />}
                    title="ETFB Safe Spots"
                    content={
                        <>
                            <p className="mb-3">Not all high ground is safe in Escape Tsunami For Brainrots. You need to identify designated Safe Zones to survive the tsunami.</p>
                            <ul className="list-disc pl-4 space-y-2 text-base text-text-muted">
                                <li><strong className="text-text-main">Elevated Platforms:</strong> Look for glowing green neon markers in ETFB.</li>
                                <li><strong className="text-text-main">Pits & Bunkers:</strong> Some Escape Tsunami For Brainrots zones have underground shelters.</li>
                                <li><strong className="text-text-main">Timing:</strong> You usually have 15-20 seconds after the siren before tsunami impact.</li>
                            </ul>
                        </>
                    }
                />

                <MechanicCard
                    icon={<Database className="text-neon-purple" />}
                    title="Brainrots & Base in ETFB"
                    content={
                        <>
                            <p className="mb-3">Your base in Escape Tsunami For Brainrots is your passive income generator. Collected Brainrots are &quot;deposited&quot; here.</p>
                            <ul className="list-disc pl-4 space-y-2 text-base text-text-muted">
                                <li><strong className="text-text-main">Slots:</strong> You have limited slots in ETFB. Display your highest rarity brainrot items.</li>
                                <li><strong className="text-text-main">Collection:</strong> Pick up brainrots in Escape Tsunami For Brainrots by walking over them.</li>
                                <li><strong className="text-text-main">Deposit:</strong> Return to base to empty bag and bank the cash in ETFB.</li>
                            </ul>
                        </>
                    }
                />

                <MechanicCard
                    icon={<Zap className="text-neon-purple" />}
                    title="ETFB Speed & Zones"
                    content={
                        <>
                            <p className="mb-3">Your Walk Speed stat in Escape Tsunami For Brainrots acts as a gatekeeper for advanced map areas.</p>
                            <ul className="list-disc pl-4 space-y-2 text-base text-text-muted">
                                <li><strong className="text-text-main">Speed Checks:</strong> You cannot jump gaps to new ETFB zones without enough speed.</li>
                                <li><strong className="text-text-main">Zone Tiers:</strong> Escape Tsunami For Brainrots zones: Normal -&gt; Sandy -&gt; Toxic -&gt; Void.</li>
                                <li><strong className="text-text-main">Difficulty:</strong> Later ETFB zones have complex parkour and faster tsunami travel times.</li>
                            </ul>
                        </>
                    }
                />

                <MechanicCard
                    icon={<Repeat className="text-neon-cyan" />}
                    title="ETFB Rebirth System"
                    content={
                        <>
                            <p className="mb-3">Reset your Escape Tsunami For Brainrots base and stats for permanent multipliers. Essential for ETFB late-game progression.</p>
                            <ul className="list-disc pl-4 space-y-2 text-base text-text-muted">
                                <li><strong className="text-text-main">Trigger:</strong> Available once you hit specific Cash milestones in Escape Tsunami For Brainrots.</li>
                                <li><strong className="text-text-main">Keep:</strong> You keep Celestial/Divine Brainrots in ETFB (check specific update notes).</li>
                                <li><strong className="text-text-main">Gain:</strong> Permanent +% Income and Speed multipliers in Escape Tsunami For Brainrots.</li>
                            </ul>
                        </>
                    }
                />
            </div>
        </div>
    );
};

export default Mechanics;
