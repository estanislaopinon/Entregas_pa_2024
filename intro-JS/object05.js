/*Actualización de Propiedades:
○ Modifica el valor de la propiedad precio del objeto producto y luego
imprime el objeto completo para verificar el cambio.*/
const producto = {
    nombre: 'Iphone',
    precio: 670,
    disponible: true
};

console.log(producto)

console.log('PRODUCTO CON CAMBIO DE PRECIO')
producto.precio = 1200;
console.log(producto);