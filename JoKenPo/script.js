function jokenpo() {
    const PA = document.querySelector("#papel");
    const P = document.querySelector("#pedra");
    const T = document.querySelector("#tesoura");

    const userScoreText = document.querySelector(".texto p:nth-child(1) b");
    const botScoreText = document.querySelector(".texto p:nth-child(2) b");
    let userScore = 0;
    let botScore = 0;

    // Adiciona os eventos de clique
    PA.addEventListener("click", () => Jogo("Papel"));
    P.addEventListener("click", () => Jogo("Pedra"));
    T.addEventListener("click", () => Jogo("Tesoura"));

    function Jogo(UserChoice) {
        const choices = ["Papel", "Pedra", "Tesoura"];
        const bot_choice = choices[Math.floor(Math.random() * 3)];
    
        console.log(`Você escolheu: ${UserChoice}`);
        console.log(`Bot escolheu: ${bot_choice}`);
    
        if (UserChoice === bot_choice) {
            alert("EMPATE!!!");
        } else if (
            (UserChoice === "Pedra" && bot_choice === "Tesoura") ||
            (UserChoice === "Tesoura" && bot_choice === "Papel") ||
            (UserChoice === "Papel" && bot_choice === "Pedra")
        ) {
            userScore++;
            alert("Você Venceu!!!");
        } else {
            botScore++;
            alert("Bot Venceu!!!");
        }
    
        // Atualiza as pontuações no HTML
        userScoreText.textContent = `Sua pontuação: ${userScore}`;
        botScoreText.textContent = `Bot pontuação: ${botScore}`;
    }
    
}

document.addEventListener("DOMContentLoaded", jokenpo);
