<template>
  <header class="app-header" :class="{ 'mobile-nav': isMobile }">
    <nav>
      <ul class="nav-links desktop" :class="{ 'nav-open': isNavOpen }">
        <li v-for="item in navItems" :key="item.path">
          <router-link
            :to="item.path"
            class="nav-link"
            active-class="router-link-active"
            @click="toggleNav()"
          >
            {{ item.label }}
            <span class="nav-indicator"></span>
          </router-link>
        </li>
      </ul>
      <button class="nav-toggle" @click="toggleNav()" aria-label="Toggle navigation menu" v-if="isMobile">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
    <ul class="nav-links mobile" v-if="isMobile">
      <li v-for="item in mobileNavItems" :key="item.path">
        <router-link
          :to="item.path"
          class="nav-link"
          active-class="router-link-active"
          @click="toggleNav()"
        >
          <font-awesome-icon :icon="item.icon" />
          <span>{{ item.label }}</span>
        </router-link>
      </li>
    </ul>
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
      document.body.classList.toggle('nav-open', this.isNavOpen);
    },
    checkIfMobile() {
      this.isMobile = window.innerWidth <= 768;
      if (!this.isMobile && this.isNavOpen) {
        this.isNavOpen = false;
        document.body.classList.remove('nav-open');
      }
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
.app-header {
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  transition: all 0.3s ease;
  user-select: none;
  
}

nav {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 40px;
  width: auto;
}

.nav-links {
  display: flex;
  list-style-type: none;

  padding: 0;
  margin: 0;
}

.nav-link {
  text-decoration: none;
  color: var(--color-indigo);
  font-weight: bold;
  padding: 0.5rem 1rem;
  position: relative;
  transition: color 0.3s ease;
}

.nav-link:hover,
.router-link-active {
  color: var(--color-primary);
}

.nav-indicator {
  position: absolute;
  bottom: -5px;
  left: 50%;
  width: 0;
  height: 3px;
  background-color: var(--color-primary);
  transition: width 0.3s ease, left 0.3s ease;
}

.nav-link:hover .nav-indicator,
.router-link-active .nav-indicator {
  width: 100%;
  left: 0;
}

.nav-toggle {
  display: none;
}

/* Mobile styles */
@media (max-width: 768px) {

  .app-header.mobile-nav {
    top: auto;
    bottom: 0;
  }

  .desktop {
    display: none;
  }

  .nav-toggle {
    display: block;
    background: none;
    border: none;
    cursor: pointer;
  }

  .nav-toggle span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 5px 0;
    transition: all 0.3s ease;
  }

  .nav-open .nav-toggle span:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 6px);
  }

  .nav-open .nav-toggle span:nth-child(2) {
    opacity: 0;
  }

  .nav-open .nav-toggle span:nth-child(3) {
    transform: rotate(45deg) translate(-5px, -6px);
  }

  .mobile {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: var(--color-background-mute);
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
    padding: 0.5rem 0;
    justify-content: space-around;
  }

  .mobile .nav-link {
    flex: 1;
    text-align: center;
    padding: 0.5rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.8rem;
  }

  .mobile .nav-link span {
    margin-top: 0.25rem;
  }
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.nav-links {
  animation: fadeIn 0.3s ease;
}

.nav-link {
  transition: transform 0.3s ease;
}

.nav-link:hover {
  transform: translateY(-2px);
}
</style>