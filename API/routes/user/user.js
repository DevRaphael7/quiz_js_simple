import express, { Router } from "express";
import { user } from "./json.js";

const route = express.Router();

route.get("/", (req, res) => {
    
    if (req.headers['authorization'] != "123") {
        return res.status(401).json({message: "access denied"})
    } else {
        return res.status(200).json(user).send("authorized access")
    }

})

route.post("/postUser", (req, res) => {

    if (req.headers['authorization'] != "123") {
        return res.status(401).send("access denied")
    }

    //O corpo da requisição não pode ser vazio.
    if ( req.body == null || req.body == {}) {
        return res.status(400).send("the body is empty")
    }

    var id = Math.floor(Math.random() * 200);   

    var dict = [
        {
            id: user.find((user) => user.id == id) == undefined ? id : Math.floor(Math.random() * 200),
            nome: req.body.nome
        }
    ]

    if (dict[0].nome == '' || dict[0].nome == null) return res.status(400).send("Campo nome vazio!")

    user.push(dict)

    console.log(user)

    return res.status(200).send("data saved in json")
})

export default route;