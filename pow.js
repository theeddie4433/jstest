function pow(x,n){
    let result = x; 
    for(let i = 1 ;i < n;i++){
        result *= x;
    }
    return result;
}
let x = prompt("x?"," ");
let n = prompt("n?", " ");

if(n<1){
    alert("La potencia no es soportada, usa un integral positivo")
}else{
    alert(pow(x,n));
}