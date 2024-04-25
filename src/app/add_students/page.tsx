'use client';
import styles from '../page.module.css';
import Link from 'next/link';
import { BlueButton } from '../components/blueButton';
import Image from 'next/image';
import FileIcon from '../../../public/file-icon.svg';
import PopUp from '../components/popUpInformation';
import React, { useState, useEffect } from 'react';
import fs from 'fs';
import readline from 'readline';

interface Student {
    student_id: string;
    firstname: string;
    last_name1: string;
    last_name2: string;
    email: string;
    phone: string;
  }


export default function StudentRegister() {
    const [file, setFile] = useState<File | null>(null);

    const [dialogOpen, setDialogOpen] = useState(false);
    

    const openDialog = () => {
        console.log("Abriedo dialogo");
        setDialogOpen(true);
    };

    const closeDialog = () => {
        console.log("Cerrando dialogo");
        setDialogOpen(false);
    };

    const handlerFile = (e: React.ChangeEvent<HTMLInputElement>) => { // Utiliza React.ChangeEvent<HTMLInputElement> para manejar eventos de cambio de input
        if (e.target.files && e.target.files.length > 0) {
          const selectedFile = e.target.files[0];
          const reader = new FileReader();
          const fileName = selectedFile.name;
          const fileExtension = fileName.split('.').pop();

          if (fileExtension !== 'csv' && fileExtension !== 'xlsx') {
            openDialog();
            return; // Sal de la función si la extensión del archivo no es CSV o XLSX
          }
    
          reader.onload = (event) => {
            if (event.target && event.target.result) {
              const fileContent = event.target.result as string;
              const students: Student[] = [];
    
              const lines = fileContent.split('\n');
              for (let line of lines) {
                const data = line.split(';');
                const student: Student = {
                  student_id: data[0],
                  firstname: data[1],
                  last_name1: data[2],
                  last_name2: data[3],
                  email: data[4],
                  phone: data[5]
                };
                students.push(student);
              }
    
              console.log(students);
              document.getElementById('selectedFile')!.innerText = fileName;
              document.getElementById('selectedFile')!.style.fontSize = '1.1rem';
              
            }
          };
    
          reader.readAsText(selectedFile);
        }
      }




  return (
    <main className={styles.main} id="main">
        <PopUp
            title="Archivo no subido"
            content="Para poder continuar con el ingreso de los estudiantes por favor subir el archivo con los datos."
            openDialog={openDialog}
            closeDialog={closeDialog}
            dialogOpen={dialogOpen}
        />
        <div className={styles.addStudentsContainer}>
            <h1>Agregar Estudiantes</h1>
            <div className={styles.loadCSVStudents}>
        
                <Image src={FileIcon} alt="profile" />
                <span>Sube o arrastra un archivo</span>
                <p>Archivos .csv o .xlsx solamente</p>
                <input 
                    type="file" 
                    id="file" 
                    name="file" 
                    accept=".csv, .xlsx"
                    onChange={handlerFile}
                    />
                <p className={styles.selectedFile} id='selectedFile'></p>
            </div>
            <BlueButton text="Agregar" onClick={()=>{}}/>
        </div>
    </main>
  );
}