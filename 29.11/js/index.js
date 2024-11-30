function logar(event) {

    event.preventDefault();


    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if (usuario === "admin" && senha === "admin") {
        Swal.fire({
            title: 'login realizado!',
            text: 'bem vindo!',
            icon: 'sucess',
            confirmButtomText: 'OK'
        }).then(() => {
            setTimeout(() => {
                location.href = "./index.html";
            }, 100);
        });


    } else {
        alert("Usuario ou senha inválidos");
    }
}