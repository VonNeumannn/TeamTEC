'use client'
import styles from "../page.module.css";
import Image from "next/image";
import Link from "next/link";
import UserLogo from "../../../public/password_recovry.svg";
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

    const defaultMessage = {
        title: "Correo enviado",
        content: "Se ha enviado una contraseña a su correo"
    };

    const [title, setTitle] = useState(defaultMessage.title);
    const [content, setContent] = useState(defaultMessage.content);

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
            
            //handlerRecoveryEmail(email, openDialog);
        });
    });
    
    

    
    return (

        <main className={styles.main} id="main">
            <PopUp 
                title={title} 
                content={content} 
                openDialog={openDialog}
                closeDialog={closeDialog}
                dialogOpen={dialogOpen}
            />
            <div className={styles.loginContainer}>
                <Image src={UserLogo} alt="User Logo" />
                <h1>Recuperar Contraseña</h1>
                <form className={styles.formContainer}>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required placeholder="..."/>
                    </div>
                    
                    <div className={styles.recoveryButtons}>
                        <BlueButton text="Enviar Correo" onClick={()=>{}} type="submit" />
                        <BlueButton text="Ir a LOGIN" onClick={()=>(router.push('/login'))} type="button" />
                    </div>
                    
                </form>
            </div>
        </main>
    );
}