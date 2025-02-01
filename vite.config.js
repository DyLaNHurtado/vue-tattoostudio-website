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

    compression({
      algorithm: 'gzip',
      ext: '.gz', // Genera archivos comprimidos para el despliegue
      threshold: 10240, // Comprime solo archivos mayores a 10KB
    }),

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
    Markdown(),

    ViteImagemin({
      // Compresión para imágenes en varios formatos
      gifsicle: {
        optimizationLevel: 3,
        interlaced: false
      },
      optipng: {
        optimizationLevel: 7
      },
      pngquant: {
        quality: [0.6, 0.8]
      },
      svgo: {
        plugins: [
          { removeViewBox: false },
          { removeEmptyAttrs: true }
        ]
      },
      jpegoptim: {
        progressive: true,
        max: 70
      },
      webp: {
        quality: 75
      }
    }),
  ],
  css: {
    modules: {
      scopeBehaviour: 'local', // Utiliza 'global' si quieres que los estilos sean globales por defecto
      generateScopedName: '[name]__[local]___[hash:base64:5]', // Formato de los nombres de clase generados
    },
    preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        }
    }
  },
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
    sourcemap: false,
    cssCodeSplit: true,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
        manualChunks: {
          'vue-vendor': ['vue', 'vue-router'],
          'fontawesome': ['@fortawesome/fontawesome-svg-core', '@fortawesome/vue-fontawesome'],
        }
      }
    }
  },

  server: {
    port: 3000,
    open: true, // Abre el navegador al iniciar el servidor
    historyApiFallback: true, // Soporte para rutas de SPA con Vue Router
  },
  
});
