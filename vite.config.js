// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  root: './src',
  build: {
    outDir: '../wp-theme/dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './src/js/main.js',       // JSのエントリーポイント
        style: './src/scss/style.scss' // SCSSのエントリーポイント
      },
      output: {
        // 出力されるファイル名を整理
        entryFileNames: 'js/[name].js',
        assetFileNames: (assetInfo) => {
          if (/\.css$/i.test(assetInfo.name)) return 'css/[name].min[extname]'
          if (/\.(woff2?|ttf|eot|svg)$/i.test(assetInfo.name)) return 'fonts/[name][extname]'
          if (/\.(png|jpe?g|gif|webp)$/i.test(assetInfo.name)) return 'images/[name][extname]'
          return '[name][extname]'
        }
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@use "./src/scss/global" as *;`
      }
    }
  }
})
