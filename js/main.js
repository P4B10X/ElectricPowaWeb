document.addEventListener('DOMContentLoaded', function() {
    const text = "Bienvenidos a Nuestra Página";
    let index = 0;
    const speed = 100; // Velocidad de la animación en milisegundos

    function typeWriter() {
        if (index < text.length) {
            document.getElementById('typewriter').innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});
