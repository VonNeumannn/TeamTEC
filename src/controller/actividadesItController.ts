import Actividad from "@/model/Actividad";
import { addActivity, deleteAct, getActivitiesIt, getLastActivity } from "../app/DAO/daoActividadesIt";
import { set } from "firebase/database";
import { TipoActividad } from "@/model/TipoActividad";
import Profesor from "@/model/Profesor";
import Comentario from "@/model/Comentario";
import Prueba from "@/model/Prueba";

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

//crear actividad
/*
export const createActivity = async (
    id: string, semana: number, nombre: string, estado: string, tipoActividad: TipoActividad, 
    modalidad: string, fecha: Date, hora: string, activadorRecordatorio: Date, link: string, afiche: string, 
    encargado: Profesor[], responsable: Profesor, comentarios: Comentario[], pruebas: Prueba[]) => {

    const act = new Actividad(
        nombre, estado, semana, tipoActividad, modalidad, fecha, hora, activadorRecordatorio, 
        link, afiche, encargado, responsable, comentarios, pruebas);
    await addActivity(id, act);

}*/

const setLocalStorage = (actividades: activitiesItData[]) => {
    localStorage.setItem("actividades", JSON.stringify(actividades));
}
