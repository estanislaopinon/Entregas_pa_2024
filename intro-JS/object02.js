/*Anidación de Objetos:
○ Crea un objeto llamado estudiante con propiedades nombre, edad y
direccion. direccion debe ser otro objeto con propiedades calle,
ciudad y pais. Imprime la dirección completa del estudiante.*/

const direccion = {
    calle: 'Alberdi',
    ciudad: 'Concepción de Uruguay',
    pais: 'Argentina'
}

const estudiante = {
    nombre: 'Juan',
    edad: 23,
    direccion: direccion
}

console.log(estudiante);