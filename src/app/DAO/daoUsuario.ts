import { collection, query, where, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "../../constants/connection";

export const dynamic = 'force-dynamic'; // Force dynamic route behavior

export async function searchUserByEmail(email : string) {
  const database = db;
  const usersRef = collection(database, 'usuarios');
  const user = query(usersRef, where("correo", "==", email));
  const querySnapshot = await getDocs(user);
  let data = null;
  querySnapshot.forEach((doc) => {
      data = doc.data();
      data.id = doc.id;
  });
  return data;
}

export async function changePassword(userId : string, password : string) {
  const database = db;
  const usersRef = doc(database, 'usuarios', userId);
  await updateDoc(usersRef, {
    contraseña: password
  });
}