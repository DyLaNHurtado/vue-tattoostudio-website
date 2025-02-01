// vite.config.js
import { defineConfig } from "file:///C:/Users/DyLaN/Desktop/vue-tattoostudio-website/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/DyLaN/Desktop/vue-tattoostudio-website/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Markdown from "file:///C:/Users/DyLaN/Desktop/vue-tattoostudio-website/node_modules/vite-plugin-md/dist/index.js";
import path2 from "path";
import compression from "file:///C:/Users/DyLaN/Desktop/vue-tattoostudio-website/node_modules/vite-plugin-compression/dist/index.mjs";
import ViteImagemin from "file:///C:/Users/DyLaN/Desktop/vue-tattoostudio-website/node_modules/vite-plugin-imagemin/dist/index.mjs";
import PurgeCSS from "file:///C:/Users/DyLaN/Desktop/vue-tattoostudio-website/node_modules/vite-plugin-purgecss/dist/index.mjs";
import sitemapPlugin from "file:///C:/Users/DyLaN/Desktop/vue-tattoostudio-website/node_modules/vite-plugin-sitemap/dist/index.js";

// src/sitemapsRoutes.js
import fs from "fs";
import path from "path";
import frontMatter from "file:///C:/Users/DyLaN/Desktop/vue-tattoostudio-website/node_modules/front-matter/index.js";
function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), "public/blog-post");
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { attributes: frontmatter } = frontMatter(fileContents);
    return {
      slug: fileName.replace(/\.md$/, ""),
      ...frontmatter
    };
  });
}
function getRoutesForSitemap() {
  const posts = getAllPosts();
  const dynamicRoutes = [
    "/",
    "/gallery",
    "/studio",
    "/contact",
    "/blog",
    ...posts.map((post) => `/blog/${post.slug}`)
  ];
  return dynamicRoutes;
}
var sitemapsRoutes_default = getRoutesForSitemap;

