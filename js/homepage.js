// function postar (url) {

//     fetch(url, {
//         method: 'POST',
//         body: JSON.stringify({"teste":"rrrr", "b":"77"}),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     },)
// };

function passarValoresEntreTelas (id) {
    sessionStorage.setItem("id", id);

    location.href = "./page-info.htm";
    console.log(id)
}

var aux = 0;

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
                var button = document.querySelector("[button-id]")
                console.log(button);
                button.addEventListener('click', () => {
                    passarValoresEntreTelas(aux)
                })

                aux++;
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