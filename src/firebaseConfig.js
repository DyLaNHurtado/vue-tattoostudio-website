// firebaseConfig.js (Archivo de configuración de Firebase)
import firebase from 'firebase/app';
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

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
