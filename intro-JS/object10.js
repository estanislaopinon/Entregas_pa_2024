/*Añade un getter y un setter al objeto libro para la propiedad
añoDePublicacion. Usa el setter para actualizar el año de publicación
y luego usa el getter para leerlo.*/

const libro = {
    titulo: 'Harry Potter y la Piedra Filosofal',
    autor: 'J.K.Rowling',
    _añoDePublicacion: 1997,
    get añoDePublicacion() {
        return libro._añoDePublicacion;
    },
    set añoDePublicacion(nuevoAño) {
        if (typeof nuevoAño === 'number' && nuevoAño > 0) {
            libro._añoDePublicacion = nuevoAño;
        } else {
            console.log('Por favor, ingrese un año valido');
        }
    }
};

console.log(libro);
console.log('Libro con fecha actualizada')
libro.añoDePublicacion = 1880;
console.log(libro);
