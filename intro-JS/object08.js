/*Combinar Objetos:
○ Usa Object.assign para combinar dos objetos, persona1 y persona2,
en un nuevo objeto. Imprime el resultado.*/

const persona1 = {
    nombre: 'Maria',
    edad: 25
}
const persona2 = {
    profesion: 'Ingeniera',
    ciudad: 'Buenos Aires'
}

const combinacion = Object.assign({}, persona1, persona2);

console.log(combinacion)