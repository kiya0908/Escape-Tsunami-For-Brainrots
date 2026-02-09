"use client";

import React from 'react';
import { ChevronsUp, Map, Lock, Unlock } from 'lucide-react';
import { useTranslations } from 'next-intl';

// 升级项组件
const UpgradeItem = ({ title, desc, priority, priorityLabel }: { title: string, desc: string, priority: string, priorityLabel: string }) => (
    <div className="flex gap-4">
        <div className="w-12 h-12 bg-surfaceHighlight rounded-lg flex items-center justify-center shrink-0 border border-text-main/5">
            <ChevronsUp className="w-6 h-6 text-neon-green" />
        </div>
        <div>
            <h4 className="text-lg font-bold text-text-main">{title} <span className="text-xs font-normal text-text-muted ml-2 bg-text-main/5 px-2 py-0.5 rounded">{priorityLabel} {priority}</span></h4>
            <p className="text-text-muted text-base mt-2 leading-relaxed">{desc}</p>
        </div>
    </div>
);

// 区域组件
const Zone = ({ name, speedReq, desc, loot, status, avgLootLabel }: { name: string, speedReq: string, desc: string, loot: string, status: 'locked' | 'unlocked', avgLootLabel: string }) => (
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
            <div className="text-sm font-semibold text-text-muted">{avgLootLabel} <span className="text-text-main">{loot}</span></div>
        </div>
    </div>
);

const Progression: React.FC = () => {
    const t = useTranslations('Progression');

    return (
        <div className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* 基地与升级 */}
            <div className="mb-20">
                <h2 className="text-3xl font-bold text-text-main mb-8 flex items-center justify-center gap-3">
                    <ChevronsUp className="text-neon-green" /> {t('upgradesTitle')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <UpgradeItem
                            title={t('upgrades.walkSpeed.title')}
                            desc={t('upgrades.walkSpeed.description')}
                            priority={t('upgrades.walkSpeed.priority')}
                            priorityLabel={t('priorityLabel')}
                        />
                        <UpgradeItem
                            title={t('upgrades.jumpPower.title')}
                            desc={t('upgrades.jumpPower.description')}
                            priority={t('upgrades.jumpPower.priority')}
                            priorityLabel={t('priorityLabel')}
                        />
                        <UpgradeItem
                            title={t('upgrades.bagCapacity.title')}
                            desc={t('upgrades.bagCapacity.description')}
                            priority={t('upgrades.bagCapacity.priority')}
                            priorityLabel={t('priorityLabel')}
                        />
                    </div>
                    <div className="bg-surface p-6 rounded-xl border border-text-main/10">
                        <h3 className="text-xl font-bold text-text-main mb-4">{t('strategyTitle')}</h3>
                        <div className="space-y-4">
                            <div className="p-3 bg-text-main/5 rounded-lg border-l-2 border-neon-cyan">
                                <span className="block text-neon-cyan font-bold text-xs uppercase mb-1">{t('strategy.early.phase')}</span>
                                <p className="text-sm text-text-muted">{t('strategy.early.description', { stat: t('strategy.early.title') })}</p>
                            </div>
                            <div className="p-3 bg-text-main/5 rounded-lg border-l-2 border-neon-purple">
                                <span className="block text-neon-purple font-bold text-xs uppercase mb-1">{t('strategy.mid.phase')}</span>
                                <p className="text-sm text-text-muted">{t('strategy.mid.description', { stat: t('strategy.mid.title') })}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 区域 */}
            <div>
                <h2 className="text-3xl font-bold text-text-main mb-8 flex items-center justify-center gap-3">
                    <Map className="text-neon-cyan" /> {t('zonesTitle')}
                </h2>

                <div className="relative border-l-2 border-text-main/10 ml-4 space-y-12">
                    <Zone
                        name={t('zones.normal.name')}
                        speedReq={t('zones.normal.speedReq')}
                        desc={t('zones.normal.description')}
                        loot={t('zones.normal.loot')}
                        status="unlocked"
                        avgLootLabel={t('avgLootLabel')}
                    />
                    <Zone
                        name={t('zones.sandy.name')}
                        speedReq={t('zones.sandy.speedReq')}
                        desc={t('zones.sandy.description')}
                        loot={t('zones.sandy.loot')}
                        status="unlocked"
                        avgLootLabel={t('avgLootLabel')}
                    />
                    <Zone
                        name={t('zones.void.name')}
                        speedReq={t('zones.void.speedReq')}
                        desc={t('zones.void.description')}
                        loot={t('zones.void.loot')}
                        status="locked"
                        avgLootLabel={t('avgLootLabel')}
                    />
                </div>
            </div>
        </div>
    );
};

export default Progression;
