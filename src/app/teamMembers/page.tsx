'use client'
import styles from "../page.module.css";
import Image from "next/image";
import { BlueButton } from "../components/blueButton";

export default function MainMenuPage() {
    const data = [
        { nombre: 'Nombre 1', apellidos: 'Apellidos 1', codigo: 'Codigo 1' },
        { nombre: 'Nombre 2', apellidos: 'Apellidos 2', codigo: 'Codigo 2' },
        { nombre: 'Nombre 3', apellidos: 'Apellidos 3', codigo: 'Codigo 3' },
        { nombre: 'Nombre 4', apellidos: 'Apellidos 4', codigo: 'Codigo 4' },
        { nombre: 'Nombre 5', apellidos: 'Apellidos 5', codigo: 'Codigo 5' },
        { nombre: 'Nombre 6', apellidos: 'Apellidos 6', codigo: 'Codigo 6' },
        { nombre: 'Nombre 7', apellidos: 'Apellidos 7', codigo: 'Codigo 7' },
        { nombre: 'Nombre 8', apellidos: 'Apellidos 8', codigo: 'Codigo 8' },
        { nombre: 'Nombre 9', apellidos: 'Apellidos 9', codigo: 'Codigo 9' },
        { nombre: 'Nombre 10', apellidos: 'Apellidos 10', codigo: 'Codigo 10' },
        { nombre: 'Nombre 11', apellidos: 'Apellidos 11', codigo: 'Codigo 11' },
        { nombre: 'Nombre 12', apellidos: 'Apellidos 12', codigo: 'Codigo 12' },
        { nombre: 'Nombre 13', apellidos: 'Apellidos 13', codigo: 'Codigo 13' },
        { nombre: 'Nombre 14', apellidos: 'Apellidos 14', codigo: 'Codigo 14' },
        { nombre: 'Nombre 15', apellidos: 'Apellidos 15', codigo: 'Codigo 15' },
        { nombre: 'Nombre 16', apellidos: 'Apellidos 16', codigo: 'Codigo 16' },
        { nombre: 'Nombre 17', apellidos: 'Apellidos 17', codigo: 'Codigo 17' },
        { nombre: 'Nombre 18', apellidos: 'Apellidos 18', codigo: 'Codigo 18' },
        { nombre: 'Nombre 19', apellidos: 'Apellidos 19', codigo: 'Codigo 19' },
        { nombre: 'Nombre 20', apellidos: 'Apellidos 20', codigo: 'Codigo 20' },
        { nombre: 'Nombre 21', apellidos: 'Apellidos 21', codigo: 'Codigo 21' },
        { nombre: 'Nombre 22', apellidos: 'Apellidos 22', codigo: 'Codigo 22' },
        { nombre: 'Nombre 23', apellidos: 'Apellidos 23', codigo: 'Codigo 23' },
        { nombre: 'Nombre 24', apellidos: 'Apellidos 24', codigo: 'Codigo 24' },
        { nombre: 'Nombre 25', apellidos: 'Apellidos 25', codigo: 'Codigo 25' },
        { nombre: 'Nombre 26', apellidos: 'Apellidos 26', codigo: 'Codigo 26' },
        { nombre: 'Nombre 27', apellidos: 'Apellidos 27', codigo: 'Codigo 27' },
        { nombre: 'Nombre 28', apellidos: 'Apellidos 28', codigo: 'Codigo 28' },
        { nombre: 'Nombre 29', apellidos: 'Apellidos 29', codigo: 'Codigo 29' },
        { nombre: 'Nombre 30', apellidos: 'Apellidos 30', codigo: 'Codigo 30' },
        { nombre: 'Nombre 31', apellidos: 'Apellidos 31', codigo: 'Codigo 31' },
        { nombre: 'Nombre 32', apellidos: 'Apellidos 32', codigo: 'Codigo 32' },
        { nombre: 'Nombre 33', apellidos: 'Apellidos 33', codigo: 'Codigo 33' },
        { nombre: 'Nombre 34', apellidos: 'Apellidos 34', codigo: 'Codigo 34' },
        { nombre: 'Nombre 35', apellidos: 'Apellidos 35', codigo: 'Codigo 35' },
        { nombre: 'Nombre 36', apellidos: 'Apellidos 36', codigo: 'Codigo 36' },
        { nombre: 'Nombre 37', apellidos: 'Apellidos 37', codigo: 'Codigo 37' },
        { nombre: 'Nombre 38', apellidos: 'Apellidos 38', codigo: 'Codigo 38' },
        { nombre: 'Nombre 39', apellidos: 'Apellidos 39', codigo: 'Codigo 39' },
        { nombre: 'Nombre 40', apellidos: 'Apellidos 40', codigo: 'Codigo 40' },
        { nombre: 'Nombre 41', apellidos: 'Apellidos 41', codigo: 'Codigo 41' },
        { nombre: 'Nombre 42', apellidos: 'Apellidos 42', codigo: 'Codigo 42' },
        { nombre: 'Nombre 43', apellidos: 'Apellidos 43', codigo: 'Codigo 43' },
        { nombre: 'Nombre 44', apellidos: 'Apellidos 44', codigo: 'Codigo 44' },
        { nombre: 'Nombre 45', apellidos: 'Apellidos 45', codigo: 'Codigo 45' },
        { nombre: 'Nombre 46', apellidos: 'Apellidos 46', codigo: 'Codigo 46' },
        { nombre: 'Nombre 47', apellidos: 'Apellidos 47', codigo: 'Codigo 47' },
        { nombre: 'Nombre 48', apellidos: 'Apellidos 48', codigo: 'Codigo 48' },
        { nombre: 'Nombre 49', apellidos: 'Apellidos 49', codigo: 'Codigo 49' },
        { nombre: 'Nombre 50', apellidos: 'Apellidos 50', codigo: 'Codigo 50' }
    ];

    function handleEdit(index: number) {
        const item = data[index];
        console.log(`Editing item: ${item.nombre} ${item.apellidos} ${item.codigo}`);
        // Aquí puedes agregar el código para editar el item
    }

    function handleDelete(index: number) {
        console.log(`Deleting item at index: ${index}`);
        // Aquí puedes agregar el código para eliminar el item
    }
    return (
        <main className={styles.main} id="main">
            <div className={styles.teamContainer}>
                <h1>Miembros equipo</h1>
                <p>Buscar profesor</p>
                <div className={styles.searchAddContainer}>
                    <input type="text" />
                    <BlueButton text="Buscar" onClick={() => { }} />
                    <div className={styles.addContainer}>
                        <BlueButton text="Agregar Profesor" onClick={() => { }} />
                    </div>
                </div>
                <div className={styles.tableContainer}>
                    <table>
                        <tbody>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellidos</th>
                                <th>Codigo</th>
                                <th>Acciones</th>
                            </tr>
                            
                        </tbody>
                    </table>
                <div className={styles.tableContentContainer}>
                    <table>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.nombre}</td>
                                    <td>{item.apellidos}</td>
                                    <td>{item.codigo}</td>
                                    <td>
                                        <BlueButton text="Editar" onClick={() => handleEdit(index)} />
                                        <button className={styles.deleteButton} onClick={() => handleDelete(index)}>Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </main>
    );
}

