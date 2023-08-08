import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import  router  from './router';

import { VueFire, VueFireFirestoreOptionsAPI, VueFireAuth } from 'vuefire';
import  {firebaseApp}  from './firebaseConfig';


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas)
library.add(fab)


const app = createApp(App);


app
  .use(VueFire, {
    firebaseApp,
    modules: [
      VueFireAuth(),
      VueFireFirestoreOptionsAPI({
        // this would be the same behavior as VueFire v2
        reset: true,
        wait: false,
      }),
    ],
  })

app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app');
