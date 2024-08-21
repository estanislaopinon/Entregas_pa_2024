/*Comprobación de Propiedades:
○ Crea una función llamada tienePropiedad que tome un objeto y una
cadena como parámetros, y devuelva true si el objeto tiene una
propiedad con ese nombre, o false en caso contrario.*/

const direccion = {
    calle: 'San Martin',
    ciudad: 'Concepción del Uruguay',
    pais: 'Argentina'
}

function tienePropiedad(objeto, propiedad) {
    return objeto.hasOwnProperty(propiedad)
}

console.log(tienePropiedad(direccion, "calle"));
console.log(tienePropiedad(direccion, "codigo postal"));

