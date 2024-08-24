// Uso de filter:
// ○ Crea una función llamada filtrarMayoresDe que tome un array de
// números y un valor de referencia, y devuelva un nuevo array solo con
// los números mayores que ese valor. Usa filter.

function filtrarMayoresDe(numeros, valor) {
    return numeros.filter(numero => numero > referencia);
}
let numeros = [2, 3, 5, 6, 7, 8, 9, 25, 35, 44];
let referencia = 5;
let mayores = filtrarMayoresDe(numeros, referencia);
console.log(mayores);

