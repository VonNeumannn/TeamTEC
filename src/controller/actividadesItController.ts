import Actividad from "@/model/Actividad";
import { deleteAct, getActivitiesIt, getLastActivity } from "../app/DAO/daoActividadesIt";
import { set } from "firebase/database";

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

export const handlerDeleteActivity = async (itID: string, actID: string) => {
    try{
        await deleteAct(itID, actID);
        return true;
    } catch (error) {
        console.error("Error deleting activity:", error);
        return false;
    }
} 

//order by semana
export const sortByWeek = async (id: string) => {
    let data = await getActivitiesIt(id);
    data = JSON.parse(JSON.stringify(data));

    let actividades: activitiesItData[] = [];
    data.forEach((actividad: any) => {
        const actividadData: activitiesItData = {
            semana: actividad.semana,
            nombre: actividad.nombre,
            estado: actividad.estado
        };
        actividades.push(actividadData);
    });
    actividades.sort((a, b) => {
        return a.semana - b.semana;
    });
    setLocalStorage(actividades);
}

//order by name
export const sortByName = async (id: string) => {
    let data = await getActivitiesIt(id);
    data = JSON.parse(JSON.stringify(data));

    let actividades: activitiesItData[] = [];
    data.forEach((actividad: any) => {
        const actividadData: activitiesItData = {
            semana: actividad.semana,
            nombre: actividad.nombre,
            estado: actividad.estado
        };
        actividades.push(actividadData);
    });
    actividades.sort((a, b) => {
        return a.nombre.localeCompare(b.nombre);
    });
    setLocalStorage(actividades);
}

//order by estado
export const sortByState = async (id: string) => {
    let data = await getActivitiesIt(id);
    data = JSON.parse(JSON.stringify(data));

    let actividades: activitiesItData[] = [];
    data.forEach((actividad: any) => {
        const actividadData: activitiesItData = {
            semana: actividad.semana,
            nombre: actividad.nombre,
            estado: actividad.estado
        };
        actividades.push(actividadData);
    });
    actividades.sort((a, b) => {
        return a.estado.localeCompare(b.estado);
    });
    setLocalStorage(actividades);
}

//buscar actividad por nombre
export const searchActivityByName = async (name: string, id: string) => {
    let data = await getActivitiesIt(id);
    data = JSON.parse(JSON.stringify(data));

    let actividades: activitiesItData[] = [];
    data.forEach((actividad: any) => {
        const actividadData: activitiesItData = {
            semana: actividad.semana,
            nombre: actividad.nombre,
            estado: actividad.estado
        };
        actividades.push(actividadData);
    });
    actividades = actividades.filter((actividad) => {
        return actividad.nombre.toLowerCase().includes(name.toLowerCase());
    });
    setLocalStorage(actividades);
}


const setLocalStorage = (actividades: activitiesItData[]) => {
    localStorage.setItem("actividades", JSON.stringify(actividades));
}
