import { defineConfig } from 'vite';

export default defineConfig({
  base: '/BODYCAM-OPERATION/', // Exemplo: '/bodycam-operacao-abismo/'
  root: './',
  publicDir: 'public',
  server: {
    host: true,
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
});
