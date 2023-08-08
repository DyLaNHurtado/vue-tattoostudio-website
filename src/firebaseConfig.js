// firebaseConfig.js (Archivo de configuración de Firebase)
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'TU_API_KEY',
  authDomain: 'TU_AUTH_DOMAIN',
  databaseURL: 'TU_DATABASE_URL',
  projectId: 'TU_PROJECT_ID',
  storageBucket: 'TU_STORAGE_BUCKET',
  messagingSenderId: 'TU_MESSAGING_SENDER_ID',
  appId: 'TU_APP_ID'
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export {firebaseApp, db}
