import { collection, query, where, getDocs, deleteDoc, updateDoc } from "firebase/firestore";
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

export async function deleteStudent(id : string): Promise<boolean> {
  try{
    const database = db;
    const studentsRef = collection(database, 'estudiantes');
    const student = query(studentsRef, where("idStudent", "==", id));
    const querySnapshot = await getDocs(student);
    if (querySnapshot.empty) {
      return false;
    }
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