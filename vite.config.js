import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Markdown from 'vite-plugin-md';
import path from 'path';
import compression from 'vite-plugin-compression';
import ViteImagemin from 'vite-plugin-imagemin';
import PurgeCSS from 'vite-plugin-purgecss';

export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown(),
    compression({
      algorithm: 'gzip',
      ext: '.gz', // Genera archivos comprimidos para el despliegue
      threshold: 10240, // Comprime solo archivos mayores a 10KB
    }),
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
    // PurgeCSS({
    //   // Opciones de configuración de PurgeCSS
    //   content: [
    //     './index.html',
    //     './src/**/*.{js,ts,vue,html,scss}',  // Rutas donde buscará el CSS utilizado
    //   ],
    // })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Aliases para rutas cortas
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
  // build: {
  //   outDir: 'dist', // Carpeta de salida
  //   sourcemap: false, // Desactiva sourcemaps para archivos más pequeños en producción
  //   cssCodeSplit: true, // Divide el CSS por componente para mejor optimización
  //   minify: 'esbuild', // Usa esbuild para minificación rápida
  //   rollupOptions: {
  //     output: {
  //       manualChunks(id) {
  //         // Dividir módulos de Vue en su propio chunk
  //         if (id.includes('node_modules/vue')) {
  //           return 'vue';
  //         }
          
  //         // Dividir Vue Router en su propio chunk
  //         if (id.includes('node_modules/vue-router')) {
  //           return 'vue-router';
  //         }

  //         // Dividir Firebase y otras dependencias grandes
  //         if (id.includes('node_modules/firebase')) {
  //           return 'firebase';
  //         }

  //         // Dividir FontAwesome en su propio chunk
  //         if (id.includes('node_modules/@fortawesome')) {
  //           return 'fontawesome';
  //         }

  //         // // Agrupar dependencias de terceros en un chunk 'vendor'
  //         // if (id.includes('node_modules')) {
  //         //   return 'vendor';
  //         // }
  //       },
  //     },
  //   },
  // },
  server: {
    port: 3000,
    open: true, // Abre el navegador al iniciar el servidor
    historyApiFallback: true, // Soporte para rutas de SPA con Vue Router
  },
  
});
