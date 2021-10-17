function passarValoresEntreTelas (id, nome) {
    sessionStorage.setItem("id", id);
    sessionStorage.setItem("nome", nome)

    location.href = "./page-info.htm";
    console.log(id)
}

function fazerPost () {
    fetch("http://localhost:3000/quiz/post", {
        method: 'post',
        body: JSON.stringify({
            nome: "Isso é um teste"
        }),
        headers: { //Aqui deve ser "headers" e não "header", caso contrário, ocorrerá erro e não enviará dados.
            "Content-Type": "application/json",
        },
    })

    console.log("Fazendo post...")
}

var nome = sessionStorage.getItem("nome") != null ? sessionStorage.getItem("nome") : "Jogador(a)"

function getQuizDicionario (url) {
    
    var acumulador;

    fetch(url)
        .then(response => response.json())
        .then(quiz => {
            
            quiz.forEach((value, index) => {

                select.innerHTML += `
                <div class="any-container" any-container>
                    <img src="${quiz[index].imageMain}" width="200">
                    <h3>${quiz[index].title}</h3>
                    <br>
                    <p>${quiz[index].description}</p>
                    <br>
                    <button class="btn-format" button-id>Play</button>
                </div>
                `
                var button = document.querySelectorAll("[button-id]").forEach((value, index) => {
                    value.addEventListener('click', () => {
                        passarValoresEntreTelas(quiz[index].id, nome)
                    })
                })

                var container = document.querySelectorAll("[any-container]").forEach((value, index) => {
                    value.addEventListener("mouseenter", () => {
                        document.body.style.backgroundImage = `url(${quiz[index].imageBackGround})`
                    })

                    value.addEventListener("mouseleave", () => {
                        document.body.style.backgroundImage = `linear-gradient(to left ,rgb(64, 76, 170), rgb(90, 76, 170))`
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
var welcome = document.getElementById("welcome").innerText = `Bem-vindo ${nome}!`;


var selectButton = document.getElementById("teste-b").addEventListener('click', () => {
    fazerPost()
});