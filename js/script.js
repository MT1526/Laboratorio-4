// Seleccionamos el botón, el input y el espacio del saludo
const boton = document.getElementById('submitBtn');
const entradaNombre = document.getElementById('nameInput');
const salidaSaludo = document.getElementById('greetingOutput');

boton.addEventListener('click', function() {
    const nombre = entradaNombre.value;

    if (nombre !== "") {
        // Cambiamos el contenido de texto del H2
        salidaSaludo.textContent = "¡Hola " + nombre + ", bienvenido!";
        
        //Limpiar el cuadro de texto después de saludar
        entradaNombre.value = ""; 
    } else {
        salidaSaludo.textContent = "¡ESCRIBE TU NOMBRE, AHORA MISMO!";
        salidaSaludo.style.color = "red"; //cambiar el color del mensaje de error
    }
});
