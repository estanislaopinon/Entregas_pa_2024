/*Función Recursiva:
Crea una función recursiva llamada factorial que calcule el factorial
de un número dado.*/

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));