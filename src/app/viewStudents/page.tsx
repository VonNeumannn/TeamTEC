'use client'
import styles from "../page.module.css";
import Image from "next/image";
import PopUp from '../components/popUpDelete';
import CSVPopUp from '../components/popUpCSV';
//import PopUpInfo from "../components/popUpInformation";
import { BlueButton } from "../components/blueButton";
import DownloadIcon from "../../../public/download_icon.svg";
import SortIcon from "../../../public/sort_icon.svg";
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { handlerLoad, handleDeleteController, reloadPageAfterOperation, handlerPassData } from "../../controller/studentsController";
import Estudiante from "../../model/Estudiante";


export default function ViewStudents() {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogOpenCSV, setDialogOpenCSV] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<Estudiante | null>(null);
    const router = useRouter();
    const [search, setSearch] = useState("");
    const [data, setData] = useState<Estudiante[]>([]);
    const [dataTemp, setDataTemp] = useState<Estudiante[]>([]);
    
    const openDialog = () => {
        console.log("Abriedo dialogo");
        setDialogOpen(true);
    };

    const openDialogCSV = () => {
        setDialogOpenCSV(true);
    };

    const handleClick = (tipo: string, sede: string) => {
        if (tipo=="Local"){
            const estudiantesFiltrados = data.filter(estudiante => estudiante.sede === sede);
            const content=generateCSVContent(estudiantesFiltrados);
            downloadCSV(content)
        }
        
        else{
            let content = '';
            const tiposDeSede: string[] = Array.from(new Set(data.map(estudiante => estudiante.sede)));
            tiposDeSede.forEach(sede => {
                content += `Sede: ${sede}\n`;
                content += 'Carne;Nombre;Primer apellido; Segundo apellido;Correo;Celular;Sede;\n'; 
                data
                    .filter(estudiante => estudiante.sede === sede)
                    .forEach(estudiante => {
                        content += `${estudiante.carne};${estudiante.nombre};${estudiante.primerApellido};${estudiante.segundoApellido};${estudiante.correo};${estudiante.celular};${estudiante.sede}\n`;
                    });
        
                content += '\n';
            });
            downloadCSV(content)
        }
    };

    function estudianteToCSVRow(estudiante: Estudiante): string {
        return `${estudiante.carne};${estudiante.nombre};${estudiante.primerApellido};${estudiante.segundoApellido};${estudiante.correo};${estudiante.celular};${estudiante.sede}\n`;
    }

    function generateCSVContent(estudiantes: Estudiante[]): string {
        let csvContent = 'Carne;Nombre;Primer apellido; Segundo apellido;Correo;Celular;Sede;\n'; // Encabezados de columnas
        estudiantes.forEach(estudiante => {
            csvContent += estudianteToCSVRow(estudiante);
        });
        return csvContent;
    }

    function downloadCSV(csvContent: string): void {
        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.download = "estudiantes.csv";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        window.URL.revokeObjectURL(url);
    }

    function handleEdit(index: number) {
        const item = data[index];
        handlerPassData(item);
        console.log(`Editing item: ${item.carne} ${item.nombre}`);
        router.push(`/edit_student`); 
        // Aquí puedes agregar el código para editar el item
    }

    function handleDownload() {
        setDialogOpenCSV(true);
    }

    function handleDownloadCancel() {
        setDialogOpenCSV(false);
    }

    function handleDelete(index: number) {
        const item = data[index];
        setDialogOpen(true);
        setItemToDelete(item); 
    }

    function confirmDelete() {
        setDialogOpen(false);
        if (itemToDelete) {
            handleDeleteController(itemToDelete.carne);
            reloadPageAfterOperation();
        } else {
            console.error("El valor a eliminar es null.");
        }
    }
    
    function cancelDelete() {
        setDialogOpen(false);
    }

    const handleSubmit = () => {
        if (search.toLowerCase() == "") {
            setData(dataTemp);
        }else {
            const resultadosFiltrados = data.filter((estudiante) =>
            estudiante.nombre.toLowerCase().includes(search.toLowerCase())
            );
            setData(resultadosFiltrados);
      }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await handlerLoad();
                setData([...data]);
                setDataTemp([...data]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <main className={styles.main} id="main">
            <div>
                {dialogOpenCSV && (
                    <CSVPopUp  
                        openDialog={openDialogCSV}
                        closeDialog={handleDownloadCancel}
                        dialogOpen={dialogOpenCSV}
                        confirmType={handleDownloadCancel}
                    />
                )}
                {dialogOpen && (
                <PopUp
                    title="Alerta" 
                    content="¿Seguro de eliminar al estudiante?" 
                    openDialog={openDialog}
                    closeDialog={cancelDelete}
                    dialogOpen={dialogOpen}
                    confirmDelete={confirmDelete}
                />
                )}
            </div>
            <div className={styles.teamContainer}>
                <h1>Miembros equipo</h1>
                <p>Buscar estudiante</p>
                <div className={styles.searchAddContainer}>
                    <input type="search" 
                    onChange={(e) => setSearch(e.target.value)}/>
                    <BlueButton text="Buscar" onClick={() => {handleSubmit()}} />
                    <div className={styles.csvAddStudentContainer}>
                        <button className={styles.downButton} onClick={() => {handleDownload()}}>  
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