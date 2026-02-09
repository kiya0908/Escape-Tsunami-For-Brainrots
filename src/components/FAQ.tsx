"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';

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
    const t = useTranslations('FAQ');

    const faqs = [
        { q: t('items.death.question'), a: t('items.death.answer') },
        { q: t('items.rebirth.question'), a: t('items.rebirth.answer') },
        { q: t('items.voidWalker.question'), a: t('items.voidWalker.answer') },
        { q: t('items.codes.question'), a: t('items.codes.answer') },
        { q: t('items.vip.question'), a: t('items.vip.answer') },
    ];

    return (
        <div className="py-16 md:py-20 bg-surface/30">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-text-main mb-10 text-center">{t('title')}</h2>
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
