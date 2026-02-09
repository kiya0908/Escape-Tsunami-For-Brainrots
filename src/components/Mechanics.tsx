"use client";

import React from 'react';
import { Move, Waves, ShieldCheck, Database, Zap, Repeat } from 'lucide-react';
import { useTranslations } from 'next-intl';

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
    const t = useTranslations('Mechanics');

    return (
        <div className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">{t('title')} <span className="text-neon-cyan text-xl block md:inline md:ml-2 font-normal opacity-80">{t('subtitle')}</span></h2>
                <p className="text-text-muted max-w-2xl mx-auto">{t('description')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <MechanicCard
                    icon={<Move className="text-neon-cyan" />}
                    title={t('controls.title')}
                    content={
                        <>
                            <p className="mb-3">{t('controls.description')}</p>
                            <ul className="list-disc pl-4 space-y-2 text-base text-text-muted">
                                <li><strong className="text-text-main">{t('controls.sprint.label')}</strong> {t('controls.sprint.text')}</li>
                                <li><strong className="text-text-main">{t('controls.camera.label')}</strong> {t('controls.camera.text')}</li>
                                <li><strong className="text-text-main">{t('controls.slide.label')}</strong> {t('controls.slide.text')}</li>
                            </ul>
                        </>
                    }
                />

                <MechanicCard
                    icon={<Waves className="text-neon-danger" />}
                    title={t('tsunami.title')}
                    isDanger
                    content={
                        <>
                            <p className="mb-3">{t('tsunami.description')}</p>
                            <ul className="list-disc pl-4 space-y-2 text-base text-text-muted">
                                <li><strong className="text-text-main">{t('tsunami.risk.label')}</strong> {t('tsunami.risk.text')}</li>
                                <li><strong className="text-text-main">{t('tsunami.impact.label')}</strong> {t('tsunami.impact.text')}</li>
                                <li><strong className="text-text-main">{t('tsunami.warning.label')}</strong> {t('tsunami.warning.text')}</li>
                            </ul>
                        </>
                    }
                />

                <MechanicCard
                    icon={<ShieldCheck className="text-neon-green" />}
                    title={t('safeSpots.title')}
                    content={
                        <>
                            <p className="mb-3">{t('safeSpots.description')}</p>
                            <ul className="list-disc pl-4 space-y-2 text-base text-text-muted">
                                <li><strong className="text-text-main">{t('safeSpots.platforms.label')}</strong> {t('safeSpots.platforms.text')}</li>
                                <li><strong className="text-text-main">{t('safeSpots.bunkers.label')}</strong> {t('safeSpots.bunkers.text')}</li>
                                <li><strong className="text-text-main">{t('safeSpots.timing.label')}</strong> {t('safeSpots.timing.text')}</li>
                            </ul>
                        </>
                    }
                />

                <MechanicCard
                    icon={<Database className="text-neon-purple" />}
                    title={t('brainrots.title')}
                    content={
                        <>
                            <p className="mb-3">{t('brainrots.description')}</p>
                            <ul className="list-disc pl-4 space-y-2 text-base text-text-muted">
                                <li><strong className="text-text-main">{t('brainrots.slots.label')}</strong> {t('brainrots.slots.text')}</li>
                                <li><strong className="text-text-main">{t('brainrots.collection.label')}</strong> {t('brainrots.collection.text')}</li>
                                <li><strong className="text-text-main">{t('brainrots.deposit.label')}</strong> {t('brainrots.deposit.text')}</li>
                            </ul>
                        </>
                    }
                />

                <MechanicCard
                    icon={<Zap className="text-neon-purple" />}
                    title={t('speedZones.title')}
                    content={
                        <>
                            <p className="mb-3">{t('speedZones.description')}</p>
                            <ul className="list-disc pl-4 space-y-2 text-base text-text-muted">
                                <li><strong className="text-text-main">{t('speedZones.speedCheck.label')}</strong> {t('speedZones.speedCheck.text')}</li>
                                <li><strong className="text-text-main">{t('speedZones.tiers.label')}</strong> {t('speedZones.tiers.text')}</li>
                                <li><strong className="text-text-main">{t('speedZones.difficulty.label')}</strong> {t('speedZones.difficulty.text')}</li>
                            </ul>
                        </>
                    }
                />

                <MechanicCard
                    icon={<Repeat className="text-neon-cyan" />}
                    title={t('rebirth.title')}
                    content={
                        <>
                            <p className="mb-3">{t('rebirth.description')}</p>
                            <ul className="list-disc pl-4 space-y-2 text-base text-text-muted">
                                <li><strong className="text-text-main">{t('rebirth.trigger.label')}</strong> {t('rebirth.trigger.text')}</li>
                                <li><strong className="text-text-main">{t('rebirth.keep.label')}</strong> {t('rebirth.keep.text')}</li>
                                <li><strong className="text-text-main">{t('rebirth.gain.label')}</strong> {t('rebirth.gain.text')}</li>
                            </ul>
                        </>
                    }
                />
            </div>
        </div>
    );
};

export default Mechanics;
