<template>
  <nav class="navbar">
    <div class="nav-toggle" @click="toggleNav">
      <font-awesome-icon :icon="['fas', 'bars']" />
    </div>
    <div class="nav-logo">
      <a href="/">Delaitto Tattoo</a>
    </div>
    <ul :class="['nav-links', { 'nav-active': isNavOpen }]">
      <li class="nav-link-item"><router-link to="/" class="nav-link" @click="toggleNav()">Inicio</router-link></li>
      <li class="nav-link-item"><router-link to="/gallery" class="nav-link" @click="toggleNav()">Galeria</router-link>
        <!-- Menu Dropdown -->
        <ul class="dropdown" v-if="showDropdown">
          <li v-for="(categoryName, categoryId) in GalleryCategories" :key="categoryId" :value="categoryName">
            <router-link :to="'/gallery?t=' + categoryId" @click="toggleNav()">
              {{ categoryName }}
            </router-link>
          </li>
        </ul>
      
      </li>
      <li class="nav-link-item"><router-link to="/studio" class="nav-link" @click="toggleNav()">Studio</router-link></li>
      <li class="nav-link-item"><router-link to="/reviews" class="nav-link" @click="toggleNav()">Preguntas y Reseñas</router-link></li>
      <li class="nav-link-item"><router-link to="/contact" class="nav-link" @click="toggleNav()">Contactar</router-link></li>
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
      GalleryCategories: GalleryCategories
    };
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    }
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

.nav-toggle {
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.nav-logo a {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: var(--color-heading);
}

.nav-links {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  z-index: 30;
}

.nav-link {
  text-decoration: none;
  background-color: var(--color-background-mute);
  color: var(--color-heading);
  transition: color .2s;
}

.nav-link:hover {
  color: var(--color-primary-hover);
}


.nav-link-item {
  padding: 20px;
}

.dropdown {
  display: none;
  position: absolute;
  /* Estilos adicionales según tu diseño */
}
.nav-link-item:hover .dropdown {
  display: block;
}

/* Estilos para dispositivos móviles */
@media (max-width: 768px) {
  .nav-toggle {
    display: block;
  }
  .nav-links {
    display: none;
    position: absolute;
    top: 55px;
    left: 0;
    width: 100%;
    background-color: var(--color-background-soft);
    transform: translateX(-100%);
    transition: translateX .3s;
    min-height: 100%;
  }


  .nav-links.nav-active {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    transform: translateX(0);
  }

  .nav-link-item {
    padding: 0;
    width: 100%;
    display: flex;
    border-bottom: 1px solid var(--color-border);
  }
  .nav-link{
    width: 100%;
    padding: 20px;
  }

}
</style>