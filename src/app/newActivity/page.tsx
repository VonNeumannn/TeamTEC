'use client'
import styles from "../page.module.css";
import { BlueButton } from "../components/blueButton";
import Image from "next/image";
import UploadIcon from "../../../public/upload.svg";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { TipoActividad } from "@/model/TipoActividad";
import PopUp from "../components/popUpInformation";
import { handlerAddActivity } from "../../controller/actividadController";


interface activityDataPrueba {
    nombre: string;
    semanaRealizacion: number;
    tipo: string;
    modalidad: string;
    fecha: string;
    hora: string;
    iniciarRecordatorio: string;
    enlace: string;
    afiche: string;

}

const tipoActividadFabrica = (tipo: string) => {
    switch (tipo) {
        case "opcion1":
            return TipoActividad.ORIENTADORA;
        case "opcion2":
            return TipoActividad.MOTIVACIONAL;
        case "opcion3":
            return TipoActividad.VIDA_ESTUDIANTIL;
        case "opcion4":
            return TipoActividad.ORDEN_TECNICO;
        case "opcion5":
            return TipoActividad.RECREACION;
        default:
            return TipoActividad.ORIENTADORA;
    }
}

// Función para generar un nombre único para el archivo
const generateUniqueFileName = (originalFileName: string) => {
    const uniqueId = uuidv4(); // Función para generar un UUID
    const fileExtension = originalFileName.split('.').pop();
    return `${uniqueId}.${fileExtension}`;
};

// Función para generar un UUID (Identificador Único Universal)
const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};


export default function NewActivity() {
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


    const [nombre, setNombre] = useState('');
    const handlerNombre = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNombre(e.target.value);
    }
    
    const [tipoActividad, setTipoActividad] = useState('');
    const handlerTipoActividad = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTipoActividad(tipoActividadFabrica(e.target.value));
        
    }

    const [modalidad, setModalidad] = useState('');
    const handlerModalidad = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setModalidad(e.target.value);
    }

    const [semana, setSemana] = useState(0);
    const handlerSemana = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSemana(parseInt(e.target.value));
    }

    const [fecha, setFecha] = useState('');
    const handlerFecha = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFecha(e.target.value);
    }

    const [hora, setHora] = useState('');
    const handlerHora = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHora(e.target.value);
    }

    const [recordatorio, setRecordatorio] = useState('');
    const handleRecordatorioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const recordatorioDate = e.target.value;
        console.log(recordatorioDate >= fecha);
        if (recordatorioDate < fecha) {
            setRecordatorio(recordatorioDate);
        } else {
            e.target.value = '';
            e.target.setCustomValidity(e.target.value ? "" : "Por favor, ingresa una fecha previa a la actividad.");
            e.target.reportValidity();
        }
    };

    const [enlace, setEnlace] = useState('');
    const handlerEnlace = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEnlace(e.target.value);
    }

    const [aficheName, setAficheName] = useState('');
    const handlerAficheName = (name : string) => {
        setAficheName(name);
    }

    const [file, setFile] = useState<File | null>(null);
    const handlerFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const selectedFile = e.target.files[0];
            const fileName = selectedFile.name;
            const fileExtension = fileName.split('.').pop()?.toLowerCase();

            if (!fileExtension || (fileExtension !== 'pdf' && fileExtension !== 'png' && fileExtension !== 'jpg' && fileExtension !== 'jpeg')) {
                alert("El archivo seleccionado no es válido");
                return;
            }



            handlerAficheName(generateUniqueFileName(fileName));
            setFile(selectedFile);


        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
            
            const actividad: activityDataPrueba = {
                nombre: nombre,
                semanaRealizacion: semana,
                tipo: tipoActividad,
                modalidad: modalidad,
                fecha: fecha,
                hora: hora,
                iniciarRecordatorio: recordatorio,
                enlace: enlace,
                afiche: aficheName,
            };

            handlerAddActivity(actividad, file, aficheName, router, openDialog);

    }

   


    return (
        <main className={styles.main} id="main">
            <PopUp
                title="Actividad creada"
                content="La actividad se ha creado correctamente"
                openDialog={openDialog}
                closeDialog={closeDialog}
                dialogOpen={dialogOpen}
            />
            <div className={styles.activityContainer}>
                <h1>Nueva Actividad</h1>
                <form className={styles.activityFormContainer} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="nombre">Nombre</label>
                        <input type="nombre" id="nombre" name="nombre" required placeholder="..." onChange={handlerNombre} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="semana">Semana de realización</label>
                        <select className={styles.selectContainer} id="semana" name="semana" required onChange={handlerSemana}>
                            <option value="" >Selecciona una semana...</option>
                            {
                                Array.from({ length: 16 }, (_, i) => i + 1).map(num =>
                                    <option key={num} value={num}>Semana {num}</option>
                                )
                            }
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="tipo">Tipo</label>
                        <select id="tipo" name="tipo" required onChange={handlerTipoActividad}>
                            <option value="" >Selecciona un tipo de actividad...</option>
                            <option value="opcion1">Orientadora</option>
                            <option value="opcion2">Motivacional</option>
                            <option value="opcion3">Apoyo a vida estudiantil</option>
                            <option value="opcion4">Orden técnico</option>
                            <option value="opcion5">Recreación</option>
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="modalidad">Modalidad</label>
                        <select id="modalidad" name="modalidad" required onChange={handlerModalidad}>
                            <option value="" >Selecciona la modalidad...</option>
                            <option value="Virtual">Virtual</option>
                            <option value="Presencial">Presencial</option>
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="fecha">Fecha</label>
                        <input type="date" id="fecha" name="fecha" required placeholder="..." onChange={handlerFecha}/>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="hora">Hora</label>
                        <input type="time" id="hora" name="hora" required placeholder="..." onChange={handlerHora}/>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="recordatorio">Iniciar recordatorio</label>
                        <input type="date" id="recordatorio" name="recordatorio" required placeholder="..." onChange={handleRecordatorioChange}/>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="enlace">Enlace</label>
                        <input type="link" id="enlace" name="enlace" placeholder="..." onChange={handlerEnlace}/>
                    </div>
                    <div className={styles.uploadContainer}>
                        <label htmlFor="afiche">
                            <Image src={UploadIcon} alt="upload Icon" />
                            {"Afiche"}
                        </label>
                        <input type="file" id="afiche" name="afiche" accept="image/*, .pdf" hidden onChange={handlerFile} />
                    </div>

                    <div className={styles.buttonActivityContainer}>
                        <BlueButton text="Crear actividad" onClick={() => { }} type="submit" />
                        <BlueButton text="Encargados" onClick={() => { router.push("/addManager") }} type="button" />
                    </div>
                </form>

            </div>
        </main>
    );
}