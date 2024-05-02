import Actividad from "@/model/Actividad";
import { deleteAct, getActivitiesIt, getLastActivity } from "../app/DAO/daoActividadesIt";

interface activitiesItData {
    semana: number;
    nombre: string;
    estado: string;
}

export const handlerActivitiesIt = async (idIt: string) => {
    let data = await getActivitiesIt(idIt);
    data = JSON.parse(JSON.stringify(data));

    //descomponer data 
    let actividades:activitiesItData[] = [];
    data.forEach((actividad: any) => {
        const actividadData: activitiesItData = {
            semana: actividad.semana,
            nombre: actividad.nombre,
            estado: actividad.estado
        };
        actividades.push(actividadData);
    });
    setLocalStorage(actividades);
}

const setLocalStorage = (actividades: activitiesItData[]) => {
    localStorage.setItem("actividades", JSON.stringify(actividades));
}

export const handlerDeleteActivity = async (itID: string, actID: string) => {
    try{
        await deleteAct(itID, actID);
        return true;
    } catch (error) {
        console.error("Error deleting activity:", error);
        return false;
    }
}
