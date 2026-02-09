"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Gamepad2, Gift, HelpCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

// 链接组件
const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
    <a
        href={href}
        className="text-text-muted hover:text-neon-cyan transition-colors text-sm"
    >
        {children}
    </a>
);

const Footer: React.FC = () => {
    const t = useTranslations('Footer');

    const quickLinks = [
        { name: t('quickLinks.beginnerGuide'), href: '#guide', icon: BookOpen },
        { name: t('quickLinks.brainrotsDatabase'), href: '#brainrots', icon: Gamepad2 },
        { name: t('quickLinks.activeCodes'), href: '#events', icon: Gift },
        { name: t('quickLinks.faq'), href: '#faq', icon: HelpCircle },
    ];

    return (
        <footer className="bg-surface border-t border-text-main/10 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* 主内容区 */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* 列1: Logo + 简介 */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Image
                                src="/favicon.ico"
                                alt="Escape Tsunami For Brainrots"
                                title="Escape Tsunami For Brainrots"
                                width={24}
                                height={24}
                                className="h-6 w-6"
                            />
                            <span className="font-bold text-lg text-text-main">ETFB<span className="text-neon-cyan">.space</span></span>
                        </div>
                        <p className="text-text-muted text-sm leading-relaxed">
                            {t('description')}
                        </p>
                    </div>

                    {/* 列2: 快速链接 */}
                    <div>
                        <h3 className="font-bold text-text-main mb-4">{t('quickLinks.title')}</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="flex items-center gap-2 text-text-muted hover:text-neon-cyan transition-colors text-sm group"
                                    >
                                        <link.icon className="w-4 h-4 group-hover:text-neon-cyan transition-colors" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 列3: Resources */}
                    <div>
                        <h3 className="font-bold text-text-main mb-4">{t('resources.title')}</h3>
                        <ul className="space-y-3">
                            <li><FooterLink href="https://www.roblox.com/games/escape-tsunami">{t('resources.playOnRoblox')}</FooterLink></li>
                            <li><FooterLink href="#tools">{t('resources.calculators')}</FooterLink></li>
                            <li><FooterLink href="#progression">{t('resources.upgradeGuides')}</FooterLink></li>
                            <li><FooterLink href="#mechanics">{t('resources.gameMechanics')}</FooterLink></li>
                        </ul>
                    </div>

                    {/* 列4: Legal */}
                    <div>
                        <h3 className="font-bold text-text-main mb-4">{t('legal.title')}</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/privacy" className="text-text-muted hover:text-neon-cyan transition-colors text-sm">
                                    {t('legal.privacy')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-text-muted hover:text-neon-cyan transition-colors text-sm">
                                    {t('legal.terms')}
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-text-muted hover:text-neon-cyan transition-colors text-sm">
                                    {t('legal.about')}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* 分割线 */}
                <div className="border-t border-text-main/10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-text-muted text-sm">
                            &copy; {new Date().getFullYear()} {t('copyright')}
                        </p>
                        <p className="text-text-muted text-xs text-center md:text-right opacity-60">
                            {t('disclaimer')}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
