// Variables de juego
let puntuacion = 0;
const juego = document.getElementById('juego');
const corazon = document.getElementById('corazon');
const puntuacionDisplay = document.getElementById('puntuacion');
const mensajeDisplay = document.getElementById('mensaje');

// Array de mensajes amorosos
const mensajes = [
    "Te amo demasiado, gracias por estar aqui en mi vida",
    "Te amo más",
    "Eres valiosa e importante en mi vida, te amo",
    "Mi corazón frio se descongela de lo caliente que me pones, digo, de todo lo que me enamoras",
    "Estas buenisima, mi vida",
    "No quiero que te vayas mi amor",
    "Eres hermosa!!",
    "Me encanta tenerte en mi vida",
    "Eres la unica persona en este mundo que me encanta",
    "Te amo, te adoro, eres todo para mi, te amo"
];

// Función para mover el corazón a una posición aleatoria
function moverCorazon() {
    const x = Math.floor(Math.random() * (juego.clientWidth - corazon.clientWidth));
    const y = Math.floor(Math.random() * (juego.clientHeight - corazon.clientHeight));
    corazon.style.left = `${x}px`;
    corazon.style.top = `${y}px`;
}

// Función para actualizar la puntuación
function actualizarPuntuacion() {
    puntuacion++;
    puntuacionDisplay.textContent = `Puntuación: ${puntuacion}`;
    mostrarMensaje();
}

// Función para mostrar un mensaje amoroso
function mostrarMensaje() {
    const mensaje = mensajes[puntuacion % mensajes.length];
    mensajeDisplay.textContent = mensaje;
}

// Evento de clic en el corazón
corazon.addEventListener('click', () => {
    actualizarPuntuacion();
    moverCorazon();
});

// Mover el corazón al iniciar el juego
moverCorazon();
