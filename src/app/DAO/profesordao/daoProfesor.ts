import { collection, query, where, getDocs, deleteDoc, updateDoc, addDoc,doc  } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { db } from "../../../constants/connection";
import Profesor from "../../../model/Profesor";

export const dynamic = 'force-dynamic'; // Force dynamic route behavior

export const uploadFile = async (file: File, fileName : string) => {
  // Create a root reference
  const storage = getStorage();
  const storageRef = ref(storage, 'profile/' + fileName);
  const snapshot = await uploadBytes(storageRef, file);
  if(snapshot){
      console.log("Archivo subido correctamente");
      return true;
  }
  return false;
}

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
          estado:profesor.estado,
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

  export async function deleteProfessor(id : string): Promise<boolean> {
    try{
      const database = db;
      const professorsRef = collection(database, 'usuarios');
      const professor = query(professorsRef, where("correo", "==", id));
      const querySnapshot = await getDocs(professor);
      if (querySnapshot.empty) {
        return false;
      }
      querySnapshot.forEach(async (docSnap) => {
        const professorDocRef = doc(database, 'usuarios', docSnap.id);
        await updateDoc(professorDocRef, { estado: "Inhabilitado" });
    });
      return true;
    } catch (error) {
      console.error("Error deleting professor:", error);
      return false;
      }
  }

  export async function deleteConfirmation(mensaje:string,id:string): Promise<boolean> {
    try {
      const database = db;
      const mensajesRef = collection(database, 'confirmacion');
        const mensajeData = {
          correoProfesor: id,
          porque: mensaje,
        };
        await addDoc(mensajesRef, mensajeData);
        return true;
    } catch (error) {
      console.error("Error adding mensaje:", error);
      return false;
    }
  }