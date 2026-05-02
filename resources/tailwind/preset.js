/**
 * BLOXY UI Tailwind preset.
 *
 * Apps consuming bloxy-ui include this preset in their tailwind.config.js so
 * the bloxy-ui component classes (bloxy-cockpit-*, bloxy-portal-*, etc.) are
 * scanned and the BLOXY-shaped color palette + typography are available.
 *
 * Apps inherit this then override:
 *
 *   // tailwind.config.js
 *   import preset from '@peanutgraphic/bloxy-ui/preset';
 *
 *   export default {
 *     presets: [preset],
 *     content: [
 *       './resources/**\/*.{js,jsx,ts,tsx,blade.php}',
 *       './node_modules/@peanutgraphic/bloxy-ui/dist/**\/*.js',
 *     ],
 *   };
 */
export default {
    theme: {
        extend: {
            colors: {
                bloxy: {
                    background: '#f8fafc',
                    surface: '#ffffff',
                    border: '#e2e8f0',
                    text: '#0f172a',
                    'text-muted': '#475569',
                    accent: '#0f172a',
                    danger: '#b91c1c',
                },
            },
            fontFamily: {
                bloxy: ['ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
            },
        },
    },
};
