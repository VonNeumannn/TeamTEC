'use client'
import styles from "../page.module.css";
import Image from "next/image";
import { BlueButton } from "../components/blueButton";
import DownloadIcon from "../../../public/download_icon.svg";
import SortIcon from "../../../public/sort_icon.svg";
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { handlerLoad } from "../../controller/studentsController";
import Estudiante from "../../model/Estudiante";


export default function ViewStudents() {

    const router = useRouter();
    const [data, setData] = useState<Estudiante[]>([]);
    
    const handleClick = () => {
        // Contenido de ejemplo del archivo CSV
        const csvContent = "Nombre,Apellido,Edad\nJohn,Doe,30\nJane,Doe,28";

        const downloadLink = document.createElement("a");
        const blob = new Blob([csvContent], { type: "text/csv" });
        const url = window.URL.createObjectURL(blob);

        downloadLink.href = url;
        downloadLink.download = "estudiantes.csv";
        document.body.appendChild(downloadLink);
        downloadLink.click();

        document.body.removeChild(downloadLink);
        window.URL.revokeObjectURL(url);
    };

    function handleEdit(index: number) {
        const item = data[index];
        //console.log(`Editing item: ${item.nombre} ${item.apellidos} ${item.codigo}`);
        // Aquí puedes agregar el código para editar el item
    }

    function handleDelete(index: number) {
        console.log(`Deleting item at index: ${index}`);
        // Aquí puedes agregar el código para eliminar el item
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await handlerLoad();
                setData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <main className={styles.main} id="main">
            <div className={styles.teamContainer}>
                <h1>Miembros equipo</h1>
                <p>Buscar estudiante</p>
                <div className={styles.searchAddContainer}>
                    <input type="text" />
                    <BlueButton text="Buscar" onClick={() => { }} />
                    <div className={styles.csvAddStudentContainer}>
                        <button className={styles.downButton} onClick={handleClick} >
                            <Image src={DownloadIcon} alt="csv Icon" />
                            {"CSV"}
                        </button>
                        <BlueButton text="Agregar Estudiantes" onClick={() => { router.push('/add_students'); }} />
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
                                <th className={styles.pasenZelda}>Carné
                                    <button className={styles.sortButton} onClick={() => { }} >
                                        <Image src={SortIcon} alt="sort icon" className={styles.sortButtonIcon} />
                                    </button>
                                </th>
                                <th className={styles.pasenZelda}>Sede
                                <button className={styles.sortButton} onClick={() => { }} >
                                        <Image src={SortIcon} alt="sort icon" className={styles.sortButtonIcon} />
                                    </button>
                                </th>
                                <th className={styles.pasenZelda}>Acciones</th>
                            </tr>

                        </tbody>
                    </table>
                    <div className={styles.tableContentContainer}>
                        <table>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.nombre}</td>
                                        <td>{item.carne}</td>
                                        <td>{item.sede}</td>
                                        <td>
                                            <BlueButton text="Editar" onClick={() => {handleEdit(index)}} />
                                            <button className={styles.deleteButton} onClick={() => {handleDelete(index)}}>Eliminar</button>
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