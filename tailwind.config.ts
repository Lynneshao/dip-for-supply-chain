import type { Config } from 'tailwindcss';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 语义化状态颜色
        status: {
          risk: '#EF4444',
          normal: '#10B981',
          warning: '#F59E0B',
        },
        // 背景颜色
        bg: {
          primary: '#f1f5f9',
          secondary: '#e2e8f0',
          tertiary: '#cbd5e1',
          elevated: '#94a3b8',
        },
        // 边框颜色
        border: {
          default: '#334155',
          muted: '#1e293b',
          accent: '#64748b',
        },
        // 文本颜色
        text: {
          primary: '#f1f5f9',
          secondary: '#cbd5e1',
          muted: '#94a3b8',
          disabled: '#64748b',
        },
        // 节点类型颜色
        node: {
          supplier: '#64748b',
          material: '#F59E0B',
          product: '#3B82F6',
          order: '#10B981',
        },
        // 交互颜色
        interactive: {
          hover: '#475569',
          active: '#334155',
          focus: '#3B82F6',
        },
        // 风险等级颜色及背景/文字
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
        },
        // 补全自定义色板 (Override/Extend default palettes with your v4 values)
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
        },
        red: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        },
        amber: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        indigo: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
        },
        purple: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
