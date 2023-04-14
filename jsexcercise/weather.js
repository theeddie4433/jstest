const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setTienda);

function setTienda() {
  const choice = select.value;

  if (choice === "karolo") {
    para.textContent =
      "Tienda naturista para cuidar tu salud";
  } else if (choice === "gongcha") {
    para.textContent =
      "La franquicia de bubbletea más  grande del mundo";
  } else if (choice === "cv") {
    para.textContent =
      "Tienda de conveniencia  organica";
  } else if (choice === "prove") {
    para.textContent =
      "Papeleria tradicional";
  } else {
    para.textContent = "";
  }
}

let shoppingDone = false;
let childsAllowance;

// We don't need to explicitly specify 'shoppingDone === true'
if (shoppingDone) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}

console.log(childsAllowance);