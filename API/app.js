import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(bodyParser.urlencoded({ extended : false }))
app.use(bodyParser.json())

app.use(cors({
    //Isso tira o problema de permissão para acessar API, todos as origens podem acessar minha API.
    origin: '*',
    methods: '*'
}));

const PORT = 3000;

import rotas from "./routes/quiz/files.js";
import usuarios from "./routes/user/user.js";

app.set("json spaces", 4)

app.use("/quiz", rotas)
app.use("/usuarios", usuarios)

app.get("/", (req, res) => {
    res.send("Server is run!")
})

//Isso vai executar o servidor
app.listen(PORT, () => {
    console.log("===============")
    console.log("Welcome!")
    console.log(`url: http://localhost:${PORT}`)
    console.log("===============")
})