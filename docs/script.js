// Elementos
const button = document.getElementById("love-button");
const response = document.getElementById("response");
const message = document.getElementById("love-message");
const clickCounter = document.getElementById("click-counter");
const heartsContainer = document.getElementById("hearts-container");

// Mensajes románticos
const messages = [
    "Hola 😔",
    "Te amo más que las estrellas al cielo ✨",
    "Mi amor por ti es infinito",
    "Ashley, eres la luz en mi mundo 💡",
    "Cada día, Rogner ama a Ashley más 💕",
    "Mi corazón late solo por Ashley ❤️",
    "Amo tu carita 😔",
    "Te amo mucho y sabes que tu eres con la persona que quiero pasar el resto de mi vida",
    "Amo tus fotos, en especial las q no tienes ropa 😔",
    "Te extraño mucho mi amor, quiero abrazarte y no puedo, quiero llorar",
    "Extraño tus besos",
    "Extraño tus abrazos",
    "Extraño tu sonrisa",
];

// Variables
let clicks = 0;

// Evento para mostrar mensajes y corazones
button.addEventListener("click", () => {
    // Aumentar contador
    clicks++;
    clickCounter.textContent = `Clics de amor, lee suave bby: ${clicks}`;
    
    // Mostrar mensaje aleatorio
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    response.textContent = randomMessage;
    response.classList.add("show");
    
    // Crear corazón animado
    createHeart();
    
    // Animar el botón
    button.style.animation = "bounce 0.5s";
    setTimeout(() => {
        button.style.animation = ""; // Resetear animación
    }, 500);
});

// Función para crear corazones
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "❤️";

    // Posición inicial aleatoria
    const x = Math.random() * window.innerWidth;
    const size = Math.random() * 20 + 20; // Tamaño aleatorio
    heart.style.left = `${x}px`;
    heart.style.fontSize = `${size}px`;

    // Agregar a la pantalla
    heartsContainer.appendChild(heart);

    // Eliminar después de la animación
    setTimeout(() => {
        heart.remove();
    }, 4000);
}
