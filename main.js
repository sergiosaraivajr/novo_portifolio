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
    // Transição suave para a imagem de fundo
    const rightContent = document.querySelector(".right-content");
    rightContent.classList.add("loaded"); // Adiciona a classe 'loaded' ao carregar a página
    // Adiciona o som de digitação e chama a função
    typeText("hello", "Olá! Seja bem-vindo(a)!", 150, "/sounds/type-sound.mp3"); // Som de digitação para "Olá!"
    setTimeout(function() {
        typeText("name", "Me chamo Sérgio Saraiva", 150, "/sounds/type-sound.mp3"); // Som de digitação para "Eu sou Sérgio Saraiva"
    }, 3500); // Aguarda 1 segundo para iniciar o próximo texto
    setTimeout(function() {
        typeText("function", "DESENVOLVEDOR FRONT END", 150, "/sounds/type-sound.mp3"); // Som de digitação para "Eu sou Sérgio Saraiva"
    }, 7500); // Aguarda 1 segundo para iniciar o próximo texto
};

