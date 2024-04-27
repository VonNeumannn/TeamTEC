'use client';
import styles from '../page.module.css';
import React, { useState } from 'react';
import PopUp from '../components/popUpImage';
import Link from 'next/link';
import Profile from '../../../public/profile-default.webp';
import MainLogo from "../../../public/mainLogo.svg";

export default function ActivityDetails() {

    const [dialogOpen, setDialogOpen] = useState(false);
    const [currentImageUrl, setCurrentImageUrl] = useState("");
    

    const openDialog = () => {
        console.log("Abriedo dialogo");
        setDialogOpen(true);
    };

    const closeDialog = () => {
        console.log("Cerrando dialogo");
        setDialogOpen(false);
    };

    const handleButtonClick = (imageUrl: string) => {
        setCurrentImageUrl(imageUrl);
        openDialog();
    };

    const [data, setData] = useState({
        name: 'Carrera', 
        type: 'Deportiva', 
        week: '11',
        modality: 'Presencial',
        date: '2024-04-27',
        time: '08:00',
        reminder: '',
        link: '',
        afiche_url:Profile.src,
        prueba_url:MainLogo.src
    });

    

  return (
    <main className={styles.main} id="main">
        <div>
            <PopUp
                imageUrl={currentImageUrl}
                openDialog={openDialog}
                closeDialog={closeDialog}
                dialogOpen={dialogOpen}
            />
        </div>
        <div className={styles.studentEditContainer}>
            <h1>Detalles Actividad</h1>
                <div className={styles.formstudentEdit}>
                    <form className={styles.formContainerstudentEdit}>

                        <div className={styles.formGroupStudentEdit}>
                            <label htmlFor="name">Nombre</label>
                            <input type="text" id="name" name="name" placeholder="..." value={data.name} readOnly />
                        </div>
                        <div className={styles.formGroupStudentEdit}>
                            <label htmlFor="week">Semana de realización</label>
                            <input type="text" id="week" name="week" required placeholder="..." value={data.week} readOnly/>
                        </div>
                        <div className={styles.formGroupStudentEdit}>
                            <label htmlFor="type">Tipo</label>
                            <input type="text" id="type" name="type" required placeholder="..." value={data.type} readOnly/>
                        </div>
                        <div className={styles.formGroupStudentEdit}>
                            <label htmlFor="modality">Modalidad</label>
                            <input type="text" id="modality" name="modality" required placeholder="..." value={data.modality} readOnly/>
                        </div>
                        <div className={styles.formGroupStudentEdit}>
                            <label htmlFor="date">Fecha</label>
                            <input type="date" id="date" name="date" placeholder="..." value={data.date} disabled />
                        </div>
                        <div className={styles.formGroupStudentEdit}>
                            <label htmlFor="time">Hora</label>
                            <input type="time" id="time" name="time" required placeholder="..." value={data.time} disabled />
                        </div>
                        <div className={styles.formGroupStudentEdit}>
                            <label htmlFor="reminder">Iniciar recordatorio</label>
                            <input type="text" id="reminder" name="reminder" required placeholder="..." value={data.reminder} readOnly/>
                        </div>
                        <div className={styles.formGroupStudentEdit}>
                            <label htmlFor="link">Enlace</label>
                            <input type="text" id="link" name="link" required placeholder="..." value={data.link} readOnly/>
                        </div>
                    </form>
                </div>
                
            <div style={{ display: 'flex', gap: '10px' }}> {/* Contenedor de botones */}
                <button className={styles.blueButton} onClick={() => {}} style={{ width: '120px' }} >Comentarios</button>
                <button className={styles.blueButton} onClick={() => {handleButtonClick(data.afiche_url)}} style={{ width: '120px' }} >Afiche</button>
                <button className={styles.blueButton} onClick={() => {handleButtonClick(data.prueba_url)}} style={{ width: '120px' }} >Pruebas</button>
            </div>
        </div>
    </main>
  );
}
