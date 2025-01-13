const button = document.querySelector(".button");
const dólar_today = 5.45; // Definir a constante do valor do dólar corretamente
const outros_valores = document.querySelector(".another_values");
const euro_today = 6.07;
const libra_today = 7.29;
const flag = document.querySelector("#eua_flag"); // Referência à bandeira
const nome = document.querySelector("#name") // Certifique-se que este ID existe no HTML

// Converter ao clicar no botão
button.addEventListener("click", Convert);

// Alterar a bandeira automaticamente ao mudar a seleção
outros_valores.addEventListener("change", seletor);

function Convert() {
    console.log(outros_valores.value);
    const real_money = document.querySelector("#real_money");
    const dolar_money = document.querySelector("#dolar_money");
    
    // Obter o valor digitado no campo de entrada
    const currency_value = parseFloat(document.querySelector(".currency").value); // Certifique-se de converter para número
    
    if (!isNaN(currency_value)) { // Verificar se o valor é um número válido
        const valor_final = (currency_value / dólar_today).toFixed(2); // Calcular o valor final e limitar a 2 casas 
        const valor_final_euro = (currency_value / euro_today).toFixed(2);
        const valor_final_libra = (currency_value / libra_today).toFixed(2);
        
        // Atualizar os valores na interface
        real_money.innerHTML = `R$ ${currency_value.toFixed(2)}`; // Exibir o valor em Reais
        dolar_money.innerHTML = `$ ${valor_final}`; // Exibir o valor convertido em Dólares

        // Alterar valor baseado na seleção de moeda
        if (outros_valores.value === "euro") {
            dolar_money.innerHTML = `€ ${valor_final_euro}`;
        } else if (outros_valores.value === "libra") {
            dolar_money.innerHTML = `£ ${valor_final_libra}`;
        }
    } else {
        alert("Por favor, insira um valor válido.");
    }
}

// Função para alterar a bandeira automaticamente ao mudar a seleção de moeda
function seletor() {
    if (outros_valores.value === "euro") {
        flag.src = './img/euro.png'; // Trocar para a bandeira do Euro
        nome.innerHTML = "Euro";

    } else if (outros_valores.value === "libra") {
        flag.src = './img/libra 1.png'; // Trocar para a bandeira da Libra
        nome.innerHTML = "Libra";

    } else if (outros_valores.value === "dolar") {
        flag.src = './img/estados-unidos (1) 1.png'; // Trocar para a bandeira dos EUA
        nome.innerHTML = "Dólar"; // O nome agora deve mudar corretamente
    }
}
