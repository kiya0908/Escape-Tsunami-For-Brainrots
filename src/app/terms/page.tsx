"use client";

import React, { useState, useEffect } from 'react';
import { Waves, Sun, Moon, Monitor } from 'lucide-react';
import Link from 'next/link';
import Footer from '@/components/Footer';

type Theme = 'light' | 'dark' | 'system';

export default function TermsOfUse() {
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
            <h1 className="text-4xl font-bold text-text-main mb-4">Terms of Use</h1>
            <p className="text-text-muted">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="space-y-8 text-text-main">
            <section>
              <h2 className="text-2xl font-bold text-text-main mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing and using Escape Tsunami For Brainrots Wiki (&quot;ETFB Wiki&quot; or the &quot;Website&quot;) at <strong>escapetsunamiforbrainrots.space</strong>, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our Website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-main mb-4">2. Nature of the Website</h2>
              <p className="mb-4 leading-relaxed">
                ETFB Wiki is an unofficial, fan-made community resource for the Roblox game &quot;Escape Tsunami For Brainrots.&quot; It is important to understand that:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-text-muted">
                <li>This Website is <strong>not affiliated with</strong>, endorsed by, sponsored by, or specifically approved by Roblox Corporation.</li>
                <li>This Website is <strong>not affiliated with</strong> the original game developers or publishers.</li>
                <li>All game-related content, images, and trademarks are the property of their respective owners.</li>
                <li>Roblox is a registered trademark of Roblox Corporation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-main mb-4">3. Permitted Use</h2>
              <p className="mb-4 leading-relaxed">
                You are permitted to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-text-muted">
                <li>Access and browse the Website for personal, non-commercial purposes</li>
                <li>Use the information provided to improve your gameplay experience</li>
                <li>Share links to our Website with others</li>
                <li>Quote small excerpts of our content with proper attribution</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-main mb-4">4. Prohibited Use</h2>
              <p className="mb-4 leading-relaxed">
                You may not:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-text-muted">
                <li>Copy, reproduce, or distribute substantial portions of our content without permission</li>
                <li>Use automated tools (bots, scrapers) to harvest data from the Website</li>
                <li>Attempt to circumvent any security measures or access restricted areas</li>
                <li>Modify or create derivative works based on our content</li>
                <li>Use the Website for any illegal or unauthorized purpose</li>
                <li>Interfere with the operation of the Website or its servers</li>
                <li>Introduce viruses, malware, or any harmful code</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-main mb-4">5. Intellectual Property</h2>
              <p className="mb-4 leading-relaxed">
                All content on this Website, including but not limited to text, graphics, logos, images, and software, is our property or the property of our licensors and is protected by copyright laws.
              </p>
              <p className="leading-relaxed">
                Game-related content (screenshots, game mechanics descriptions, etc.) is used for informational purposes under fair use principles. All game copyrights and trademarks belong to their respective owners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-main mb-4">6. User-Generated Content</h2>
              <p className="mb-4 leading-relaxed">
                If you submit content to our Website (such as through comments, contributions, or feedback):
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-text-muted">
                <li>You represent that you have the right to submit such content</li>
                <li>You grant us a non-exclusive, royalty-free license to use, display, and distribute your content</li>
                <li>You are responsible for the accuracy and legality of your submissions</li>
                <li>We reserve the right to remove or modify any user content at our discretion</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-main mb-4">7. Disclaimer of Warranties</h2>
              <p className="mb-4 leading-relaxed">
                The Website is provided on an &quot;as is&quot; and &quot;as available&quot; basis without any warranties of any kind, either express or implied, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-text-muted">
                <li>Accuracy or reliability of information</li>
                <li>Fitness for a particular purpose</li>
                <li>Non-infringement of third-party rights</li>
                <li> uninterrupted or error-free operation</li>
              </ul>
              <p className="leading-relaxed">
                Game information may change without notice, and we cannot guarantee that all information is current or accurate.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-main mb-4">8. Limitation of Liability</h2>
              <p className="leading-relaxed">
                To the fullest extent permitted by law, ETFB Wiki shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the Website, even if we have been advised of the possibility of such damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-main mb-4">9. External Links</h2>
              <p className="mb-4 leading-relaxed">
                Our Website may contain links to third-party websites, including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-text-muted">
                <li>Roblox platform</li>
                <li>Social media platforms (Discord, Twitter, GitHub)</li>
                <li>Other community resources</li>
              </ul>
              <p className="leading-relaxed">
                We are not responsible for the content, privacy policies, or practices of any third-party websites. Your interactions with these websites are governed by their terms and conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-main mb-4">10. Privacy</h2>
              <p className="leading-relaxed">
Your use of the Website is also governed by our Privacy Policy, which can be found at <Link href="/privacy" className="text-neon-cyan hover:underline">escapetsunamiforbrainrots.space/privacy</Link>. Please review our Privacy Policy to understand how we collect and use your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-main mb-4">11. Modifications to Terms</h2>
              <p className="leading-relaxed">
                We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting. Your continued use of the Website after any modifications constitutes acceptance of the updated terms. We encourage you to review these terms periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-main mb-4">12. Governing Law</h2>
              <p className="leading-relaxed">
                These Terms of Use shall be governed by and construed in accordance with applicable laws. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in the relevant jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-main mb-4">13. Contact Us</h2>
              <p className="mb-4 leading-relaxed">
                If you have any questions about these Terms of Use, please contact us:
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
