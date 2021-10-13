var pontos = document.getElementById("pontuacao")

var getPontos = sessionStorage.getItem("pontuacao");

pontos.innerText += " " + getPontos