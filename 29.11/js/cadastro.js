function cadastro(event) {

    event.preventDefault();


    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if (email === "vanessa@gmail.com" && senha === "admin") {
        Swal.fire({
            title: 'cadastro realizado!',
            text: 'entre com seu login e senha!',
            icon: 'sucess',
            confirmButtomText: 'OK'
        }).then(() => {
            setTimeout(() => {
                location.href = "./login.html";
            }, 100);
        });


    } else {
        alert("Usuario ou senha inválidos");
    }
}