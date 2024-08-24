// Búsqueda de Usuarios:
// ○ Crea una función llamada buscarUsuarioPorEmail que tome un array
// de usuarios y un email como parámetros, y devuelva el usuario que
// coincida con el email proporcionado. Usa el método find para
// implementarlo.
function buscarUsuarioPorEmail(personas, email) {
    return personas.find(usuario => usuario.email === email);
}

const personas = [
    { nombre: 'Ana', email: 'ana@example.com' },
    { nombre: 'Carlos', email: 'carlos@example.com' },
    { nombre: 'Beatriz', email: 'beatriz@example.com' },
    { nombre: 'David', email: 'david@example.com' },
    { nombre: 'Elena', email: 'elena@example.com' },
    { nombre: 'Fernando', email: 'fernando@example.com' },
    { nombre: 'Gabriela', email: 'gabriela@example.com' },
    { nombre: 'Hugo', email: 'hugo@example.com' },
    { nombre: 'Isabel', email: 'isabel@example.com' },
    { nombre: 'Javier', email: 'javier@example.com' }
];

const busqueda = buscarUsuarioPorEmail(personas, 'hugo@example.com');

console.log(busqueda);
