import { collection, addDoc } from "firebase/firestore";
import {db} from '../firebase/config.firebase';

export const addPost = async (dateForm) => {
    return await addDoc(collection(db, 'posts'), dateForm)
}