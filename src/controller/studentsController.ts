import Estudiante from "../model/Estudiante";
import { loadStudents } from "../app/DAO/estudiantedao/daoEstudiante";
import { useRouter } from "next/router";


interface studentData {
    carne: string;
    nombre: string;
    primerApellido: string;
    segundoApellido: string;
    correo: string;
    celular: string;
    sede: string;
}

export const handlerLoad = async () => {

    // Define the api request to search for the student with the given email and password
    try{
        const data = await loadStudents();
        // convert the data to a json object
        if (!data || data.length === 0) {
            console.log("No hay estudiantes ingresados");
            return [];
        } 
        data.forEach((student: studentData) => {
            setLocalStorage(student);
        });
        return data;
    } catch (error) {
        console.error("Error loading students:", error);
        return [];
    }

};
  
const setLocalStorage = (student : studentData) => {
    localStorage.setItem("student", JSON.stringify(student));
}