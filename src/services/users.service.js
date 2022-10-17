import { addDoc, updateDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore/lite';
import db from '../config/firebase';

const usersCol = collection(db, 'users');

export async function getUsers() {
    const usersSnapshot = await getDocs(usersCol);
    let usersList = usersSnapshot.docs.map(doc => ({id: doc.id,...doc.data()}));
    //Add random picture
    usersList = usersList.map((user, idx) => ({...user, photo: `https://picsum.photos/200?random=${idx + 1}`}))
    return usersList;
}

export async function addUser(userData) {
    return await addDoc(usersCol, userData);
}

export async function updateUser(userId, userData) {
    return await updateDoc(doc(db, "users", userId), userData);
}

export async function deleteUser(id) {
    await deleteDoc(doc(usersCol, id));
}