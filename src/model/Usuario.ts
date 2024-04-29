
class Usuario {
    private _correo: string;
    private _contrasenia: string;
    private _rol: string;
    private _celular: string;

    constructor(correo: string, contrasenia: string, rol: string, celular: string) {
        this._correo = correo;
        this._contrasenia = contrasenia;
        this._rol = rol;
        this._celular = celular;
    }
     // Getters
     get correo() {
        return this._correo;
    }

    get contrasenia() {
        return this._contrasenia;
    }

    get rol() {
        return this._rol;
    }

    get celular() {
        return this._celular;
    }
}
export default Usuario;