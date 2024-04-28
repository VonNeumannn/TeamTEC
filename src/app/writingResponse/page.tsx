'use client';
import styles from '../page.module.css';
import React, { useState } from 'react';
import Link from 'next/link';

export default function writingResponse() {
    const [data, setData] = useState({
        redaccion: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setData({
            ...data,
            [e.target.id]: e.target.value
        });
    };

    function handlePost() {
        console.log(`handlePosting item: ${data.redaccion}`);
        // Aquí puedes agregar el código para editar el item
    }
  return (
    <main className={styles.main} id="main">
        <div className={styles.studentEditContainer}>
            <h1>Redactar Comentario</h1>
                <div className={styles.formstudentEdit}>
                    <form className={styles.formContainerWriteComment}>
                        <div className={styles.formGroupWriteComment}>
                        <textarea id="redaccion" name="writing" placeholder="..." value={data.redaccion} style={{ height: '150px', width: '300px', resize: 'none'}} onChange={handleChange}/>
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
