import { createApp } from 'vue';
import './style.css';
import  router  from './router';
import { VueFire, VueFireFirestoreOptionsAPI, VueFireAuth } from 'vuefire';
import  {firebaseApp}  from './firebaseConfig';
import App from './App.vue';

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
app.mount('#app');
