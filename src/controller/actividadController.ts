import Profesor from "@/model/Profesor";
import { getNextActivity } from "../app/DAO/daoActividad";
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