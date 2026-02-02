"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

// FAQ 项组件 - 使用 CSS Grid 动画实现平滑展开
const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-text-main/10 rounded-lg bg-surface overflow-hidden">
            <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-text-main/5 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span className="font-semibold text-base text-text-main pr-4">{question}</span>
                <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-all duration-300 ${isOpen ? 'text-neon-cyan rotate-180' : 'text-text-muted'}`}
                />
            </button>
            {/* 使用 CSS Grid 动画实现平滑展开 */}
            <div
                className="grid transition-all duration-300 ease-in-out"
                style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
                <div className="overflow-hidden">
                    <div className="px-6 pb-5 text-text-muted text-base leading-[1.7] border-t border-text-main/10 pt-5">
                        {answer}
                    </div>
                </div>
            </div>
        </div>
    );
};

const FAQ: React.FC = () => {
    const faqs = [
        {
            q: "What happens if I die in a tsunami in Escape Tsunami For Brainrots?",
            a: "If the tsunami wave hits you in Escape Tsunami For Brainrots, you 'ragdoll' and typically die instantly or get stuck. You will lose 50% of the Brainrots currently in your bag (not the ones already at your ETFB base). Always deposit often in Escape Tsunami For Brainrots!"
        },
        {
            q: "When is the best time to do my first Rebirth in ETFB?",
            a: "We recommend waiting until you have unlocked at least the Sandy Zone in Escape Tsunami For Brainrots and have a steady income of around $500/s. Doing your first ETFB rebirth too early makes the grind back to basic speed painful."
        },
        {
            q: "How do I get the 'Void Walker' Brainrot in Escape Tsunami For Brainrots?",
            a: "Void Walker is a Celestial rarity brainrot spawning exclusively in the Escape Tsunami For Brainrots Void Zone. It has a 0.5% spawn chance and usually appears on the highest neon platforms in ETFB."
        },
        {
            q: "My Escape Tsunami For Brainrots codes aren't working, why?",
            a: "Codes in Escape Tsunami For Brainrots (ETFB) are case-sensitive. Make sure you capitalize letters exactly as shown. Also, ETFB codes often expire after major game updates, so check our 'Active Codes' section for the latest Escape Tsunami For Brainrots codes."
        },
        {
            q: "Is there a VIP area in Escape Tsunami For Brainrots?",
            a: "Yes, the Escape Tsunami For Brainrots VIP gamepass unlocks a special lounge with 2x Passive Income boost and a guaranteed Rare brainrot spawn spot. It's worth it if you plan to play ETFB long-term."
        }
    ];

    return (
        <div className="py-16 md:py-20 bg-surface/30">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-text-main mb-10 text-center">Escape Tsunami For Brainrots FAQ</h2>
                <div className="space-y-6">
                    {faqs.map((item, idx) => (
                        <FAQItem key={idx} question={item.q} answer={item.a} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
