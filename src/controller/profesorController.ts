import Profesor from "../model/Profesor";
import { addProfesor, loadProfessor } from "../app/DAO/profesordao/daoProfesor";
import { useRouter } from "next/router";


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

export const handlerAddData = async (profesor: Profesor) => {
    try{
        await addProfesor(profesor);
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
