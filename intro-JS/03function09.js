// Función que Devuelve Otra Función:
// ○ Crea una función llamada crearMultiplicador que tome un número x
// y devuelva una nueva función que multiplique cualquier número por
// x.

function crearMultiplicador(x) {
    return function (y) {
        return x * y;
    }
}

const multiplicar = crearMultiplicador(3);

const total = multiplicar(3);

console.log(total);