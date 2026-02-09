"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Globe, ChevronDown } from "lucide-react";
import { routing, localeNames, localeFlags } from "@/i18n/routing";

export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // 获取当前语言
    const currentLocale =
        routing.locales.find((locale) => pathname.startsWith(`/${locale}`)) ||
        routing.defaultLocale;

    // 点击外部关闭菜单
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // 切换语言
    const handleLocaleChange = (newLocale: string) => {
        // 移除当前语言前缀，添加新语言前缀
        const pathWithoutLocale = pathname.replace(
            new RegExp(`^/(${routing.locales.join("|")})`),
            ""
        );
        const newPath = `/${newLocale}${pathWithoutLocale || ""}`;
        router.push(newPath);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={menuRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-text-muted hover:text-text-main hover:bg-surfaceHighlight/50 transition-colors focus:outline-none focus:ring-2 focus:ring-neon-cyan/50"
                aria-label="切换语言"
                aria-expanded={isOpen}
            >
                <Globe className="w-4 h-4" />
                <span className="text-sm">
                    {localeFlags[currentLocale]} {localeNames[currentLocale]}
                </span>
                <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>

            {/* 语言菜单 */}
            <div
                className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-surface border border-text-main/10 ring-1 ring-black ring-opacity-5 transition-all duration-200 z-50 ${isOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
            >
                <div className="py-1" role="menu" aria-orientation="vertical">
                    {routing.locales.map((locale) => (
                        <button
                            key={locale}
                            onClick={() => handleLocaleChange(locale)}
                            className={`w-full text-left px-4 py-2 text-sm flex items-center gap-3 transition-colors ${currentLocale === locale
                                    ? "text-neon-cyan bg-surfaceHighlight"
                                    : "text-text-main hover:bg-surfaceHighlight"
                                }`}
                        >
                            <span className="text-lg">{localeFlags[locale]}</span>
                            <span>{localeNames[locale]}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
