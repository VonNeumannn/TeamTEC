import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { db } from "../../constants/connection";

export const dynamic = 'force-dynamic'; // Force dynamic route behavior

export async function getNextActivity() {
    const database = db;
    const activityRef = collection(database, 'actividades');
    const activity = query(activityRef, orderBy("fecha"));
    const querySnapshot = await getDocs(activity);
    let data = null;
    querySnapshot.forEach((doc) => {
        data = doc.data();
    });
    return data;
  }