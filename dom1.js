const container = document.querySelector('#container');

const body = document.getElementsByTagName("body")[0];

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const exercise1 = document.createElement("div");
exercise1.setAttribute("id","exercise");

body.appendChild(exercise1);

const para = document.createElement("p");
para.classList.add("red");
para.textContent = "Hey I am red!";
para.style.color  = "red";

const blue = document.createElement("h3");
blue.textContent = "I’m a blue h3!";
blue.style.color = "blue";

const box = document.createElement("div");
box.id = "box";
box.style.border = "5px solid black";
box.style.background = "pink";

const indiv = document.createElement("h1");
indiv.textContent = "I’m in a div";

exercise1.appendChild(para);
exercise1.appendChild(blue);
exercise1.appendChild(box);

const inpara = document.createElement("p");
inpara.textContent = "ME TOO!";
inpara.style.color  = "black";

box.appendChild(indiv);
box.appendChild(inpara);



