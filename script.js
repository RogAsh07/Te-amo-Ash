// Elementos principales
const storyText = document.getElementById("story-text");
const startButton = document.getElementById("start-button");
const heartsContainer = document.getElementById("hearts-container");

let stage = 0; // Etapa del juego

// Mensajes románticos por etapas
const stages = [
    "Capítulo 1: Rogner conoció a Ashley, y su corazón nunca volvió a ser el mismo. ❤️",
    "Capítulo 2: Cada día juntos es un regalo lleno de risas y amor. 🎁",
    "Capítulo 3: Rogner promete amarte hasta el infinito y más allá. ♾️",
    "Capítulo 4: Tú eres la razón por la que cada día vale la pena. 🌟",
    "Capítulo 5: Sin ti, el mundo de Rogner no tendría color. 🎨",
    "Fin del primer ciclo... pero el amor de Rogner nunca termina. ¡Vuelve a comenzar! 🔄"
];

// Iniciar el juego
startButton.addEventListener("click", () => {
    if (stage < stages.length) {
        // Mostrar mensaje actual
        storyText.textContent = stages[stage];
        
        // Crear corazones animados
        createHearts(10);
        
        // Avanzar a la siguiente etapa
        stage++;
    } else {
        // Reiniciar
        stage = 0;
        storyText.textContent = "El amor de Rogner es infinito. ¡Volvamos a empezar! ❤️";
    }
});

// Crear corazones animados
function createHearts(count) {
    for (let i = 0; i < count; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.textContent = "❤️";

        // Posición aleatoria
        const x = Math.random() * window.innerWidth;
        const size = Math.random() * 20 + 20; // Tamaño aleatorio
        heart.style.left = `${x}px`;
        heart.style.fontSize = `${size}px`;

        // Agregar a la pantalla
        heartsContainer.appendChild(heart);

        // Eliminar después de la animación
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}
