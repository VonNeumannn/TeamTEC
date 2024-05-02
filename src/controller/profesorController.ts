import Profesor from "../model/Profesor";
import { addProfessor, updateProfessor, addProfesor, loadProfessor, uploadFile, deleteProfessor, deleteConfirmation, loadOneProfessor } from "../app/DAO/profesordao/daoProfesor";
import { useRouter } from "next/router";
import { useState } from "react";


interface profesorData {
    nombre: string;
    apellidos: string;
    telefono: string;
    correo: string;
    celular: string;
    centroAcademico: string;
    contraseña: string;
    codigo: string;
    fotoPerfil: string;
    rol: string;
    estado: string;
}
export const handlerUploadFile = async (file:File, fileName: string) => {
    try{
        let dataFile = await uploadFile(file, fileName);
    } catch (error) {
        console.error("Error subiendo el archivo:", error);
        return false;
    }
};

export const handlerAddData = async (data: any, dataProfessors:Profesor[]) => {
    try{
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
                codigo="AL-"+cantidad;
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
            'Activo',
        );
        await addProfesor(profesor);
        console.log(data);
        return true;
    } catch (error) {
        console.error("Error loading profesor:", error);
        return false;
    }
};

export const handlerUpdateController = async (id:string, data: any, codigo:string, rol:string, estado:string) => {
    try{
        const professor: Profesor = new Profesor (
            data.name,
            data.lastName,
            data.telephone,
            data.email,
            data.cellphone,
            data.opciones,
            data.password,
            codigo,
            data.fotoPerfil,
            rol,
            estado
          );
        await updateProfessor(id, professor);
        return true;
    } catch (error) {
        console.error("Error loading professors:", error);
        return false;
    }
};


export const VerifyEmail = async (data: any, dataProfessors: Profesor[]) => {
    try{
        let duplicado = false;
        dataProfessors.forEach((professor) => {
            if(professor.correo==data.email){
                duplicado=true;
            }
        });
        if (duplicado){
            return false;
        }
        return true;
    } catch (error) {
        console.error("Error loading profesor:", error);
        return false;
    }
};

export const VerifyPassword = async (data: any) => {
    try{
        if(data.password!=data.passwordConfirm){
            return false;
        }
        return true;
    } catch (error) {
        console.error("Error loading profesor:", error);
        return false;
    }
};

export const handlerLoad = async () => {
    try{
        const data = await loadProfessor();
        // convert the data to a json object
        if (!data || data.length === 0) {
            console.log("No hay profesores ingresados");
            return [];
        } 
        return data;
    } catch (error) {
        console.error("Error loading professor:", error);
        return [];
    }

};

export const handlerOneLoad = async (id:string) => {
    try{
        const data = await loadOneProfessor(id);
        if (!data || data.length === 0) {
            console.log("No se encontro el profesor");
            return [];
        } 
        return data;
    } catch (error) {
        console.error("Error loading professors:", error);
        return [];
    }

};

export const handlerPassData = async (professor: Profesor) => {
    try{
        setLocalStorage(professor);
        return true;
    } catch (error) {
        console.error("Error loading profesors:", error);
        return false;
    }

};

export const handleDeleteController = async (id: string) => {
    try{
        await deleteProfessor(id);
        return true;
    } catch (error) {
        console.error("Error eliminando el profesor:", error);
        return false;
    }

};

export const handleAddMemberController = async (id: string) => {
    try{
        await addProfessor(id);
        return true;
    } catch (error) {
        console.error("Error eliminando el profesor:", error);
        return false;
    }

};

export const handleDeleteConfirmation = async (mensaje: string, id: string) => {
    try{
        await deleteConfirmation(mensaje,id);
        return true;
    } catch (error) {
        console.error("Error eliminando el profesor:", error);
        return false;
    }

};

export const reloadPageAfterOperation = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      window.location.reload();
    } catch (error) {
      console.error("An error occurred during the operation:", error);
    }
  };

const setLocalStorage = (profesor : profesorData) => {
    localStorage.setItem("profesor", JSON.stringify(profesor));
}
