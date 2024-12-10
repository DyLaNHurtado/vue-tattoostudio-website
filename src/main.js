import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import App from "./App.vue";
import router from "./router";
import "./styles/global.scss";

// Font Awesome icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faPumpMedical,
  faPenRuler,
  faDragon,
  faShare,
  faClock,
  faLocationDot,
  faComments,
  faChevronRight,
  faChevronLeft,
  faExclamationCircle,
  faSpinner,
  faSearch,
  faMagnifyingGlass,
  faGhost,
  faPhone,
  faBlog,
  faImages,
  faInfoCircle,
  faHome,
  faArrowRight,
  faArrowLeft,
  faTag,
  faMapMarkerAlt,
  faCalendarAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faWhatsapp,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faPumpMedical,
  faPenRuler,
  faDragon,
  faShare,
  faClock,
  faLocationDot,
  faComments,
  faChevronRight,
  faChevronLeft,
  faExclamationCircle,
  faSpinner,
  faSearch,
  faMagnifyingGlass,
  faGhost,
  faPhone,
  faBlog,
  faImages,
  faInfoCircle,
  faHome,
  faArrowRight,
  faArrowLeft,
  faTag,
  faMapMarkerAlt,
  faCalendarAlt,
  faEnvelope,
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faWhatsapp,
  faTiktok
);

const head = createHead();
const app = createApp(App);

app
  .use(router)
  .use(head)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
