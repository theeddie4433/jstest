let userName = prompt ("Nombre de usuario:", " ");

if (userName == "Admin") {
    let userPassword = prompt ("Di la palabra magica:", " ");
    if (userPassword == "TheMaster") {
        alert("Bienvenido");
    }else if (userPassword == " " || userPassword == null){
        alert("Cancelado");
    }
    else {
        alert("Contraseña incorrecta");
    }
}else if (userName == " " || userName == null){
    alert("Cancelado");
}else {
    alert("No te conozco");
}

