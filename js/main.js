document.addEventListener('DOMContentLoaded', function() {
    const text = "⚡ PROXIMAMENTE, STAY TUNED ⚡";
    let index = 0;
    const speed = 100; // Velocidad de la animación en milisegundos

    function typeWriter() {
        if (index < text.length) {
            const character = text.charAt(index);
            const element = document.getElementById('typewriter');
            element.innerHTML += `<span class="orbitron">${character}</span>`; // Usar clase orbitron para aplicar la tipografía
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});
