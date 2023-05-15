let output = document.querySelector('.output');
output.innerHTML = '';


for (let i = 10; i>=0; i--) {
   
    const para = document.createElement('p');

    if(i===10){
    para.textContent = "Countdown: " + i ;
    console.log(para.textContent);
    } else if(i===0){
        para.textContent = "0";
        para.textContent = "Launch!!";
        console.log(para.textContent);
    }else {
        para.textContent = i;
        console.log(para.textContent);
    }
    output.appendChild(para);
}
