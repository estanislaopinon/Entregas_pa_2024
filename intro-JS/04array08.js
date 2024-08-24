// Uso de every:
// ○ Crea un array de números llamado numeros y usa every para
// verificar si todos los números son positivos.

const numeros = [1, 2, 3, 4, 11];

const positivos = numeros.every(numero => numero > 0);

console.log(positivos);