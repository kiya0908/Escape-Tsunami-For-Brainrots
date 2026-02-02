import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--color-background)",
                surface: "var(--color-surface)",
                surfaceHighlight: "var(--color-surface-highlight)",
                neon: {
                    cyan: "var(--color-neon-cyan)",
                    purple: "var(--color-neon-purple)",
                    green: "var(--color-neon-green)",
                    danger: "var(--color-neon-danger)",
                },
                text: {
                    main: "var(--color-text-main)",
                    muted: "var(--color-text-muted)",
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)", "Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
};

export default config;
