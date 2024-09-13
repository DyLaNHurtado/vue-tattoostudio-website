<template>
  <header class="app-header">
    <nav>
      <img class="desktop-image" src="path-to-your-image.jpg" alt="Logo" />
      <ul class="nav-links desktop">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="nav-link"
          active-class="router-link-active"
          @click="toggleNav()"
        >
          <li class="nav-link-item">{{ item.label }}</li>
        </router-link>
      </ul>
      <ul class="nav-links mobile" v-if="isMobile">
        <router-link
          v-for="item in mobileNavItems"
          :key="item.path"
          :to="item.path"
          class="nav-link"
          active-class="router-link-active"
          @click="toggleNav()"
        >
          <li class="nav-link-item">
            <font-awesome-icon :icon="item.icon" />
            <span>{{ item.label }}</span>
          </li>
        </router-link>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isNavOpen: false,
      isMobile: false,
      navItems: [
        { label: 'Inicio', path: '/' },
        { label: 'Studio', path: '/studio' },
        { label: 'Galería', path: '/gallery' },
        { label: 'Blog', path: '/blog' },
        { label: 'Contactar', path: '/contact' },
      ],
      mobileNavItems: [
        { label: 'Inicio', path: '/', icon: ['fas', 'home'] },
        { label: 'Studio', path: '/studio', icon: ['fas', 'info-circle'] },
        { label: 'Galería', path: '/gallery', icon: ['fas', 'images'] },
        { label: 'Blog', path: '/blog', icon: ['fas', 'blog'] },
        { label: 'Contactar', path: '/contact', icon: ['fas', 'phone'] },
      ],
    };
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
    checkIfMobile() {
      this.isMobile = window.innerWidth <= 768;
    },
  },
  mounted() {
    this.checkIfMobile();
    window.addEventListener('resize', this.checkIfMobile);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkIfMobile);
  },
};
</script>

<style scoped>
/* Estilos generales para la barra de navegación */
.app-header {
  background-color: rgba(31, 32, 34, 0.2);
  backdrop-filter: blur(2px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
}

nav {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

ul {
  display: flex;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

/* Estilos específicos para resoluciones de escritorio */
.desktop .nav-link-item {
  padding: 15px 20px;
  gap: 16px;
}

.desktop-image{
    display: inline-block;
    width: 150px;
    height: 100%;
    transition: width 0.3s;

  }

.desktop .nav-link {
  text-decoration: none;
  color: white;
  transition: color 0.3s, transform 0.3s;
}

.desktop .nav-link:hover {
  color: #f56565;
  transform: scale(1.3);
}

.router-link-active {
  color: #f56565 !important;
  font-weight: bold;
  transform: scale(1.2);
}

/* Estilos específicos para resoluciones móviles */
.mobile {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(26, 32, 44, 0.8);
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;
}

.mobile .nav-link {
  flex: 1;
  text-align: center;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  color: white;
  transition: color 0.3s, transform 0.3s;
}

.mobile .nav-link-item span {
  font-size: 0.75rem;
  margin-top: 0.25rem;
  display: flex;
  flex-direction: column;
}

.mobile .nav-link:hover {
  color: #f56565;
  transform: scale(1.3);
}

/* Responsive behavior */
@media (max-width: 768px) {
  .desktop-image{
    display: none;
  }
  .desktop {
    display: none;
  }

  .mobile {
    display: flex;
  }

  .app-header {
    top: auto;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 50;
    padding: 0.5rem 0;
  }
}
</style>
