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
 *
 * The IBM Plex Sans + IBM Plex Mono font stacks declared below assume the
 * consumer app loads the fonts. See packages/starter/resources/css/app.css
 * for the canonical Google Fonts @import line, or self-host per
 * docs/ui-foundations.md.
 */
export default {
    theme: {
        extend: {
            colors: {
                // M4 Phase A palette — institutional, technical, trustworthy.
                // Cold-rolled steel as the brand color, not navy or zinc.
                bloxy: {
                    // Body text. Near-black with a slight steel-blue tint —
                    // warmer than slate-900 (#0f172a), cooler than pure black.
                    ink: '#1a2332',
                    // Page backgrounds. Off-white that reads as engineered.
                    paper: '#f4f6f9',
                    // Cards, dialogs, raised surfaces over paper.
                    surface: '#ffffff',
                    // The brand color. Mid-value steel-blue. Hero, headings,
                    // primary actions. Not navy, not teal, not slate.
                    steel: '#4a6580',
                    // Steel at ~60% luminance. Muted labels, secondary text,
                    // placeholders, captions.
                    'steel-dim': '#8fa5b8',
                    // 1px hairline borders + dividers.
                    wire: '#cdd5de',
                    // Agent surfaces. Blue-shifted steel — same family as
                    // brand, but signals "machine, not human" in cockpit
                    // surfaces with both human and agent affordances.
                    agent: '#2e6b8a',
                    // Garnet danger — weighted, not alarming. Compliance
                    // contexts read bright red as alert spam.
                    danger: '#9b2c2c',
                    // Danger-family surface treatments for DangerZone-style
                    // panels. Distinct from `danger` so callers can paint a
                    // soft background + strong text without raw red-N refs.
                    'danger-surface': '#fef2f2',
                    'danger-border': '#fca5a5',
                    'danger-strong': '#7f1d1d',
                },
            },
            fontFamily: {
                // IBM Plex Sans was designed for developer tooling and data
                // dashboards — reads as "infrastructure," not as a marketing
                // SaaS face. System fallbacks for sites that haven't loaded
                // the webfont yet so first paint is acceptable.
                bloxy: [
                    '"IBM Plex Sans"',
                    'ui-sans-serif',
                    'system-ui',
                    '-apple-system',
                    'sans-serif',
                ],
                // IBM Plex Mono for audit values, encrypted-field markers,
                // record IDs — anything that should read as machine-generated.
                'bloxy-mono': [
                    '"IBM Plex Mono"',
                    'ui-monospace',
                    'SFMono-Regular',
                    'Menlo',
                    'monospace',
                ],
            },
        },
    },
};
