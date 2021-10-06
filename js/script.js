// import { quiz } from "./quiz.js"; 

const quiz = [
    {
        title: "Naruto",
        description: "Quiz do anime do Naruto",
        imageMain: 'images/naruto_quiz/naruto.jpg',
    }
]

var title = document.getElementById("title");
var description = document.getElementById("description");
var image = document.getElementById("image-quiz");

title.innerText = quiz[0].title;
description.innerText = quiz[0].description
image.src = quiz[0].imageMain;