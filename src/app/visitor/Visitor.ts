//interface for the visitor pattern
import Actividad from "@/model/Actividad";
import Itinerario from "@/model/Itinerario";

export interface Visitor {
    visit(itinerary: Itinerario, activity: Actividad, localTime: Date): void;
}