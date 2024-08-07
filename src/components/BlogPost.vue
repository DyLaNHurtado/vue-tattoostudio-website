<template>
  <div class="blog-post" v-if="postLoaded">
    <header class="blog-header">
      <h1>{{ attributes.title }}</h1>
      <p>Fecha de publicación: {{ formattedDate }}</p>
    </header>
    <article v-html="sanitizedPostContent"></article>
  </div>
  <Loading v-else @retry="loadMarkdownFile" @home="goToHome" />
</template>

<script setup>
import DOMPurify from 'dompurify';
import frontMatter from 'front-matter';
import { ref, defineProps, computed } from 'vue';
import { marked } from 'marked';
import { format } from 'date-fns';
import Loading from './Loading.vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  slug: String
});

const sanitizedPostContent = ref('');
const attributes = ref({ title: '', date: '' });
const postLoaded = ref(false);
const router = useRouter();
const formattedDate = computed(() => {
  return attributes.value.date ? format(new Date(attributes.value.date), 'dd MMMM yyyy') : '';
});

const loadMarkdownFile = async () => {
  try {
    const markdownFilePath = `/blog-post/${props.slug}.md`;

    const response = await fetch(markdownFilePath);
    if (!response.ok) {
      throw new Error(`Error al cargar el archivo Markdown: ${response.statusText}`);
    }

    const markdownText = await response.text();

    const { attributes: frontmatterAttributes, body } = frontMatter(markdownText);

    attributes.value = {
      title: frontmatterAttributes.title || 'Sin título',
      date: frontmatterAttributes.date || ''
    };

    const htmlContent = marked(body);
    sanitizedPostContent.value = DOMPurify.sanitize(htmlContent);
    postLoaded.value = true;
  } catch (error) {
    console.error('Error al cargar el archivo Markdown:', error);
  }
};
loadMarkdownFile();

const goToHome = () => {
 router.push("home")
};

</script>

<style scoped>
/* Estilo para BlogPost.vue */
.blog-post {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px 40px;
  background-color: var(--color-background);
  border-radius: 8px;
  box-shadow: 0 100px 100px rgba(0, 0, 0, 0.1);
  font-family: 'Roboto', sans-serif;
  color: var(--color-text);
}

.blog-header {
  text-align: center;
  margin-bottom: 40px;
}

.blog-header h1 {
  font-size: 2.5rem;
  color: var(--color-primary);
}

.blog-header p {
  font-size: 1rem;
  color: var(--color-text-muted);
}

.blog-post article {
  line-height: 1.6;
  font-size: 1.1rem;
  color: var(--color-text-muted);
}

.blog-post h2 {
  margin-top: 30px;
  margin-bottom: 20px;
  color: var(--color-heading);
}

.blog-post p {
  margin-bottom: 15px;
}

.blog-post img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 20px 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.blog-post a {
  color: var(--color-primary);
  text-decoration: underline;
  transition: color 0.3s ease;
}

.blog-post a:hover {
  color: var(--color-primary-hover);
  text-decoration: none;
}

.blog-post ul,
.blog-post ol {
  margin: 15px 0;
  padding-left: 40px;
  color:var(--color-heading)
}

.blog-post li {
  margin-bottom: 10px;
}

.blog-post blockquote {
  margin: 20px 0;
  padding: 10px 20px;
  background-color: var(--color-background-muted);
  border-left: 5px solid var(--color-primary);
  color: var(--color-text-muted);
  font-style: italic;
  color: var(--color-primary)
}

.blog-post code {
  background-color: var(--color-background-muted);
  padding: 2px 4px;
  border-radius: 4px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 1rem;
  color:var(--color-heading)
}

.blog-post pre {
  background-color: var(--color-background-muted);
  padding: 15px;
  border-radius: 8px;
  overflow-x: auto;
  font-size: 0.9rem;
  border: 4px solid var(--color-border); 

}

@media (max-width: 768px) {
  .blog-post {
    padding: 15px;
  }
}

@media (max-width: 576px) {
  .blog-post {
    max-width: 90%;
  }
}
</style>
