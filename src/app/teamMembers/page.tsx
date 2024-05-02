'use client'
import styles from "../page.module.css";
import { BlueButton } from "../components/blueButton";
import PopUp from '../components/popUpDeleteProfessor';
import Image from "next/image";
import SortIcon from "../../../public/sort_icon.svg";
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { handlerLoad, handleDeleteController, reloadPageAfterOperation, handleDeleteConfirmation, handlerPassData } from "../../controller/profesorController";
import Profesor from '@/model/Profesor';

export default function MainMenuPage() {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [search, setSearch] = useState("");
    const router = useRouter();
    const [itemToDelete, setItemToDelete] = useState<Profesor | null>(null);
    const [data, setData] = useState<Profesor[]>([]);
    const [dataTemp, setDataTemp] = useState<Profesor[]>([]);
    
    const openDialog = () => {
        setDialogOpen(true);
    };

    const closeDialog = () => {
        setDialogOpen(false);
    };

    /*let codigo = '';
    const storedData = localStorage.getItem("user");
    if (storedData) {
        const userData = JSON.parse(storedData);
        codigo = userData.codigo;
    } else {
        console.log("No data found in localStorage for key 'user'");
    }*/

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await handlerLoad();
                const filteredData = data.filter(item => item.estado === 'Activo');
                setData([...filteredData]);
                setDataTemp([...filteredData]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);


    function handleEdit(index: number) {
        const item = data[index];
        if("CA-1"==item.codigo || item.rol=="Administradora"){
            handlerPassData(item);
            router.push(`/professor_editor`); 
        };
        // Aquí puedes agregar el código para editar el item
    }

    function handleDelete(index: number) {
        const item = data[index];
        setDialogOpen(true);
        setItemToDelete(item); 
    }

    function confirmDelete(mensaje:string) {
        setDialogOpen(false);
        if (itemToDelete) {
            handleDeleteController(itemToDelete.correo);
            handleDeleteConfirmation(mensaje,itemToDelete.correo);
            reloadPageAfterOperation();
        } else {
            console.error("El valor a eliminar es null.");
        }
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
            <PopUp
                title="Alerta" 
                content="Justifique la eliminación" 
                openDialog={openDialog}
                closeDialog={closeDialog}
                dialogOpen={dialogOpen}
                confirmDelete={confirmDelete}
            />
            <div className={styles.teamContainer}>
                <h1>Miembros equipo</h1>
                <p>Buscar profesor</p>
                <div className={styles.searchAddContainer}>
                    <input type="text"  
                    onChange={(e) => setSearch(e.target.value)} />
                    <BlueButton text="Buscar"  onClick={() => {handleSubmit()}} />
                    <div className={styles.addContainer}>
                        <BlueButton text="Agregar Profesor" onClick={() => { }} />
                    </div>
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
                                            <BlueButton text="Editar" onClick={() => handleEdit(index)} />
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

