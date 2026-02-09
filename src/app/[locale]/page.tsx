"use client";

import React, { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import IntroSection from '@/components/IntroSection';
import Mechanics from '@/components/Mechanics';
import Encyclopedia from '@/components/Encyclopedia';
import Progression from '@/components/Progression';
import EventsSecrets from '@/components/EventsSecrets';
import ToolsScripts from '@/components/ToolsScripts';
import FAQ from '@/components/FAQ';
import Navbar, { Theme } from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
    const [activeSection, setActiveSection] = useState('hero');
    const [theme, setTheme] = useState<Theme>('light');

    // 客户端初始化主题
    useEffect(() => {
        const saved = localStorage.getItem('etfb-theme');
        if (saved === 'light' || saved === 'dark' || saved === 'system') {
            setTheme(saved);
        }
    }, []);

    // 处理主题变化
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

    // 滚动监听，更新导航活跃状态
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'guide', 'mechanics', 'brainrots', 'progression', 'events', 'tools', 'faq'];
            const scrollPosition = window.scrollY + 200;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
                    setActiveSection(section);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen flex flex-col relative overflow-x-hidden transition-colors duration-300">
            <Navbar activeSection={activeSection} theme={theme} setTheme={setTheme} />

            <main className="flex-grow w-full">
                <section id="hero">
                    <Hero />
                </section>

                <section id="guide">
                    <IntroSection />
                </section>

                <section id="mechanics">
                    <Mechanics />
                </section>

                <section id="brainrots">
                    <Encyclopedia />
                </section>

                <section id="progression">
                    <Progression />
                </section>

                <section id="events">
                    <EventsSecrets />
                </section>

                <section id="tools">
                    <ToolsScripts />
                </section>

                <section id="faq">
                    <FAQ />
                </section>
            </main>

            <Footer />
        </div>
    );
}
