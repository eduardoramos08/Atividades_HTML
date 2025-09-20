const botaoAcao = document.getElementById('actionButton');
const divResposta = document.getElementById('resposta');
const campoNome = document.getElementById('userInput');

botaoAcao.addEventListener('click', function () {
    divResposta.textContent = "⚠️ Herói, escreva seu nome no pergaminho!";
    let mensagem = `⚔️ Olá ${campoNome.value}, sua missão o aguarda!`;
    divResposta.textContent = mensagem;
});

