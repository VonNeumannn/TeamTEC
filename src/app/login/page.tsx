'use client'
import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";
import UserLogo from "../../../public/circle-user-round.svg";
import { BlueButton } from "../components/blueButton";
import PopUp from "../components/popUpInformation";
import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { handlerLogin } from "../../controller/loginController";
import Usuario from "../../model/Usuario";
import React from "react";




export default function LoginPage() {
    const router = useRouter();
    const [dialogOpen, setDialogOpen] = useState(false);
    const openDialog = () => {
        console.log("Abriendo dialogo");
        setDialogOpen(true);
    };

    const closeDialog = () => {
        console.log("Cerrando dialogo");
        setDialogOpen(false);
    };
    useEffect(() => {
        const form = document.querySelector('form');
        form?.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = (document.getElementById('email') as HTMLInputElement).value;
            const password = (document.getElementById('password') as HTMLInputElement).value;
            handlerLogin(email,password, router, openDialog);
        });
    });
    
    

    
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
                    <BlueButton text="LOGIN" onClick={()=>{}} type="submit" />
                </form>
            </div>
        </main>
    );
}