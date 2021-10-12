var title = document.getElementById("title");
var description = document.getElementById("description");
var image = document.getElementById("image-quiz");

var identificador = sessionStorage.getItem("id");

function passarValoresEntreTelas (id) {
    sessionStorage.setItem("id", id);

    location.href = "./quiz.htm";
    console.log(id)
}

fetch(`http://localhost:3000/quiz/${identificador}`)
    .then(response => response.json())
    .then(quiz => {

        title.innerText = quiz.title;
        description.innerText = quiz.description
        image.src = quiz.imageMain;

    });

var button = document.getElementById("button-play")

button.addEventListener('click', () => {
    passarValoresEntreTelas(identificador);
})