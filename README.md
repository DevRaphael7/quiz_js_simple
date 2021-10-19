# Quiz simples com JavaScript puro

Neste repositório crio um quiz simples com a finalidade de estudar APIs no NODE.JS. Esta API é simples, no atual momento temos os JSONs `user` e `quiz`. O primeiro armazena os nomes dos jogadores do quiz e o id que é gerado dentro da própria API e o segundo os quizzes usado no jogo.

## Estrutura das APIs

1) *quiz API*

``` json
{
    "id": "id",
    "title": "title",
    "description": "description",
    "imageMain": "imageMain",
    "imageBackGround": "imageBackGround",
    "question": ["question"],
    "responseOne": ["responseOne"],
    "responseTwo": ["responseTwo"],
    "responseTree": ["responseTree"],
    "resposeFour": ["resposeFour"],
    "respostaCorreta": ["respostaCorreta"]
}
```

``` 
    "METHOD": 'GET'
```

2) *user API*

``` json
{
    "id": "id",
    "nome": "nome"
}
```
``` json
"METHOD": ["GET", "POST"]
```
```` json
HEADERS: {
    "Content-Type": "application/json",
    "Authorization": "123"
}
```