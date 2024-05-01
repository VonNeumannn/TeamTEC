import Profesor from "@/model/Profesor";
import { getNextActivity, addActivitie, uploadFilePoster } from "../app/DAO/daoActividad";
import Comentario from "@/model/Comentario";
import Prueba from "@/model/Prueba";
import { TipoActividad } from "@/model/TipoActividad";

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
    responsable: Profesor;
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

}

export const handlerNextActivity = async () => {
    let data = await getNextActivity();
    data = JSON.parse(JSON.stringify(data));

    if (data == null) {
        console.log("Actividad no encontrada");
    } else {
        const actividad: activityData = {
            nombre: data.nombre,
            estado: data.estado,
            tipo: data.tipo,
            modalidad: data.modalidad,
            semana: data.semanaRealizacion,
            fecha: data.fecha,
            hora: "", 
            activadorRecordatorio: 0, 
            link: "", 
            afiche: "", 
            encargado: [], 
            responsable: null,
            comentarios: [],
            pruebas: [] 
        };
        console.log(actividad);
        setLocalStorage(actividad);
    }

}
const setLocalStorage = (actividad: activityData) => {
    localStorage.setItem("actividad", JSON.stringify(actividad));
}


export const handlerAddActivity = async (actividad: activityDataPrueba, file : File, nameFile: string, router : any, openDialog:any) => {
    let dataFile = await uploadFilePoster(file, nameFile);
    let data = await addActivitie(actividad);
    if (data && dataFile) {
        console.log("Actividad agregada correctamente");
        openDialog();
    } else {
        console.log("Error al agregar la actividad");
    }
}