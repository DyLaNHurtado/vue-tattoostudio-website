<template>
  <nav class="navbar">
    <ul class="nav-links desktop">
      <router-link to="/" class="nav-link" active-class="router-link-active" @click="toggleNav()">
        <li class="nav-link-item">Inicio</li>
      </router-link>
      <router-link to="/studio" class="nav-link" active-class="router-link-active" @click="toggleNav()">
        <li class="nav-link-item">
          Studio
        </li>
      </router-link>
      <router-link to="/gallery" class="nav-link" active-class="router-link-active" @click="toggleNav()">
        <li class="nav-link-item">
          Galeria
        </li>
      </router-link>
      <router-link to="/blog" class="nav-link" active-class="router-link-active" @click="toggleNav()">
        <li class="nav-link-item">
          Blog
        </li>
      </router-link>
      <router-link to="/contact" class="nav-link" active-class="router-link-active" @click="toggleNav()">
        <li class="nav-link-item">
          Contactar
        </li>
      </router-link>
    </ul>
    <ul class="nav-links mobile" v-if="isMobile">
      <router-link to="/" class="nav-link" active-class="router-link-active" @click="toggleNav()">
        <li class="nav-link-item">
          <font-awesome-icon :icon="['fas', 'home']" />
          <span>Inicio</span>
        </li>
      </router-link>
      <router-link to="/studio" class="nav-link" active-class="router-link-active" @click="toggleNav()">
        <li class="nav-link-item">
          <font-awesome-icon :icon="['fas', 'info-circle']" />
          <span>Studio</span>
        </li>
      </router-link>
      <router-link to="/gallery" class="nav-link" active-class="router-link-active" @click="toggleNav()">
        <li class="nav-link-item">

          <font-awesome-icon :icon="['fas', 'images']" />
          <span>Galeria</span>
        </li>
      </router-link>
      <router-link to="/blog" class="nav-link" active-class="router-link-active" @click="toggleNav()">
        <li class="nav-link-item">

          <font-awesome-icon :icon="['fas', 'blog']" />
          <span>Blog</span>
        </li>
      </router-link>
      <router-link to="/contact" class="nav-link" active-class="router-link-active" @click="toggleNav()">
        <li class="nav-link-item">
          <font-awesome-icon :icon="['fas', 'phone']" />
          <span>Contactar</span>
        </li>
      </router-link>
    </ul>
  </nav>
</template>

<script>
import { GalleryCategories } from './Enums';
export default {
  data() {
    return {
      isNavOpen: false,
      showDropdown: false,
      isMobile: false,
      GalleryCategories: GalleryCategories
    };
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
    checkIfMobile() {
      this.isMobile = window.innerWidth <= 768;
    }
  },
  mounted() {
    this.checkIfMobile();
    window.addEventListener('resize', this.checkIfMobile);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkIfMobile);
  }
};
</script>
<style scoped>
/* Estilos para la barra de navegación */
.navbar {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  background-color: rgba(90, 90, 90, 0.9);
  color: var(--color-heading);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  width: 100%;
  z-index: 20;
}

.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.desktop .nav-link-item {
  padding: 15px 45px;
  gap: 16px;
}

.mobile {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  border-top: 1px solid var(--color-border);
  background-color: rgba(90, 90, 90, 0.9);
}

.mobile .nav-link {
  flex: 1;
  text-align: center;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: var(--color-heading);
  background-color: transparent;
  text-decoration: none;
  transition: color 0.2s, transform 0.2s;
}

.mobile .nav-link-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

.mobile .nav-link-item span {
  font-size: 0.75rem;
  margin-top: 0;
}

.nav-link {
  text-decoration: none;
  color: var(--color-heading);
  transition: color 0.2s, transform 0.2s;
  border-radius: 5px;
}

.nav-link:hover {
  color: var(--color-primary-hover);
  border-radius: 10px;
}

.router-link-active {
  color: var(--color-primary) !important;
  font-weight: bold;
  transform: scale(1.3);
}

@media (max-width: 768px) {
  .desktop {
    display: none;
  }

  .mobile {
    display: flex;
  }

  .navbar {
    background-color: rgba(90, 90, 90, 0.8);
    padding: 5px 0;
  }

  .nav-links.mobile {
    justify-content: space-between;
    padding: 5px;
  }

  .mobile .nav-link {
    font-size: 0.9rem;
    padding: 5px;
  }

  .mobile .nav-link-item {
    padding: 5px;
  }

  .mobile .nav-link-item span {
    font-size: 0.8rem;
  }
}
</style>