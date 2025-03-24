const tijeras = document.querySelector('.objeto.tijeras');
const papel = document.querySelector('.objeto.papel');
const piedra = document.querySelector('.objeto.piedra');
const fightDiv = document.querySelector('.fight');
const chooseDiv = document.querySelector('.choose');
const opcionDiv = document.querySelector('.opcion');
const divSalir = document.querySelector(".opcion");
let userWins = 0;
let cpuWins = 0;
let round = 1;

// Añadimos el eventListener para redirigir a game.html cuando se hace clic
divSalir.addEventListener('click', function() {
    window.location.href = "index.html"; // Redirige a la página game.html
});

function cpuChoice() {
    const choices = ['piedra', 'papel', 'tijeras'];
    const randomIndex = Math.floor(Math.random() * 3); // Genera un número aleatorio entre 0 y 2
    return choices[randomIndex];
}

function determinarGanador(userChoice, cpuChoice) {
    if (userChoice === cpuChoice) {
        return "¡Empate!";
    }

    if (
        (userChoice === 'piedra' && cpuChoice === 'tijeras') ||
        (userChoice === 'tijeras' && cpuChoice === 'papel') ||
        (userChoice === 'papel' && cpuChoice === 'piedra')
    ) {
        userWins++;
        return "¡AND THE WINNER IS: TÚ!";
        
    } else {
        cpuWins++;
        return "¡AND THE WINNER IS: ORDENADOR!";
        
    }
}
// Función para mostrar las imágenes y el resultado
function mostrarResultado(userChoice, cpuChoice, result) {
    // Definimos las imágenes para las opciones
    const imagenes = {
        piedra: '/pngegg (2).png',
        papel: '/pngegg.png',
        tijeras: '/pngegg (1).png',
        versus: '/—Pngtree—vs versus comic style letter_15457140.png',
        cpu: '/pngegg (3).png',  // Asegúrate de que la ruta sea correcta
        user: '/pngegg (4).png'  // Asegúrate de que la ruta sea correcta
    };

    // Creamos los elementos de imagen
    const userImg = document.createElement('img');
    const cpuImg = document.createElement('img');
    const versusImg = document.createElement('img'); 

    // Asignamos las imágenes correspondientes a cada elección
    userImg.src = imagenes[userChoice];
    cpuImg.src = imagenes[cpuChoice];
    versusImg.src = imagenes.versus; 

    userImg.style.width = '100px';
    userImg.style.height = '100px';
    cpuImg.style.width = '100px';
    cpuImg.style.height = '100px';
    versusImg.style.width = '75px';
    versusImg.style.height = '75px';

     // Añadir animación si la opción elegida es tijeras
     if (userChoice === 'tijeras') {
        userImg.classList.add('rotarTijerasHorario'); // Aplica la animación de rotación en sentido horario
    }

    if (cpuChoice === 'tijeras') {
        cpuImg.classList.add('rotarTijerasAntihorario'); // Aplica la animación de rotación en sentido antihorario
    }
    // Aplicamos la animación de lanzamiento para el papel del usuario
    if (userChoice === 'papel') {
        userImg.classList.add('lanzarPapelyUser'); // Aplica la animación para el usuario lanzando papel a la derecha
    }

    // Aplicamos la animación de lanzamiento para el papel de la CPU
    if (cpuChoice === 'papel') {
        cpuImg.classList.add('lanzarPapelyCpu'); // Aplica la animación para la CPU lanzando papel a la izquierda
    }
    if (userChoice === 'piedra') {
        userImg.classList.add('lanzarPapelyUser'); // Aplica la animación para el usuario lanzando papel a la derecha
    }

    // Aplicamos la animación de lanzamiento para el papel de la CPU
    if (cpuChoice === 'piedra') {
        cpuImg.classList.add('lanzarPapelyCpu'); // Aplica la animación para la CPU lanzando papel a la izquierda
    }

    // Limpiamos el div de resultados y añadimos las imágenes
    fightDiv.innerHTML = ''; // Limpiamos el div antes de agregar el nuevo contenido
    fightDiv.appendChild(userImg);
    fightDiv.appendChild(versusImg);
    fightDiv.appendChild(cpuImg);

    // Añadimos el resultado debajo de las imágenes
    const resultText = document.createElement('p');
    resultText.textContent = result;
    fightDiv.appendChild(resultText);

    // Cambiar el color de fondo del div según el resultado
    if (result === "¡AND THE WINNER IS: TÚ!") {
        resultText.style.backgroundColor = 'green';  // Si gana el usuario, el fondo es verde
    } else if (result === "¡AND THE WINNER IS: ORDENADOR!") {
        resultText.style.backgroundColor = 'red';  // Si pierde el usuario, el fondo es rojo
    } else {
        resultText.style.backgroundColor = '';  // Si es empate, no cambia el fondo
    }

    // Mostrar el puntaje actual
    const scoreText = document.createElement('p');
    scoreText.innerHTML = `Ronda ${round}<br>Tú - ${userWins} vs  ${cpuWins} - CPU `;
    fightDiv.appendChild(scoreText);
     // Crear el botón para nueva partida
     const reloadButton = document.createElement('p');
     reloadButton.textContent = "Nueva partida";
     reloadButton.style.cursor = 'pointer'; 
     reloadButton.addEventListener('click', function() {
         location.reload();  // Recarga la página para iniciar una nueva partida
     });
    // Verificar si alguien ha ganado 3 rondas
    if (userWins === 3) {
        // Limpiamos el div de resultados de la ronda
        chooseDiv.innerHTML = '';
        fightDiv.innerHTML = '';  // Limpiamos el div de resultados

        // Crear un nuevo div para mostrar el resultado final
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('resultDiv');  // Aquí puedes añadir una clase CSS para aplicar estilos

        const winnerText = document.createElement('p');
        let winnerImage = document.createElement('img');
        winnerText.textContent = "¡Felicidades, ganaste al mejor de 5!";
        winnerImage.src = imagenes.user;
        winnerImage.style.width = '150px';  // Ajusta el tamaño de la imagen del ganador
        winnerImage.style.height = '150px';

        resultDiv.appendChild(winnerText);
        resultDiv.appendChild(winnerImage);
        resultDiv.appendChild(reloadButton);  // Añadimos el botón de nueva partida

        // Añadimos resultDiv al fightDiv
        fightDiv.appendChild(resultDiv); 

    } else if (cpuWins === 3) {
        // Limpiamos el div de resultados de la ronda
        chooseDiv.innerHTML = '';
        fightDiv.innerHTML = '';  // Limpiamos el div de resultados

        // Crear un nuevo div para mostrar el resultado final
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('resultDiv');  // Aquí puedes añadir una clase CSS para aplicar estilos

        const winnerText = document.createElement('p');
        let winnerImage = document.createElement('img');
        winnerText.textContent = "¡El ordenador ganó al mejor de 5!";
        winnerImage.src = imagenes.cpu;
        winnerImage.style.width = '150px';  // Ajusta el tamaño de la imagen del ganador
        winnerImage.style.height = '150px';

        resultDiv.appendChild(winnerText);
        resultDiv.appendChild(winnerImage);
        resultDiv.appendChild(reloadButton);  // Añadimos el botón de nueva partida

        // Añadimos resultDiv al fightDiv
        fightDiv.appendChild(resultDiv); 
    } else {
        // Si nadie ha ganado 3 rondas, pasar a la siguiente ronda
        round++;
    }
}


tijeras.addEventListener('click', function() {
    const userChoice = 'tijeras';
    const cpu = cpuChoice();
    const result = determinarGanador(userChoice, cpu);
    mostrarResultado(userChoice, cpu, result);
});

papel.addEventListener('click', function() {
    const userChoice = 'papel';
    const cpu = cpuChoice();
    const result = determinarGanador(userChoice, cpu);
    mostrarResultado(userChoice, cpu, result);
});

piedra.addEventListener('click', function() {
    const userChoice = 'piedra';
    const cpu = cpuChoice();
    const result = determinarGanador(userChoice, cpu);
    mostrarResultado(userChoice, cpu, result);
});
