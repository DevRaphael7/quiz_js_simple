import express, { Router } from "express";
import { quiz } from "./quizzes.js";

const route = express.Router();

route.get("/", (re, res) => {

    //Esse código resolve o problema do acesso negado da API pelo FECTH
    res.header('Access-Control-Allow-Origin', "*");
    res.json(quiz)
});

export default route;