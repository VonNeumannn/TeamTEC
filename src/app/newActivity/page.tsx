'use client'
import styles from "../page.module.css";
import { BlueButton } from "../components/blueButton";
import Image from "next/image";
import UploadIcon from "../../../public/upload.svg";

export default function NewActivity() {

    return (
        <main className={styles.main} id="main">
            <div className={styles.activityContainer}>
                <h1>Nueva Actividad</h1>
                <div className={styles.activityFormContainer}>
                    <div className={styles.formGroup}>
                        <label htmlFor="nombre">Nombre</label>
                        <input type="nombre" id="nombre" name="nombre" required placeholder="..." />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="semana">Semana de realización</label>
                        <select className={styles.selectContainer} id="semana" name="semana" required>
                            <option value="" >Selecciona una semana...</option>
                            {
                                Array.from({ length: 16 }, (_, i) => i + 1).map(num =>
                                    <option key={num} value={`semana${num}`}>Semana {num}</option>
                                )
                            }
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="tipo">Tipo</label>
                        <select id="opciones" name="opciones" required>
                            <option value="" >Selecciona una semana...</option>
                            <option value="opcion1">Orientadora</option>
                            <option value="opcion2">Motivacional</option>
                            <option value="opcion3">Apoyo a vida estudiantil</option>
                            <option value="opcion3">Orden técnico</option>
                            <option value="opcion3">Recreación</option>
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="modalidad">Modalidad</label>
                        <select id="opciones" name="opciones" required>
                            <option value="" >Selecciona la modalidad...</option>
                            <option value="opcion1">Virtual</option>
                            <option value="opcion2">Presencial</option>
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="fecha">Fecha</label>
                        <input type="date" id="fecha" name="fecha" required placeholder="..." />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="hora">Hora</label>
                        <input type="time" id="hora" name="hora" required placeholder="..." />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="recordatorio">Iniciar recordatorio</label>
                        <input type="date" id="recordatorio" name="recordatorio" required placeholder="..." />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="enlace">Enlace</label>
                        <input type="link" id="enlace" name="enlace" required placeholder="..." />
                    </div>
                    <div className={styles.uploadContainer}>
                        <label htmlFor="afiche">
                            <Image src={UploadIcon} alt="upload Icon" />
                            {"Afiche"}
                        </label>
                        <input type="file" id="afiche" name="afiche" accept="image/*" hidden />
                    </div>
                </div>
                <div className={styles.buttonActivityContainer}>
                    <BlueButton text="Crear actividad" onClick={() => { }} />
                    <BlueButton text="Encargados" onClick={() => { }} />
                </div>
            </div>
        </main>
    );
}