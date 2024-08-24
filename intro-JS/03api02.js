// Procesamiento de Datos de una API:
// ○ Usando la función obtenerUsuarios, crea otra función llamada
// imprimirNombresDeUsuarios que filtre y muestre solo los nombres
// de los usuarios.

async function obtenerUsuarios() {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
        const usuarios = await respuesta.json();
        return usuarios;
    } catch (error) {
        console.error('Error al obtener los usuarios: ', error);
    }
};

async function imprimirNombresDeUsuarios() {
    const usuarios = await obtenerUsuarios();
    if (usuarios) {
        usuarios.forEach(usuario => console.log(usuario.name));
    }
}

imprimirNombresDeUsuarios();