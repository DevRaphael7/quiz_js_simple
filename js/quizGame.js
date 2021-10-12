var numberQuestion = document.getElementById("question-current");
var question = document.getElementById("pergunta");

var botaoResposta = document.querySelectorAll("[button-response]")
var responses = document.querySelectorAll("[response]") //Respostas

//Obtêm o valor da outra tela
var identificador = sessionStorage.getItem("id");

//Variável para controlar as respostas.
var indice = 0;

function fazerRequisicao (url) {
    fetch(url)
        .then(response => response.json())
        .then(quiz => {

            const found = quiz.find((quiz) => quiz.id == identificador);

            quiz.forEach((value, index) => {

                pergunta.innerText = found.question[indice]
                responses[0].innerText = found.responseOne[indice]
                responses[1].innerText = found.responseTwo[indice]
                responses[2].innerText = found.responseTree[indice]
                responses[3].innerText = found.resposeFour[indice]

            });
        })
}

botaoResposta.forEach((value, index) => {
    value.addEventListener('click', () => {
        indice++;
        fazerRequisicao("http://localhost:3000/quiz");
    })
})

fazerRequisicao("http://localhost:3000/quiz");
console.log(identificador);
numeroDaQuestao = 0;
numberQuestion.innerText += ` ${indice + 1} of ${5}`;