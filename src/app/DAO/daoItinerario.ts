import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { db } from "../../constants/connection";
import Itinerario from "@/model/Itinerario";

export const dynamic = 'force-dynamic'; // Force dynamic route behavior

export async function getItineraries() {
    const database = db;
    const itineraryRef = collection(database, 'itinerarios');
    const itinerary = query(itineraryRef, orderBy("nombre"));
    const querySnapshot = await getDocs(itinerary);
    var itineraries:Itinerario[] = [];
    querySnapshot.forEach((doc) => {
        itineraries.push(doc.data() as Itinerario);
    });
    return itineraries;
}
