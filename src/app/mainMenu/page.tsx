'use client'
import styles from "../page.module.css";
import Image from "next/image";
import MainLogo from "../../../public/mainLogo.svg";
import { BlueButton } from "../components/blueButton";
import Actividad from "@/model/Actividad";
import { useRouter } from "next/navigation";
import { handlerNextActivity } from "@/controller/actividadController";
import { useEffect } from "react";
import { TipoActividad } from "@/model/TipoActividad";
import Profesor from "@/model/Profesor";
import Comentario from "@/model/Comentario";
import Prueba from "@/model/Prueba";

export default function MainMenuPage() {
    const printMessage = () => {
        console.log("Mostrando equipo");
    };
    useEffect(() => {
        handlerNextActivity();
        var actividad = getLocalStorage();
        console.log(actividad); 
        var nombreActividad = actividad.getNombre();
        var estadoActividad = actividad.getEstado();
        var tipoActividad = actividad.getTipoActividad();
        var modalidadActividad = actividad.getModalidad();
        var semanaActividad = actividad.getSemana();
        var fechaActividad = actividad.getFecha();
        
        var nombreActividadElement = document.getElementById("nombreActividad");
        if (nombreActividadElement) {
            nombreActividadElement.innerText = nombreActividad;
        }
        
        var estadoActividadElement = document.getElementById("estadoActividad");
        if (estadoActividadElement) {
            estadoActividadElement.innerText = estadoActividad;
        }
        
        var tipoActividadElement = document.getElementById("tipoActividad");
        if (tipoActividadElement) {
            tipoActividadElement.innerText = tipoActividad;
        }
        
        var modalidadActividadElement = document.getElementById("modalidadActividad");
        if (modalidadActividadElement) {
            modalidadActividadElement.innerText = modalidadActividad;
        }
        
        var semanaActividadElement = document.getElementById("semanaActividad");
        if (semanaActividadElement) {
            
            semanaActividadElement.innerText = semanaActividad+"";
        }
        
        var fechaActividadElement = document.getElementById("fechaActividad");
        if (fechaActividadElement) {
            fechaActividadElement.innerText = fechaActividad.toString(); 
        }
    });
  
    const router = useRouter();

    return (
        <main className={styles.main} id="main">
            <div className={styles.mainMenuContainer}>
                <div className={styles.divisionContainer}>
                    <h1>Menú Principal</h1>
                    <div className={styles.flexContainer}>
                        <Image src={MainLogo} alt="Main Logo" />
                        <div className={styles.flexFlexContainer}>
                            <BlueButton text="Mostrar equipo" onClick={() => { router.push('/teamMembers') }} type="button" />
                            <BlueButton text="Mostrar estudiantes" onClick={() => { router.push('/viewStudents') }} type="button" />
                            <BlueButton text="Itinerario" onClick={() => { router.push('/itineraries') }} type="button" />
                            <BlueButton text="Registrar profesor" onClick={() => { router.push('/professor_register') }} type="button" />
                        </div>
                    </div>
                </div>
                <div className={styles.verticalLine}></div>
                <div className={styles.divisionContainer}>
                    <h1>Próxima Actividad</h1>
                    <table>
                        <tbody>
                            <tr>
                                <td>Nombre</td>
                                <td id="nombreActividad"></td>
                            </tr>
                            <tr>
                                <td>Estado</td>
                                <td id="estadoActividad"></td>
                            </tr>
                            <tr>
                                <td>Tipo</td>
                                <td id="tipoActividad"></td>
                            </tr>
                            <tr>
                                <td>Modalidad</td>
                                <td id="modalidadActividad"></td>
                            </tr>
                            <tr>
                                <td>Semana</td>
                                <td id="semanaActividad"></td>
                            </tr>
                            <tr>
                                <td>Fecha</td>
                                <td id="fechaActividad"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}

interface activityData {
    nombre: string;
    estado: string;
    tipo: TipoActividad;
    modalidad: string;
    semana: number;
    fecha: Date;
    hora: string;
    activadorRecordatorio: Date;
    link: string;
    afiche: string;
    encargado: Profesor[];
    responsable: Profesor;
    comentarios: Comentario[];
    pruebas: Prueba[];
}

const getLocalStorage = () => {
    const actividad = localStorage.getItem("actividadProxima");
    const actividadJson = JSON.parse(actividad ? actividad : "{}");
    const actividadData: activityData = {
        nombre: actividadJson.nombre,
        estado: actividadJson.estado,
        tipo: actividadJson.tipo,
        modalidad: actividadJson.modalidad,
        semana: actividadJson.semana,
        fecha: actividadJson.fecha,
        hora: actividadJson.hora,
        activadorRecordatorio: actividadJson.activadorRecordatorio,
        link: actividadJson.link,
        afiche: actividadJson.afiche,
        encargado: actividadJson.encargado,
        responsable: actividadJson.responsable,
        comentarios: actividadJson.comentarios,
        pruebas: actividadJson.pruebas
    };
    return new Actividad(
        actividadData.nombre,
        actividadData.estado,
        actividadData.semana,
        actividadData.tipo,
        actividadData.modalidad,
        actividadData.fecha,
        actividadData.hora,
        actividadData.activadorRecordatorio,
        actividadData.link,
        actividadData.afiche,
        actividadData.encargado,
        actividadData.responsable,
        actividadData.comentarios,
        actividadData.pruebas
    );
}