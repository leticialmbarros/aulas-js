/*
DESAFIO: Faça programa para calcular valor gasto de combustivel em uma viagem. 
Você terá três variaveis, sendo elas: 
1- Preço do Combustivel; 
2 Valor Médio do combustivel gasto; 
3- Distancia em KM;
Imprima no console o valor que será gasto para realizar uma viagem.
*/

const precoCombustivel = 5.79;
const KmPorLitro = 10;
const distaciaEmKm = 100;

const litrosConsumidos = distaciaEmKm / KmPorLitro;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto);
