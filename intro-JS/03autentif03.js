// Autenticación Simulada:
// ○ Crea una función llamada autenticarUsuario que tome un objeto
// credenciales con usuario y contraseña, y verifique si coinciden con
// un usuario predefinido. La función debe devolver true si la
// autenticación es exitosa y false en caso contrario.

function autenticarUsuario(credenciales) {
    const usuarioPredefinido = {
        usuario: 'admin',
        contraseña: '1234'
    };
    if (credenciales.usuario === usuarioPredefinido.usuario && credenciales.contraseña === usuarioPredefinido.contraseña) {
        return true;
    } else {
        return false;
    }
}

const credenciales = {
    usuario: 'admin',
    contraseña: '1234'
};
const autenticado = autenticarUsuario(credenciales);
console.log(autenticado);
