
// window.addEventListener('resize', ajustarTamañoTexto);  // Escuchar cuando la ventana cambia de tamaño
    
// function ajustarTamañoTexto() {
//     const textBox = document.querySelector('.text-box');
//     const width = textBox.offsetWidth;
//     const height = textBox.offsetHeight;

//     // Establecer font-size en función de la anchura y altura del área
//     const fontSize = Math.min(width, height) / 8.5; // Dividir por un valor para ajustar la escala
//     textBox.style.fontSize = `${fontSize}px`;
// }

//esta función se llama cada que se presiona un botón (los rectángulos)
function delayedRedirect(event, element) {
    event.preventDefault(); // Prevenir el comportamiento por defecto solo si es necesario

    // Activar la animación del borde del rectángulo
    // element.querySelector('.rectangle').classList.add('clicked');

    // Retrasar la redirección para que el efecto sea visible
    setTimeout(() => {
        window.open(element.href, '_blank'); // Abre en una nueva pestaña
    }, 2000); // El retardo en milisegundos
}


// para animar el tìtulo
document.addEventListener("DOMContentLoaded", function () {
    const titulo = document.getElementById("titulo");
    const text = "Lucero Emmanuel ING"; // El texto que quieres escribir
    const typingSpeed = 150; // Velocidad de escritura (en milisegundos por letra)
    const pauseDuration = 4000; // Tiempo de espera antes de reiniciar (en milisegundos)

    let currentChar = 0; // Para hacer el seguimiento de la letra que se está escribiendo

    // Crear el cursor como un elemento independiente
    let cursor = document.createElement("span");
    cursor.textContent = "|"; // El cursor será el símbolo de barra vertical
    cursor.classList.add("cursor"); // Aplicamos la clase 'cursor' para la animación de parpadeo

    // Crear un contenedor para el texto
    let textContainer = document.createElement("span");

    // Función para comenzar a escribir el texto
    function startTyping() {
        titulo.textContent = ""; // Limpiar el texto antes de iniciar
        titulo.appendChild(textContainer); // Añadimos el contenedor del texto
        textContainer.appendChild(cursor); // Añadimos el cursor dentro del contenedor

        // Escribir letra por letra
        function typeLetter() {
            if (currentChar < text.length) {
                textContainer.textContent = text.substring(0, currentChar + 1); // Escribir hasta la letra actual
                textContainer.appendChild(cursor); // Aseguramos que el cursor esté al final
                currentChar++;
                setTimeout(typeLetter, typingSpeed); // Llamar a la siguiente letra
            } else {
                // Una vez que se haya completado, esperar un tiempo antes de borrar y reiniciar
                setTimeout(function () {
                    textContainer.textContent = ""; // Borrar el texto
                    currentChar = 0; // Resetear la posición del texto
                    startTyping(); // Iniciar el efecto de nuevo
                }, pauseDuration); // Pausa de 2 segundos (puedes ajustar el tiempo)
            }
        }

        // Llamar a la función de escritura
        typeLetter();
    }

    // Iniciar el efecto de escritura al cargar la página
    startTyping();
});


// Llamar a la función al cargar la página
// ajustarTamañoTexto();