import { createApp } from 'vue';
import { createHead } from '@vueuse/head'
import App from './App.vue';
import router from './router';
import './styles/global.scss';

// State management
import { createPinia } from 'pinia';

// Font Awesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas);
library.add(fab);
library.add(far);

const head = createHead()
const app = createApp(App);
const pinia = createPinia();


app
  .use(router)
  .use(head)
  .use(pinia)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');