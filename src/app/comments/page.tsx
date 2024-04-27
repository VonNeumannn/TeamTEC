'use client'
import styles from "../page.module.css";
import React, { useState } from 'react';
import { BlueButton } from "../components/blueButton";
import Image from "next/image";
import SortIcon from "../../../public/sort_icon.svg";

export default function commentsPage() {
    const [activityData, setData] = useState({
        name: 'Nombre actividad'
    });

    const data = [
        { titulo: 'Titulo 1', nombre: 'Nombre 1', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 2', nombre: 'Nombre 2', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 3', nombre: 'Nombre 3', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 4', nombre: 'Nombre 4', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 5', nombre: 'Nombre 5', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 6', nombre: 'Nombre 6', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 7', nombre: 'Nombre 7', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 8', nombre: 'Nombre 8', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 9', nombre: 'Nombre 9', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 10', nombre: 'Nombre 10', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 11', nombre: 'Nombre 11', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 12', nombre: 'Nombre 12', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 13', nombre: 'Nombre 13', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 14', nombre: 'Nombre 14', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 15', nombre: 'Nombre 15', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 16', nombre: 'Nombre 16', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 17', nombre: 'Nombre 17', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 18', nombre: 'Nombre 18', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 19', nombre: 'Nombre 19', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 20', nombre: 'Nombre 20', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 21', nombre: 'Nombre 21', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 22', nombre: 'Nombre 22', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 23', nombre: 'Nombre 23', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 24', nombre: 'Nombre 24', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 25', nombre: 'Nombre 25', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 26', nombre: 'Nombre 26', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 27', nombre: 'Nombre 27', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 28', nombre: 'Nombre 28', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 29', nombre: 'Nombre 29', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 30', nombre: 'Nombre 30', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 31', nombre: 'Nombre 31', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 32', nombre: 'Nombre 32', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 33', nombre: 'Nombre 33', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 34', nombre: 'Nombre 34', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 35', nombre: 'Nombre 35', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 36', nombre: 'Nombre 36', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 37', nombre: 'Nombre 37', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 38', nombre: 'Nombre 38', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 39', nombre: 'Nombre 39', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 40', nombre: 'Nombre 40', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 41', nombre: 'Nombre 41', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 42', nombre: 'Nombre 42', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 43', nombre: 'Nombre 43', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 44', nombre: 'Nombre 44', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 45', nombre: 'Nombre 45', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 46', nombre: 'Nombre 46', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 47', nombre: 'Nombre 47', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 48', nombre: 'Nombre 48', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 49', nombre: 'Nombre 49', fecha: 'dd-mm-aaaa' },
        { titulo: 'Titulo 50', nombre: 'Nombre 50', fecha: 'dd-mm-aaaa' }
    ];

    function handleOpening(index: number) {
        const item = data[index];
        console.log(`Opening item: ${item.titulo} ${item.nombre} ${item.fecha}`);
        // Aquí puedes agregar el código para agregar el item
    }

    return (
        <main className={styles.main} id="main">
            <div className={styles.teamContainer}>
                <h1>Comentarios</h1>
                <div className={styles.searchAddContainer}>
                <h1>{}</h1>
                    <input type="text" value={activityData.name} readOnly/>
                    <div className={styles.addContainer}>
                        <button className={styles.blueButton} onClick={() => {}} style={{ width: '120px', height: '40px', marginTop: '20px'}} >Redactar</button>
                    </div>
                </div>
                <div className={styles.tableContainer}>
                    <table>
                        <tbody>
                            <tr>
                                <th className={styles.pasenZelda}>Titulo
                                    <button className={styles.sortButton} onClick={() => { }} >
                                        <Image src={SortIcon} alt="sort icon" className={styles.sortButtonIcon} />
                                    </button></th>
                                <th className={styles.pasenZelda}>Nombre
                                    <button className={styles.sortButton} onClick={() => { }} >
                                        <Image src={SortIcon} alt="sort icon" className={styles.sortButtonIcon} />
                                    </button></th>
                                <th className={styles.pasenZelda}>Fecha
                                    <button className={styles.sortButton} onClick={() => { }} >
                                        <Image src={SortIcon} alt="sort icon" className={styles.sortButtonIcon} />
                                    </button></th>
                                <th className={styles.pasenZelda}>Acciones</th>
                            </tr>

                        </tbody>
                    </table>
                    <div className={styles.tableContentContainer}>
                        <table>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.titulo}</td>
                                        <td>{item.nombre}</td>
                                        <td>{item.fecha}</td>
                                        <td>
                                            <BlueButton text="Seleccionar" onClick={() => handleOpening(index)} />
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

