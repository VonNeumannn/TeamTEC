'use client'
import styles from "../page.module.css";
import { GreenButton } from "../components/greenButton";
import { BlueButton } from "../components/blueButton";
import Image from "next/image";
import SortIcon from "../../../public/sort_icon.svg";
import React, { useState, useEffect } from 'react';
import { handlerLoad, reloadPageAfterOperation, handleAddMemberController} from "../../controller/profesorController";
import Profesor from '@/model/Profesor';

export default function MainMenuPage() {
    const [search, setSearch] = useState("");
    const [data, setData] = useState<Profesor[]>([]);
    const [dataTemp, setDataTemp] = useState<Profesor[]>([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await handlerLoad();
                const filteredData = data.filter(item => item.estado === 'Inhabilitado');
                setData([...filteredData]);
                setDataTemp([...filteredData]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    function handleAdding(index: number) {
        const item = data[index];
        handleAddMemberController(item.correo);
        reloadPageAfterOperation();
    }

    const handleSubmit = () => {
        if (search.toLowerCase() == "") {
            setData(dataTemp);
        }else {
            const resultadosFiltrados = data.filter((profesor) =>
            profesor.nombre.toLowerCase().includes(search.toLowerCase())
            );
            setData(resultadosFiltrados);
      }
    };

    return (
        <main className={styles.main} id="main">
            <div className={styles.teamContainer}>
                <h1>Agregar miembro</h1>
                <p>Buscar profesor</p>
                <div className={styles.searchAddContainer}>
                    <input type="text" 
                    onChange={(e) => setSearch(e.target.value)} />
                    <BlueButton text="Buscar"  onClick={() => {handleSubmit()}} />
                </div>
                <div className={styles.tableContainer}>
                    <table>
                        <tbody>
                            <tr>
                                <th className={styles.pasenZelda}>Nombre
                                    <button className={styles.sortButton} onClick={() => { }} >
                                        <Image src={SortIcon} alt="sort icon" className={styles.sortButtonIcon} />
                                    </button></th>
                                <th className={styles.pasenZelda}>Apellidos
                                    <button className={styles.sortButton} onClick={() => { }} >
                                        <Image src={SortIcon} alt="sort icon" className={styles.sortButtonIcon} />
                                    </button></th>
                                <th className={styles.pasenZelda}>Codigo
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
                                        <td>{item.nombre}</td>
                                        <td>{item.apellidos}</td>
                                        <td>{item.codigo}</td>
                                        <td>
                                            <GreenButton text="Agregar" onClick={() => handleAdding(index)} />
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

