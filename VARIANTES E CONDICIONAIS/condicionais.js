
/*

**true e false codificação binare 0 e 1**
10 > 5 = true
10 < 5 = false

const CamisetaRenanAzul = true
const CamisetaAlemao = false 

________________________________________________x
PRA VER OS MUTIPLOS:

const numero = 11;
const numeroPar = numero % 2;

console.log(numeroPar);
_________________________________________________X
SABER SE A MUTILPA É PAR OU IMPAR

const numero = 11;
const numeroPar = numero % 2 === 0; 

console.log(numeroPar);

**se o resto da divisão por 2 for maior que 0; Se for = a 0 é par se for maior que 0 é impar.**
__________________________________________________X

CONDICIONAIS 
const numero = 0;

const numeroPar = (numero % 2) === 0; // == significa igualdade e ignora as strings, o === também significa igualdade 

console.log(numeroPar);

    if (numeroPar){
        console.log('Par'); //se o resultado do multiplicador for par, imprintar "EXECUTEI"
}

    if(!numeroPar){
        console.log('Impar'); // A exclamação '!' é utilizada para negação. 
    }

    _______________________________________x
    UTILIZANDO IF E ELSE 

const numero = 15;
const numeroDivisivelPor5 = (numero % 5) === 0;

if (numeroDivisivelPor5){
    console.log('Sim');
} else {                    // O if significa "se" enquanto que o else significa "senão"
     console.log('Não');
}
_____________________________________________x
*/

const numero = 2;
const numeroDivisivelPor5 = (numero % 5) === 0;

if(numero === 0){
    console.log('O numero é inválido');
} else if (numeroDivisivelPor5){
    console.log('Sim');
} else {
    console.log('Não');
} 





    
