function passarValoresEntreTelas (id) {
    sessionStorage.setItem("id", id);

    location.href = "./page-info.htm";
    console.log(id)
}

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
                    <button class="btn-format" button-id>Play</button>
                </div>
                `
                var button = document.querySelectorAll("[button-id]")
                console.log(button);
                
                button.forEach((value, index) => {
                    value.addEventListener('click', () => {
                        passarValoresEntreTelas(quiz[index].id)
                    })
                })
            });
        });
    
}
// sobre fetch ==> https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch
// outra documentação ==> https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API

getQuizDicionario("http://localhost:3000/quiz");

//Usamos QUERY SELECTOR para selecionar
var select = document.querySelector("[selector]");
var welcome = document.getElementById("welcome");

welcome.innerText = "Bem-vindo a página de quizzes!";