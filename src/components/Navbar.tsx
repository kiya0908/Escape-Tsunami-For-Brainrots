"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Sun, Moon, Monitor } from 'lucide-react';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

// 主题类型
export type Theme = 'light' | 'dark' | 'system';

interface NavbarProps {
    activeSection: string;
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, theme, setTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
    const themeMenuRef = useRef<HTMLDivElement>(null);
    const t = useTranslations('Navbar');

    // 点击外部关闭主题菜单
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (themeMenuRef.current && !themeMenuRef.current.contains(event.target as Node)) {
                setIsThemeMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const navLinks = [
        { name: t('guide'), href: '#guide', title: t('guideTitle') },
        { name: t('brainrots'), href: '#brainrots', title: t('brainrotsTitle') },
        { name: t('progression'), href: '#progression', title: t('progressionTitle') },
        { name: t('events'), href: '#events', title: t('eventsTitle') },
        { name: t('tools'), href: '#tools', title: t('toolsTitle') },
    ];

    const ThemeIcon = () => {
        switch (theme) {
            case 'light': return <Sun className="h-5 w-5" />;
            case 'dark': return <Moon className="h-5 w-5" />;
            case 'system': return <Monitor className="h-5 w-5" />;
        }
    };

    return (
        <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-text-main/10 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                        <Image
                            src="/favicon.ico"
                            alt="Escape Tsunami For Brainrots"
                            title="Escape Tsunami For Brainrots"
                            width={32}
                            height={32}
                            className="h-8 w-8"
                        />
                        <span className="font-bold text-xl tracking-tight text-text-main">ETFB<span className="text-neon-cyan">.space</span></span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    title={link.title}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${activeSection === link.href.substring(1)
                                        ? 'text-neon-cyan bg-surfaceHighlight'
                                        : 'text-text-muted hover:text-text-main hover:bg-surfaceHighlight/50'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ))}

                            {/* 语言切换器 */}
                            <LanguageSwitcher />

                            {/* 主题切换 */}
                            <div className="relative" ref={themeMenuRef}>
                                <button
                                    onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                                    className="p-2 rounded-md text-text-muted hover:text-text-main hover:bg-surfaceHighlight/50 transition-colors focus:outline-none focus:ring-2 focus:ring-neon-cyan/50"
                                    aria-label="Toggle theme"
                                    aria-expanded={isThemeMenuOpen}
                                >
                                    <ThemeIcon />
                                </button>

                                {/* 主题菜单 */}
                                <div
                                    className={`absolute right-0 mt-2 w-36 rounded-md shadow-lg bg-surface border border-text-main/10 ring-1 ring-black ring-opacity-5 transition-all duration-200 ${isThemeMenuOpen
                                        ? 'opacity-100 visible translate-y-0'
                                        : 'opacity-0 invisible -translate-y-2'
                                        }`}
                                >
                                    <div className="py-1" role="menu" aria-orientation="vertical">
                                        <button
                                            onClick={() => { setTheme('light'); setIsThemeMenuOpen(false); }}
                                            className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 transition-colors ${theme === 'light' ? 'text-neon-cyan bg-surfaceHighlight' : 'text-text-main hover:bg-surfaceHighlight'}`}
                                        >
                                            <Sun className="h-4 w-4" /> {t('themeLight')}
                                        </button>
                                        <button
                                            onClick={() => { setTheme('dark'); setIsThemeMenuOpen(false); }}
                                            className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 transition-colors ${theme === 'dark' ? 'text-neon-cyan bg-surfaceHighlight' : 'text-text-main hover:bg-surfaceHighlight'}`}
                                        >
                                            <Moon className="h-4 w-4" /> {t('themeDark')}
                                        </button>
                                        <button
                                            onClick={() => { setTheme('system'); setIsThemeMenuOpen(false); }}
                                            className={`w-full text-left px-4 py-2 text-sm flex items-center gap-2 transition-colors ${theme === 'system' ? 'text-neon-cyan bg-surfaceHighlight' : 'text-text-main hover:bg-surfaceHighlight'}`}
                                        >
                                            <Monitor className="h-4 w-4" /> {t('themeSystem')}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <a href="#tools" title={t('codesTitle')} className="ml-4 px-4 py-2 rounded bg-neon-cyan text-background font-bold hover:opacity-90 transition-opacity">
                                {t('getCodes')}
                            </a>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden items-center gap-2">
                        <LanguageSwitcher />
                        <button
                            onClick={() => {
                                // 在移动端循环切换主题
                                if (theme === 'system') setTheme('light');
                                else if (theme === 'light') setTheme('dark');
                                else setTheme('system');
                            }}
                            className="p-2 rounded-md text-text-muted hover:text-text-main hover:bg-surfaceHighlight/50 focus:outline-none"
                            aria-label="Cycle theme"
                        >
                            <ThemeIcon />
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-text-muted hover:text-text-main hover:bg-surfaceHighlight focus:outline-none"
                            aria-label="Toggle navigation menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* 移动端菜单 */}
            <div
                className={`md:hidden bg-surface border-b border-text-main/10 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            title={link.title}
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 rounded-md text-base font-medium text-text-muted hover:text-text-main hover:bg-surfaceHighlight transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
