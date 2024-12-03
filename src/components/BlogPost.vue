<template>
  <div class="blog-post-container">
    <div v-if="postLoaded" class="blog-post">
      <nav class="blog-nav">
        <button @click="goToBlog" class="back-button">
          <font-awesome-icon :icon="['fas', 'arrow-left']" /> Volver al Blog
        </button>
 
        <div class="logo" @click="goToHome">
          <img src="/delaitto.png" alt="">
        </div>
        <button @click="goToHome" class="back-button">
          <font-awesome-icon :icon="['fas', 'home']" /> Volver al Inicio
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
          <div class="blog-tags" v-if="attributes.tags!=null && attributes.tags.length > 0">
          <p class="tags"><font-awesome-icon :icon="['fas', 'tag']" />
          <span v-for="tag in attributes.tags" :key="tag" class="tag-tag">
            {{ tag }}&nbsp;&nbsp;
          </span></p>
        </div>
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
import { useHead } from '@vueuse/head';
import { marked } from 'marked';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import Loading from './Loading.vue';
import { useRouter } from 'vue-router';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import '../styles/post-styles.scss'

const props = defineProps({
  slug: String
});

const sanitizedPostContent = ref('');
const attributes = ref({ title: '', date: '', tags: [] });
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
      tags: frontmatterAttributes.tags || []
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

useHead({
    title: `${attributes.value.title} | Blog de Tatuajes Delaitto`,
    meta: [
      { name: 'description', content: attributes.value.excerpt || `Lee sobre ${attributes.value.title}, ${attributes.value.excerpt} ... más el blog de Delaitto Tattoo, tu estudio de tatuajes en Leganés, Madrid.` },
      { name: 'keywords', content: `${attributes.value.tags.join(', ')}, tatuajes Leganés, Delaitto Tattoo` },
      { property: 'og:title', content: attributes.value.title },
      { property: 'og:description', content: attributes.value.excerpt || `Artículo sobre tatuajes de Delaitto Tattoo en Leganés, Madrid.` },
      { property: 'og:image', content: attributes.value.image || 'https://delaittotattoo.es/default-blog-image.jpg' },
      { property: 'og:url', content: `https://delaittotattoo.es/blog/${props.slug}` },
      { property: 'og:type', content: 'article' },
      { property: 'article:published_time', content: attributes.value.date },
      { property: 'article:author', content: 'Delaitto Tattoo' },
    ],
    link: [
      { rel: 'canonical', href: `https://delaittotattoo.es/blog/${props.slug}` },
    ],
  });

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