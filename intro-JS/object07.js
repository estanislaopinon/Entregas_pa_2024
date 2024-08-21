/*Eliminación de Propiedades:
○ Elimina la propiedad disponible del objeto producto. Imprime el
objeto antes y después de eliminar la propiedad.*/
const producto = {
    nombre: 'Iphone',
    precio: 670,
    disponible: true
};
console.log(producto)

delete (producto.disponible)

console.log(producto)