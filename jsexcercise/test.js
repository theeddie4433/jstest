        let a = 10 
        let max = 57
        let actual = max - 13
        let percentage = actual/max

        const string = "Esto es un string en JavaScript."; 
        const badString = string;
        const dblqts =  'como puedo escribir "es" ';
        const button = document.querySelector("button");

        console.log (3+4) ;
        console.log ("1"+2+3+4+5+6);
        console.log ((4 + 6 + 9) / 77);
        console.log (a);
        console.log (string);
        console.log(badString);
        console.log(dblqts)

        function greet() {
            const name = prompt('¿Cómo te llamas?');
            alert(`Hola ${name}, que gusto verte!`);
        }

        button.addEventListener("click", greet);

        //Convierte una  constante string en numero
        const myString = "123";
        const myNum = Number(myString);
        console.log(typeof myNum);

        //Convierte una contante numero en string  
        const myNum2 = 123;
        const myString2 = myNum2.toString();
        console.log(typeof myString2);

        let age = 12
        let age2 = 50

        if (!(90 >= age && 14 <= age)) {
            alert ("Ya diste el viejaso, mi buen")
        }

        if (90 <= age || 14 >= age) {
            alert ("Ya diste el viejaso000, mi buen")
        }

        if (age2 < 90 && age2 > 14) {
            alert ("En el puntoo")
        }
    //    else if (age > 90) {
    //        alert("Ya andas en las últimas")
    //    }
    //    else {
    //        alert("Al principio del camino")
    //    }

    function checkAge(age) {
        if (age > 18) {
          return true;
        } else {
          return confirm('Did parents allow you?');
        }
      }

     function checkAge(age){
       return (age>18) || confirm("Did parents allow you?");
     } 

     function checkAge(age) {
        return (age > 18) ? true : confirm('Did parents allow you?');
      }

    function min(a,b){
        if(a>b){
            return b;
        }
        return a;
    }

    function min(a,b){
        return(a>b) ? b : a;
    }
//-----------------------------
    function ask(question, yes, no) {
        if (confirm(question)) yes();
        else no();
      }
      
      ask(
        "Do you agree?",
        () => alert("You agreed."),
        () => alert("You canceled the execution.")
      );

//Modifica el codigo de arriba para que use funciones de flechas en vez de funciones definidas
