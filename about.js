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

// Inicia a digitação ao carregar a página
window.onload = function() {
     // Transição suave para a imagem de fundo
    const rightContent = document.querySelector(".right-content");
    rightContent.classList.add("loaded"); // Adiciona a classe 'loaded' ao carregar a página
    
    // Muda a imagem de fundo após 20 segundos
    setTimeout(function() {
        rightContent.style.background = "url('/images/familia.png') no-repeat center center";
        rightContent.style.backgroundSize = "auto";
    }, 21000); // 20000 milissegundos = 20 segundos

    typeText("intro", "Olá !", 60, "sounds/type-sound.mp3");
    
    setTimeout(function() {
        typeText("techJourney", "Sou um apaixonado por tecnologia. Iniciei minha jornada em 2011 na área de telecomunicações. Passando desde a operação até a área de gestão.", 60, "sounds/type-sound.mp3");
    }, 1000); // Aguarda 2 segundos para iniciar o próximo parágrafo

    setTimeout(function() {
        typeText("family", "Agora, após 13 anos na área de telecom e redes, embarco nessa jornada de aprendizado em desenvolvimento Front End, evoluindo com cada etapa de estudo.\nMas, antes de tudo isso, amo minha família. Sou pai da Stellinha e esposo da Simei.", 60, "sounds/type-sound.mp3");
    }, 10000); // Aguarda mais tempo para iniciar o terceiro parágrafo
    
    // Transição suave para a imagem
    const img = document.querySelector(".overlay img");
    img.onload = function() {
    img.classList.add("loaded"); // Adiciona a classe 'loaded' quando a imagem carregar
    // Texto a ser digitado nos parágrafos com o som de digitação
    }
}