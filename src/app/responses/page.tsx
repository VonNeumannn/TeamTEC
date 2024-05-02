'use client'
import styles from "../page.module.css";
import React, { useEffect, useState } from 'react';
import { BlueButton } from "../components/blueButton";
import Image from "next/image";
import SortIcon from "../../../public/sort_icon.svg";
import Comentario from "@/model/Comentario";
import { useRouter } from "next/navigation";
import { handlerAddComment } from "@/controller/comentarioController";

export default function responsesPage() {
    const [data, setData] = useState<Comentario | null>(null);
    const router = useRouter();
    useEffect(() => {
        const fetchData = async () => {
            try {
                let storedData = localStorage.getItem('comment');
                if (storedData) {
                    let parsedData = JSON.parse(storedData) as Comentario;
                    setData(parsedData);
                } else {
                    console.error('No data stored under key "comment"');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handlerGoAddComment = () => {
        router.push('/writingComment')
    }
    return (
        <main className={styles.main} id="main">
            <div className={styles.teamContainer}>
                <h1 style={{ paddingBottom: '30px' }} >Respuestas</h1>
                <div >
                    <input type="text" value={data?.titulo || ''} style={{ width: '300px' }} readOnly />
                    <div >
                        <textarea value={data?.redaccion || ''} readOnly style={{ height: '100px', width: '300px', resize: 'none', float: 'left', marginTop: '15px' }} />
                        <button className={styles.blueButton} onClick={() => {handlerGoAddComment()}} style={{ width: '120px', height: '40px', marginLeft: '150px' }} >Redactar</button>
                    </div>
                </div>
                <div className={styles.tableContainerResponses}>
                    <table>
                        <tbody>
                            <tr>
                                <th className={styles.pasenZelda}>Respuesta</th>
                            </tr>
                        </tbody>
                    </table>
                    <div className={styles.tableContentContainerResponses}>
                        <table>
                            <tbody>
                                {Array.isArray(data?.respuestas) && data.respuestas.map((respuesta, index) => (
                                    <tr key={index}>
                                        <td>{respuesta.redaccion}</td>
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

