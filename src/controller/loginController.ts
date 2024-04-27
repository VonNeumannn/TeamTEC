import Usuario from "../model/Usuario";
import { NextApiRequest, NextApiResponse } from "next";
import { useRouter } from "next/navigation";
//const router = useRouter();

const handlerLogin = async (usuario: Usuario) => {
  try {
      const response = await fetch('/DAO/usuariodao', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(usuario),
      });
      if (response.ok) {
          const data = await response.json();
          if (data.status === "success") {
              //router.push("/mainMenu");
          } else {
            throw new Error('Failed to login');
          }
      } else {
          throw new Error('Failed to login');
      }
  } catch (error) {
      console.error("Error during login:", error);
  }
};
  
export default {handlerLogin};