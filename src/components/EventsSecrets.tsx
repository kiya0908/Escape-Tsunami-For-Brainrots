"use client";

import React from 'react';
import { Radiation, Key, Gift } from 'lucide-react';
import { useTranslations } from 'next-intl';

const EventsSecrets: React.FC = () => {
    const t = useTranslations('EventsSecrets');

    return (
        <div className="py-16 md:py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* 标题区域 */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-text-main mb-4">{t('title')}</h2>
                    <p className="text-text-muted max-w-2xl mx-auto">{t('description')}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* 辐射事件 */}
                    <div className="glass-panel p-8 rounded-2xl border border-neon-green/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Radiation className="w-32 h-32 text-neon-green" />
                        </div>

                        <h3 className="text-2xl font-bold text-text-main mb-4 flex items-center gap-2">
                            <Radiation className="text-neon-green" /> {t('radioactive.title')}
                        </h3>

                        <p className="text-text-muted mb-6 text-base leading-relaxed">
                            {t.rich('radioactive.description', {
                                coins: () => <strong className="text-neon-green">{t('radioactive.coins')}</strong>
                            })}
                        </p>

                        <div className="space-y-5">
                            <div className="bg-surface/50 p-4 rounded-lg border-l-2 border-neon-green">
                                <h4 className="font-bold text-text-main mb-2">{t('radioactive.bombTitle')}</h4>
                                <p className="text-base text-text-muted leading-relaxed">{t('radioactive.bombDesc')}</p>
                            </div>
                            <div className="bg-surface/50 p-4 rounded-lg border-l-2 border-neon-green">
                                <h4 className="font-bold text-text-main mb-2">{t('radioactive.tunnelTitle')}</h4>
                                <p className="text-base text-text-muted leading-relaxed">{t('radioactive.tunnelDesc')}</p>
                            </div>
                        </div>
                    </div>

                    {/* 秘密与代码 */}
                    <div className="space-y-8">
                        <div className="bg-surface p-6 rounded-xl border border-neon-purple/20">
                            <h3 className="text-xl font-bold text-text-main mb-3 flex items-center gap-2">
                                <Key className="text-neon-purple" /> {t('secrets.title')}
                            </h3>
                            <p className="text-text-muted text-base mb-4 leading-relaxed">
                                {t('secrets.description')}
                            </p>
                            <ul className="space-y-3 text-base text-text-muted">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-neon-purple"></span> {t('secrets.waterfall')}
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-neon-purple"></span> {t('secrets.ladder')}
                                </li>
                            </ul>
                            <button className="mt-4 text-neon-purple text-sm font-bold hover:underline">{t('secrets.viewAll')} &rarr;</button>
                        </div>

                        <div className="bg-surface p-6 rounded-xl border border-neon-cyan/20">
                            <h3 className="text-xl font-bold text-text-main mb-3 flex items-center gap-2">
                                <Gift className="text-neon-cyan" /> {t('codes.title')}
                            </h3>
                            <div className="bg-black/40 rounded p-3 font-mono text-neon-cyan text-sm mb-2 flex justify-between">
                                <span>TSUNAMI2024</span>
                                <span className="text-gray-500 text-xs">{t('codes.expiresSoon')}</span>
                            </div>
                            <div className="bg-black/40 rounded p-3 font-mono text-neon-cyan text-sm mb-4 flex justify-between">
                                <span>BRAINROT_GOD</span>
                                <span className="text-gray-500 text-xs">{t('codes.active')}</span>
                            </div>
                            <p className="text-xs text-text-muted">
                                {t('codes.redeemHint')}
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default EventsSecrets;
