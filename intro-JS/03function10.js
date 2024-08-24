// Actualización de Información del Usuario:
// ○ Crea una función llamada actualizarUsuario que tome un objeto
// usuario y una lista de cambios a aplicar. La función debe retornar el
// usuario con las propiedades actualizadas.

function actualizarUsuario(usuario, cambios) {
    for (let clave in cambios) {
        if (cambios.hasOwnProperty(clave)) {
            usuario[clave] = cambios[clave];
        }
    }
    return usuario;
}

const usuario = {
    nombre: "Juan",
    edad: 30,
    correo: "juan@example.com"
};

let cambios = {
    edad: 31,
    correo: "juan.nuevo@example.com"
};

let usuarioActualizado = actualizarUsuario(usuario, cambios);
console.log(usuarioActualizado);