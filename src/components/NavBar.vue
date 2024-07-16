<template>
  <nav class="navbar">
    <div class="nav-logo">
      <a href="/">Delaitto Tattoo</a>
    </div>
    <ul class="nav-links desktop">
      <li class="nav-link-item">
        <router-link to="/" class="nav-link" active-class="router-link-active" @click="toggleNav()">Inicio</router-link>
      </li>
      <li class="nav-link-item">
        <router-link to="/studio" class="nav-link" active-class="router-link-active" @click="toggleNav()">Studio</router-link>
      </li>
      <li class="nav-link-item">
        <router-link to="/gallery" class="nav-link" active-class="router-link-active" @click="toggleNav()">Galeria</router-link>
      </li>
      <li class="nav-link-item">
        <router-link to="/contact" class="nav-link" active-class="router-link-active" @click="toggleNav()">Contactar</router-link>
      </li>
    </ul>
    <ul class="nav-links mobile" v-if="isMobile">
      <li class="nav-link-item">
        <router-link to="/" class="nav-link" active-class="router-link-active" @click="toggleNav()">
          <font-awesome-icon :icon="['fas', 'home']" />
          <span>Inicio</span>
        </router-link>
      </li>
      <li class="nav-link-item">
        <router-link to="/studio" class="nav-link" active-class="router-link-active" @click="toggleNav()">
          <font-awesome-icon :icon="['fas', 'info-circle']" />
          <span>Studio</span>
        </router-link>
      </li>
      <li class="nav-link-item">
        <router-link to="/gallery" class="nav-link" active-class="router-link-active" @click="toggleNav()">
          <font-awesome-icon :icon="['fas', 'images']" />
          <span>Galeria</span>
        </router-link>
      </li>
      <li class="nav-link-item">
        <router-link to="/contact" class="nav-link" active-class="router-link-active" @click="toggleNav()">
          <font-awesome-icon :icon="['fas', 'phone']" />
          <span>Contactar</span>
        </router-link>
      </li>
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
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: var(--color-background-mute);
  color: var(--color-heading);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all .3s;
  width: 100%;
  z-index: 20;
}

.nav-logo a {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: var(--color-heading);
}

.nav-links {
  list-style: none;
  margin: 0;
  padding: 0;
  z-index: 30;
}

.desktop {
  display: flex;
}

.mobile {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--color-background-soft);
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  border-top: 1px solid var(--color-border);
}

.mobile .nav-link-item {
  flex: 1;
  text-align: center;
  padding: 10px 0;
}

.mobile .nav-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
  color: var(--color-heading);
  background-color: transparent;
  text-decoration: none; /* Eliminar subrayado */
  transition: color 0.2s, transform 0.2s;
}

.mobile .nav-link:hover {
  color: var(--color-primary-hover);
  transform: scale(1.1);
}

.mobile .nav-link span {
  font-size: 0.75rem;
  margin-top: 5px;
}

.nav-link {
  text-decoration: none; /* Eliminar subrayado */
  background-color: var(--color-background-mute);
  color: var(--color-heading);
  transition: color .2s;
}

.nav-link:hover {
  color: var(--color-primary-hover);
}

.router-link-active {
  color: var(--color-primary) !important;
  font-weight: bold; /* Añadir negrita opcional */
}

.nav-link-item {
  padding: 20px;
}

/* Estilos para dispositivos móviles */
@media (max-width: 768px) {
  .desktop {
    display: none;
  }
  .mobile {
    display: flex;
  }
}
</style>
