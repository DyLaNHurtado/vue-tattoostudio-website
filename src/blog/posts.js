// posts.js
const files = import.meta.globEager('../blog/*.md');

const posts = Object.keys(files).map((path) => {
  const slug = path.split('/').pop().replace('.md', '');
  const { frontmatter  } = files[path];
  return {
    title: frontmatter.title || slug,
    slug: slug,
    excerpt: frontmatter.excerpt || 'No excerpt available',
    // Adjust as per your needs
    date: frontmatter.date || 'Unknown date',
    // Adjust as per your needs
    image: `/blog-images/${slug}.jpg` || '',
    // Ensure you have an image property in your frontmatter
  };
});

export default posts;