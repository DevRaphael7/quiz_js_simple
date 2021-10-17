var pontos = document.getElementById("pontuacao")

var getPontos = sessionStorage.getItem("pontuacao");

var getNomeJogador = sessionStorage.getItem("nome");
var nome_jogador = document.getElementById("jogador-nome");

nome_jogador.innerText += `${getNomeJogador}`;

pontos.innerText += " " + getPontos