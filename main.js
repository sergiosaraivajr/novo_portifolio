function typeText(elementId, text, speed, sound) {
    let index = 0;
    const element = document.getElementById(elementId);
    const audio = new Audio(sound); // Carrega o som de digitação

       // Toca o som de forma contínua
        audio.loop = true; // Ativa o loop para o som tocar continuamente
        audio.play().catch((error) => {
            console.error("Erro ao reproduzir o som:", error);
        });

        function type() {
            if (index < text.length) {
                element.innerHTML += text.charAt(index);
                index++;
                setTimeout(type, speed); // Continua a digitar
            } else {
                // Para o som quando a digitação terminar
                audio.pause();
                audio.currentTime = 0;
            }
        }

        type(); // Inicia a função de digitação
    }

window.onload = function() {
    // Adiciona o som de digitação e chama a função
    typeText("hello", "Olá!", 150, "sounds/type-sound.mp3"); // Som de digitação para "Olá!"
    setTimeout(function() {
        typeText("name", "Eu sou Sérgio Saraiva", 150, "sounds/type-sound.mp3"); // Som de digitação para "Eu sou Sérgio Saraiva"
    }, 1000); // Aguarda 1 segundo para iniciar o próximo texto
};