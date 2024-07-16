// firebaseConfig.js (Archivo de configuración de Firebase)
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAN3GXwc1hdIP_lte95Io8ahSk4JAuH6_A",
  authDomain: "tattoo-studio-website.firebaseapp.com",
  projectId: "tattoo-studio-website",
  storageBucket: "tattoo-studio-website.appspot.com",
  messagingSenderId: "439814965928",
  appId: "1:439814965928:web:9047038d1752fba69d509d",
  measurementId: "G-210V56C9F6"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const analytics = getAnalytics(firebaseApp);

export { firebaseApp, db, analytics };