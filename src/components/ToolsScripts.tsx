import React from 'react';
import { Calculator, Zap, TrendingUp, AlertTriangle } from 'lucide-react';

// 工具卡片组件
const ToolCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <div className="glass-panel p-6 rounded-xl border border-text-main/5 hover:-translate-y-1 transition-transform duration-300 cursor-pointer group">
        <div className="mb-4 p-3 bg-text-main/5 rounded-lg w-fit text-neon-cyan group-hover:text-text-main group-hover:bg-neon-cyan transition-colors">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-text-main mb-2">{title}</h3>
        <p className="text-text-muted text-base leading-relaxed">{desc}</p>
    </div>
);

const ToolsScripts: React.FC = () => {
    return (
        <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* 工具部分 */}
            <div className="mb-20">
                <h2 className="text-3xl font-bold text-text-main mb-8">Optimization Tools</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <ToolCard
                        icon={<Calculator />}
                        title="Income Calculator"
                        desc="Input your current Brainrot lineup to see your exact CPS (Cash Per Second) and time to next upgrade."
                    />
                    <ToolCard
                        icon={<TrendingUp />}
                        title="Rebirth Planner"
                        desc="Should you rebirth now? Our algorithm calculates if the multiplier gain outweighs the reset cost."
                    />
                    <ToolCard
                        icon={<Zap />}
                        title="Speed Planner"
                        desc="Calculate exactly how much money you need to reach the speed cap for specific Zones."
                    />
                </div>
            </div>

            {/* 脚本免责声明 */}
            <div className="border border-neon-danger/40 bg-neon-danger/5 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                    <div className="bg-neon-danger/10 p-3 rounded-full shrink-0">
                        <AlertTriangle className="w-8 h-8 text-neon-danger" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-text-main mb-4">A Note on Scripts & Executors</h2>
                        <div className="prose prose-invert max-w-none text-text-muted text-base leading-relaxed">
                            <p className="mb-4">
                                We understand that many players look for <strong>Auto Farm</strong>, <strong>Auto Collect</strong>, or <strong>Teleport</strong> scripts to grind efficiently. While scripts are popular in the ETFB community, please be aware:
                            </p>
                            <ul className="list-disc pl-4 space-y-2 mb-4">
                                <li><strong className="text-text-main">Account Safety:</strong> Using third-party executors can lead to account bans or stolen cookies.</li>
                                <li><strong className="text-text-main">Malware Risk:</strong> Never download `.exe` files claiming to be scripts. Only copy raw text (Lua) from trusted sources like Pastebin or GitHub.</li>
                                <li><strong className="text-text-main">Our Stance:</strong> ETFB.com is an educational Wiki. We do not host, distribute, or verify any script files. We provide game data to help you play legitimately.</li>
                            </ul>
                            <p className="font-semibold text-neon-danger">Play fair, stay safe.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ToolsScripts;
