import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  root: '.', // index.htmlの位置（プロジェクト直下）
  build: {
    outDir: 'dist', // 出力先
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
