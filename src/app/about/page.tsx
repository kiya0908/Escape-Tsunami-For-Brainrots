"use client";

import React, { useState, useEffect } from 'react';
import { Waves, Sun, Moon, Monitor, BookOpen,
  MessageCircle, Github, Twitter, Heart, Zap, Shield, Users } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';

type Theme = 'light' | 'dark' | 'system';

export default function AboutUs() {
  const [theme, setTheme] = useState<Theme>('light');

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

  const ThemeIcon = () => {
    switch (theme) {
      case 'light': return <Sun className="h-5 w-5" />;
      case 'dark': return <Moon className="h-5 w-5" />;
      case 'system': return <Monitor className="h-5 w-5" />;
    }
  };

  const SocialIcon = ({ href, icon: Icon, label }: { href: string, icon: React.ElementType, label: string }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-lg bg-text-main/5 text-text-muted hover:text-neon-cyan hover:bg-neon-cyan/10 transition-all"
      aria-label={label}
    >
      <Icon className="w-6 h-6" />
    </a>
  );

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      {/* Simple Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-text-main/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <Waves className="h-8 w-8 text-neon-cyan" />
              <span className="font-bold text-xl tracking-tight text-text-main">ETFB<span className="text-neon-cyan">.space</span></span>
            </Link>

            <div className="flex items-center gap-4">
              <Link href="/" className="text-text-muted hover:text-neon-cyan transition-colors text-sm">
                Back Home
              </Link>

              <button
                onClick={() => {
                  if (theme === 'system') setTheme('light');
                  else if (theme === 'light') setTheme('dark');
                  else setTheme('system');
                }}
                className="p-2 rounded-md text-text-muted hover:text-text-main hover:bg-surfaceHighlight/50"
              >
                <ThemeIcon />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-neon-cyan/10 mb-6">
              <Waves className="h-10 w-10 text-neon-cyan" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-4">About ETFB Wiki</h1>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              Your ultimate unofficial guide to surviving the waves in Escape Tsunami For Brainrots
            </p>
          </div>

          {/* What We Are */}
          <section className="mb-12 p-6 rounded-xl bg-surface border border-text-main/10">
            <h2 className="text-2xl font-bold text-text-main mb-4 flex items-center gap-2">
              <BookOpen className="text-neon-cyan" />
              What We Are
            </h2>
            <p className="text-text-muted leading-relaxed mb-4">
              Escape Tsunami For Brainrots Wiki (ETFB Wiki) is a community-driven, unofficial knowledge base for the Roblox game &quot;Escape Tsunami For Brainrots.&quot; We exist to help players of all skill levels navigate the game, optimize their strategies, and discover hidden secrets.
            </p>
            <p className="text-text-muted leading-relaxed">
              Whether you&apos;re a complete beginner trying to survive your first wave, or an experienced player looking to optimize your base income and collect every radioactive coin, ETFB Wiki is here to help.
            </p>
          </section>

          {/* Our Mission */}
          <section className="mb-12 p-6 rounded-xl bg-surface border border-text-main/10">
            <h2 className="text-2xl font-bold text-text-main mb-4 flex items-center gap-2">
              <Zap className="text-neon-cyan" />
              Our Mission
            </h2>
            <p className="text-text-muted leading-relaxed mb-4">
              Our mission is to provide accurate, up-to-date, and comprehensive information about Escape Tsunami For Brainrots to the entire player community. We believe that knowledge should be freely accessible to everyone, helping to create a more informed and skilled player base.
            </p>
            <ul className="list-none space-y-2 text-text-muted">
              <li className="flex items-start gap-2">
                <Heart className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5" />
                <span>Curated guides written by experienced players</span>
              </li>
              <li className="flex items-start gap-2">
                <Heart className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5" />
                <span>Comprehensive database of all brainrots and their locations</span>
              </li>
              <li className="flex items-start gap-2">
                <Heart className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5" />
                <span>Useful tools and calculators to optimize gameplay</span>
              </li>
              <li className="flex items-start gap-2">
                <Heart className="w-5 h-5 text-neon-cyan flex-shrink-0 mt-0.5" />
                <span>Active code tracking for free rewards</span>
              </li>
            </ul>
          </section>

          {/* Core Values */}
          <section className="mb-12 p-6 rounded-xl bg-surface border border-text-main/10">
            <h2 className="text-2xl font-bold text-text-main mb-6">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neon-cyan/10 mb-3">
                  <Shield className="w-6 h-6 text-neon-cyan" />
                </div>
                <h3 className="font-bold text-text-main mb-2">xAccuracy</h3>
                <p className="text-sm text-text-muted">We strive to provide accurate and verified information</p>
              </div>
              <div className="text-center p-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neon-cyan/10 mb-3">
                  <Users className="w-6 h-6 text-neon-cyan" />
                </div>
                <h3 className="font-bold text-text-main mb-2">Community</h3>
                <p className="text-sm text-text-muted">Built by players, for players</p>
              </div>
              <div className="text-center p-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neon-cyan/10 mb-3">
                  <Zap className="w-6 h-6 text-neon-cyan" />
                </div>
                <h3 className="font-bold text-text-main mb-2">Timeliness</h3>
                <p className="text-sm text-text-muted">Keeping up with game updates and changes</p>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="mb-12 p-6 rounded-xl bg-surface border border-text-main/10 border-l-4 border-l-neon-cyan">
            <h2 className="text-2xl font-bold text-text-main mb-4">Important Disclaimer</h2>
            <p className="text-text-muted leading-relaxed mb-3">
              <strong>ETFB Wiki is an unofficial, fan-made resource.</strong> We are <strong>not affiliated with</strong> Roblox Corporation or the developers of Escape Tsunami For Brainrots.
            </p>
            <p className="text-text-muted leading-relaxed">
              All game-related content, trademarks, and intellectual property belong to their respective owners. This wiki is created for informational purposes to help the community.
            </p>
          </section>

          {/* Connect With Us */}
          <section className="text-center">
            <h2 className="text-2xl font-bold text-text-main mb-4">Connect With Us</h2>
            <p className="text-text-muted mb-6">
              Join our community and stay updated with the latest guides, codes, and discoveries
            </p>
            <div className="flex justify-center gap-4">
              <SocialIcon href="https://discord.gg/etfb" icon={MessageCircle} label="Join Discord" />
              <SocialIcon href="https://twitter.com/etfbwiki" icon={Twitter} label="Follow on Twitter" />
              <SocialIcon href="https://github.com/etfb-wiki" icon={Github} label="View on GitHub" />
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
