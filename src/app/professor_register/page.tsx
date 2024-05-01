'use client';
import styles from '../page.module.css';
import Link from 'next/link';
import { BlueButton } from '../components/blueButton';
import Image from 'next/image';
import Profile from '../../../public/profile-default.webp';
import PopUp from '../components/popUpInformation';
import { useState, useEffect } from "react";
import { handlerAddData, handlerLoad } from "../../controller/profesorController";
import Profesor from '@/model/Profesor';

export default function ProfessorRegister() {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [currentTitle, setcurrentTitle] = useState("");
    const [currentMessage, setcurrentMessage] = useState("");
    const [dataProfessors, setDataProfessors] = useState<Profesor[]>([]);
    const [data, setData] = useState({
        name: '',
        lastName: '',
        telephone: '',
        email: '',
        cellphone: '',
        opciones: 'San José',
        password: '',
        fotoPerfil: '',
        passwordConfirm: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [e.target.id]: e.target.value
        });
    };

    const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setData({
            ...data,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = () => {
        let duplicado = false;
        dataProfessors.forEach((professor) => {
            if(professor.correo==data.email){
                duplicado=true;
            }
        });
        if (duplicado){
            setcurrentTitle("Correo duplicado");
            setcurrentMessage("El correo ingresado ya se encuentra registrado, por favor ingresar otro.");
            openDialog();
            return;
        } else if(data.password!=data.passwordConfirm){
            setcurrentTitle("Contraseña erronea");
            setcurrentMessage("Las contraseñas no concuerdan");
            openDialog();
            return;
        }
        else{
            let cantidad=1;
            dataProfessors.forEach((professor) => {
                if(professor.centroAcademico==data.opciones){
                    cantidad++;
                }
            });
            let codigo="";
            switch(data.opciones){
                case "Cartago":
                    codigo="CA-"+cantidad;
                    break;
                case "Alajuela":
                    codigo="SL-"+cantidad;
                    break;
                case "San Carlos":
                    codigo="SC-"+cantidad;
                    break;
                case "Limón":
                    codigo="LI-"+cantidad;
                    break;
                default:
                    codigo="SJ-"+cantidad;
            }
            const profesor: Profesor = new Profesor (
                data.name,
                data.lastName,
                data.telephone,
                data.email,
                data.cellphone,
                data.opciones,
                data.password,
                codigo,
                data.fotoPerfil,
                'Profesor',
            );
            handlerAddData(profesor);
            console.log(data);
        }
    };

    const openDialog = () => {
        console.log("Abriedo dialogo");
        setDialogOpen(true);
    };

    const closeDialog = () => {
        console.log("Cerrando dialogo");
        setDialogOpen(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataProfessors = await handlerLoad();
                setDataProfessors([...dataProfessors]);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

  return (
    <main className={styles.main} id="main">
        <PopUp 
            title= {currentTitle}
            content= {currentMessage}
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
                            <input type="name" id="name" name="name" required placeholder="..." onChange={handleChange}/>
                        </div>
                        <div className={styles.formGroupProfessorRegister}>
                            <label htmlFor="lastName">Apellidos</label>
                            <input type="text" id="lastName" name="lastName" required placeholder="..." onChange={handleChange}/>
                        </div>

                        <div className={styles.formGroupProfessorRegister}>
                            <label htmlFor="telephone">Número de teléfono</label>
                            <input type="tel" id="telephone" name="telephone" placeholder="..." onChange={handleChange}/>
                        </div>
                        <div className={styles.formGroupProfessorRegister}>
                            <label htmlFor="email">Correo</label>
                            <input type="email" id="email" name="email" required placeholder="..." onChange={handleChange}/>
                        </div>

                        <div className={styles.formGroupProfessorRegister}>
                            <label htmlFor="cellphone">Número celular</label>
                            <input type="tel" id="cellphone" name="cellphone" required placeholder="..." onChange={handleChange}/>
                        </div>
                        <div className={styles.formGroupProfessorRegister}>
                            <label htmlFor="opciones">Centro académico</label>
                            <select id="opciones" name="opciones"  value={data.opciones} onChange={handleChangeSelect}>
                                <option value="San José">San José</option>
                                <option value="Cartago">Cartago</option>
                                <option value="Alajuela">Alajuela</option>
                                <option value="San Carlos">San Carlos</option>
                                <option value="Limón">Limón</option>

                            </select>
                        </div>
                        <div className={styles.formGroupProfessorRegister}>
                            <label htmlFor="password">Contraseña</label>
                            <input type="password" id="password" name="password" required placeholder="..." onChange={handleChange}/>
                        </div>
                        
                        <div className={styles.formGroupProfessorRegister}>
                            <label htmlFor="passwordConfirm">Confirmación de contraseña</label>
                            <input type="password" id="passwordConfirm" name="passwordConfirm" required placeholder="..." onChange={handleChange}/>
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
            <BlueButton text="Registrar" onClick={()=>{handleSubmit()}}/>
        </div>
    </main>
  );
}
