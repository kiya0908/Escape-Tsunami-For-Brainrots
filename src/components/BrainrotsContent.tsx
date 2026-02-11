"use client";

import React, { useState, useEffect } from 'react';
import { Table, Search, Filter, ArrowUp, ArrowDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Footer from '@/components/Footer';
import Navbar, { Theme } from '@/components/Navbar';

// Brainrot 数据类型
interface Brainrot {
    name: string;
    rarity: string;
    income: string;
    zone: string;
    bestUse: string;
}

export default function BrainrotsContent() {
    const t = useTranslations('Brainrots');
    const [activeSection, setActiveSection] = useState('brainrots');
    const [theme, setTheme] = useState<Theme>('light');
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState<string | null>(null);
    const [sortField, setSortField] = useState<keyof Brainrot | null>(null);
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

    // 完整数据
    const brainrots: Brainrot[] = [
        // Common 稀有度
        { name: "Noobini Cakenini", rarity: "Common", income: "$2", zone: "Normal", bestUse: "Starter" },
        { name: "Lirili Larila", rarity: "Common", income: "$4", zone: "Normal", bestUse: "Starter" },
        { name: "Tim Cheese", rarity: "Common", income: "$6", zone: "Normal", bestUse: "Starter" },
        { name: "Frulli Frulla", rarity: "Common", income: "$7", zone: "Normal", bestUse: "Starter" },
        { name: "Talpa Di Fero", rarity: "Common", income: "$9", zone: "Normal", bestUse: "Starter" },
        { name: "Svinino Bombondino", rarity: "Common", income: "$11", zone: "Normal", bestUse: "Starter" },
        { name: "Pipi Kiwi", rarity: "Common", income: "$13", zone: "Normal", bestUse: "Starter" },
        { name: "Pipi Corni", rarity: "Common", income: "$15", zone: "Normal", bestUse: "Starter" },
        // Uncommon 稀有度
        { name: "Trippi Troppi", rarity: "Uncommon", income: "$20", zone: "Normal", bestUse: "Starter" },
        { name: "Gangster Footera", rarity: "Uncommon", income: "$30", zone: "Normal", bestUse: "Starter" },
        { name: "Bobrito Bandito", rarity: "Uncommon", income: "$35", zone: "Normal", bestUse: "Starter" },
        { name: "Boneca Ambalabu", rarity: "Uncommon", income: "$40", zone: "Normal", bestUse: "Starter" },
        { name: "Cacto Hipopotamo", rarity: "Uncommon", income: "$50", zone: "Normal", bestUse: "Starter" },
        { name: "Ta Ta Ta Sahur", rarity: "Uncommon", income: "$60", zone: "Normal", bestUse: "Starter" },
        { name: "Tric Tric Baraboom", rarity: "Uncommon", income: "$70", zone: "Normal", bestUse: "Starter" },
        { name: "67", rarity: "Uncommon", income: "$90", zone: "Normal", bestUse: "Starter" },
        { name: "Pipi Avocado", rarity: "Uncommon", income: "$120", zone: "Normal", bestUse: "Starter" },
        // Rare 稀有度
        { name: "Cappuccino Assassino", rarity: "Rare", income: "$100", zone: "Sandy", bestUse: "Mid Game" },
        { name: "Brr Brr Patapim", rarity: "Rare", income: "$120", zone: "Sandy", bestUse: "Mid Game" },
        { name: "Trulimero Trulicina", rarity: "Rare", income: "$135", zone: "Sandy", bestUse: "Mid Game" },
        { name: "Bambini Crostini", rarity: "Rare", income: "$150", zone: "Sandy", bestUse: "Mid Game" },
        { name: "Bananita Dolphinita", rarity: "Rare", income: "$170", zone: "Sandy", bestUse: "Mid Game" },
        { name: "Perochello Lemonchello", rarity: "Rare", income: "$190", zone: "Sandy", bestUse: "Mid Game" },
        { name: "Avocadini Guffo", rarity: "Rare", income: "$210", zone: "Sandy", bestUse: "Mid Game" },
        { name: "Salamino Penguino", rarity: "Rare", income: "$230", zone: "Sandy", bestUse: "Mid Game" },
        { name: "Penguino Cocosino", rarity: "Rare", income: "$250", zone: "Sandy", bestUse: "Mid Game" },
        { name: "Ti Ti Ti Sahur", rarity: "Rare", income: "$275", zone: "Sandy", bestUse: "Mid Game" },
        // Epic 稀有度
        { name: "Burbaloni Luliloli", rarity: "Epic", income: "$290", zone: "Sandy", bestUse: "Mid Game" },
        { name: "Chimpanzini Bananini", rarity: "Epic", income: "$475", zone: "Sandy", bestUse: "Mid Game" },
        { name: "Ballerina Cappuccina", rarity: "Epic", income: "$550", zone: "Sandy", bestUse: "Mid Game" },
        { name: "Chef Crabracadabra", rarity: "Epic", income: "$625", zone: "Sandy", bestUse: "Mid Game" },
        { name: "Lionel Cactuseli", rarity: "Epic", income: "$700", zone: "Sandy", bestUse: "Mid Game" },
        { name: "Glorbo Fruttodrillo", rarity: "Epic", income: "$775", zone: "Sandy", bestUse: "Mid Game" },
        { name: "Strawberrilli Flamengilli", rarity: "Epic", income: "$925", zone: "Sandy", bestUse: "Mid Game" },
        { name: "Pandaccini Bananini", rarity: "Epic", income: "$1,000", zone: "Sandy", bestUse: "Mid Game" },
        { name: "Sigma Boy", rarity: "Epic", income: "$1,100", zone: "Sandy", bestUse: "Mid Game" },
        { name: "Pi Pi Watermelon", rarity: "Epic", income: "$1,200", zone: "Sandy", bestUse: "Mid Game" },
        { name: "Blueberrinni Octopussini", rarity: "Epic", income: "$1,270", zone: "Sandy", bestUse: "Mid Game" },
        { name: "Cocosini Mama", rarity: "Epic", income: "$1,300", zone: "Sandy", bestUse: "Mid Game" },
        { name: "Guesto Angelic", rarity: "Epic", income: "$1,400", zone: "Sandy", bestUse: "Mid Game" },
        // Legendary 稀有度
        { name: "Frigo Camelo", rarity: "Legendary", income: "$1,500", zone: "Sandy", bestUse: "End Game" },
        { name: "Orangutini Ananassini", rarity: "Legendary", income: "$1,700", zone: "Sandy", bestUse: "End Game" },
        { name: "Rhino Toasterino", rarity: "Legendary", income: "$1,900", zone: "Sandy", bestUse: "End Game" },
        { name: "Bombardilo Crocodilo", rarity: "Legendary", income: "$2,100", zone: "Sandy", bestUse: "End Game" },
        { name: "Spioniro Golubiro", rarity: "Legendary", income: "$2,290", zone: "Sandy", bestUse: "End Game" },
        { name: "Bombombini Gusini", rarity: "Legendary", income: "$2,600", zone: "Sandy", bestUse: "End Game" },
        { name: "Zibra Zubra Zibralini", rarity: "Legendary", income: "$2,900", zone: "Sandy", bestUse: "End Game" },
        { name: "Tigrilini Watermelini", rarity: "Legendary", income: "$3,200", zone: "Sandy", bestUse: "End Game" },
        { name: "Cavallo Virtuoso", rarity: "Legendary", income: "$3,500", zone: "Sandy", bestUse: "End Game" },
        { name: "Gorillo Watermelondrillo", rarity: "Legendary", income: "$4,000", zone: "Sandy", bestUse: "End Game" },
        { name: "Avocadorilla", rarity: "Legendary", income: "$4,500", zone: "Sandy", bestUse: "End Game" },
        { name: "Ganganzelli Trulala", rarity: "Legendary", income: "$5,000", zone: "Sandy", bestUse: "End Game" },
        // Mythical 稀有度
        { name: "Cocofanto Elefanto", rarity: "Mythical", income: "$6,000", zone: "Toxic", bestUse: "End Game" },
        { name: "Giraffa Celeste", rarity: "Mythical", income: "$7,000", zone: "Toxic", bestUse: "End Game" },
        { name: "Tralalero Tralala", rarity: "Mythical", income: "$8,000", zone: "Toxic", bestUse: "End Game" },
        { name: "Los Crocodillitos", rarity: "Mythical", income: "$9,000", zone: "Toxic", bestUse: "End Game" },
        { name: "Tigroligre Frutonni", rarity: "Mythical", income: "$10,000", zone: "Toxic", bestUse: "End Game" },
        { name: "Udin Din Din Dun", rarity: "Mythical", income: "$11,000", zone: "Toxic", bestUse: "End Game" },
        { name: "Trenostruzzo Turbo 3000", rarity: "Mythical", income: "$13,000", zone: "Toxic", bestUse: "End Game" },
        { name: "Trippi Troppi Troppa Trippa", rarity: "Mythical", income: "$15,000", zone: "Toxic", bestUse: "End Game" },
        { name: "Orcalero Orcala", rarity: "Mythical", income: "$18,000", zone: "Toxic", bestUse: "End Game" },
        { name: "Piccione Macchina", rarity: "Mythical", income: "$19,000", zone: "Toxic", bestUse: "End Game" },
        { name: "Tukanno Bananno", rarity: "Mythical", income: "$21,000", zone: "Toxic", bestUse: "End Game" },
        { name: "Ballerino Lololo", rarity: "Mythical", income: "$25,500", zone: "Toxic", bestUse: "End Game" },
        // Cosmic 稀有度
        { name: "La Vacca Saturno Saturnita", rarity: "Cosmic", income: "$22,000", zone: "Toxic", bestUse: "End Game" },
        { name: "Torrtuginni Dragonfrutini", rarity: "Cosmic", income: "$30,000", zone: "Toxic", bestUse: "End Game" },
        { name: "Los Tralaleritos", rarity: "Cosmic", income: "$48,000", zone: "Toxic", bestUse: "End Game" },
        { name: "Las Tralaleritas", rarity: "Cosmic", income: "$50,000", zone: "Toxic", bestUse: "End Game" },
        { name: "Las Vaquitas Saturnitas", rarity: "Cosmic", income: "$60,000", zone: "Toxic", bestUse: "End Game" },
        { name: "Graipuss Medussi", rarity: "Cosmic", income: "$70,000", zone: "Toxic", bestUse: "End Game" },
        { name: "Pot Hotspot", rarity: "Cosmic", income: "$80,000", zone: "Toxic", bestUse: "End Game" },
        { name: "Chicleteira Bicicleteira", rarity: "Cosmic", income: "$90,000", zone: "Toxic", bestUse: "End Game" },
        { name: "La Grande Combinasion", rarity: "Cosmic", income: "$100,000", zone: "Toxic", bestUse: "End Game" },
        { name: "Nuclearo Dinossauro", rarity: "Cosmic", income: "$110,000", zone: "Toxic", bestUse: "End Game" },
        { name: "Garama and Madundung", rarity: "Cosmic", income: "$120,000", zone: "Toxic", bestUse: "End Game" },
        { name: "Dragon Cannelloni", rarity: "Cosmic", income: "$130,000", zone: "Toxic", bestUse: "End Game" },
        { name: "Agarrini la Palini", rarity: "Cosmic", income: "$150,000", zone: "Toxic", bestUse: "End Game" },
        { name: "Chimpanzini Spiderini", rarity: "Cosmic", income: "$170,000", zone: "Toxic", bestUse: "End Game" },
        // Secret 稀有度
        { name: "Matteo", rarity: "Secret", income: "$200,000", zone: "Void", bestUse: "End Game" },
        { name: "Gattatino Neonino", rarity: "Secret", income: "$250,000", zone: "Void", bestUse: "End Game" },
        { name: "Statutino Libertino", rarity: "Secret", income: "$300,000", zone: "Void", bestUse: "End Game" },
        { name: "Unclito Samito", rarity: "Secret", income: "$350,000", zone: "Void", bestUse: "End Game" },
        { name: "Gattatino Nyanino", rarity: "Secret", income: "$400,000", zone: "Void", bestUse: "End Game" },
        { name: "Espresso Signora", rarity: "Secret", income: "$450,000", zone: "Void", bestUse: "End Game" },
        { name: "Los Tungtungtungcitos", rarity: "Secret", income: "$500,000", zone: "Void", bestUse: "End Game" },
        { name: "Aura Farma", rarity: "Secret", income: "$700,000", zone: "Void", bestUse: "End Game" },
        { name: "Rainbow 67", rarity: "Secret", income: "$800,000", zone: "Void", bestUse: "End Game" },
        { name: "Fragola La La La", rarity: "Secret", income: "$1,000,000", zone: "Void", bestUse: "End Game" },
        // Celestial 稀有度（最高！）
        { name: "Job Job Sahur", rarity: "Celestial", income: "$1,500,000", zone: "Event", bestUse: "End Game" },
        { name: "Dug Dug Dug", rarity: "Celestial", income: "$1,600,000", zone: "Event", bestUse: "End Game" },
        { name: "Bisonte Gupitere", rarity: "Celestial", income: "$1,700,000", zone: "Event", bestUse: "End Game" },
        { name: "Alessio", rarity: "Celestial", income: "$1,800,000", zone: "Event", bestUse: "End Game" },
        { name: "Esok Sekolah", rarity: "Celestial", income: "$1,900,000", zone: "Event", bestUse: "End Game" },
    ];

    useEffect(() => {
        const saved = localStorage.getItem('etfb-theme');
        if (saved === 'light' || saved === 'dark' || saved === 'system') {
            setTheme(saved);
        }
    }, []);

    useEffect(() => {
        const root = document.documentElement;

        const applyTheme = (t: Theme) => {
            let effectiveTheme = t;
            if (t === 'system') {
                effectiveTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            }
            root.setAttribute('data-theme', effectiveTheme);
        };

        applyTheme(theme);
        localStorage.setItem('etfb-theme', theme);

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleSystemChange = () => {
            if (theme === 'system') applyTheme('system');
        };

        mediaQuery.addEventListener('change', handleSystemChange);
        return () => mediaQuery.removeEventListener('change', handleSystemChange);
    }, [theme]);

    // 过滤和搜索逻辑
    const filteredBrainrots = brainrots.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.rarity.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.zone.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = !activeFilter || item.rarity === activeFilter;
        return matchesSearch && matchesFilter;
    });

    // 排序逻辑
    const sortedBrainrots = React.useMemo(() => {
        if (!sortField) return filteredBrainrots;

        return [...filteredBrainrots].sort((a, b) => {
            const aValue = a[sortField];
            const bValue = b[sortField];

            if (typeof aValue === 'string' && typeof bValue === 'string') {
                if (sortDirection === 'asc') {
                    return aValue.localeCompare(bValue);
                }
                return bValue.localeCompare(aValue);
            }
            return 0;
        });
    }, [filteredBrainrots, sortField, sortDirection]);

    const rarities = [...new Set(brainrots.map(b => b.rarity))];

    const handleSort = (field: keyof Brainrot) => {
        if (sortField === field) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortField(field);
            setSortDirection('asc');
        }
    };

    const SortIcon = ({ field }: { field: keyof Brainrot }) => {
        if (sortField !== field) return null;
        return sortDirection === 'asc' ? <ArrowUp className="w-4 h-4 ml-1" /> : <ArrowDown className="w-4 h-4 ml-1" />;
    };

    return (
        <div className="min-h-screen flex flex-col transition-colors duration-300">
            <Navbar activeSection={activeSection} theme={theme} setTheme={setTheme} />

            {/* Main Content */}
            <main className="flex-grow pt-20 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Hero Section */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-neon-cyan/10 mb-6">
                            <Table className="h-10 w-10 text-neon-cyan" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-4">{t('H1title')}</h1>
                        <p className="text-xl text-text-muted max-w-2xl mx-auto mb-8">
                            {t('description')}
                        </p>

                        {/* SEO Content */}
                        <div className="max-w-3xl mx-auto text-left p-6 rounded-xl bg-surface border border-text-main/10 mb-8">
                            <h2 className="text-xl font-bold text-text-main mb-4">{t('seoTitle')}</h2>
                            <p className="text-text-muted leading-relaxed mb-4">{t('seoDescription1')}</p>
                            <p className="text-text-muted leading-relaxed mb-4">{t('seoDescription2')}</p>
                            <p className="text-text-muted leading-relaxed">{t('seoDescription3')}</p>
                        </div>
                    </div>

                    {/* Search and Filter */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                        <div className="relative flex-grow max-w-md">
                            <input
                                type="text"
                                placeholder={t('searchPlaceholder')}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-surface border border-text-main/10 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan text-text-main transition-colors"
                            />
                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-text-muted" />
                        </div>
                        <div className="relative group">
                            <button
                                className={`p-2 border border-text-main/10 rounded-lg hover:bg-surfaceHighlight transition-colors ${activeFilter ? 'bg-neon-cyan/10 border-neon-cyan' : 'bg-surface'}`}
                                aria-label={t('filterLabel')}
                            >
                                <Filter className={`h-5 w-5 ${activeFilter ? 'text-neon-cyan' : 'text-text-muted'}`} />
                            </button>
                            <div className="absolute right-0 mt-2 w-40 rounded-lg shadow-lg bg-surface border border-text-main/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
                                <div className="py-1">
                                    <button
                                        onClick={() => setActiveFilter(null)}
                                        className={`w-full text-left px-4 py-2 text-sm ${!activeFilter ? 'text-neon-cyan bg-surfaceHighlight' : 'text-text-main hover:bg-surfaceHighlight'}`}
                                    >
                                        {t('allRarities')}
                                    </button>
                                    {rarities.map((rarity) => (
                                        <button
                                            key={rarity}
                                            onClick={() => setActiveFilter(rarity)}
                                            className={`w-full text-left px-4 py-2 text-sm ${activeFilter === rarity ? 'text-neon-cyan bg-surfaceHighlight' : 'text-text-main hover:bg-surfaceHighlight'}`}
                                        >
                                            {t(`rarities.${rarity}`) || rarity}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Results Count */}
                    {searchTerm && (
                        <p className="text-text-muted text-sm mb-4">
                            {t('foundResults', { count: sortedBrainrots.length, term: searchTerm })}
                        </p>
                    )}

                    {/* Table */}
                    <div className="bg-surface rounded-xl border border-text-main/10 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead className="bg-surfaceHighlight">
                                    <tr>
                                        <th
                                            onClick={() => handleSort('name')}
                                            className="px-6 py-3 text-left font-semibold text-text-main cursor-pointer hover:bg-surfaceHighlight/50 select-none"
                                        >
                                            {t('table.name')} <SortIcon field="name" />
                                        </th>
                                        <th
                                            onClick={() => handleSort('rarity')}
                                            className="px-6 py-3 text-left font-semibold text-text-main cursor-pointer hover:bg-surfaceHighlight/50 select-none"
                                        >
                                            {t('table.rarity')} <SortIcon field="rarity" />
                                        </th>
                                        <th
                                            onClick={() => handleSort('income')}
                                            className="px-6 py-3 text-left font-semibold text-text-main cursor-pointer hover:bg-surfaceHighlight/50 select-none"
                                        >
                                            {t('table.income')} <SortIcon field="income" />
                                        </th>
                                        <th
                                            onClick={() => handleSort('zone')}
                                            className="px-6 py-3 text-left font-semibold text-text-main cursor-pointer hover:bg-surfaceHighlight/50 select-none"
                                        >
                                            {t('table.zone')} <SortIcon field="zone" />
                                        </th>
                                        <th
                                            onClick={() => handleSort('bestUse')}
                                            className="px-6 py-3 text-left font-semibold text-text-main cursor-pointer hover:bg-surfaceHighlight/50 select-none"
                                        >
                                            {t('table.bestUse')} <SortIcon field="bestUse" />
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-text-main/5">
                                    {sortedBrainrots.map((item, idx) => (
                                        <tr
                                            key={idx}
                                            className="hover:bg-surfaceHighlight/30 transition-colors"
                                        >
                                            <td className="px-6 py-4 font-medium text-text-main">{item.name}</td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${getRarityColor(item.rarity)}`}>
                                                    {item.rarity}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 font-mono text-text-main">{item.income}</td>
                                            <td className="px-6 py-4 text-text-muted">{item.zone}</td>
                                            <td className="px-6 py-4 text-text-muted text-xs">{item.bestUse}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* No Results */}
                {sortedBrainrots.length === 0 && (
                    <div className="text-center py-12 text-text-muted">
                        <p className="text-lg mb-2">{t('noResults')}</p>
                        <p className="text-sm">{t('noResultsHint')}</p>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}

function getRarityColor(rarity: string): string {
    switch (rarity) {
        case 'Common': return 'bg-gray-500/20 text-gray-400';
        case 'Uncommon': return 'bg-neon-green/20 text-neon-green';
        case 'Rare': return 'bg-neon-cyan/20 text-neon-cyan';
        case 'Epic': return 'bg-blue-500/20 text-blue-500';
        case 'Legendary': return 'bg-neon-purple/20 text-neon-purple';
        case 'Mythical': return 'bg-pink-500/20 text-pink-500';
        case 'Cosmic': return 'bg-purple-600/20 text-purple-600';
        case 'Secret': return 'bg-red-500/20 text-red-500';
        case 'Celestial': return 'bg-neon-cyan/30 text-neon-cyan font-bold';
        default: return 'bg-gray-500/20 text-gray-400';
    }
}
