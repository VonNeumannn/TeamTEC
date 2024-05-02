import { collection, query, where, getDocs, orderBy, DocumentData, deleteDoc } from "firebase/firestore";
import { db } from "../../constants/connection";
import Actividad from "@/model/Actividad";

export const dynamic = 'force-dynamic'; // Force dynamic route behavior

export async function getActivitiesIt(itID: string) {
    try {
        const database = db;
        const activityRef = collection(database, `itinerarios/${itID}/actividades`);
        const activity = query(activityRef);  //luego meto el orderBy("semana"));
        const querySnapshot = await getDocs(activity);
        var activities:Actividad[] = [];
        querySnapshot.forEach((doc) => {
            activities.push(doc.data() as Actividad);
        });
        console.log(activities)
        return activities;
    } catch (error) {
        console.error("Error getting activities:", error);
        return [];
    }
}

export async function getLastActivity(itID: string) {
    try {
        const database = db;
        const activityRef = collection(database, `itinerarios/${itID}/actividades`);
        const activity = query(activityRef, orderBy("semana"));
        const querySnapshot = await getDocs(activity);
        let data = null;
        querySnapshot.forEach((doc) => {
            data = doc.data();
        });
        return data;
    } catch (error) {
        console.error("Error getting last activity:", error);
        return null;
    }
}

//borrar actividad
export async function deleteAct(itID: string, nombreAct: string): Promise<boolean> {
    try{
      const database = db;
      const activityRef = collection(database, `itinerarios/${itID}/actividades`);
      const activityToDel = query(activityRef, where("nombre", "==", nombreAct));
      console.log(activityToDel);
      const querySnapshot = await getDocs(activityToDel);
      if (querySnapshot.empty) {
        console.log("We fail");
        return false;
      }
      console.log(querySnapshot);
      querySnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
        });
      return true;
    } catch (error) {
      console.error("Error deleting activity:", error);
      return false;
      }
}