import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 7000
  },
  plugins: [react(), svgrPlugin({
    svgrOptions: {
      icon: true
    }
  })],
  alias: {
    '@': path.resolve(__dirname, './src'),
    'assets': path.resolve(__dirname, './src/assets'),
    'components': path.resolve(__dirname, './src/components'),
    'pages': path.resolve(__dirname, './src/pages'),
    'contexts': path.resolve(__dirname, './src/contexts')
  }
});
