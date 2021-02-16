import { tvContent, movieContent } from "./constants/contentMetadata"
import { v4 as uuid } from "uuid"

export default function seedContentMetadata(db) {
    // Writes locally-stored content metadata to the Firestore db

    // TV
    for (let i = 0; i < tvContent.length; i++) {
        db.collection('tv').add({ ...tvContent[i], id: uuid() })
            .then((docRef) => {
                console.log("Item written:", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding item:", error);
            });
    }

    // Movies
    for (let i = 0; i < movieContent.length; i++) {
        db.collection('movies').add({ ...movieContent[i], id: uuid() })
            .then((docRef) => {
                console.log("Item written:", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding item:", error);
            });
    }
}
