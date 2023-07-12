import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD-ync04EGWXJEhgxcy5xaMn8VGelY-EZQ",
  authDomain: "where-is-waldo-3f27e.firebaseapp.com",
  projectId: "where-is-waldo-3f27e",
  storageBucket: "where-is-waldo-3f27e.appspot.com",
  messagingSenderId: "293849894098",
  appId: "1:293849894098:web:57fe8d7449462ddf92310b"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const storage = getStorage(app);

export { app, db, storage };