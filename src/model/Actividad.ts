import { TipoActividad } from './TipoActividad';
import Profesor from './Profesor';
import Comentario from './Comentario';
import Prueba from './Prueba';

class Actividad {
    private nombre: string;
    private estado: string;
    private semana: number;
    private tipoActividad: TipoActividad;
    private modalidad: string;
    private fecha: Date;
    private hora: string; // Suponiendo que Time es una cadena de texto en formato de hora
    private activadorRecordatorio: Date;
    private link: string;
    private afiche: string;
    private encargado: Profesor[];
    private responsable: Profesor;
    private comentarios: Comentario[];
    private pruebas: Prueba[];

    constructor(
        nombre: string,
        estado: string,
        semana: number,
        tipoActividad: TipoActividad,
        modalidad: string,
        fecha: Date,
        hora: string,
        activadorRecordatorio: Date,
        link: string,
        afiche: string,
        encargado: Profesor[],
        responsable: Profesor,
        comentarios: Comentario[],
        pruebas: Prueba[]
    ) {
        this.nombre = nombre;
        this.estado = estado;
        this.semana = semana;
        this.tipoActividad = tipoActividad;
        this.modalidad = modalidad;
        this.fecha = fecha;
        this.hora = hora;
        this.activadorRecordatorio = activadorRecordatorio;
        this.link = link;
        this.afiche = afiche;
        this.encargado = encargado;
        this.responsable = responsable;
        this.comentarios = comentarios;
        this.pruebas = pruebas;
    }
    getNombre(): string {
        return this.nombre;
    }
    setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    getEstado(): string {
        return this.estado;
    }
    setEstado(estado: string): void {
        this.estado = estado;
    }
    getSemana(): number {
        return this.semana;
    }
    setSemana(semana: number): void {
        this.semana = semana;
    }
    getTipoActividad(): TipoActividad {
        return this.tipoActividad;
    }
    setTipoActividad(tipoActividad: TipoActividad): void {
        this.tipoActividad = tipoActividad;
    }
    getModalidad(): string {
        return this.modalidad;
    }
    setModalidad(modalidad: string): void {
        this.modalidad = modalidad;
    }
    getFecha(): Date {
        return this.fecha;
    }
    setFecha(fecha: Date): void {
        this.fecha = fecha;
    }
    getHora(): string {
        return this.hora;
    }
    setHora(hora: string): void {
        this.hora = hora;
    }
    getActivadorRecordatorio(): Date {
        return this.activadorRecordatorio;
    }
    setActivadorRecordatorio(activadorRecordatorio: Date): void {
        this.activadorRecordatorio = activadorRecordatorio;
    }
    getLink(): string {
        return this.link;
    }
    setLink(link: string): void {
        this.link = link;
    }
    getAfiche(): string {
        return this.afiche;
    }
    setAfiche(afiche: string): void {
        this.afiche = afiche;
    }
    getEncargado(): Profesor[] {
        return this.encargado;
    }
    setEncargado(encargado: Profesor[]): void {
        this.encargado = encargado;
    }
    getResponsable(): Profesor {
        return this.responsable;
    }
    setResponsable(responsable: Profesor): void {
        this.responsable = responsable;
    }
    getComentarios(): Comentario[] {
        return this.comentarios;
    }
    setComentarios(comentarios: Comentario[]): void {
        this.comentarios = comentarios;
    }
    getPruebas(): Prueba[] {
        return this.pruebas;
    }
    setPruebas(pruebas: Prueba[]): void {
        this.pruebas = pruebas;
    }
    
}

export default Actividad;
