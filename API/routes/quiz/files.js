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
        return res.status(400).send("quiz not found");
    }else{
        return res.status(200).send(quizEncontrado);
    }
});

export default route;