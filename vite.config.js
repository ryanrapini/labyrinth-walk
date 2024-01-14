import { defineConfig } from 'vite';
import glsl from 'vite-plugin-glsl';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@helpers': path.resolve(__dirname, './src/helpers'),
      '@scenes': path.resolve(__dirname, './src/scenes'),
      '@shaders': path.resolve(__dirname, './src/shaders'),
      '@utils': path.resolve(__dirname, './src/shaders'),
      '@models': path.resolve(__dirname, './src/models'),
    },
  },
  plugins: [glsl()],
});
