// Transformación de Datos:
// ○ Crea una función llamada mapearUsuarios que tome un array de
// usuarios obtenidos de la API y devuelva un nuevo array con solo las
// propiedades nombre y email de cada usuario.

async function obtenerUsuarios() {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
        const usuarios = await respuesta.json();
        return usuarios;
    } catch (error) {
        console.error('Error al obtener los usuarios: ', error);
    }
};

async function mapearUsuarios() {
    const usuarios = await obtenerUsuarios();
    if (usuarios) {
        usuarios.forEach(usuario => console.log(`Nombre: ${usuario.name}, Email: ${usuario.email}`));
    }
}

mapearUsuarios();