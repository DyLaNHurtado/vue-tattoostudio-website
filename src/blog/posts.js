function getAllPosts(){
  let files = {};
files = import.meta.env.DEV ? import.meta.globEager('/public/blog-post/*.md'): import.meta.globEager('/blog-post/*.md');


return Object.keys(files).map((path) => {
  const slug = path.split('/').pop().replace('.md', '');
  const { frontmatter } = files[path];
  return {
    title: frontmatter.title || slug,
    slug: slug,
    excerpt: frontmatter.excerpt || 'No excerpt available',
    date: frontmatter.date || 'Unknown date',
    image: frontmatter.image || `/blog-post/${slug}.jpg` // Ajusta según tus necesidades
  };
});
}

export default getAllPosts;