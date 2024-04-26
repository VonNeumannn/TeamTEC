'use client'
import styles from "../page.module.css";
import Image from "next/image";
import { BlueButton } from "../components/blueButton";
import SortIcon from "../../../public/sort_icon.svg";
import { useRouter } from 'next/navigation';
import PopUp from "../components/popUpInformation";
import { useState } from "react";

export default function ViewItineraries() {

    const router = useRouter();
    
    const [dialogOpen, setDialogOpen] = useState(false);
    
    const openDialog = () => {
        console.log("Abriendo dialogo");
        setDialogOpen(true);
    };

    const closeDialog = () => {
        console.log("Cerrando dialogo");
        setDialogOpen(false);
    };
    
    const data = [
        { nombre: 'Itinerario 1', autor: 'Jaime' },
        { nombre: 'Itinerario 2', autor: 'Erika' },
        { nombre: 'Itinerario 3', autor: 'Jaime' },
        { nombre: 'Itinerario 4', autor: 'Erika' },
        { nombre: 'Itinerario 5', autor: 'Jaime' },
        { nombre: 'Itinerario 6', autor: 'Erika' },
        { nombre: 'Itinerario 7', autor: 'Jaime' },
        { nombre: 'Itinerario 8', autor: 'Erika' },
        { nombre: 'Itinerario 9', autor: 'Jaime' },
        { nombre: 'Itinerario 10', autor: 'Erika' },
        { nombre: 'Itinerario 11', autor: 'Jaime' },
        { nombre: 'Itinerario 12', autor: 'Erika' },
        { nombre: 'Itinerario 13', autor: 'Jaime' },
        { nombre: 'Itinerario 14', autor: 'Erika' },
        { nombre: 'Itinerario 15', autor: 'Jaime' },
        { nombre: 'Itinerario 16', autor: 'Erika' },
        { nombre: 'Itinerario 17', autor: 'Jaime' },
        { nombre: 'Itinerario 18', autor: 'Erika' },
        { nombre: 'Itinerario 19', autor: 'Jaime' },
        { nombre: 'Itinerario 20', autor: 'Erika' },
        { nombre: 'Itinerario 21', autor: 'Jaime' },
        { nombre: 'Itinerario 22', autor: 'Erika' },
        { nombre: 'Itinerario 23', autor: 'Jaime' },
        { nombre: 'Itinerario 24', autor: 'Erika' },
        { nombre: 'Itinerario 25', autor: 'Jaime' },
        { nombre: 'Itinerario 26', autor: 'Erika' },
        { nombre: 'Itinerario 27', autor: 'Jaime' },
        { nombre: 'Itinerario 28', autor: 'Erika' },
        { nombre: 'Itinerario 29', autor: 'Jaime' },
        { nombre: 'Itinerario 30', autor: 'Erika' },
        { nombre: 'Itinerario 31', autor: 'Jaime' },
        { nombre: 'Itinerario 32', autor: 'Erika' },
        { nombre: 'Itinerario 33', autor: 'Jaime' },
        { nombre: 'Itinerario 34', autor: 'Erika' },
        { nombre: 'Itinerario 35', autor: 'Jaime' },
        { nombre: 'Itinerario 36', autor: 'Erika' },
        { nombre: 'Itinerario 37', autor: 'Jaime' },
        { nombre: 'Itinerario 38', autor: 'Erika' },
        { nombre: 'Itinerario 39', autor: 'Jaime' },
        { nombre: 'Itinerario 40', autor: 'Erika' },
        { nombre: 'Itinerario 41', autor: 'Jaime' },
        { nombre: 'Itinerario 42', autor: 'Erika' },
        { nombre: 'Itinerario 43', autor: 'Jaime' },
        { nombre: 'Itinerario 44', autor: 'Erika' },
        { nombre: 'Itinerario 45', autor: 'Jaime' },
        { nombre: 'Itinerario 46', autor: 'Erika' },
        { nombre: 'Itinerario 47', autor: 'Jaime' },
        { nombre: 'Itinerario 48', autor: 'Erika' },
        { nombre: 'Itinerario 49', autor: 'Jaime' },
        { nombre: 'Itinerario 50', autor: 'Erika' }
    ];

    return (
        <main className={styles.main} id="main">
            <PopUp 
                title="Nuevo itinerario" 
                content="Nombre"
                 //ponerle input 
                openDialog={openDialog}
                closeDialog={closeDialog}
                dialogOpen={dialogOpen}
            />
            <div className={styles.teamContainer}>
                <h1>Itinerarios</h1>
                <p>Buscar Itinerarios</p>
                <div className={styles.searchAddContainer}>
                    <input type="text" />
                    <BlueButton text="Buscar" onClick={() => { }} />
                    <div className={styles.addItineraryContainer}>
                        <BlueButton text="Agregar Itinerario" onClick={openDialog} />
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
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.nombre}</td>
                                        <td>{item.autor}</td>
                                        <td>
                                            <BlueButton text="Mostrar" onClick={() => { router.push('/viewItinerary'); }}  />
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