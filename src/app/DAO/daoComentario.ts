import { collection, query, where, getDocs, orderBy, DocumentData, doc, addDoc } from "firebase/firestore";
import { db } from "../../constants/connection";
import Comentario from "@/model/Comentario";
import Actividad from "@/model/Actividad";
import Respuesta from "@/model/Respuesta";

export const dynamic = 'force-dynamic'; // Force dynamic route behavior

export async function getComments(itinerarioId: string, actividadId: string): Promise<Comentario[]> {
    const database = db;
    const itinerarioRef = doc(database, 'itinerarios', itinerarioId);
    const actividadRef = doc(itinerarioRef, 'actividades', actividadId);
    const comentariosRef = collection(actividadRef, 'comentarios');
    const comentariosSnapshot = await getDocs(comentariosRef);
    let comentarios: Comentario[] = [];
    for (const comentarioDoc of comentariosSnapshot.docs) {
        let comentario = comentarioDoc.data() as Comentario;
        const respuestasRef = collection(comentarioDoc.ref, 'respuestas');
        const respuestasSnapshot = await getDocs(respuestasRef);
        const respuestas: Respuesta[] = [];
        respuestasSnapshot.forEach((respuestaDoc) => {
            respuestas.push(respuestaDoc.data() as Respuesta);
        });
        comentario.respuestas = respuestas;
        comentarios.push(comentario);
    }
    return comentarios;
}

export async function addComment(itinerarioId: string, actividadId: string, comentario: Comentario): Promise<void> {
    const database = db;
    const itinerarioRef = doc(database, 'itinerarios', itinerarioId);
    const actividadRef = doc(itinerarioRef, 'actividades', actividadId);
    const comentariosRef = collection(actividadRef, 'comentarios');
    const commentDocRef = await addDoc(comentariosRef, {
        titulo: comentario.titulo,
        redaccion: comentario.redaccion,
        fechaYHora: comentario.fechaYHora,
    });
    const respuestasRef = collection(commentDocRef, 'respuestas');
    await addDoc(respuestasRef, {});
}