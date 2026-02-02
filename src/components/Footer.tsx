import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Gamepad2, Gift, HelpCircle } from 'lucide-react';

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
    const quickLinks = [
        { name: 'Beginner Guide', href: '#guide', icon: BookOpen },
        { name: 'Brainrots Database', href: '#brainrots', icon: Gamepad2 },
        { name: 'Active Codes', href: '#events', icon: Gift },
        { name: 'FAQ', href: '#faq', icon: HelpCircle },
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
                            The ultimate unofficial wiki for Escape Tsunami For Brainrots. Guides, tools, and strategies to help you survive the waves.
                        </p>
                    </div>

                    {/* 列2: 快速链接 */}
                    <div>
                        <h3 className="font-bold text-text-main mb-4">Quick Links</h3>
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
                        <h3 className="font-bold text-text-main mb-4">Resources</h3>
                        <ul className="space-y-3">
                            <li><FooterLink href="https://www.roblox.com/games/escape-tsunami">Play on Roblox</FooterLink></li>
                            <li><FooterLink href="#tools">Calculators & Tools</FooterLink></li>
                            <li><FooterLink href="#progression">Upgrade Guides</FooterLink></li>
                            <li><FooterLink href="#mechanics">Game Mechanics</FooterLink></li>
                        </ul>
                    </div>

                    {/* 列4: Legal */}
                    <div>
                        <h3 className="font-bold text-text-main mb-4">Legal</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/privacy" className="text-text-muted hover:text-neon-cyan transition-colors text-sm">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-text-muted hover:text-neon-cyan transition-colors text-sm">
                                    Terms of Use
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-text-muted hover:text-neon-cyan transition-colors text-sm">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* 分割线 */}
                <div className="border-t border-text-main/10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-text-muted text-sm">
                            &copy; {new Date().getFullYear()} ETFB Wiki. All rights reserved.
                        </p>
                        <p className="text-text-muted text-xs text-center md:text-right opacity-60">
                            Not affiliated with Roblox Corporation or the game developers.<br />
                            This is a fan-made community resource.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
