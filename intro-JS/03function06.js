// Paginación de Datos:
// ○ Crea una función llamada obtenerPagina que tome un array de
// datos y un número de página. La función debe devolver los
// elementos correspondientes a esa página, asumiendo que cada
// página tiene 5 elementos.

function obtenerPagina(datos, numpagina) {
    const elementosPorPagina = 5;
    const inicio = (numpagina - 1) * elementosPorPagina;
    const fin = inicio + elementosPorPagina;

    return datos.slice(inicio, fin);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

console.log(obtenerPagina(numeros, 1));
console.log(obtenerPagina(numeros, 2));
console.log(obtenerPagina(numeros, 3));
console.log(obtenerPagina(numeros, 4));
console.log(obtenerPagina(numeros, 5));