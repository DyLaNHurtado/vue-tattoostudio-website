<template>
  <div class="blog-post-container">
    <div v-if="postLoaded" class="blog-post">
      <nav class="blog-nav">
        <button @click="goToHome" class="back-button">
          <font-awesome-icon :icon="['fas', 'home']" /> Volver al Inicio
        </button>
        <button @click="goToBlog" class="nav-button">
          <font-awesome-icon :icon="['fas', 'arrow-left']" /> Volver al Blog
        </button>
        <div class="reading-progress-container">
          <div class="reading-progress" :style="{ width: `${readingProgress}%` }"></div>
        </div>
      </nav>
      <header class="blog-header">
        <h1>{{ attributes.title }}</h1>
        <div class="blog-meta">
          <p class="publish-date">
            <font-awesome-icon :icon="['far', 'calendar-alt']" />
            {{ formattedDate }}
          </p>
          <p class="reading-time">
            <font-awesome-icon :icon="['far', 'clock']" />
            {{ estimatedReadingTime }} min de lectura
          </p>
        </div>
        <div class="blog-categories">
          <span v-for="category in attributes.categories" :key="category" class="category-tag">
            {{ category }}
          </span>
        </div>
      </header>
      <div class="blog-content">
        <aside class="table-of-contents" v-if="tableOfContents.length > 0">
          <h2>Contenido</h2>
          <ul>
            <li v-for="item in tableOfContents" :key="item.id">
              <a :href="`#${item.id}`" @click.prevent="scrollToSection(item.id)">{{ item.text }}</a>
            </li>
          </ul>
        </aside>
        <article v-html="sanitizedPostContent" ref="articleContent"></article>
      </div>
      <footer class="blog-footer">
        <div class="author-info">
          <img src="/path-to-author-avatar.jpg" alt="Author Avatar" class="author-avatar">
          <div class="author-details">
            <h3>Nombre del Autor</h3>
            <p>Breve biografía del autor o descripción de su experiencia en tatuajes.</p>
          </div>
        </div>
        <div class="social-share">
          <h3>Comparte este artículo:</h3>
          <button @click="shareOnTwitter" class="share-button twitter">
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </button>
          <button @click="shareOnFacebook" class="share-button facebook">
            <font-awesome-icon :icon="['fab', 'facebook-f']" />
          </button>
          <button @click="shareOnLinkedIn" class="share-button linkedin">
            <font-awesome-icon :icon="['fab', 'linkedin-in']" />
          </button>
        </div>
      </footer>
    </div>
    <Loading v-else @retry="loadMarkdownFile" @home="goToHome" />
  </div>
</template>

<script setup>
import DOMPurify from 'dompurify';
import frontMatter from 'front-matter';
import { ref, defineProps, computed, onMounted, onUnmounted } from 'vue';
import { marked } from 'marked';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import Loading from './Loading.vue';
import { useRouter } from 'vue-router';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';

const props = defineProps({
  slug: String
});

const sanitizedPostContent = ref('');
const attributes = ref({ title: '', date: '', categories: [] });
const postLoaded = ref(false);
const router = useRouter();
const articleContent = ref(null);
const readingProgress = ref(0);
const tableOfContents = ref([]);

const formattedDate = computed(() => {
  return attributes.value.date
    ? format(new Date(attributes.value.date), "d 'de' MMMM 'de' yyyy", { locale: es })
    : '';
});

const estimatedReadingTime = computed(() => {
  const wordsPerMinute = 200;
  const wordCount = sanitizedPostContent.value.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
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
      date: frontmatterAttributes.date || '',
      categories: frontmatterAttributes.categories || []
    };

    const renderer = new marked.Renderer();
    renderer.heading = (textObj) => {
      if (typeof textObj === 'string') {
        return `<h1>${textObj}</h1>`;
      }
      const text = textObj.text;
      const level = textObj.depth;
      
      const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
      if (level === 2) {
        tableOfContents.value.push({ id: escapedText, text });
      }
      return `<h${level} id="${escapedText}">${text}</h${level}>`;
    };

    renderer.image = (href, title, text) => {
      return `<figure class="blog-image">
                <img src="${href}" alt="${text}" loading="lazy">
                ${title ? `<figcaption>${title}</figcaption>` : ''}
              </figure>`;
    };

    renderer.link = (href, title, text) => {
      return `<a href="${href}" title="${title || ''}" target="_blank" rel="noopener noreferrer" class="blog-link">${text}</a>`;
    };

    marked.setOptions({
      renderer,
      highlight: function(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        return hljs.highlight(code, { language }).value;
      },
    });

    const htmlContent = marked(body);
    sanitizedPostContent.value = DOMPurify.sanitize(htmlContent);
    postLoaded.value = true;
  } catch (error) {
    console.error('Error al cargar el archivo Markdown:', error);
  }
};

const updateReadingProgress = () => {
  if (articleContent.value) {
    const totalHeight = articleContent.value.scrollHeight - window.innerHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    readingProgress.value = Math.min((scrollTop / totalHeight) * 100, 100);
  }
};

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    const yOffset = -80; // Adjust this value based on your fixed header height
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
  }
};

const goToBlog = () => {
  router.push({ name: 'blog' });
};

const goToHome = () => {
  router.push({ name: 'home' });
};

const shareOnTwitter = () => {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(`${attributes.value.title} - Delaitto Tattoo Blog`);
  window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
};

const shareOnFacebook = () => {
  const url = encodeURIComponent(window.location.href);
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
};

