import { collection, query, where, getDocs, deleteDoc, updateDoc, addDoc } from "firebase/firestore";
import { db } from "../../../constants/connection";
import Profesor from "../../../model/Profesor";

export const dynamic = 'force-dynamic'; // Force dynamic route behavior

export async function addProfesor(profesor: Profesor): Promise<boolean> {
    try {
      const database = db;
      const profesorsRef = collection(database, 'usuarios');
        const profesorData = {
          nombre: profesor.nombre,
          apellidos: profesor.apellidos,
          telefono: profesor.telefono,
          correo: profesor.correo,
          celular: profesor.celular,
          centroAcademico: profesor.centroAcademico,
          contraseña: profesor.contraseña,
          codigo: profesor.codigo,
          fotoPerfil: profesor.fotoPerfil,
          rol: profesor.rol,
        };
        await addDoc(profesorsRef, profesorData);
        return true;
    } catch (error) {
      console.error("Error adding profesor:", error);
      return false;
    }
  }

  export async function loadProfessor(): Promise<Profesor[]> {
    const database = db;
    const professorsRef = collection(database, 'usuarios');
    const professor = query(professorsRef);
    const querySnapshot = await getDocs(professor);
    let data: Profesor[] =[];
    querySnapshot.forEach((doc) => {
        data.push(doc.data() as Profesor);
    });
    return data;
  }