import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Markdown from 'vite-plugin-md';
import path from 'path';
import compression from 'vite-plugin-compression';
import ViteImagemin from 'vite-plugin-imagemin';
import sitemapPlugin from 'vite-plugin-sitemap';
import getRoutesForSitemap from './src/sitemapsRoutes';

export default defineConfig({
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    Markdown(),
/*     compression({
      algorithm: 'gzip',
      ext: '.gz', // Genera archivos comprimidos para el despliegue
      threshold: 10240, // Comprime solo archivos mayores a 10KB
    }), */
    sitemapPlugin({
      hostname: 'https://delaittotattoo.es',
      dynamicRoutes: getRoutesForSitemap(),
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
      readable: true,
      generateRobotsTxt: true,
      robots: [
        { userAgent: '*', allow: '/' },
        { userAgent: '*', disallow: '/admin' },
      ],
      exclude: ['/404', '/admin'],
    }),
    ViteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
  ],
  define: {
    __VUE_OPTIONS_API__: true,
    __VUE_PROD_DEVTOOLS__: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Aliases para rutas cortas
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    cssCodeSplit: true,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
  },
  server: {
    port: 3000,
  },
});