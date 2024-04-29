'use client'
import styles from "../page.module.css";
import Image from "next/image";
import MainLogo from "../../../public/mainLogo.svg";
import { BlueButton } from "../components/blueButton";
import exp from "constants";
import Usuario from "@/model/Usuario";
import { get } from "http";


let user : Usuario;

export default function MainMenuPage() {
    const printMessage = () => {
        console.log("Mostrando equipo");
    };
    getLocalStorage();


    return (
        <main className={styles.main} id="main">
            <div className={styles.mainMenuContainer}>
                <div className={styles.divisionContainer}>
                    <h1>Menú Principal</h1>
                    <div className={styles.flexContainer}>
                        <Image src={MainLogo} alt="Main Logo" />
                        <div className={styles.flexFlexContainer}>
                            <BlueButton text="Mostrar equipo" onClick={() => {}} type="button"/>
                            <BlueButton text="Mostrar estudiantes" onClick={() => {}} type="button"/>
                            <BlueButton text="Itinerario" onClick={() => {}} type="button"/>
                            <BlueButton text="Registrar profesor" onClick={() => {}} type="button"/>
                        </div>
                    </div>
                </div>
                <div className={styles.verticalLine}></div>
                <div className={styles.divisionContainer}>
                    <h1>Próxima Actividad</h1>
                    <table>
                        <tbody>
                            <tr>
                                <td>Nombre</td>
                                <td>Nombre de la actividad</td>
                            </tr>
                            <tr>
                                <td>Estado</td>
                                <td>Estado de la actividad</td>
                            </tr>
                            <tr>
                                <td>Tipo</td>
                                <td>Tipo de la actividad</td>
                            </tr>
                            <tr>
                                <td>Modalidad</td>
                                <td>Modalidad de la activdad</td>
                            </tr>
                            <tr>
                                <td>Semana</td>
                                <td>Semana de la actividad</td>
                            </tr>
                            <tr>
                                <td>Fecha</td>
                                <td>Fecha de la actividad</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}

const getLocalStorage = () => {
    const user = localStorage.getItem("user");

    const userJson = JSON.parse(user? user : "{}");
    console.log(userJson);
    return new Usuario(userJson.email, userJson.password, userJson.rol, userJson.celular);
}