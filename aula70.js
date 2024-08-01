// aula70.js

// Seleciona todos os botões de números e converte NodeList para array
const teclasNum = [...document.querySelectorAll(".num")];

// Seleciona todos os botões de operadores e converte NodeList para array
const teclasOp = [...document.querySelectorAll(".teclaop")];

// Seleciona o botão de resultado
const teclaRes = document.querySelector(".res");

// Seleciona o elemento de display
const display = document.querySelector(".display");

// Seleciona o botão ON
const ton = document.getElementById("ton");

// Seleciona o botão de limpar
const tlimpar = document.getElementById("tlimpar");

// Flags para rastrear se o último input foi um operador e se o ponto decimal foi usado
let sinal = false;
let decimal = false;

// Adiciona ouvintes de eventos de clique aos botões de números
teclasNum.forEach((el) => {
    el.addEventListener("click", (evt) => {
        // Reseta a flag de operador
        sinal = false;

        // Se o display estiver "0", limpa-o
        if (display.innerHTML == "0") {
            display.innerHTML = "";
        }

        // Manipula a entrada do ponto decimal
        if (evt.target.innerHTML == ",") {
            if (!decimal) {
                decimal = true;
                // Se o display estiver vazio, adiciona um "0" antes do ponto decimal
                if (display.innerHTML == "") {
                    display.innerHTML += "0,";
                } else {
                    display.innerHTML += evt.target.innerHTML;
                }
            }
        } else {
            // Adiciona o número clicado ao display
            display.innerHTML += evt.target.innerHTML;
        }
    });
});

// Adiciona ouvintes de eventos de clique aos botões de operadores
teclasOp.forEach((el) => {
    el.addEventListener("click", (evt) => {
        // Se o último input não foi um operador
        if (!sinal) {
            sinal = true;
            decimal = false; // Reseta o flag de decimal ao adicionar um operador

            // Substitui "x" por "*" para multiplicação
            if (evt.target.innerHTML == "x") {
                display.innerHTML += "*";
            } else if (evt.target.innerHTML == "+") {
                display.innerHTML += "+";
            } else if (evt.target.innerHTML == "-") {
                display.innerHTML += "-";
            } else if (evt.target.innerHTML == "/") {
                display.innerHTML += "/";
            } else if (evt.target.innerHTML == "(") {
                display.innerHTML += "(";
            } else if (evt.target.innerHTML == ")") {
                display.innerHTML += ")";
            }
        }
    });
});

// Adiciona ouvinte de evento de clique ao botão de limpar
tlimpar.addEventListener("click", (evt) => {
    sinal = false;
    decimal = false;
    display.innerHTML = "0";
});

// Adiciona ouvinte de evento de clique ao botão de resultado
teclaRes.addEventListener("click", (evt) => {
    sinal = false;
    decimal = false;

    try {
        // Substitui vírgulas por pontos para avaliação correta
        const expression = display.innerHTML.replace(/,/g, '.');

        // Avalia a expressão e substitui pontos por vírgulas no resultado
        const res = eval(expression).toString().replace(/\./g, ',');

        // Exibe o resultado no display
        display.innerHTML = res;
    } catch (error) {
        display.innerHTML = "Erro";
    }
});
