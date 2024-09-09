
const Palindromo = (num) => num === num.toString(2).split('').reverse().join('');


function CalculaPalindromo () {
    let numero = document.getElementById('number').value;
    
    const binario = numero.toString(2);
    const decimal = numero.toString(10);
    
    
 let esPalindromo = Palindromo(binario)&&Palindromo(decimal)?"El numero es Palindromo de doble base":"El numero no es palindromo de doble base";
 
 alert(esPalindromo)
}

function  ConteoCaracteres() {
    
    let word = document.getElementById('cad').value;
    
    word = word.trim();
    
    let dict = {};
    let concatena = '';
    
    for (let i = 0; i < word.length; i++) {
        if (dict[word[i]]) {
            dict[word[i]]++;
        }
        else{
            dict[word[i]] = 1;
        }
    }
    
    for (const key in dict) {
        concatena+=`${key} : ${dict[key]} \n`
    }
    
    alert(concatena)
}


function CalculaAnio () {
    
    let anio = document.getElementById('anio').value;
    
    const number = parseInt(anio);
    
    let esBiciesto = ((number%4===0 &&  number%100 !==0 ) || number%400 === 0)
    
   let  message = esBiciesto?"El año es biciesto":"El año no es biciesto"
   
   alert(message);
    
}


function SumaPrimos () {
    
    let suma = document.getElementById('sumaP').value;
    
    const num = parseInt(suma)
    suma = 0;
    
    for (let i = 0; i < num; i++) {
        suma+=verificaPrimo(i);
    }
    
    alert(`la suma de los primos es: ${suma}`)
    
    
}


function verificaPrimo (n) {
    if (n <= 1) return 0; 
    
    if (n === 2||n===3)  return n;  
    
    if (n % 2 === 0 || n%3===0) return 0; 
    
    
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            return 0;
        }
    }
    return n;
}