// {} ~> representa um objeto literal ou um bloco de js
// [] ~> representa as listas de strings
// Com os arrays é possivel armazenar em uma variavel só entre " " um conjunto de dados;

/*
USANDO ARRAYS:

const alunos = ['Joao', 'Victor', 'Mariana'];
    console.log(alunos);

SELECIONANDO UMA POSIÇÃO NO ARRAY:

const alunos = ['Joao', 'Victor', 'Mariana'];
    console.log(alunos[0]);     //para SELECIONAR algum elemento em alguma posição
  
   
   
//ADICIONANDO UM ITEM NA LISTA/ARRAY:

const alunos = ['Joao', 'Victor', 'Mariana'];

alunos.push('Luana');                       //utiliza-se o .push para adicionar elemento
    console.log(alunos[3]);



    //ou

    const alunos = ['Joao', 'Victor', 'Mariana'];

    alunos.push('Luana');   
    alunos[2] = 'leticia';                   // adicionando dinamicamente
        console.log(alunos);

ADICIONANDO DINAMICAMENTE:

// console.log(notas.length);   O length me mostra o tamanho da lista;

const notas = [];

    notas.push(5);
    notas.push(7);
    notas.push(8);
    notas.push(2);
    notas.push(5);
    notas.push(8);

const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];

    console.log(soma/5);

// PARA PERCORRER DINAMICAMENTE A LISTA:
// USA-SE O for 


const notas = [];

    notas.push(5);
    notas.push(7);
    notas.push(8);
    notas.push(2);
    notas.push(5);
    notas.push(8);

const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];

*/

// O for funciona para percorrer principalmente uma qnt especifica de vezes;
// let index = i; é a variavel responsavel por controlar a "rodada" da vez;
// i < array.length; é a estrutura condicional que retorna um boleano
// index++; representa o que acontece no nosso for, i++ encrementa 1 na variavel

const nome = 'Leticia Maria Lima Barros'

for (let i = 0; i < nome.length; i++) {
    
    console.log(nome[i]); 
    
}



























