import { collection, query, getDocs} from "firebase/firestore";
import {db} from "../firebase/config.firebase";
export const getDataPosts = async (id) =>  {
    const q = query(collection(db, 'posts'));
    const querySnapshot = await getDocs(q);
    const docs = []
    querySnapshot.forEach((doc) => {
        if (id === doc.data().idUser) {
            docs.push({...doc.data(), id:doc.id})
        }
    });
    return docs

}