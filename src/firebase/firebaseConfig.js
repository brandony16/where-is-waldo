import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Find missing vars
const missingEnvVars = Object.entries(firebaseConfig).filter(
  ([key, value]) => !value
);

if (missingEnvVars.length > 0) {
  console.error(
    "Missing Firebase configuration environment variables:",
    missingEnvVars.map(([key]) => key).join(", ")
  );
  throw new Error("Missing Firebase Environment Variables");
}

let app;
let db;
let storage;

try {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  storage = getStorage(app);
} catch (error) {
  console.error("Error initializing Firebase: ", error);
  throw error;
}

export { app, db, storage };
