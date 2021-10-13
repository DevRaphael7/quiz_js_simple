import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const PORT = 3000;

app.use(cors({
    origin: '*'
}));

import rotas from "./routes/files.js";

app.set("json spaces", 4);

app.use("/quiz", rotas);
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', "*");
// })

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