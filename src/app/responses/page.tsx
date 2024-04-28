'use client'
import styles from "../page.module.css";
import React, { useState } from 'react';
import { BlueButton } from "../components/blueButton";
import Image from "next/image";
import SortIcon from "../../../public/sort_icon.svg";

export default function responsesPage() {
    const [commentData, setData] = useState({
        title: 'Titulo',
        redaccion: 'Redacción'
    });

    const data = [
        { respuesta: 'Respuesta 1' },
        { respuesta: 'Respuesta 2' },
        { respuesta: 'Respuesta 3' },
        { respuesta: 'Respuesta 4' },
        { respuesta: 'Respuesta 5' },
        { respuesta: 'Respuesta 6' },
        { respuesta: 'Respuesta 7' },
        { respuesta: 'Respuesta 8' },
        { respuesta: 'Respuesta 9' },
        { respuesta: 'Respuesta 10'},
        { respuesta: 'Respuesta 11'},
        { respuesta: 'Respuesta 12'},
        { respuesta: 'Respuesta 13'},
        { respuesta: 'Respuesta 14'},
        { respuesta: 'Respuesta 15'},
        { respuesta: 'Respuesta 16'},
        { respuesta: 'Respuesta 17'},
        { respuesta: 'Respuesta 18'},
        { respuesta: 'Respuesta 19'},
        { respuesta: 'Respuesta 20'},
        { respuesta: 'Respuesta 21'},
        { respuesta: 'Respuesta 22'},
        { respuesta: 'Respuesta 23'},
        { respuesta: 'Respuesta 24'},
        { respuesta: 'Respuesta 25'},
        { respuesta: 'Respuesta 26'},
        { respuesta: 'Respuesta 27'},
        { respuesta: 'Respuesta 28'},
        { respuesta: 'Respuesta 29'},
        { respuesta: 'Respuesta 30'},
        { respuesta: 'Respuesta 31'},
        { respuesta: 'Respuesta 32'},
        { respuesta: 'Respuesta 33'},
        { respuesta: 'Respuesta 34'},
        { respuesta: 'Respuesta 35'},
        { respuesta: 'Respuesta 36'},
        { respuesta: 'Respuesta 37'},
        { respuesta: 'Respuesta 38'},
        { respuesta: 'Respuesta 39'},
        { respuesta: 'Respuesta 40'},
        { respuesta: 'Respuesta 41'},
        { respuesta: 'Respuesta 42'},
        { respuesta: 'Respuesta 43'},
        { respuesta: 'Respuesta 44'},
        { respuesta: 'Respuesta 45'},
        { respuesta: 'Respuesta 46'},
        { respuesta: 'Respuesta 47'},
        { respuesta: 'Respuesta 48'},
        { respuesta: 'Respuesta 49'},
        { respuesta: 'Respuesta 50'}
    ];

    return (
        <main className={styles.main} id="main">
            <div className={styles.teamContainer}>
                <h1 style={{ paddingBottom: '30px'}} >Respuestas</h1>
                <div >
                    <input type="text" value={commentData.title} readOnly/>
                    <div >
                        <textarea value={commentData.redaccion} readOnly style={{ height: '100px', width: '300px', resize: 'none', float: 'left', marginTop: '15px'}} />
                        <button className={styles.blueButton} onClick={() => {}} style={{ width: '120px', height: '40px', marginLeft: '150px'}} >Redactar</button>
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
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.respuesta}</td>
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

