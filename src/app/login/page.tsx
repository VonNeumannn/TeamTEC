'use client'
import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";
import UserLogo from "../../../public/circle-user-round.svg";
import { BlueButton } from "../components/blueButton";
import PopUp from "../components/popUpInformation";
import { useEffect } from "react";
import { useState } from "react";

export default function LoginPage() {
    const [dialogOpen, setDialogOpen] = useState(false);
    

    const openDialog = () => {
        console.log("Abriedo dialogo");
        setDialogOpen(true);
    };

    const closeDialog = () => {
        console.log("Cerrando dialogo");
        setDialogOpen(false);
    };

    return (

        <main className={styles.main} id="main">
            <PopUp 
                title="Datos Inválidos" 
                content="Las credenciales ingresadas son incorrectas." 
                openDialog={openDialog}
                closeDialog={closeDialog}
                dialogOpen={dialogOpen}
            />
            <div className={styles.loginContainer}>
                <Image src={UserLogo} alt="User Logo" />
                <h1>Login</h1>
                <form className={styles.formContainer}>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required placeholder="..."/>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required placeholder="..." />
                    </div>
                    <Link href="#" >Olvidó su contraseña</Link>
                    <BlueButton text="LOGIN" onClick={openDialog} />
                </form>
            </div>
        </main>
    );
}