const shareOnLinkedIn = () => {
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(attributes.value.title);
  window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`, '_blank');
};

onMounted(() => {
  loadMarkdownFile();
  window.addEventListener('scroll', updateReadingProgress);
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateReadingProgress);
});
</script>

<style scoped>
.blog-post-container {
  background-color: #1a1a1a;
  min-height: 100vh;
  padding-bottom: 40px;
  color: #e0e0e0;
}

.blog-post {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Roboto', sans-serif;
}

.blog-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: rgba(26, 26, 26, 0.95);
  padding: 15px 20px;
  display: flex;
  justify-content: start;
  gap: 16px;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
}

.nav-button {
  background-color: #ff4136;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.nav-button:hover {
  background-color: #e60000;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(255, 65, 54, 0.3);
}

.reading-progress-container {
  width: 100%;
  height: 4px;
  background-color: #333333;
  position: absolute;
  bottom: 0;
  left: 0;
}

.reading-progress {
  height: 100%;
  background-color: #ff4136;
  transition: width 0.3s ease;
}

.blog-header {
  text-align: center;
  margin: 100px 0 60px;
  padding: 40px;
  background-color: #252525;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.blog-header h1 {
  font-size: 3.5rem;
  color: #ffffff;
  margin-bottom: 20px;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.blog-meta {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-bottom: 30px;
}

.blog-meta p {
  font-size: 1rem;
  color: #b0b0b0;
  display: flex;
  align-items: center;
}

.blog-meta svg {
  margin-right: 8px;
  color: #ff4136;
}

.blog-categories {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
}

.category-tag {
  background-color: #ff4136;
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 25px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.category-tag:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(255, 65, 54, 0.3);
}

.blog-content {
  display: flex;
  gap: 60px;
  margin-top: 60px;
}

.table-of-contents {
  flex: 0 0 250px;
  background-color: #252525;
  padding: 30px;
  border-radius: 15px;
  position: sticky;
  top: 100px;
  max-height: calc(100vh - 120px);
  overflow-y: auto;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.table-of-contents h2 {
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 20px;
  border-bottom: 2px solid #ff4136;
  padding-bottom: 10px;
}

.table-of-contents ul {
  list-style-type: none;
  padding-left: 0;
}

.table-of-contents li {
  margin-bottom: 15px;
}

.table-of-contents a {
  color: #b0b0b0;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1rem;
  display: block;
  padding: 5px 10px;
  border-radius: 5px;
}

.table-of-contents a:hover {
  color: #ffffff;
  background-color: rgba(255, 65, 54, 0.1);
  transform: translateX(5px);
}

article {
  flex: 1;
  line-height: 1.8;
  font-size: 1.1rem;
}

article h2 {
  margin-top: 60px;
  margin-bottom: 30px;
  color: #ffffff;
  font-size: 2.5rem;
  border-bottom: 2px solid #ff4136;
  padding-bottom: 10px;
}

article p {
  margin-bottom: 25px;
}

article :deep(.blog-image) {
  margin: 40px 0;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

article :deep(.blog-image img) {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
}

article :deep(.blog-image:hover img) {
  transform: scale(1.05);
}

article :deep(.blog-image figcaption) {
  background-color: #252525;
  color: #b0b0b0;
  padding: 15px;
  text-align: center;
  font-style: italic;
}

article :deep(.blog-link) {
  color: #ff4136;
  text-decoration: none;
  border-bottom: 1px solid #ff4136;
  transition: all 0.3s ease;
  padding-bottom: 2px;
}

article :deep(.blog-link:hover) {
  color: #ffffff;
  background-color: #ff4136;
  border-bottom-color: transparent;
}

article :deep(ul),
article :deep(ol) {
  margin: 25px 0;
  padding-left: 30px;
}

article :deep(li) {
  margin-bottom: 15px;
}

article :deep(blockquote) {
  margin: 40px 0;
  padding: 30px;
  background-color: #252525;
  border-left: 5px solid #ff4136;
  font-style: italic;
  color: #b0b0b0;
  border-radius: 10px;
}

article :deep(code) {
  background-color: #252525;
  padding: 3px 6px;
  border-radius: 4px;
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  color: #ff4136;
}

article :deep(pre) {
  background-color: #252525;
  padding: 20px;
  border-radius: 10px;
  overflow-x: auto;
  font-size: 0.9rem;
  border: 1px solid #333333;
  margin: 30px 0;
}

article :deep(pre code) {
  background-color: transparent;
  padding: 0;
  color: #e0e0e0;
}

.blog-footer {
  margin-top: 80px;
  padding-top: 40px;
  border-top: 2px solid #333333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
}

.author-info {
  display: flex;
  align-items: center;
  gap: 20px;
}

.author-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #ff4136;
}

.author-details h3 {
  font-size: 1.2rem;
  color: #ffffff;
  margin-bottom: 5px;
}

.author-details p {
  font-size: 0.9rem;
  color: #b0b0b0;
}

.social-share h3 {
  font-size: 1.2rem;
  color: #ffffff;
  margin-bottom: 15px;
}

.share-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  margin-right: 15px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.twitter {
  background-color: #1DA1F2;
  color: white;
}

.facebook {
  background-color: #4267B2;
  color: white;
}

.linkedin {
  background-color: #0077B5;
  color: white;
}

.share-button:hover {
  transform: translateY(-5px) scale(1.1);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

@media (max-width: 1024px) {
  .blog-content {
    flex-direction: column;
  }

  .table-of-contents {
    position: static;
    max-height: none;
    margin-bottom: 40px;
  }
}

@media (max-width: 768px) {
  .blog-post {
    padding: 15px;
  }

  .blog-header {
    margin: 80px 0 40px;
    padding: 30px;
  }

  .blog-header h1 {
    font-size: 2.5rem;
  }

  .blog-meta {
    flex-direction: column;
    gap: 15px;
  }

  .blog-footer {
    flex-direction: column;
    align-items: flex-start;
  }

  .social-share {
    width: 100%;
    text-align: center;
    margin-top: 30px;
  }
}
</style>