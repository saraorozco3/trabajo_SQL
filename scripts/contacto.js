const form = document.getElementById('presupuesto-form');
const nombre = document.getElementById('nombre');
const apellidos = document.getElementById('apellidos');
const telefono = document.getElementById('telefono');
const correo = document.getElementById('correo');
const errorMessage = document.getElementById('error-message');

form.addEventListener('input', () => {
    // Validar datos de contacto
    if (!nombre.checkValidity() || !apellidos.checkValidity() || !telefono.checkValidity() || !correo.checkValidity()) {
        errorMessage.textContent = 'Por favor, completa todos los campos correctamente.';
        return;
    } else {
        errorMessage.textContent = '';
    }
});

form.addEventListener('submit', function (event) {
    if (!nombre.checkValidity() || !apellidos.checkValidity() || !telefono.checkValidity() || !correo.checkValidity()) {
        errorMessage.textContent = 'Por favor, completa todos los campos correctamente antes de enviar.';
        event.preventDefault();
    } else {
        errorMessage.textContent = '';
    }
});

// Validación del campo de teléfono
document.getElementById('telefono').addEventListener('input', function(evt) {
    var telefono = evt.target.value;
    // Eliminar cualquier caracter que no sea un número
    telefono = telefono.replace(/\D/g, '');
    // Limitar la longitud a 9 dígitos
    telefono = telefono.substring(0, 9);
    // Actualizar el valor del campo de entrada
    evt.target.value = telefono;
});
