import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import qiankun from 'vite-plugin-qiankun'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    qiankun('dip-for-supply-chain-demo', {
      useDevMode: mode === 'development',
    }),
  ],
  base: '/supply-chain-brain/', // Base path for the micro-app
  server: {
    port: 5173,
    host: '127.0.0.1',
    proxy: {
      // DIP API 代理 - ontology-manager
      '/api/ontology-manager': {
        target: 'https://dip.aishu.cn',
        changeOrigin: true,
        secure: false,
      },
      // DIP API 代理 - ontology-query
      '/api/ontology-query': {
        target: 'https://dip.aishu.cn',
        changeOrigin: true,
        secure: false,
      },
      // DIP API 代理 - agent-app
      '/api/agent-app': {
        target: 'https://dip.aishu.cn',
        changeOrigin: true,
        secure: false,
      },
      // DIP API 代理 - automation (workflow)
      '/api/automation': {
        target: 'https://dip.aishu.cn',
        changeOrigin: true,
        secure: false,
      },
      // DIP API 代理 - mdl-uniquery (metric model)
      '/api/mdl-uniquery': {
        target: 'https://dip.aishu.cn',
        changeOrigin: true,
        secure: false,
      },
      // DIP API 代理 - mdl-data-model
      '/api/mdl-data-model': {
        target: 'https://dip.aishu.cn',
        changeOrigin: true,
        secure: false,
      },
      // 转发 forecast 到本地 Prophet 预测服务
      '/proxy-forecast': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/proxy-forecast/, ''),
      },
      // 本地服务代理 (catch-all, must be last)
      '/api': {
        target: 'http://127.0.0.1:30777',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path,
      },
    },
  },
  build: {
    target: 'es2020',
    minify: false,
    cssCodeSplit: false,
  },
}))
