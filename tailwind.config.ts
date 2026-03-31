import type { Config } from 'tailwindcss';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        status: {
          risk: '#EF4444',
          normal: '#10B981',
          warning: '#F59E0B',
        },
        bg: {
          primary: '#f1f5f9',
          secondary: '#e2e8f0',
          tertiary: '#cbd5e1',
          elevated: '#94a3b8',
        },
        border: {
          default: '#334155',
          muted: '#1e293b',
          accent: '#64748b',
        },
        text: {
          primary: '#f1f5f9',
          secondary: '#cbd5e1',
          muted: '#94a3b8',
          disabled: '#64748b',
        },
        node: {
          supplier: '#64748b',
          material: '#F59E0B',
          product: '#3B82F6',
          order: '#10B981',
        },
        interactive: {
          hover: '#475569',
          active: '#334155',
          focus: '#3B82F6',
        },
        risk: {
          low: '#10b981',
          medium: '#f59e0b',
          high: '#f97316',
          critical: '#ef4444',
          'low-bg': '#d1fae5',
          'medium-bg': '#fef3c7',
          'high-bg': '#fed7aa',
          'critical-bg': '#fee2e2',
          'low-text': '#047857',
          'medium-text': '#b45309',
          'high-text': '#c2410c',
          'critical-text': '#b91c1c',
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
