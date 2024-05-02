'use client';
import styles from '../page.module.css';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Comentario from '@/model/Comentario';
import { Timestamp } from 'firebase/firestore';
import { handlerAddComment } from '@/controller/comentarioController';

export default function writingComment() {
    const [user, setUser] = useState<any>({});
    const [data, setData] = useState({
        title: '',
        writing: ''
    });
    const router = useRouter();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [e.target.id]: e.target.value
        });
    };

    function handlePost() {
        const userData = JSON.parse(localStorage.getItem('user') || '{}');
        const timestamp = Timestamp.now();
        const comentario = new Comentario(data.title,userData.email, data.writing, timestamp, []);
        handlerAddComment("TUpzi7WjSW0ScPhR0auf","4IizMfLigz9cDgylBDQM",comentario);
    }
    return (
        <main className={styles.main} id="main">
            <div className={styles.studentEditContainer}>
                <h1>Redactar Comentario</h1>
                <div className={styles.formstudentEdit}>
                    <form className={styles.formContainerWriteComment}>

                        <div className={styles.formGroupWriteComment}>
                            <label htmlFor="title">Titulo</label>
                            <input type="text" id="title" name="title" required placeholder="..." value={data.title} onChange={handleChange} style={{ backgroundColor: 'white' }} />
                        </div>

                        <div className={styles.formGroupWriteComment}>
                            <label htmlFor="writing">Redacción</label>
                            <input type="text" id="writing" name="writing" placeholder="..." value={data.writing} onChange={handleChange} style={{ backgroundColor: 'white' }} />
                        </div>
                    </form>
                </div>

                <div style={{ display: 'flex', gap: '10px' }}> {/* Contenedor de botones */}
                    <button className={styles.greenButton} onClick={() => handlePost()} style={{ width: '120px' }} >Publicar</button>
                    <button className={styles.deleteButton} onClick={() => { router.push('/comments') }} style={{ width: '120px' }} >Cancelar</button>
                </div>
            </div>
        </main>
    );
}
