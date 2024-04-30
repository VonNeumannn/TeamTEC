import { collection, query, where, getDocs, deleteDoc, updateDoc, addDoc } from "firebase/firestore";
import { db } from "../../../constants/connection";
import Estudiante from "../../../model/Estudiante";

export const dynamic = 'force-dynamic'; // Force dynamic route behavior



export async function loadStudents(): Promise<Estudiante[]> {
  const database = db;
  const studentsRef = collection(database, 'estudiantes');
  const student = query(studentsRef);
  const querySnapshot = await getDocs(student);
  let data: Estudiante[] =[];
  querySnapshot.forEach((doc) => {
      data.push(doc.data() as Estudiante);
  });
  return data;
}

export async function loadOneStudent(id: string): Promise<Estudiante[]> {
  const database = db;
  const studentsRef = collection(database, 'estudiantes');
  const student = query(studentsRef, where("carne", "==", id));
  const querySnapshot = await getDocs(student);
  let EstudianteData: Estudiante;
  let data: Estudiante[] =[];
  querySnapshot.forEach((doc) => {
      data.push(doc.data() as Estudiante);
  });
  return data;
}

export async function deleteStudent(id : string): Promise<boolean> {
  try{
    const database = db;
    const studentsRef = collection(database, 'estudiantes');
    const student = query(studentsRef, where("carne", "==", id));
    console.log(student);
    const querySnapshot = await getDocs(student);
    if (querySnapshot.empty) {
      console.log("We fail");
      return false;
    }
    console.log(querySnapshot);
    querySnapshot.forEach(async (doc) => {
      await deleteDoc(doc.ref);
      });
    return true;
  } catch (error) {
    console.error("Error deleting student:", error);
    return false;
    }
}

export async function updateStudent(id: string, newData: any): Promise<boolean> {
  try {
    const database = db;
    const studentsRef = collection(database, 'estudiantes');
    const studentQuery = query(studentsRef, where("idStudent", "==", id));
    const querySnapshot = await getDocs(studentQuery);
    if (querySnapshot.empty) {
      return false;
    }
    querySnapshot.forEach(async (doc) => {
      await updateDoc(doc.ref, newData);
    });
    return true;
  } catch (error) {
    console.error("Error updating student:", error);
    return false;
  }
}

export async function addStudent(newStudentsData: Estudiante[]): Promise<boolean> {
  try {
    console.log(newStudentsData);
    const database = db;
    const studentsRef = collection(database, 'estudiantes');
    for (const student of newStudentsData) {
      const studentData = {
        carne: student.carne,
        nombre: student.nombre,
        primerApellido: student.primerApellido,
        segundoApellido: student.segundoApellido,
        correo: student.correo,
        celular: student.celular,
        sede: student.sede,
      };
      await addDoc(studentsRef, studentData);
    }
    return true;
  } catch (error) {
    console.error("Error adding student:", error);
    return false;
  }
}