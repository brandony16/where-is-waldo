import { db } from "./firebaseConfig";
import { collection, addDoc } from 'firebase/firestore';

const populateCharacterInfo = async (charactersData) => {
  try {
    const charactersCollectionRef = collection(db, 'characters');
    for (const character of charactersData) {
      await addDoc(charactersCollectionRef, character);
    }
    console.log('Characters data successfully added to Firestore.');
  } catch (error) {
    console.error('Error adding characters data to Firestore:', error);
  }
};

export default populateCharacterInfo;