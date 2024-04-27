'use client';
import styles from '../page.module.css';
import React, { useState } from 'react';
import Link from 'next/link';

export default function StudentEdit() {
    const [data, setData] = useState({
        nameAct: 'Quiz 1',
        linkAct: 'zoom.wow'
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [e.target.id]: e.target.value
        });
    };

    function handleEdit() {
        console.log(`Editing item: ${data.nameAct} ${data.linkAct}`);
    }
  return (
    <main className={styles.main} id="main">
        <div className={styles.studentEditContainer}>
            <h1>Editar Actividad</h1>
                <div className={styles.formstudentEdit}>
                    <form className={styles.formContainerstudentEdit}>

                        <div className={styles.formGroupStudentEdit}>
                            <label htmlFor="actName">Nombre</label>
                            <input type="text" id="actName" name="actName" placeholder="..." value={data.nameAct} onChange={handleChange}/>
                        </div>
                        
                        <div className={styles.formGroupStudentEdit}>
                            <label htmlFor="semana">Semana de realización</label>
                            <select id="semanas" name="semanas">
                                <option value="semana1">Semana 1</option>
                                <option value="semana2">Semana 2</option>
                                <option value="semana3">Semana 3</option>
                                <option value="semana4">Semana 4</option>
                                <option value="semana5">Semana 5</option>
                                <option value="semana6">Semana 6</option>
                                <option value="semana7">Semana 7</option>
                                <option value="semana8">Semana 8</option>
                                <option value="semana9">Semana 9</option>
                                <option value="semana10">Semana 10</option>
                                <option value="semana11">Semana 11</option>
                                <option value="semana12">Semana 12</option>
                                <option value="semana13">Semana 13</option>
                                <option value="semana14">Semana 14</option>
                                <option value="semana15">Semana 15</option>
                                <option value="semana16">Semana 16</option>
                            </select>
                        </div>

                        <div className={styles.formGroupStudentEdit}>
                            <label htmlFor="typeAct">Tipo</label>
                            <select id="typeAct" name="typeAct">
                                <option value="typeAct1">Orientadora</option>
                                <option value="typeAct2">opcion 2</option>
                                <option value="typeAct3">opcion 3</option>
                            </select>
                        </div>

                        <div className={styles.formGroupStudentEdit}>
                            <label htmlFor="modAct">Modalidad</label>
                            <select id="modAct" name="modAct">
                                <option value="modAct1">Virtual</option>
                                <option value="modAct2">Presencial</option>
                                <option value="modAct3">Otra</option>
                            </select>
                        </div>

                        <div className={styles.formGroupStudentEdit}>
                            <label htmlFor="actDate">Fecha</label>
                            <input type="date" id="actDate" name="actDate" onChange={handleChange}/>
                        </div>

                        <div className={styles.formGroupStudentEdit}>
                            <label htmlFor="actHour">Hora</label>
                            <input type="number" id="actHour" name="actHour" onChange={handleChange}/>
                        </div>

                        <div className={styles.formGroupStudentEdit}>
                            <label htmlFor="memoAct">Iniciar recordatorio</label>
                            <input type="date" id="memoAct" name="memoAct" onChange={handleChange}/>
                        </div>

                        <div className={styles.formGroupStudentEdit}>
                            <label htmlFor="linkAct">Enlace</label>
                            <input type="img" id="linkAct" name="linkAct" placeholder="..." value={data.linkAct} onChange={handleChange}/>
                        </div>
                        
                        <div className={styles.formGroupStudentEdit}>
                            <label htmlFor="statusAct">Estado de actividad</label>
                            <select id="statusAct" name="statusAct">
                                <option value="statusAct1">Notificada</option>
                                <option value="statusAct2">opcion 2</option>
                                <option value="statusAct3">opcion 3</option>
                            </select>
                        </div>

                        <div className={styles.formGroupStudentEdit}>
                            <label htmlFor='myFile'>Afiche</label>
                            <input type="file" id="myFile" name="filename"></input>
                        </div>
                    </form>
                </div>
                
            <div style={{ display: 'flex', gap: '3em' }}>
                <button className={styles.blueButton} style={{ padding: '0.6em', width:'60%' }} onClick={() =>  handleEdit()}>Actualizar</button>
                <button className={styles.blueButton} style={{ padding: '0.6em', width:'60%' }} onClick={() => {}}>Encargados</button>
            </div>
        </div>
    </main>
  );
}
