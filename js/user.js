var btn_play = document.getElementById("btn-play")
var txt_input = document.getElementById("txt_input")

function postValues (url, nome) {
    fetch(url, {
        method: 'post',
        body: JSON.stringify({
            nome: nome
        }),
        headers: { //Aqui deve ser "headers" e não "header", caso contrário, ocorrerá erro e não enviará dados.
            "Content-Type": "application/json",
            //Esse cabeçalho é necessário para fazer requisição
            "Authorization": "123"
        },
    })

    console.log("Fazendo post...")
}

function passarValoresEntreTelas( usuarioNome ) {

    if (usuarioNome == null || usuarioNome == "" || usuarioNome == " "){
        alert("Por favor, digite alguma coisa!")
        return
    }

    postValues("http://localhost:3000/usuarios/postUser", usuarioNome)

    sessionStorage.setItem("nome", usuarioNome);

    location.href = "./home-page.htm";
}

btn_play.addEventListener("click", () => {
    passarValoresEntreTelas(txt_input.value)
})