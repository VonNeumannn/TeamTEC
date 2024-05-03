import Profesor from "@/model/Profesor";
import { getNextActivity, addActivity, uploadFilePoster, deleteAct, getActivitiesIt } from "../app/DAO/daoActividad";
import Comentario from "@/model/Comentario";
import Prueba from "@/model/Prueba";
import { TipoActividad } from "@/model/TipoActividad";
import { act } from "react-dom/test-utils";

interface activityData {
    nombre: string;
    estado: string;
    tipo: string;
    modalidad: string;
    semana: number;
    fecha: Date;
    hora: string;
    activadorRecordatorio: number;
    link: string;
    afiche: string;
    encargado: Profesor[];
    comentarios: Comentario[];
    pruebas: Prueba[];
}

interface activityDataPrueba {
    nombre: string;
    semanaRealizacion: number;
    tipo: string;
    modalidad: string;
    fecha: string;
    hora: string;
    iniciarRecordatorio: string;
    enlace: string;
    afiche: string;
    encargados: Profesor[];

}

interface activitiesItData {
    semana: number;
    nombre: string;
    estado: string;
}


export const handlerNextActivity = async () => {
    let data = await getNextActivity();
    let actData = JSON.parse(JSON.stringify(data));
    if (actData == null) {
        console.log("No hay actividades");
    } else {
        const actividad: activityData = {
            nombre: actData.nombre,
            estado: actData.estado,
            tipo: actData.tipo,
            modalidad: actData.modalidad,
            semana: actData.semanaRealizacion,
            fecha: actData.fecha,
            hora: actData.hora, 
            activadorRecordatorio: 0, 
            link: actData.enlace, 
            afiche: "", 
            encargado: actData.encargados, 
            
            comentarios: [],
            pruebas: [] 
        };
        console.log(actividad);
        setLocalStorage(actividad);
    }
}

export const handlerActivitiesIt = async (idIt: string) => {
    let data = await getActivitiesIt(idIt);
    data = JSON.parse(JSON.stringify(data));

    //descomponer data 
    let actividades:activitiesItData[] = [];
    data.forEach((actividad: any) => {
        if (actividad.isDeleted != 1) {
            const actividadData: activitiesItData = {
                semana: actividad.semana,
                nombre: actividad.nombre,
                estado: actividad.estado
            };
            actividades.push(actividadData);
        }
    });
    setActsInLS(actividades);
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


export const handlerAddActivity = async (actividad: activityDataPrueba, idItinerario: string, file : File, nameFile: string, router : any, openDialog:any) => {
    let dataFile = await uploadFilePoster(file, nameFile);
    let data = await addActivity(idItinerario, actividad);
    if (data && dataFile) {
        console.log("Actividad agregada correctamente");
        openDialog();
    } else {
        console.log("Error al agregar la actividad");
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
    setActsInLS(actividades);
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
    setActsInLS(actividades);
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
    setActsInLS(actividades);
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
    setActsInLS(actividades);
}


const setLocalStorage = (actividad: activityData) => {
    localStorage.setItem("actividadProxima", JSON.stringify(actividad));
}

const setActsInLS = (actividades: activitiesItData[]) => {
    localStorage.setItem("actividades", JSON.stringify(actividades));
}
