import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const populateCoordInfo = async (coordData) => {
  try {
    const coordsCollectionRef = collection(db, "coords");

    for (const coord of coordData) {
      await addDoc(coordsCollectionRef, coord);
    }
    console.log("Coordinates data populated successfully.");
  } catch (error) {
    console.error("Error populating coordinates data:", error);
  }
};

export default populateCoordInfo;