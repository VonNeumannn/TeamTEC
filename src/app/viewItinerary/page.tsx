'use client'
import styles from "../page.module.css";
import Image from "next/image";
import { BlueButton } from "../components/blueButton";
import SortIcon from "../../../public/sort_icon.svg";
import { useRouter } from 'next/navigation';
import Actividad from "@/model/Actividad";
import { TipoActividad } from "@/model/TipoActividad";
import Profesor from "@/model/Profesor";
import Comentario from "@/model/Comentario";
import Prueba from "@/model/Prueba";
import { handlerActivitiesIt, handlerDeleteActivity, searchActivityByName, sortByName, sortByWeek } from "@/controller/actividadController";
import { useEffect, useState } from "react";


export default function ViewItinerary() {
    const [actividades, setActividades] = useState([]);

    useEffect(() => {
        //localStorage.setItem("actividades", '');
        const itinerarioId = localStorage.getItem('itinerarioId') ?? '';
        
        handlerActivitiesIt(itinerarioId).then(() => {
            var actividades = JSON.parse(localStorage.getItem("actividades") || "[]");
            console.log(actividades);
            setActividades(actividades);
        });
        //localStorage.removeItem("actividades");
    }, []);

    function handleEdit(index: number) {
    }

    function handleDelete(nombre: string, index: number) {
        handlerDeleteActivity(localStorage.getItem('itinerarioId') ?? '', nombre).then(() => {
            setActividades(actividades.filter((act: any, i: number) => i !== index));
        }
        );
    }

    const router = useRouter();

    return (
        <main className={styles.main} id="main">
            <div className={styles.teamContainer}>
                <h1>Actividades</h1>
                <p>Buscar actividad</p>
                <div className={styles.searchAddContainer}>
                    <input id="barra" type="text" />
                    <BlueButton text="Buscar" onClick={() => {
                        //buscar por nombre
                        const id = localStorage.getItem("itinerarioId") ?? '';
                        const inputElement = document.getElementById("barra") as HTMLInputElement;
                        if (inputElement) {
                            searchActivityByName(inputElement.value, id).then(() => {
                                var actividades = JSON.parse(localStorage.getItem("actividades") || "[]");
                                setActividades(actividades);
                            }
                            );
                        }
                    }} type={undefined} />
                    <div className={styles.addItineraryContainer}>
                        <BlueButton text="Agregar Actividad" onClick={() => { 
                            //enviar a la pantalla de agregar
                            router.push('/newActivity');
                        } } type={undefined} />
                    </div>
                </div>
                <div className={styles.tableContainer}>
                    <table>
                        <tbody>
                            <tr>
                                <th className={styles.pasenZelda}>Semana
                                    <button className={styles.sortButton} onClick={() => { 
                                        //ordenar por semana
                                        const id = localStorage.getItem("itinerarioId") ?? '';
                                        sortByWeek(id).then(() => {
                                            var actividades = JSON.parse(localStorage.getItem("actividades") || "[]");
                                            setActividades(actividades);
                                        }
                                        );
                                    }} >
                                        <Image src={SortIcon} alt="sort icon" className={styles.sortButtonIcon} />
                                    </button>
                                </th>
                                <th className={styles.pasenZelda}>Nombre
                                    <button className={styles.sortButton} onClick={() => { 
                                        //ordenar por nombre
                                        const id = localStorage.getItem("itinerarioId") ?? '';
                                        sortByName(id).then(() => {
                                            var actividades = JSON.parse(localStorage.getItem("actividades") || "[]");
                                            setActividades(actividades);
                                        }
                                        );
                                    }} >
                                        <Image src={SortIcon} alt="sort icon" className={styles.sortButtonIcon} />
                                    </button>
                                </th>
                                <th className={styles.pasenZelda}>Estado
                                <button className={styles.sortButton} onClick={() => {
                                        //ordenar por estado
                                        const id = localStorage.getItem("itinerarioId") ?? '';
                                        sortByName(id).then(() => {
                                            var actividades = JSON.parse(localStorage.getItem("actividades") || "[]");
                                            setActividades(actividades);
                                        }
                                        );
                                 }} >
                                        <Image src={SortIcon} alt="sort icon" className={styles.sortButtonIcon} />
                                    </button>
                                </th>
                                <th className={styles.pasenZelda}>Acción</th>
                            </tr>

                        </tbody>
                    </table>
                    <div className={styles.tableContentContainer}>
                        <table id="tableAct">
                            <tbody id="bodyTableAct">
                                {actividades.map((act: any, index: number) => (
                                    <tr key={index}>
                                        <td id={`semanaAct${index}`}>{act.semana}</td>
                                        <td id={`nombreAct${index}`}>{act.nombre}</td>
                                        <td id={`estadoAct${index}`}>{act.estado}</td>
                                        <td>
                                            <BlueButton text="Detalles" onClick={() => { } } type={undefined} />
                                            <button className={styles.acceptButton} onClick={() => {
                                                //enviar a la pantalla de editar
                                                router.push('/edit_activity');
                                            }}>Editar</button>
                                            <button className={styles.deleteButton} onClick={() => handleDelete(act.nombre, index)}>Eliminar</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
}

interface activityData {
    nombre: string;
    estado: string;
    semana: number;
    tipo: TipoActividad;
    modalidad: string;
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
    const actividad = localStorage.getItem("actividad");
    const actividadJson = JSON.parse(actividad ? actividad : "{}");
    const actividadData: activityData = {
        nombre: actividadJson.nombre,
        estado: actividadJson.estado,
        semana: actividadJson.semana,
        tipo: actividadJson.tipo,
        modalidad: actividadJson.modalidad,
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