// Uso de find:
// ○ Crea un array de objetos llamados personas donde cada objeto
// tenga nombre y edad. Usa find para encontrar a la primera persona
// mayor de 30 años.
const personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'María', edad: 30 },
    { nombre: 'Carlos', edad: 22 },
    { nombre: 'Ana', edad: 28 },
    { nombre: 'Luis', edad: 35 }
];

const primermas30 = personas.find(primermas30 => primermas30.edad > 30);

console.log(primermas30);
