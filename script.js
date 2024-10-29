// Função para criptografar a resposta usando Base64
function criptografarResposta(resposta) {
    return btoa(resposta);  // Criptografia em Base64
}

// Função para descriptografar
function descriptografarResposta(respostaCriptografada) {
    return atob(respostaCriptografada);  // Descriptografia em Base64
}

// Função para verificar resposta e mostrar mensagens
document.getElementById("verificar").addEventListener("click", function() {
    const resposta = document.getElementById("resposta").value.toLowerCase();
    const resultado = document.querySelector(".resultado");
    const respostaCriptografada = criptografarResposta('roteador');  // Criptografando 'roteador'

    // Verifica a resposta
    if (resposta === descriptografarResposta(respostaCriptografada)) {
        resultado.textContent = "Parabéns! A resposta correta é 'Roteador'!";
        resultado.style.color = "#4CAF50";
        mostrarConfetes();  // Mostra os confetes quando acertar
    } else {
        resultado.textContent = "Resposta incorreta. Tente novamente!";
        resultado.style.color = "#ff0000";

        // Remove mensagem de erro após 2 segundos
        setTimeout(() => {
            resultado.textContent = "";
        }, 2000);
    }
});

