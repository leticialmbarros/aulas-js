/*

Funções são um pequeno trecho de codigo que podem ser invocadas pra
serem executados a qualquer momento que quisermos.




function teste (){                  //declarando a função ONDE OS () simbolizam os parametros da
    console.log ('teste');
}

teste();                           //invocando a função para ser executada
teste();                           
teste();                      
___________________________________________________________xxxxxx


function sayMyName(name){           //declarando a função ONDE OS () simbolizam os parametros da função
   console.log ('Your name is ' + name); 
}                

sayMyName('Leticia');
sayMyName('Maria');
________________________________________________________xxxxxxxxxxxxxxxxx


function quadrado(valor){           //calculando potencia
   return valor * valor;            // return devolve um numero ou valor
 }                
 
 const quadradoDeDez = quadrado(10);
 console.log (quadrado(10) + quadrado(10));
 
 __________________________________________________xxxxxxxxxxxxx


function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    retur valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));
_________________________________________________________xxxxxxxx
>>function main significa função principal.

function main(){                         
    console.log('Programa Principal');
    
}

main();
main();
____________________________________________________________-xxxxxxxx

FAZENDO UM EXERCICIO.
2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 
Formula do IMC:
IMC = peso / (altura * altura)
Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.
IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;


//FUNCAO PARA CALCULAR IMC:

function calcularImc(peso,altura) {
    return peso / Math.pow(altura, 2);              //Math.pow(altura, 2) é uma biblioteca de funções matematicas para potencializar ou seja "tanto ao quadrado ou ao cubo e etc"
}

const peso = 75;
const altura = 1.78;
const imc = calcularImc(peso,altura);
console.log(imc);

if (imc < 18.5) {
    console.log('Abaixo do Peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Peso Normal');
} else if (imc >= 25 && imc < 30) {
    console.log('Acima do Peso');
} else if(imc >= 30 && imc < 40){
    console.log('Obeso');
} else{
    console.log('Obesidade Grave');
}

______________________________________xxxxxxxxxxxxxxxxxxxxxxxxxx

// CLASSIFICAR O IMC

function calcularImc(peso,altura) {
    return peso / Math.pow(altura, 2);              
}

function classificarImc(imc){

if (imc < 18.5) {
    return 'Abaixo do Peso';
} else if (imc >= 18.5 && imc < 25) {
    return 'Peso Normal';
} else if (imc >= 25 && imc < 30) {
    return 'Acima do Peso';
} else if(imc >= 30 && imc < 40){
    return 'Obeso';
} else{
    return 'Obesidade Grave';
}
}

function main(){

*/

function calcularImc(peso,altura) {
    return peso / Math.pow(altura, 2);              
}

function classificarImc(imc){

if (imc < 18.5) {
    return 'Abaixo do Peso';
} else if (imc >= 18.5 && imc < 25) {
    return 'Peso Normal';
} else if (imc >= 25 && imc < 30) {
    return 'Acima do Peso';
} else if(imc >= 30 && imc < 40){
    return 'Obeso';
} else{
    return 'Obesidade Grave';
}
}

(function (){          //uma função qundo declarada equipara-se a uma variavel.
    
    const peso = 75;
    const altura = 1.75;
    
    const imc = calcularImc(peso,altura);
    console.log(classificarImc (imc));

}) // função invocada entre dois parenteses chama-se "função imediatamente invocada";


main();













