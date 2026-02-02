"use client";

import React, { useState } from 'react';
import { Search, Filter, Dog, Cat, Sparkles, Skull, Ghost, Crown } from 'lucide-react';

// Brainrot 数据类型
interface Brainrot {
    name: string;
    rarity: string;
    income: string;
    zone: string;
    color: string;
    icon: React.ElementType;
}

const Encyclopedia: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState<string | null>(null);

    const brainrots: Brainrot[] = [
        { name: "Common Doge", rarity: "Common", income: "$5/s", zone: "Normal", color: "border-gray-500 text-gray-400", icon: Dog },
        { name: "Silly Cat", rarity: "Uncommon", income: "$12/s", zone: "Normal", color: "border-neon-green text-neon-green", icon: Cat },
        { name: "Glow Meme", rarity: "Rare", income: "$45/s", zone: "Sandy", color: "border-neon-cyan text-neon-cyan", icon: Sparkles },
        { name: "Sigma Chad", rarity: "Legendary", income: "$250/s", zone: "Toxic", color: "border-neon-purple text-neon-purple", icon: Skull },
        { name: "Void Walker", rarity: "Celestial", income: "$1,500/s", zone: "Void", color: "border-neon-purple text-neon-purple shadow-[0_0_10px_rgba(253,119,9,0.3)]", icon: Ghost },
        { name: "Tsunami God", rarity: "Divine", income: "$10k/s", zone: "Event", color: "border-neon-cyan text-neon-cyan shadow-[0_0_15px_rgba(8,170,247,0.5)]", icon: Crown },
    ];

    // 过滤逻辑
    const filteredBrainrots = brainrots.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.rarity.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.zone.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = !activeFilter || item.rarity === activeFilter;
        return matchesSearch && matchesFilter;
    });

    // 稀有度列表
    const rarities = [...new Set(brainrots.map(b => b.rarity))];

    return (
        <div className="py-16 md:py-20 bg-background border-y border-text-main/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <h2 className="text-3xl font-bold text-text-main mb-2">Brainrots Encyclopedia</h2>
                        <p className="text-text-muted">Database of stats, rarity, and values. Know what you&apos;re looking for.</p>
                    </div>
                    <div className="mt-4 md:mt-0 flex gap-2">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search Brainrots..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="bg-surface border border-text-main/10 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan w-64 text-text-main transition-colors"
                            />
                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-text-muted" />
                        </div>
                        <div className="relative group">
                            <button
                                className={`p-2 border border-text-main/10 rounded-lg hover:bg-surfaceHighlight transition-colors ${activeFilter ? 'bg-neon-cyan/10 border-neon-cyan' : 'bg-surface'}`}
                                aria-label="Filter by rarity"
                            >
                                <Filter className={`h-5 w-5 ${activeFilter ? 'text-neon-cyan' : 'text-text-muted'}`} />
                            </button>
                            {/* 过滤器下拉菜单 */}
                            <div className="absolute right-0 mt-2 w-40 rounded-lg shadow-lg bg-surface border border-text-main/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
                                <div className="py-1">
                                    <button
                                        onClick={() => setActiveFilter(null)}
                                        className={`w-full text-left px-4 py-2 text-sm ${!activeFilter ? 'text-neon-cyan bg-surfaceHighlight' : 'text-text-main hover:bg-surfaceHighlight'}`}
                                    >
                                        All Rarities
                                    </button>
                                    {rarities.map((rarity) => (
                                        <button
                                            key={rarity}
                                            onClick={() => setActiveFilter(rarity)}
                                            className={`w-full text-left px-4 py-2 text-sm ${activeFilter === rarity ? 'text-neon-cyan bg-surfaceHighlight' : 'text-text-main hover:bg-surfaceHighlight'}`}
                                        >
                                            {rarity}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 结果计数 */}
                {searchTerm && (
                    <p className="text-text-muted text-sm mb-4">
                        Found {filteredBrainrots.length} result{filteredBrainrots.length !== 1 ? 's' : ''} for &quot;{searchTerm}&quot;
                    </p>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredBrainrots.map((item, idx) => {
                        const IconComponent = item.icon;
                        return (
                            <div
                                key={idx}
                                className={`relative bg-surface rounded-xl p-5 border-l-4 ${item.color} hover:bg-surfaceHighlight hover:scale-[1.02] transition-all duration-200 group border-t border-r border-b border-text-main/5`}
                            >
                                <div className="flex justify-between items-start mb-5">
                                    <div>
                                        <h3 className="font-bold text-lg text-text-main group-hover:text-neon-cyan transition-colors">{item.name}</h3>
                                        <span className={`text-xs font-bold uppercase tracking-wider ${item.color.split(' ')[1]}`}>{item.rarity}</span>
                                    </div>
                                    <div className={`h-12 w-12 rounded-lg flex items-center justify-center ${item.color.includes('neon') ? 'bg-surface' : 'bg-text-main/5'}`}>
                                        <IconComponent className={`w-7 h-7 ${item.color.split(' ')[1]}`} />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-y-3 text-base">
                                    <div className="text-text-muted">Income:</div>
                                    <div className="text-text-main font-mono font-bold text-right">{item.income}</div>

                                    <div className="text-text-muted">Spawn Zone:</div>
                                    <div className="text-text-main text-right">{item.zone}</div>

                                    <div className="text-text-muted">Best Use:</div>
                                    <div className="text-text-main text-right text-xs">{item.rarity === 'Common' ? 'Starter' : 'End Game'}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* 无结果提示 */}
                {filteredBrainrots.length === 0 && (
                    <div className="text-center py-12 text-text-muted">
                        <p className="text-lg mb-2">No brainrots found</p>
                        <p className="text-sm">Try adjusting your search or filter</p>
                    </div>
                )}

                <div className="mt-8 text-center">
                    <button className="px-6 py-2 border border-neon-cyan text-neon-cyan rounded-lg hover:bg-neon-cyan/10 transition-colors text-sm font-semibold">
                        View Full Database (142 Items)
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Encyclopedia;
