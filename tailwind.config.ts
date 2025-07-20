import { Config } from 'tailwindcss';

const config: Config = {
    darkMode: 'class',
    content: [
        './src/app/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/pages/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                'cyan-neon': 'var(--cyan-neon)',
                'green-neon': 'var(--green-neon)',
                'emerald-neon': 'var(--emerald-neon)',
                'orange-neon': 'var(--orange-neon)',
                'amber-neon': 'var(--amber-neon)',
                'yellow-neon': 'var(--yellow-neon)',
            },
        },
    },
};

export default config;
