var btn_play = document.getElementById("btn-play")
var txt_input = document.getElementById("txt_input")

function passarValoresEntreTelas( usuarioNome ) {

    if (usuarioNome == null || usuarioNome == "" || usuarioNome == " "){
        alert("Por favor, digite alguma coisa!")
        return
    }

    sessionStorage.setItem("nome", usuarioNome);

    location.href = "./home-page.htm";
}

btn_play.addEventListener("click", () => {
    passarValoresEntreTelas(txt_input.value)
})