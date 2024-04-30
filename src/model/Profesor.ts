class Profesor {
    nombre: string;
    apellidos: string;
    telefono: string;
    centroAcademico: string;
    fotoPerfil: string;

    constructor(
        nombre: string,
        apellidos: string,
        telefono: string,
        centroAcademico: string,
        fotoPerfil: string
    ) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.telefono = telefono;
        this.centroAcademico = centroAcademico;
        this.fotoPerfil = fotoPerfil;
    }
}

export default Profesor;
