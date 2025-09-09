// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  root: './src',
  build: {
    outDir: '../wp-theme/dist',
    emptyOutDir: true,
    rollupOptions: {
      input: './src/main.js'   
    }
  }
})
