'use client'
import styles from "../page.module.css";
import Image from "next/image";
import { BlueButton } from "../components/blueButton";
import SortIcon from "../../../public/sort_icon.svg";
import { useRouter } from 'next/navigation';


export default function ViewItinerary() {

    const router = useRouter();
    
    const data = [
        { semana: 1, nombre: 'Nombre 1', estado: 'Notificada' },
        { semana: 2, nombre: 'Nombre 2', estado: 'Planeada' },
        { semana: 3, nombre: 'Nombre 3', estado: 'Cancelada' },
        { semana: 4, nombre: 'Nombre 4', estado: 'Notificada' },
        { semana: 5, nombre: 'Nombre 5', estado: 'Planeada' },
        { semana: 6, nombre: 'Nombre 6', estado: 'Cancelada' },
        { semana: 7, nombre: 'Nombre 7', estado: 'Notificada' },
        { semana: 8, nombre: 'Nombre 8', estado: 'Planeada' },
        { semana: 9, nombre: 'Nombre 9', estado: 'Cancelada' },
        { semana: 10, nombre: 'Nombre 10', estado: 'Notificada' },
        { semana: 11, nombre: 'Nombre 11', estado: 'Planeada' },
        { semana: 12, nombre: 'Nombre 12', estado: 'Cancelada' },
        { semana: 13, nombre: 'Nombre 13', estado: 'Notificada' },
        { semana: 14, nombre: 'Nombre 14', estado: 'Planeada' },
        { semana: 15, nombre: 'Nombre 15', estado: 'Cancelada' },
        { semana: 16, nombre: 'Nombre 16', estado: 'Notificada' }
    ];

    function handleEdit(index: number) {
        const item = data[index];
        console.log(`Editing item: ${item.semana} ${item.nombre} ${item.estado}`);
    }

    function handleDelete(index: number) {
        console.log(`Deleting item at index: ${index}`);
    }

    return (
        <main className={styles.main} id="main">
            <div className={styles.teamContainer}>
                <h1>Actividades</h1>
                <p>Buscar semana</p>
                <div className={styles.searchAddContainer}>
                    <input type="text" />
                    <BlueButton text="Buscar" onClick={() => { }} />
                    <div className={styles.addItineraryContainer}>
                        <BlueButton text="Agregar Actividad" onClick={() => { }} />
                    </div>
                </div>
                <div className={styles.tableContainer}>
                    <table>
                        <tbody>
                            <tr>
                                <th className={styles.pasenZelda}>Semana
                                    <button className={styles.sortButton} onClick={() => { }} >
                                        <Image src={SortIcon} alt="sort icon" className={styles.sortButtonIcon} />
                                    </button>
                                </th>
                                <th className={styles.pasenZelda}>Nombre
                                    <button className={styles.sortButton} onClick={() => { }} >
                                        <Image src={SortIcon} alt="sort icon" className={styles.sortButtonIcon} />
                                    </button>
                                </th>
                                <th className={styles.pasenZelda}>Estado
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
                                        <td>{item.semana}</td>
                                        <td>{item.nombre}</td>
                                        <td>{item.estado}</td>
                                        <td>
                                            <BlueButton text="Detalles" onClick={() => {}} />
                                            <button className={styles.acceptButton} onClick={() => {
                                                //enviar a la pantalla de editar
                                                router.push('/edit_activity');
                                            }}>Editar</button>
                                            <button className={styles.deleteButton} onClick={() => handleDelete(index)}>Eliminar</button>
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