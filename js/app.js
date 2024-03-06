let containerElement = document.querySelector('.container');


// 1 creo un ciclo for per stampare 100 numeri
//  - dichiaro la variabile 'i' e la assegno al valore zero
//  - setto il contatore < 100
// - imposto l'incremento di 'i' con ++

for (let i = 0; i < 100; i++) {
    let num = i + 1;

    // 2 SE i numeri che sono sia multipli di 3 che di 5, stampo:
    if ((num % 3 == 0) && (num % 5 == 0)) {

        containerElement.innerHTML += `<h4>FizzBuzz</h4>`
        // - “FizzBuzz” al posto del numero.
        console.log('FizzBuzz');
    }

    // 3 ALTRIMENTI SE i numeri sono multipli di 3 stampo:
     else if(num % 3 == 0) {

        containerElement.innerHTML += `<h5>Fizz</h5>`
         // - “Fizz” al posto del numero
         console.log('Fizz');
     }

    // 4 ALTRIMENTI SE i numeri sono multipli di 5 stampo:

      else if(num % 5 == 0) { 

        containerElement.innerHTML += `<h6>Buzz</h6>`
          // - “Buzz” al post del numero.
          console.log('Buzz');
    }

    // 5 ALTRIMENTI STAMPO 'num'
     else {

        containerElement.innerHTML += `<h3>Tutti i numeri</h3>`
        console.log(num);
     }
}
