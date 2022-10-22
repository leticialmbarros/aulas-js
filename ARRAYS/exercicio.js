/*
DESAFIO 1 - Crie um programa que dado um número imprima a sua tabuada.

RESPOSTA:

const numero = 9;
for (let i = 1; i < 10; i++) {
      console.log(i * numero);  

}
________________________XXXXXXXXXXXXXX*/

// DESAFIO 2 - Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

const numeros = [0,1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < numeros.length; i++) {
       const numero = numeros [i];
     
       if (numero % 2 === 0){                   //imprimindo numeros pares
          console.log(numero);
       }

} 







