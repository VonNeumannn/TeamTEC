'use client';
import styles from '../page.module.css';
import React, { useState } from 'react';
import Link from 'next/link';

export default function writingComment() {
    const [data, setData] = useState({
        title: '', 
        writing: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [e.target.id]: e.target.value
        });
    };

    function handlePost() {
        console.log(`handlePosting item: ${data.title} ${data.writing}`);
        // Aquí puedes agregar el código para editar el item
    }
  return (
    <main className={styles.main} id="main">
        <div className={styles.studentEditContainer}>
            <h1>Redactar Comentario</h1>
                <div className={styles.formstudentEdit}>
                    <form className={styles.formContainerWriteComment}>

                        <div className={styles.formGroupWriteComment}>
                            <label htmlFor="title">Titulo</label>
                            <input type="text" id="title" name="title" required placeholder="..." value={data.title} onChange={handleChange}/>
                        </div>

                        <div className={styles.formGroupWriteComment}>
                            <label htmlFor="writing">Redacción</label>
                            <input type="text" id="writing" name="writing" placeholder="..." value={data.writing} onChange={handleChange}/>
                        </div>
                    </form>
                </div>
                
            <div style={{ display: 'flex', gap: '10px' }}> {/* Contenedor de botones */}
                <button className={styles.greenButton} onClick={() =>  handlePost()} style={{ width: '120px' }} >Publicar</button>
                <button className={styles.deleteButton} onClick={() => {}} style={{ width: '120px' }} >Cancelar</button>
            </div>
        </div>
    </main>
  );
}
