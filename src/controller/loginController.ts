import Usuario from "../model/Usuario";
import { searchUserByEmail } from "../app/DAO/usuariodao/daoUsuario";
import { useRouter } from "next/router";


interface userData {
    email: string;
    password: string;
    rol : string;
    celular : string;
}

export const handlerLogin = async (email : string, password : string, router: any) => {

    // Define the api request to search for the user with the given email and password
    
    let data = await searchUserByEmail(email);
    // convert the data to a json object
    data = JSON.parse(JSON.stringify(data));
    
    

    
    if(data == null){
        console.log("Usuario no encontrado");
    } else {
        const user : userData = {
            email: data.email,
            password: data.contrasenia,
            rol: data.rol,
            celular: data.celular
        };
        
        
        
        
        setLocalStorage(user);
        router.push('/mainMenu');
        

        
    }

};
  
const setLocalStorage = (user : userData) => {
    localStorage.setItem("user", JSON.stringify(user));
}