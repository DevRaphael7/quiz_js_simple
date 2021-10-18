import express, { Router } from "express";
import { quiz } from "./quizzes.js";

const route = express.Router();

route.get("/", (req, res) => {
    res.json(quiz)
});

route.get("/:id", (req, res) => {
    const { id } = req.params;

    //Essa variável tem uma condicional para encontrar o usuário pelo seu ID
    const quizEncontrado = quiz.find((quiz) => quiz.id == id);

    if(quizEncontrado === null ){
        res.send("Quiz não encontrado!");
    }else{
        res.send(quizEncontrado);
    }
});

route.post("/post", (req, res) => {

    //Esse código obriga o que a requisição passe o cabeçalho Authorization com o valor 123, senão será erro 401.
    if (req.headers['authorization'] != "123") {
        return res.status(401).send("Acesso negado!")
    }

    const resposta = req.body;

    //Não permite a entrada de valores nulos
    if ( resposta == null || resposta == {}) {
        return res.status(400).send("Valores nulos")
    }

    console.log("BODY: ", resposta)

    quiz.push(resposta);
    return res.status(200).send("Dados postados com sucesso!")
}) 

export default route;