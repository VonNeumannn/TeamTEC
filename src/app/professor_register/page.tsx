'use client';
import styles from '../page.module.css';
import Link from 'next/link';
import { BlueButton } from '../components/blueButton';
import Image from 'next/image';
import Profile from '../../../public/profile-default.webp';
import PopUp from '../components/popUpInformation';
import { useState } from "react";

export default function ProfessorRegister() {
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
            title="Correo duplicado" 
            content="El correo ingresado ya se encuentra registrado, por favor ingresar otro." 
            openDialog={openDialog}
            closeDialog={closeDialog}
            dialogOpen={dialogOpen}
        />  
        <div className={styles.professorRegisterContainer}>
            <h1>Registrar Profesor</h1>
            <div className={styles.professorScreenDivider}>
                <div className={styles.formRegisterProfessors}>
                    <form className={styles.formContainerRegisterProfessors}>
                        <div className={styles.formGroupProfessorRegister}>
                            <label htmlFor="name">Nombre</label>
                            <input type="name" id="name" name="name" required placeholder="..."/>
                        </div>
                        <div className={styles.formGroupProfessorRegister}>
                            <label htmlFor="lastName">Apellidos</label>
                            <input type="text" id="lastName" name="lastName" required placeholder="..." />
                        </div>

                        <div className={styles.formGroupProfessorRegister}>
                            <label htmlFor="telephone">Número de teléfono</label>
                            <input type="tel" id="telephone" name="telephone" placeholder="..."/>
                        </div>
                        <div className={styles.formGroupProfessorRegister}>
                            <label htmlFor="email">Correo</label>
                            <input type="email" id="email" name="email" required placeholder="..." />
                        </div>

                        <div className={styles.formGroupProfessorRegister}>
                            <label htmlFor="cellphone">Número celular</label>
                            <input type="tel" id="cellphone" name="cellphone" required placeholder="..."/>
                        </div>
                        <div className={styles.formGroupProfessorRegister}>
                            <label htmlFor="opciones">Centro académico</label>
                            <select id="opciones" name="opciones">
                                <option value="opcion1">Centro Académico San José</option>
                                <option value="opcion2">Opción 2</option>
                                <option value="opcion3">Opción 3</option>

                            </select>
                        </div>
                        <div className={styles.formGroupProfessorRegister}>
                            <label htmlFor="password">Contraseña</label>
                            <input type="password" id="password" name="password" required placeholder="..."/>
                        </div>
                        
                        <div className={styles.formGroupProfessorRegister}>
                            <label htmlFor="passwordConfirm">Confirmación de contraseña</label>
                            <input type="password" id="passwordConfirm" name="passwordConfirm" required placeholder="..." />
                        </div>
                        <span>
                            ❌ Ocho caracteres <br />
                            ❌ Una letra mayúscula <br />
                            ❌ Un minúscula <br />
                            ❌ Un símbolo
                        </span>
                        
                        
                    </form>
                    

                </div>
                <div className={styles.dividerLine}>
                    <span></span>
                </div>
                
                <div className={styles.photoProfessorContainer}>
                    
                    <Image src={Profile} alt="Profile" />
                    <label htmlFor="photo">Subir foto de perfil</label>
                    <input type="file" id="photo" name="photo" accept="image/*" hidden/> 
                    
                    
                </div>
                
            </div>
            <BlueButton text="Registrar" onClick={openDialog}/>
        </div>
    </main>
  );
}
