//Consumo de Datos desde una API:
//○ Crea una función llamada obtenerUsuarios que haga una petición
//HTTP a la API https://jsonplaceholder.typicode.com/users usando
//fetch. Luego, imprime en la consola la lista de usuarios obtenida.

async function obtenerUsuarios() {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
        const usuarios = await respuesta.json();
        console, console.log(usuarios);
    } catch (error) {
        console.error('Error al obtener los usuarios: ', error);
    }
};

obtenerUsuarios();