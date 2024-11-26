import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), 'public/blog-post');
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data: frontmatter } = matter(fileContents);

    return {
      slug: fileName.replace(/\.md$/, ''),
      ...frontmatter,
    };
  });
}

function getRoutesForSitemap() {
  const posts = getAllPosts();
  const dynamicRoutes = [
    '/',
    '/gallery',
    '/studio',
    '/contact',
    '/blog',
    ...posts.map((post) => `/blog/${post.slug}`),
  ];
  return dynamicRoutes;
}

export default getRoutesForSitemap;