import { collection, query, where, getDocs, orderBy, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { db } from "../../constants/connection";

export const dynamic = 'force-dynamic'; // Force dynamic route behavior

export const uploadFilePoster = async (file: File, fileName : string) => {
    // Create a root reference
    const storage = getStorage();
    const storageRef = ref(storage, 'poster/' + fileName);
    const snapshot = await uploadBytes(storageRef, file);
    if(snapshot){
        console.log("Archivo subido correctamente");
        return true;
    }
    return false;
}

interface activityData {
    nombre: string;
    semanaRealizacion: number;
    tipo: string;
    modalidad: string;
    fecha: string;
    hora: string;
    iniciarRecordatorio: string;
    enlace: string;
    afiche: string;

}

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


export async function addActivitie(actividad: activityData) {
    try {
        const database = db;
        const activityRef = collection(database, 'actividades');
        
        await addDoc(activityRef, actividad);
        console.log("Actividad agregada correctamente");
        return true;
    } catch (error) {
        console.error("Error al agregar la actividad:", error);
        return false
    }
}


