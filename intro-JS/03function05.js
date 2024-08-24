// Validación de Formularios:
// ○ Crea una función llamada validarFormulario que tome un objeto con
// los campos nombre, email y password. La función debe devolver true
// si todos los campos están presentes y no están vacíos, y false en caso contrario.

function validarFormulario(cuenta) {
    if ('nombre' in cuenta && 'email' in cuenta && 'password' in cuenta) {
        if (cuenta.nombre.trim() !== '' && cuenta.email.trim() !== '' && cuenta.password.trim() !== '') {
            return true;
        }
    }
    return false;
};

const cuenta = {
    nombre: 'Juan',
    email: 'juan123@gmail.com',
    password: 'J123456789'
};

console.log(validarFormulario(cuenta));