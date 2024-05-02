'use client'
import styles from "../page.module.css";
import Image from "next/image";
import { BlueButton } from "../components/blueButton";
import SortIcon from "../../../public/sort_icon.svg";
import { useRouter } from 'next/navigation';
import PopUpInput from "../components/popUpInput";
import { useState } from "react";
import { useEffect } from "react";
import { handlerAddItinerario, handlerItinerario } from "@/controller/ItinerarioController";
import { db } from '@/constants/connection';
import { collection, query, where, getDocs } from "firebase/firestore";

export default function ViewItineraries() {
    const [its, setItinerarios] = useState([]);

    useEffect(() => {
        localStorage.removeItem("actividades"); //limpio memoria
        handlerItinerario().then(() => {
            var itinerarios = JSON.parse(localStorage.getItem("itinerario") as string);
            console.log(itinerarios);
            setItinerarios(itinerarios); 
        });
    }, []);

    const router = useRouter();
    
    const [dialogOpen, setDialogOpen] = useState(false);
    
    const openDialog = () => {
        console.log("Abriendo dialogo");
        setDialogOpen(true);
    };

    const closeDialog = () => {
        console.log("Cerrando dialogo");
        //get input data
        const input = document.getElementsByTagName('input');
        console.log(input[0].value);
        //add to db
        handlerAddItinerario(input[0].value, "Profesor1");

        setDialogOpen(false);
    };
    
    return (
        <main className={styles.main} id="main">
            <PopUpInput 
                title="Nuevo itinerario" 
                content="Nombre"
                input="Nombre del itinerario"
                openDialog={openDialog}
                closeDialog={closeDialog}
                dialogOpen={dialogOpen}
            />
            <div className={styles.teamContainer}>
                <h1>Itinerarios</h1>
                <p>Buscar Itinerarios</p>
                <div className={styles.searchAddContainer}>
                    <input type="text" />
                    <BlueButton text="Buscar" onClick={() => { } } type={undefined} />
                    <div className={styles.addItineraryContainer}>
                        <BlueButton text="Agregar Itinerario" onClick={openDialog} type={undefined} />
                    </div>
                </div>
                <div className={styles.tableContainer}>
                    <table>
                        <tbody>
                            <tr>
                                <th className={styles.pasenZelda}>Nombre
                                    <button className={styles.sortButton} onClick={() => { }} >
                                        <Image src={SortIcon} alt="sort icon" className={styles.sortButtonIcon} />
                                    </button>
                                </th>
                                <th className={styles.pasenZelda}>Autor
                                    <button className={styles.sortButton} onClick={() => { }} >
                                        <Image src={SortIcon} alt="sort icon" className={styles.sortButtonIcon} />
                                    </button>
                                </th>
                                <th className={styles.pasenZelda}>Acción</th>
                            </tr>

                        </tbody>
                    </table>
                    <div className={styles.tableContentContainer}>
                        <table>
                            <tbody>
                            {its.map((itinerario: any, index: number) => (
                                <tr key={index}>     
                                    <td id={`nombreItinerario${index}`}>{itinerario.nombre}</td>
                                    <td id={`autorItinerario${index}`}>{itinerario.autor}</td>
                                    <td>
                                    <BlueButton text="Mostrar" onClick={() => { 
                                        localStorage.removeItem("actividades");
                                        setId_To_LS(document.getElementById(`nombreItinerario${index}`)!.innerText);
                                        router.push('/viewItinerary'); 
                                    }} type="button" />
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


const setId_To_LS = (nomb: string) => {
    async function getItinerarioId(nombre: string) {
        const q = query(collection(db, "itinerarios"), where("nombre", "==", nombre));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id);
            localStorage.setItem("itinerarioId", doc.id);
        });
    }
    getItinerarioId(nomb);
}

