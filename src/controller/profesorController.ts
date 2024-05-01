import Profesor from "../model/Profesor";
import { addProfesor, loadProfessor } from "../app/DAO/profesordao/daoProfesor";
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
}

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
        );
        await addProfesor(profesor);
        console.log(data);
        return true;
    } catch (error) {
        console.error("Error loading profesor:", error);
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

export const handlerPassData = async (profesor: Profesor) => {
    try{
        setLocalStorage(profesor);
        return true;
    } catch (error) {
        console.error("Error loading profesors:", error);
        return false;
    }

};

const setLocalStorage = (profesor : profesorData) => {
    localStorage.setItem("profesor", JSON.stringify(profesor));
}
