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


let name = prompt("Cuál es el nombre oficial de JavaScript?", " ");

if (name === "ECMAScript") {
    alert("Correcto!!");
} else {
    alert("¿No conoces ECMAScript?");
}

let number = prompt ("Escribe un numero", 0);

if (number > 0) {
    alert (1);
} else if (number < 0) {
    alert(-1);
} else {
    alert(0);
}


