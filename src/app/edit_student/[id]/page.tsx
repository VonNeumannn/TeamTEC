'use client';
import styles from '../../page.module.css';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { handlerOneLoad, reloadPageAfterOperation } from "../../../controller/studentsController";
import Estudiante from "../../../model/Estudiante";
import { useRouter } from 'next/router';

interface Params {
    id: string;
}

export default function StudentEdit(params:Params) {
    const { id } = params;
    console.log(id);
    const [loadData, setloadData]= useState<Estudiante[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const loadData = await handlerOneLoad(id);
                setloadData(loadData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const [data, setData] = useState({
        carne: '208090874', 
        nombre: 'Manuel', 
        primerApellido: 'Rodríguez',
        segundoApellido: 'Murillo',
        correo: 'm.aleandro00@gmail.com',
        celular: '87534159'
    });
    

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [e.target.id]: e.target.value
        });
    };

    function handleEdit() {
        console.log(`Editing item: ${data.carne} ${data.nombre} ${data.primerApellido} ${data.segundoApellido} ${data.correo} ${data.celular}`);
        // Aquí puedes agregar el código para editar el item
    }

    

  return (
    <main className={styles.main} id="main">
        <div className={styles.studentEditContainer}>
            <h1>Editar Estudiante</h1>
                <div className={styles.formstudentEdit}>
                    <form className={styles.formContainerstudentEdit}>

                        <div className={styles.formGroupStudentEdit}>
                            <label htmlFor="carne">Carne</label>
                            <input type="text" id="carne" name="carne" required placeholder="..." value={data.carne} onChange={handleChange}/>
                        </div>

                        <div className={styles.formGroupStudentEdit}>
                            <label htmlFor="name">Nombre</label>
                            <input type="text" id="nombre" name="name" placeholder="..." value={data.nombre} onChange={handleChange}/>
                        </div>
                        <div className={styles.formGroupStudentEdit}>
                            <label htmlFor="lastName1">Primer Apelldio</label>
                            <input type="text" id="primerApellido" name="lastName1" required placeholder="..." value={data.primerApellido} onChange={handleChange}/>
                        </div>
                        <div className={styles.formGroupStudentEdit}>
                            <label htmlFor="lastName2">Segundo Apellido</label>
                            <input type="text" id="segundoApellido" name="lastName2" required placeholder="..." value={data.segundoApellido} onChange={handleChange}/>
                        </div>
                        <div className={styles.formGroupStudentEdit}>
                            <label htmlFor="email">Correo</label>
                            <input type="text" id="correo" name="email" placeholder="..." value={data.correo} onChange={handleChange}/>
                        </div>
                        <div className={styles.formGroupStudentEdit}>
                            <label htmlFor="cellphone">Número celular</label>
                            <input type="tel" id="celular" name="cellphone" required placeholder="..." value={data.celular} onChange={handleChange}/>
                        </div>
                    </form>
                </div>
                
            <div style={{ display: 'flex', gap: '10px' }}> {/* Contenedor de botones */}
                <button className={styles.greenButton} onClick={() =>  handleEdit()} style={{ width: '120px' }} >Guardar</button>
                <button className={styles.deleteButton} onClick={() => {}} style={{ width: '120px' }} >Cancelar</button>
            </div>
        </div>
    </main>
  );
}
