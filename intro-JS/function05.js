/*Función que Modifica un Objeto:
○ Crea una función llamada actualizarEdad que tome un objeto
persona y un número nuevaEdad, y actualice la propiedad edad del
objeto.*/

const persona = {
    nombre: 'Pedro',
    edad: 23
};

function actualizarEdad(persona, nuevaEdad) {
    persona.edad = nuevaEdad;
}

console.log(persona)

console.log('Persona con cambio de edad')

actualizarEdad(persona, 30);
console.log(persona)