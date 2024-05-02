import { addComment, getComments } from "@/app/DAO/daoComentario";
import Comentario from "@/model/Comentario";
import Respuesta from "@/model/Respuesta";


export const handlerAllComments = async (itinerarioId: string, actividadId: string) => {
    try {
        const data = await getComments(itinerarioId,actividadId);
        if (!data || data.length === 0) {
            console.log("No hay comentarios");
            return [];
        } 
        return data;
    } catch (error) {
        console.error("Error al cargar comentarios:", error);
        return [];
    }
}

export const handlerAddComment = async (itinerarioId: string, actividadId: string, comentario: Comentario) => {
    console.log(comentario);
    try {
        await addComment(itinerarioId, actividadId, comentario);
    } catch (error) {
        console.error("Error al agregar comentario:", error);
    }
}

const setLocalStorage = (comments: Comentario[]) => {
    localStorage.setItem("comments", JSON.stringify(comments));
}