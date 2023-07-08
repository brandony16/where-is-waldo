import { db } from './firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

export const populateLevelInfo = async (levelsData) => {
  try {
    const levelsCollectionRef = collection(db, 'levels');
    for (const level of levelsData) {
      await addDoc(levelsCollectionRef, level);
    }
    console.log('Levels data successfully added to Firestore.');
  } catch (error) {
    console.error('Error adding levels data to Firestore:', error);
  }
};
