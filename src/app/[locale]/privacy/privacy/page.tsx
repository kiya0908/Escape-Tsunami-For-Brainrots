"use client";

import React, { useState, useEffect } from 'react';
import { Waves, Sun, Moon, Monitor } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';

type Theme = 'light' | 'dark' | 'system';

export default function PrivacyPolicy() {
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
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-text-main mb-4">Privacy Policy</h1>
            <p className="text-text-muted">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="space-y-8 text-text-main">
            <section>
              <h2 className="text-2xl font-bold text-text-main mb-4">1. Introduction</h2>
              <p className="mb-4 leading-relaxed">
                Welcome to Escape Tsunami For Brainrots Wiki (&quot;ETFB Wiki&quot; or &quot;we&quot;). This Privacy Policy explains how we collect, use, and protect your information when you visit our website at <strong>escapetsunamiforbrainrots.space</strong>.
              </p>
              <p className="leading-relaxed">
                We are committed to protecting your privacy and ensuring your personal data is handled in a safe and responsible manner. Please read this Privacy Policy carefully as it contains important information about your privacy rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-main mb-4">2. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-text-main mb-3 mt-4">2.1 Information You Provide</h3>
              <p className="mb-4 leading-relaxed">
                We do not require you to create an account or provide personal information to use our website. However, if you choose to contact us, we may collect:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-text-muted">
                <li>Email address (if provided)</li>
                <li>Any information you voluntarily include in messages to us</li>
              </ul>

              <h3 className="text-xl font-semibold text-text-main mb-3 mt-4">2.2 Automatically Collected Information</h3>
              <p className="mb-4 leading-relaxed">
                When you visit our website, we may automatically collect certain technical information:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-text-muted">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring website</li>
                <li>Pages viewed and time spent on pages</li>
                <li>Device information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-main mb-4">3. Cookies and Tracking Technologies</h2>
              <p className="mb-4 leading-relaxed">
                We use cookies and similar tracking technologies to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-text-muted">
                <li>Remember your theme preferences (light/dark/system mode)</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Improve our website functionality</li>
              </ul>
              <p className="leading-relaxed">
                You can manage cookies through your browser settings. Please note that disabling cookies may affect certain features of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-main mb-4">4. How We Use Your Information</h2>
              <p className="mb-4 leading-relaxed">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-text-muted">
                <li>To provide and maintain our website</li>
                <li>To improve user experience</li>
                <li>To analyze usage trends and optimize our content</li>
                <li>To respond to your inquiries and provide support</li>
                <li>To detect, prevent, and address technical issues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-main mb-4">5. Third-Party Services</h2>
              <p className="mb-4 leading-relaxed">
                Our website may include links to third-party services or embed content from external sources, including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-text-muted">
                <li>Roblox (game platform links)</li>
                <li>Social media platforms (Discord, Twitter, GitHub)</li>
              </ul>
              <p className="leading-relaxed">
                These third parties have their own privacy policies, and we are not responsible for their data practices. We encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-main mb-4">6. Data Security</h2>
              <p className="leading-relaxed">
                We implement reasonable security measures to protect your information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-main mb-4">7. Your Rights</h2>
              <p className="mb-4 leading-relaxed">
                Depending on your jurisdiction, you may have the following rights regarding your personal data:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-text-muted">
                <li>Right to access your personal data</li>
                <li>Right to correct inaccurate data</li>
                <li>Right to request deletion of your data</li>
                <li>Right to object to processing of your data</li>
                <li>Right to data portability</li>
              </ul>
              <p className="leading-relaxed">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-main mb-4">8. Children&apos;s Privacy</h2>
              <p className="leading-relaxed">
                Our website is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-main mb-4">9. Changes to This Policy</h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page with an updated effective date. We encourage you to review this Privacy Policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-main mb-4">10. Contact Us</h2>
              <p className="mb-4 leading-relaxed">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
              </p>
              <ul className="list-none space-y-2 text-text-muted">
                <li>Email: contact@escapetsunamiforbrainrots.space</li>
                <li>Website: https://escapetsunamiforbrainrots.space</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
