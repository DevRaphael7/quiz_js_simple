import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

import rotas from "./routes/files.js";

app.set("json spaces", 4);

app.use("/quiz", rotas);
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
})

app.get("/", (req, res) => {
    res.send("Server is run!")
})

//Isso vai executar o servidor
app.listen(PORT, () => {
    console.log("===============")
    console.log("Welcome!")
    console.log("url: http://localhost:3000")
    console.log("===============")
})