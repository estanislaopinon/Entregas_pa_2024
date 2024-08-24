// Uso de reduce:
// ○ Crea una función llamada sumarElementos que tome un array de
// números y devuelva la suma de todos los elementos del array
// usando reduce.

function sumarElementos(numero) {
    return numero.reduce((acumulador, numero) => acumulador + numero, 0);
}

let numero = [1, 2, 3, 4];

const sumatoria = sumarElementos(numero);

console.log(sumatoria);