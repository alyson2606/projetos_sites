const key = "b12453323ddf975aaecda0ec256d2249";

function colocar_dados(dados) {
    document.querySelector(".cidade").innerHTML = "tempo em: " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor( dados.main.temp) + "°C";
    document.querySelector(".clima").innerHTML= dados.weather[0].description
}

async function buscar_cidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`)
        .then(resposta => resposta.json());
    colocar_dados(dados);  // Chama a função para atualizar os dados na tela
}

function cliquei_botao() {
    const cidade = document.querySelector(".input_city").value;
    buscar_cidade(cidade.trim());
}

