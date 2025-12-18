import react from '@vitejs/plugin-react-swc';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    port: 3001,
    strictPort: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@modules': fileURLToPath(new URL('./src/modules/', import.meta.url)),
      '@app': fileURLToPath(new URL('./src/app/', import.meta.url)),
      '@components': fileURLToPath(
        new URL('./src/components/', import.meta.url),
      ),
      '@ui': fileURLToPath(new URL('./src/ui/', import.meta.url)),
      '@pages': fileURLToPath(new URL('./src/pages/', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets/', import.meta.url)),
    },
  },
});
