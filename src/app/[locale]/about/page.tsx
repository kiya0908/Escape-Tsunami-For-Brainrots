"use client";

import { useState, useEffect } from 'react';
import { BookOpen, Heart, Zap, Shield, Users, MessageCircle, Github, Twitter } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar, { Theme } from '@/components/Navbar';

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

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      <Navbar activeSection="hero" theme={theme} setTheme={setTheme} />

      {/* Main Content */}
      <main className="flex-grow pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-text-main mb-4">About ETFB Wiki</h1>
            <p className="text-text-muted">
              Your ultimate unofficial guide to surviving the waves in Escape Tsunami For Brainrots
            </p>
          </div>

          <div className="space-y-8 text-text-main">
            {/* What We Are */}
            <section>
              <h2 className="text-2xl font-bold text-text-main mb-4 flex items-center gap-2">
                <BookOpen className="text-neon-cyan h-6 w-6" />
                What We Are
              </h2>
              <p className="mb-4 leading-relaxed text-text-muted">
                Escape Tsunami For Brainrots Wiki (ETFB Wiki) is a community-driven, unofficial knowledge base for the Roblox game &quot;Escape Tsunami For Brainrots.&quot; We exist to help players of all skill levels navigate the game, optimize their strategies, and discover hidden secrets.
              </p>
              <p className="leading-relaxed text-text-muted">
                Whether you&apos;re a complete beginner trying to survive your first wave, or an experienced player looking to optimize your base income and collect every radioactive coin, ETFB Wiki is here to help.
              </p>
            </section>

            {/* Our Mission */}
            <section>
              <h2 className="text-2xl font-bold text-text-main mb-4 flex items-center gap-2">
                <Zap className="text-neon-cyan h-6 w-6" />
                Our Mission
              </h2>
              <p className="mb-4 leading-relaxed text-text-muted">
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
            <section>
              <h2 className="text-2xl font-bold text-text-main mb-4">Our Core Values</h2>
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
            <section>
              <h2 className="text-2xl font-bold text-text-main mb-4">Important Disclaimer</h2>
              <p className="mb-4 leading-relaxed text-text-muted">
                <strong>ETFB Wiki is an unofficial, fan-made resource.</strong> We are <strong>not affiliated with</strong> Roblox Corporation or the developers of Escape Tsunami For Brainrots.
              </p>
              <p className="leading-relaxed text-text-muted">
                All game-related content, trademarks, and intellectual property belong to their respective owners. This wiki is a created for informational purposes to help the community.
              </p>
            </section>

            {/* Connect With Us */}
            <section>
              <h2 className="text-2xl font-bold text-text-main mb-4">Connect With Us</h2>
              <p className="mb-4 leading-relaxed text-text-muted">
                Join our community and stay updated with the latest guides, codes, and discoveries
              </p>
              <ul className="list-none space-y-2 text-text-muted">
                <li className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-neon-cyan flex-shrink-0" />
                  <a href="https://github.com/kiya0908/Escape-Tsunami-For-Brainrots" target="_blank" rel="noopener noreferrer" className="hover:text-neon-cyan transition-colors">
                    GitHub
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
