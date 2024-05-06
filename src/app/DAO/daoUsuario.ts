import { collection, query, where, getDocs } from "firebase/firestore";
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
  });
  return data;
}