/*Iteración sobre Propiedades de un Objeto:
○ Crea un objeto producto con propiedades como nombre, precio y
disponible. Usa un bucle for...in para imprimir todas las propiedades
y sus valores.*/

const producto = {
    nombre: 'Iphone',
    precio: 670,
    disponible: true
};

for (let propiedad in producto) {
    console.log(`${propiedad}: ${producto[propiedad]}`);
};