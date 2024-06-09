import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    host: true,
    strictPort: true,
    port: 3000,
    hmr: { clientPort: 443, }
  },
  build: {
    target: 'esnext',
  },
});
