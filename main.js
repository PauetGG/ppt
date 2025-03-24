const divSalir = document.querySelector("#salir");
const divNew = document.querySelector("#new");

// Añadimos el eventListener al div y colocamos el alert dentro de él
divSalir.addEventListener('click', function() {
    alert("¡No te lo, crees ni tu! Venga, dale a lo que has venido...");
    // Puedes añadir más lógica aquí si lo necesitas
});

// Añadimos el eventListener para redirigir a game.html cuando se hace clic
divNew.addEventListener('click', function() {
    window.location.href = "game.html"; // Redirige a la página game.html
});