export function getAllPosts(){
  let files = {};
  files =  import.meta.globEager('/public/blog-post/*.md');

return Object.keys(files).map((path) => {
  const slug = path.split('/').pop().replace('.md', '');
  const { frontmatter } = files[path];
  return {
    title: frontmatter.title || slug,
    slug: slug,
    excerpt: frontmatter.excerpt || 'No excerpt available',
    date: frontmatter.date || 'Unknown date',
    image: frontmatter.image || `/blog-images/${slug}.webp`,
    tags: frontmatter.tags || []
  };
//Ordenados por date mas reciente
}).sort((a, b) => new Date(b.date) - new Date(a.date));
}
export function getLatestPosts(limit = 3) {
  return getAllPosts().slice(0, limit);
}

export function getSimilarPosts(currentPostSlug, limit = 3) {
  const allPosts = getAllPosts();
  const currentPost = allPosts.find(post => post.slug === currentPostSlug);

  if (!currentPost) {
    return [];
  }

  const similarPosts = allPosts
    .filter(post => post.slug !== currentPostSlug)
    .map(post => {
      const commonTags = post.tags.filter(tag => currentPost.tags.includes(tag));
      return {
        ...post,
        commonTagsCount: commonTags.length
      };
    })
    .sort((a, b) => b.commonTagsCount - a.commonTagsCount)
    .slice(0, limit);

  return similarPosts;
}