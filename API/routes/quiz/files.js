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

export default route;