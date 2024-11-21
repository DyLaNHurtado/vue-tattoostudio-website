// Devolver array de rutas para el sitemap
// import { getAllPosts } from "./blog/posts";
function getRoutesForSitemap() {
    // const posts = getAllPosts();
    const dynamicRoutes =  [
      '/gallery',
      '/studio',
      '/contact',
      '/blog',
    //   ...posts.map((post) => `/blog/${post.slug}`)
    ];
    return [...dynamicRoutes];
  }
  
  
  export default  getRoutesForSitemap;
  