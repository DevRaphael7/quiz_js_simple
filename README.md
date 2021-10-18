# Quiz simples com JavaScript puro

Neste repositório crio um quiz simples com a finalidade de estudar APIs no NODE.JS. Esta API é simples, no atual momento temos os JSONs `user` e `quiz`. O primeiro armazena os nomes dos jogadores do quiz e o id que é gerado dentro da própria API e o segundo os quizzes usado no jogo.

## Código das APIs

1) quiz API

``` javascript
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
```

2) user API

``` javascript
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
            nome: user.find((user) => user.nome == req.body.nome) ? "usuário repetido" : req.body.nome
        }
    ]

    //Não permite jogadores com o mesmo nome.
    if (dict[0].nome == "usuário repetido") return res.status(400).send("existing user")

    user.push(dict)

    console.log(user)

    return res.status(200).send("data saved in json")
})
```

