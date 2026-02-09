"use client";

import React from 'react';
import { ArrowDown, ArrowRight, Sword, Shield, Zap, Coins, Trophy } from 'lucide-react';
import { useTranslations } from 'next-intl';
import VideoSection from './VideoSection';

// 步骤组件
const LoopStep = ({ step, text, isLast, stepLabel }: { step: string, text: string, isLast?: boolean, stepLabel: string }) => (
    <div className="flex flex-col items-center">
        <div className="flex flex-col items-center p-4 bg-surface rounded-lg border border-text-main/10 w-full">
            <span className="text-neon-purple font-bold text-base mb-2">{stepLabel} {step}</span>
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
    const t = useTranslations('IntroSection');

    const stepLabel = t('gameplayLoop.step');
    const steps = [
        { step: "1", text: t('gameplayLoop.steps.1.text') },
        { step: "2", text: t('gameplayLoop.steps.2.text') },
        { step: "3", text: t('gameplayLoop.steps.3.text') },
        { step: "4", text: t('gameplayLoop.steps.4.text') },
        { step: "5", text: t('gameplayLoop.steps.5.text') },
    ];

    const featureIcons = [
        <Sword key="sword" className="w-6 h-6 text-neon-cyan" />,
        <Shield key="shield" className="w-6 h-6 text-neon-purple" />,
        <Zap key="zap" className="w-6 h-6 text-neon-green" />,
        <Coins key="coins" className="w-6 h-6 text-neon-cyan" />,
        <Trophy key="trophy" className="w-6 h-6 text-neon-purple" />,
        <ArrowDown key="arrow" className="w-6 h-6 text-neon-green" />,
    ];

    const features = [
        { icon: featureIcons[0], title: t('features.items.tsunami.title'), desc: t('features.items.tsunami.description') },
        { icon: featureIcons[1], title: t('features.items.base.title'), desc: t('features.items.base.description') },
        { icon: featureIcons[2], title: t('features.items.character.title'), desc: t('features.items.character.description') },
        { icon: featureIcons[3], title: t('features.items.collectibles.title'), desc: t('features.items.collectibles.description') },
        { icon: featureIcons[4], title: t('features.items.rebirth.title'), desc: t('features.items.rebirth.description') },
        { icon: featureIcons[5], title: t('features.items.events.title'), desc: t('features.items.events.description') },
    ];

    return (
        <div className="py-16 md:py-20 bg-surface/30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-text-main mb-4">{t('title')}</h2>
                    <div className="h-1 w-20 bg-neon-purple mx-auto rounded-full"></div>
                </div>

                <div className="prose prose-invert max-w-none text-text-muted text-lg leading-[1.8] space-y-8">
                    <p>
                        <strong className="text-neon-cyan">Escape Tsunami For Brainrots</strong> {t('description1')}
                    </p>
                    <p>
                        {t('description2')}
                    </p>

                    {/* 步骤流：移动端垂直，桌面端水平 */}
                    <div className="mt-8">
                        <div className="text-center mb-6">
                            <h3 className="text-xl font-bold text-text-main mb-2">{t('gameplayLoop.title')}</h3>
                            <p className="text-text-muted text-base">{t('gameplayLoop.subtitle')}</p>
                        </div>

                        {/* 移动端：垂直布局 */}
                        <div className="flex flex-col gap-0 md:hidden">
                            {steps.map((s, idx) => (
                                <LoopStep
                                    key={s.step}
                                    step={s.step}
                                    text={s.text}
                                    stepLabel={stepLabel}
                                    isLast={idx === steps.length - 1}
                                />
                            ))}
                        </div>

                        {/* 桌面端：水平布局 */}
                        <div className="hidden md:grid md:grid-cols-9 gap-3 items-center">
                            {steps.map((s, idx) => (
                                <React.Fragment key={s.step}>
                                    <div className="flex flex-col items-center p-4 bg-surface rounded-lg border border-text-main/10">
                                        <span className="text-neon-purple font-bold text-base mb-2">{stepLabel} {s.step}</span>
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
                            <h3 className="text-2xl font-bold text-text-main mb-2">{t('features.title')}</h3>
                            <p className="text-text-muted text-base">{t('features.subtitle')}</p>
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
                            <h3 className="text-2xl font-bold text-text-main mb-2">{t('video.title')}</h3>
                            <p className="text-text-muted text-base">{t('video.subtitle')}</p>
                        </div>
                        <VideoSection videoIds={['o7EQ33MX2_8', 'kq9n33Qn6YQ']} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroSection;
