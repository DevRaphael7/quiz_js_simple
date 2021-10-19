var btn_play = document.getElementById("btn-play")
var txt_input = document.getElementById("txt_input")

const postValues = async(url, nome) => {
    var teste = await fetch(url, {
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

    if(teste.status == 400){
        alert("Campo/ ou Campos vazio!");
        return false
    }

    sessionStorage.setItem("nome", usuarioNome);

    location.href = "./home-page.htm";

    console.log(teste)
}

btn_play.addEventListener("click", () => {
    postValues("http://localhost:3000/usuarios/postUser", usuarioNome)
})