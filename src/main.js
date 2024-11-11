import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Firebase and Authentication
import { firebaseApp } from './firebaseConfig';

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

const app = createApp(App);
const pinia = createPinia();


app
  .use(router)
  .use(pinia)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');