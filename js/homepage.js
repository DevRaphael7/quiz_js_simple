//Esse função obtêm o JSON da minha API
function getQuizDicionario (url) {
    
    var acumulador;

    fetch(url)
        .then(response => response.json())
        .then(quiz => {
            quiz.forEach((value, index) => {

                select.innerHTML += `
                <div class="any-container">
                    <img src="${quiz[index].imageMain}" width="200">
                    <h3>${quiz[index].title}</h3>
                    <br>
                    <p>${quiz[index].description}</p>
                    <br>
                    <button class="btn-format">Play</button>
                </div>
                `
            });

        });
    
}

getQuizDicionario("http://localhost:3000/quiz");

//Usamos QUERY SELECTOR para selecionar
var select = document.querySelector("[selector]");
var welcome = document.getElementById("welcome");

welcome.innerText = "Bem-vindo a página de quizzes!";