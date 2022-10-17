import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore/lite';
import db from '../config/firebase';

const usersCol = collection(db, 'users');

export async function getUsers() {
    const usersSnapshot = await getDocs(usersCol);
    const usersList = usersSnapshot.docs.map(doc => ({id: doc.id,...doc.data()}));
    return usersList;
}

export async function addUser(userData) {
    return await addDoc(usersCol, userData);
}

export async function deleteUser(id) {
    await deleteDoc(doc(usersCol, id));
}