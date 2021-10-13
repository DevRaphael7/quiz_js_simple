var numberQuestion = document.getElementById("question-current");
var question = document.getElementById("pergunta");

var botaoResposta = document.querySelectorAll("[button-response]")
var responses = document.querySelectorAll("[response]") //Respostas

//Obtêm o valor da outra tela
var identificador = sessionStorage.getItem("id");

//Variável para controlar as respostas.
var indice = 0;

var totalDeQuestao = 4;

//Variável para guardar a pontuação do jogador
var pontuacao = 0;

var resposta = "";

function passarValoresEntreTelas (id, pontuacao) {
    sessionStorage.setItem("id", id);
    sessionStorage.setItem("pontuacao", pontuacao);
    location.href = "./end.htm";
}

function fazerRequisicao (url) {

    fetch(url)
        .then(response => response.json())
        .then(quiz => {

            if (indice == totalDeQuestao) passarValoresEntreTelas( identificador, pontuacao);
            
            //Isso vai encontrar os dados pelo ID e me retornar um MAP
            const found = quiz.find((quiz) => quiz.id == identificador);
            
            pergunta.innerText = found.question[indice]
            responses[0].innerText = found.responseOne[indice]
            responses[1].innerText = found.responseTwo[indice]
            responses[2].innerText = found.responseTree[indice]
            responses[3].innerText = found.resposeFour[indice]

            if (resposta == found.respostaCorreta[indice - 1]) pontuacao += 200;

            console.log(pontuacao);
        })
}

botaoResposta.forEach((value, index) => {
    value.addEventListener('click', () => {
        resposta = responses[index].innerText;
        console.log(resposta);
        if ( indice < totalDeQuestao) indice++;
        numberQuestion.innerText = `Questão ${indice + 1 <= totalDeQuestao ? indice + 1 : totalDeQuestao} of ${totalDeQuestao}`;
        fazerRequisicao("http://localhost:3000/quiz");
    })
})

fazerRequisicao("http://localhost:3000/quiz");
console.log(identificador);
numeroDaQuestao = 0;
numberQuestion.innerText = `Questão ${indice + 1} of ${totalDeQuestao}`;