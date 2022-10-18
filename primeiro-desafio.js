/*
DESAFIO: Faça programa para calcular valor gasto de combustivel em uma viagem. 
Você terá três variaveis, sendo elas: 
1- Preço do Combustivel; 
2 Valor Médio do combustivel gasto; 
3- Distancia em KM;
Imprima no console o valor que será gasto para realizar uma viagem.

_______________________________RESPOSTA_____________________________
const precoCombustivel = 5.79;
const KmPorLitro = 12;
const distaciaEmKm = 1580;

const litrosConsumidos = distaciaEmKm / KmPorLitro;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto);

_____________________________________________________________________x
*/
//ARREDONDANDO VALORES - usa-se o .tofixed("aqui que será a quantidade de n após a casa decimal");

const precoCombustivel = 5.79;
const KmPorLitro = 12;
const distaciaEmKm = 1580;

const litrosConsumidos = distaciaEmKm / KmPorLitro;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2)); 