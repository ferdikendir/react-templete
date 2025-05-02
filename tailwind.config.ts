import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    important: ':root',
    theme: {
        extend: {
            colors: {
                card: 'var(--background-card)'
            },
            backgroundColor: { test: "#123456" }
        },
    },
    plugins: []
}

export default config;