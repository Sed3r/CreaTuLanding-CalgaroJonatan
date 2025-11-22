import { collection, getDocs, doc, getDoc, query, where } from "firebase/firestore";
import { db } from "../service/firebase.jsx";

export async function getGames(categoryId) {
    const ref = collection(db, "games");

    let q = ref;
    if (categoryId) {
        q = query(ref, where("category", "==", categoryId));
    }

    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function getGameById(id) {
    const ref = doc(db, "games", id);
    const snapshot = await getDoc(ref);

    if (!snapshot.exists()) return null;

    return { id: snapshot.id, ...snapshot.data() };
}