// vite.config.js
var __vite_injected_original_dirname = "C:\\Users\\DyLaN\\Desktop\\vue-tattoostudio-website";
var vite_config_default = defineConfig({
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    compression({
      algorithm: "gzip",
      ext: ".gz",
      // Genera archivos comprimidos para el despliegue
      threshold: 10240
      // Comprime solo archivos mayores a 10KB
    }),
    sitemapPlugin({
      hostname: "https://delaittotattoo.es",
      dynamicRoutes: sitemapsRoutes_default(),
      changefreq: "weekly",
      priority: 0.8,
      lastmod: (/* @__PURE__ */ new Date()).toISOString(),
      readable: true,
      generateRobotsTxt: true,
      robots: [
        { userAgent: "*", allow: "/" },
        { userAgent: "*", disallow: "/admin" }
      ],
      exclude: ["/404", "/admin"]
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
    })
    // visualizer({
    //   open: true,
    //   gzipSize: true,
    //   brotliSize: true,
    // }),
    // PurgeCSS({
    //   // Opciones de configuración de PurgeCSS
    //   content: [
    //     './index.html',
    //     './src/**/*.{js,ts,vue,html,scss}',  // Rutas donde buscará el CSS utilizado
    //   ],
    // })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler"
      }
    }
  },
  resolve: {
    alias: {
      "@": path2.resolve(__vite_injected_original_dirname, "./src"),
      // Aliases para rutas cortas
      "@components": path2.resolve(__vite_injected_original_dirname, "./src/components"),
      "@assets": path2.resolve(__vite_injected_original_dirname, "./src/assets")
    }
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    cssCodeSplit: true,
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks: {
          "vue-vendor": ["vue", "vue-router"],
          "fontawesome": ["@fortawesome/fontawesome-svg-core", "@fortawesome/vue-fontawesome"]
        }
      }
    }
  },
  server: {
    port: 3e3,
    open: true,
    // Abre el navegador al iniciar el servidor
    historyApiFallback: true
    // Soporte para rutas de SPA con Vue Router
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAic3JjL3NpdGVtYXBzUm91dGVzLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcRHlMYU5cXFxcRGVza3RvcFxcXFx2dWUtdGF0dG9vc3R1ZGlvLXdlYnNpdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXER5TGFOXFxcXERlc2t0b3BcXFxcdnVlLXRhdHRvb3N0dWRpby13ZWJzaXRlXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9EeUxhTi9EZXNrdG9wL3Z1ZS10YXR0b29zdHVkaW8td2Vic2l0ZS92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XHJcbmltcG9ydCBNYXJrZG93biBmcm9tICd2aXRlLXBsdWdpbi1tZCc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgY29tcHJlc3Npb24gZnJvbSAndml0ZS1wbHVnaW4tY29tcHJlc3Npb24nO1xyXG5pbXBvcnQgVml0ZUltYWdlbWluIGZyb20gJ3ZpdGUtcGx1Z2luLWltYWdlbWluJztcclxuaW1wb3J0IFB1cmdlQ1NTIGZyb20gJ3ZpdGUtcGx1Z2luLXB1cmdlY3NzJztcclxuaW1wb3J0IHNpdGVtYXBQbHVnaW4gZnJvbSAndml0ZS1wbHVnaW4tc2l0ZW1hcCc7XHJcbmltcG9ydCBnZXRSb3V0ZXNGb3JTaXRlbWFwIGZyb20gJy4vc3JjL3NpdGVtYXBzUm91dGVzJztcclxuLy8gaW1wb3J0IHsgdmlzdWFsaXplciB9IGZyb20gJ3JvbGx1cC1wbHVnaW4tdmlzdWFsaXplcic7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICB2dWUoeyBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwubWQkL10gfSksXHJcbiAgICBjb21wcmVzc2lvbih7XHJcbiAgICAgIGFsZ29yaXRobTogJ2d6aXAnLFxyXG4gICAgICBleHQ6ICcuZ3onLCAvLyBHZW5lcmEgYXJjaGl2b3MgY29tcHJpbWlkb3MgcGFyYSBlbCBkZXNwbGllZ3VlXHJcbiAgICAgIHRocmVzaG9sZDogMTAyNDAsIC8vIENvbXByaW1lIHNvbG8gYXJjaGl2b3MgbWF5b3JlcyBhIDEwS0JcclxuICAgIH0pLFxyXG4gICAgc2l0ZW1hcFBsdWdpbih7XHJcbiAgICAgIGhvc3RuYW1lOiAnaHR0cHM6Ly9kZWxhaXR0b3RhdHRvby5lcycsXHJcbiAgICAgIGR5bmFtaWNSb3V0ZXM6IGdldFJvdXRlc0ZvclNpdGVtYXAoKSxcclxuICAgICAgY2hhbmdlZnJlcTogJ3dlZWtseScsXHJcbiAgICAgIHByaW9yaXR5OiAwLjgsXHJcbiAgICAgIGxhc3Rtb2Q6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgcmVhZGFibGU6IHRydWUsXHJcbiAgICAgIGdlbmVyYXRlUm9ib3RzVHh0OiB0cnVlLFxyXG4gICAgICByb2JvdHM6IFtcclxuICAgICAgICB7IHVzZXJBZ2VudDogJyonLCBhbGxvdzogJy8nIH0sXHJcbiAgICAgICAgeyB1c2VyQWdlbnQ6ICcqJywgZGlzYWxsb3c6ICcvYWRtaW4nIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGV4Y2x1ZGU6IFsnLzQwNCcsICcvYWRtaW4nXSxcclxuICAgIH0pLFxyXG4gICAgTWFya2Rvd24oKSxcclxuXHJcbiAgICBWaXRlSW1hZ2VtaW4oe1xyXG4gICAgICAvLyBDb21wcmVzaVx1MDBGM24gcGFyYSBpbVx1MDBFMWdlbmVzIGVuIHZhcmlvcyBmb3JtYXRvc1xyXG4gICAgICBnaWZzaWNsZToge1xyXG4gICAgICAgIG9wdGltaXphdGlvbkxldmVsOiAzLFxyXG4gICAgICAgIGludGVybGFjZWQ6IGZhbHNlXHJcbiAgICAgIH0sXHJcbiAgICAgIG9wdGlwbmc6IHtcclxuICAgICAgICBvcHRpbWl6YXRpb25MZXZlbDogN1xyXG4gICAgICB9LFxyXG4gICAgICBwbmdxdWFudDoge1xyXG4gICAgICAgIHF1YWxpdHk6IFswLjYsIDAuOF1cclxuICAgICAgfSxcclxuICAgICAgc3Znbzoge1xyXG4gICAgICAgIHBsdWdpbnM6IFtcclxuICAgICAgICAgIHsgcmVtb3ZlVmlld0JveDogZmFsc2UgfSxcclxuICAgICAgICAgIHsgcmVtb3ZlRW1wdHlBdHRyczogdHJ1ZSB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgICBqcGVnb3B0aW06IHtcclxuICAgICAgICBwcm9ncmVzc2l2ZTogdHJ1ZSxcclxuICAgICAgICBtYXg6IDcwXHJcbiAgICAgIH0sXHJcbiAgICAgIHdlYnA6IHtcclxuICAgICAgICBxdWFsaXR5OiA3NVxyXG4gICAgICB9XHJcbiAgICB9KSxcclxuICAgIC8vIHZpc3VhbGl6ZXIoe1xyXG4gICAgLy8gICBvcGVuOiB0cnVlLFxyXG4gICAgLy8gICBnemlwU2l6ZTogdHJ1ZSxcclxuICAgIC8vICAgYnJvdGxpU2l6ZTogdHJ1ZSxcclxuICAgIC8vIH0pLFxyXG5cclxuICAgIC8vIFB1cmdlQ1NTKHtcclxuICAgIC8vICAgLy8gT3BjaW9uZXMgZGUgY29uZmlndXJhY2lcdTAwRjNuIGRlIFB1cmdlQ1NTXHJcbiAgICAvLyAgIGNvbnRlbnQ6IFtcclxuICAgIC8vICAgICAnLi9pbmRleC5odG1sJyxcclxuICAgIC8vICAgICAnLi9zcmMvKiovKi57anMsdHMsdnVlLGh0bWwsc2Nzc30nLCAgLy8gUnV0YXMgZG9uZGUgYnVzY2FyXHUwMEUxIGVsIENTUyB1dGlsaXphZG9cclxuICAgIC8vICAgXSxcclxuICAgIC8vIH0pXHJcbiAgXSxcclxuICBjc3M6IHtcclxuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcclxuICAgICAgICBzY3NzOiB7XHJcbiAgICAgICAgICAgIGFwaTogJ21vZGVybi1jb21waWxlcicsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59LFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJyksIC8vIEFsaWFzZXMgcGFyYSBydXRhcyBjb3J0YXNcclxuICAgICAgJ0Bjb21wb25lbnRzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2NvbXBvbmVudHMnKSxcclxuICAgICAgJ0Bhc3NldHMnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvYXNzZXRzJyksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIG91dERpcjogJ2Rpc3QnLFxyXG4gICAgc291cmNlbWFwOiBmYWxzZSxcclxuICAgIGNzc0NvZGVTcGxpdDogdHJ1ZSxcclxuICAgIG1pbmlmeTogJ2VzYnVpbGQnLFxyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICBtYW51YWxDaHVua3M6IHtcclxuICAgICAgICAgICd2dWUtdmVuZG9yJzogWyd2dWUnLCAndnVlLXJvdXRlciddLFxyXG4gICAgICAgICAgJ2ZvbnRhd2Vzb21lJzogWydAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnLCAnQGZvcnRhd2Vzb21lL3Z1ZS1mb250YXdlc29tZSddLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHNlcnZlcjoge1xyXG4gICAgcG9ydDogMzAwMCxcclxuICAgIG9wZW46IHRydWUsIC8vIEFicmUgZWwgbmF2ZWdhZG9yIGFsIGluaWNpYXIgZWwgc2Vydmlkb3JcclxuICAgIGhpc3RvcnlBcGlGYWxsYmFjazogdHJ1ZSwgLy8gU29wb3J0ZSBwYXJhIHJ1dGFzIGRlIFNQQSBjb24gVnVlIFJvdXRlclxyXG4gIH0sXHJcbiAgXHJcbn0pO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXER5TGFOXFxcXERlc2t0b3BcXFxcdnVlLXRhdHRvb3N0dWRpby13ZWJzaXRlXFxcXHNyY1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcRHlMYU5cXFxcRGVza3RvcFxcXFx2dWUtdGF0dG9vc3R1ZGlvLXdlYnNpdGVcXFxcc3JjXFxcXHNpdGVtYXBzUm91dGVzLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9EeUxhTi9EZXNrdG9wL3Z1ZS10YXR0b29zdHVkaW8td2Vic2l0ZS9zcmMvc2l0ZW1hcHNSb3V0ZXMuanNcIjtpbXBvcnQgZnMgZnJvbSAnZnMnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IGZyb250TWF0dGVyIGZyb20gJ2Zyb250LW1hdHRlcic7XHJcblxyXG5mdW5jdGlvbiBnZXRBbGxQb3N0cygpIHtcclxuICBjb25zdCBwb3N0c0RpcmVjdG9yeSA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAncHVibGljL2Jsb2ctcG9zdCcpO1xyXG4gIGNvbnN0IGZpbGVOYW1lcyA9IGZzLnJlYWRkaXJTeW5jKHBvc3RzRGlyZWN0b3J5KTtcclxuXHJcbiAgcmV0dXJuIGZpbGVOYW1lcy5tYXAoKGZpbGVOYW1lKSA9PiB7XHJcbiAgICBjb25zdCBmdWxsUGF0aCA9IHBhdGguam9pbihwb3N0c0RpcmVjdG9yeSwgZmlsZU5hbWUpO1xyXG4gICAgY29uc3QgZmlsZUNvbnRlbnRzID0gZnMucmVhZEZpbGVTeW5jKGZ1bGxQYXRoLCAndXRmOCcpO1xyXG4gICAgY29uc3QgeyBhdHRyaWJ1dGVzOiBmcm9udG1hdHRlciB9ID0gZnJvbnRNYXR0ZXIoZmlsZUNvbnRlbnRzKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzbHVnOiBmaWxlTmFtZS5yZXBsYWNlKC9cXC5tZCQvLCAnJyksXHJcbiAgICAgIC4uLmZyb250bWF0dGVyLFxyXG4gICAgfTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Um91dGVzRm9yU2l0ZW1hcCgpIHtcclxuICBjb25zdCBwb3N0cyA9IGdldEFsbFBvc3RzKCk7XHJcbiAgY29uc3QgZHluYW1pY1JvdXRlcyA9IFtcclxuICAgICcvJyxcclxuICAgICcvZ2FsbGVyeScsXHJcbiAgICAnL3N0dWRpbycsXHJcbiAgICAnL2NvbnRhY3QnLFxyXG4gICAgJy9ibG9nJyxcclxuICAgIC4uLnBvc3RzLm1hcCgocG9zdCkgPT4gYC9ibG9nLyR7cG9zdC5zbHVnfWApLFxyXG4gIF07XHJcbiAgcmV0dXJuIGR5bmFtaWNSb3V0ZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldFJvdXRlc0ZvclNpdGVtYXA7Il0sCiAgIm1hcHBpbmdzIjogIjtBQUF5VSxTQUFTLG9CQUFvQjtBQUN0VyxPQUFPLFNBQVM7QUFDaEIsT0FBTyxjQUFjO0FBQ3JCLE9BQU9BLFdBQVU7QUFDakIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxrQkFBa0I7QUFDekIsT0FBTyxjQUFjO0FBQ3JCLE9BQU8sbUJBQW1COzs7QUNQbVUsT0FBTyxRQUFRO0FBQzVXLE9BQU8sVUFBVTtBQUNqQixPQUFPLGlCQUFpQjtBQUV4QixTQUFTLGNBQWM7QUFDckIsUUFBTSxpQkFBaUIsS0FBSyxLQUFLLFFBQVEsSUFBSSxHQUFHLGtCQUFrQjtBQUNsRSxRQUFNLFlBQVksR0FBRyxZQUFZLGNBQWM7QUFFL0MsU0FBTyxVQUFVLElBQUksQ0FBQyxhQUFhO0FBQ2pDLFVBQU0sV0FBVyxLQUFLLEtBQUssZ0JBQWdCLFFBQVE7QUFDbkQsVUFBTSxlQUFlLEdBQUcsYUFBYSxVQUFVLE1BQU07QUFDckQsVUFBTSxFQUFFLFlBQVksWUFBWSxJ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
