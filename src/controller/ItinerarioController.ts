import Profesor from "@/model/Profesor";
import { getItineraries } from "../app/DAO/daoItinerario";

interface itinerarioData {
    nombre: string;
    autor: Profesor;
}

export const handlerItinerario = async () => {
    let data = await getItineraries();
    data = JSON.parse(JSON.stringify(data));

    let itinerarios: itinerarioData[] = [];
    data.forEach((itinerario: any) => {
        const itinerarioData: itinerarioData = {
            nombre: itinerario.nombre,
            autor: itinerario.autor
        };
        itinerarios.push(itinerarioData);
    });
    setLocalStorage(itinerarios);
}

const setLocalStorage = (itinerario: itinerarioData[]) => {
    localStorage.setItem("itinerario", JSON.stringify(itinerario));
}
