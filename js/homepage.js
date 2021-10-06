const quiz = [
    {
        title: "Naruto",
        description: "Quiz do anime do Naruto",
        imageMain: 'images/naruto_quiz/cover.jpg',
    },
    {
        title: "Dragon ball",
        description: "Quiz do dragon ball",
        imageMain: "images/dragon_ball_quiz/cover.jpg"
    }
];

//Usamos QUERY SELECTOR para selecionar
var select = document.querySelector("[selector]");
var welcome = document.getElementById("welcome");

welcome.innerText = "Bem-vindo a página de quizzes!";

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