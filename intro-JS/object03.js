/*Métodos en Objetos:
○ Añade un método llamado descripción al objeto libro que devuelva
una cadena describiendo el título y el autor del libro. Invoca este
método e imprime el resultado.*/


const libro = {
    titulo: 'Harry Potter y la Piedra Filosofal',
    autor: 'J.K.Rowling',
    añoDePublicacion: 1997,
    descripcion: function () {
        return `El libro "${libro.titulo}" fue escrito por "${libro.autor}"`;
    }
};

console.log(libro.descripcion());
