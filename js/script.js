// Seleccionamos el botón, el input y el espacio del saludo
const boton = document.getElementById('submitBtn');
const entradaNombre = document.getElementById('nameInput');
const salidaSaludo = document.getElementById('greetingOutput');

boton.addEventListener('click', function() {
    const nombre = entradaNombre.value;

    if (nombre !== "") {
        // Cambiamos el contenido de texto del H2
        salidaSaludo.textContent = "¡Hola, " + nombre + "!";
        
        // Opcional: Limpiar el cuadro de texto después de saludar
        entradaNombre.value = ""; 
    } else {
        salidaSaludo.textContent = "Por favor, escribe un nombre.";
        salidaSaludo.style.color = "red"; // ¡Incluso puedes cambiar el color!
    }
});
