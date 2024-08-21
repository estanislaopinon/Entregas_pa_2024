/*Función que Usa Otra Función:
○ Crea una función llamada procesarArray que tome un array y una
función como parámetros, y aplique la función a cada elemento del
array. Usa una función como parámetro para multiplicar cada
número por 2.*/

function procesarArray(array, funcion) {
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
        resultado.push(funcion(array[i]));
    }
    return resultado;
};
function multiplicar_por_2(num) {
    return num * 2;
};

let numeros = [1, 2, 3, 4, 5];
let resultado = procesarArray(numeros, multiplicar_por_2);
console.log(resultado);