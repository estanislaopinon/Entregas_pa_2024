// Envío de Datos a una API:
// ○ Crea una función llamada enviarDatos que tome un objeto data y
// haga una petición POST a la API
// https://jsonplaceholder.typicode.com/posts. La función debe
// imprimir la respuesta de la API.

async function enviarDatos(data) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const respuestaJson = await response.json();
        console.log('Respuesta de la API: ', respuestaJson);
    } catch (error) {
        console.error('Error al enviar los datos: ', error);
    }
}

const datos = {
    title: 'Foo',
    body: 'bar',
    userId: 1
};

enviarDatos(datos);