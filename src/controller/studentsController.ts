import Estudiante from "../model/Estudiante";
import { loadStudents, addStudent, deleteStudent, loadOneStudent, updateStudent } from "../app/DAO/estudiantedao/daoEstudiante";
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
    try{
        const data = await loadStudents();
        // convert the data to a json object
        if (!data || data.length === 0) {
            console.log("No hay estudiantes ingresados");
            return [];
        } 
        return data;
    } catch (error) {
        console.error("Error loading students:", error);
        return [];
    }

};

export const handlerOneLoad = async (id:string) => {
    try{
        const data = await loadOneStudent(id);
        if (!data || data.length === 0) {
            console.log("No se encontro el estudiante");
            return [];
        } 
        return data;
    } catch (error) {
        console.error("Error loading students:", error);
        return [];
    }

};

export const handlerAddData = async (students: Estudiante[]) => {
    try{
        await addStudent(students);
        return true;
    } catch (error) {
        console.error("Error loading students:", error);
        return false;
    }
};

export const handlerUpdateController = async (id:string, student: Estudiante) => {
    try{
        await updateStudent(id, student);
        return true;
    } catch (error) {
        console.error("Error loading students:", error);
        return false;
    }
};

export const handleDeleteController = async (id: string) => {
    try{
        await deleteStudent(id);
        return true;
    } catch (error) {
        console.error("Error loading students:", error);
        return false;
    }

};

export const reloadPageAfterOperation = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      window.location.reload();
    } catch (error) {
      console.error("An error occurred during the operation:", error);
    }
  };

export const handlerPassData = async (student: Estudiante) => {
    try{
        setLocalStorage(student);
        return true;
    } catch (error) {
        console.error("Error loading students:", error);
        return false;
    }

};

const setLocalStorage = (student : studentData) => {
    localStorage.setItem("student", JSON.stringify(student));
}
