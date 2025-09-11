import { defineConfig } from "vite";
import liveReload from "vite-plugin-live-reload";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    // PHPファイルが変更されたらブラウザをリロード
    liveReload(__dirname + "/**/*.php"),
  ],

  root: "./src",
  base: "/dist/",

  build: {
    outDir: resolve(__dirname, "./wp-theme/dist"),
    emptyOutDir: true,
    manifest: true, // WordPress 側で manifest.json を利用
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./src/js/main.js"),
        style: resolve(__dirname, "./src/scss/style.scss"),
      },
      output: {
        entryFileNames: "assets/[name].[hash].js",
        chunkFileNames: "assets/[name].[hash].js",
        assetFileNames: (assetInfo) => {
          if (/\.css$/i.test(assetInfo.name)) {
            return "assets/[name].[hash][extname]";
          }
          if (/\.(woff2?|ttf|eot|svg)$/i.test(assetInfo.name)) {
            return "assets/fonts/[name].[hash][extname]";
          }
          if (/\.(png|jpe?g|gif|webp)$/i.test(assetInfo.name)) {
            return "assets/images/[name].[hash][extname]";
          }
          return "assets/[name].[hash][extname]";
        },
      },
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        // グローバルに使いたいSCSSがある場合ここで追加読み込み
        // additionalData: `@use "./src/scss/settings" as *;`
      },
    },
  },
});
