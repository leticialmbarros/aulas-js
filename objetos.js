/* 
 console.log é um tipo de objeto - uma variavel do tipo objeto
 objeto agrupa valores, utiliza-se { } ().


const leticia = {
    nome:"Leticia", 
    idade: 27 
};

console.log(leticia.nome);
console.log(leticia.idade);
console.log(leticia)
________________________________________________xxxxxxxxxxxxxxx


//encrementando dinamicamente;
// coleção dinamica de chave e valor;

const leticia = {
    nome:"Leticia", 
    idade: 27 
};

delete leticia.nome;

leticia.altura = 1.65;
    console.log(leticia);

 
//uma função dentro de um objeto é chamado de metodo;
// this - significa um contexto pra função
// um objeto é uma estrutura dinamica de chave e valor e dentro desses valores podem haver funcoes podendo até ser substituido;


const leticia = {
    nome: 'Leticia Barros',
    idade: 27,

    descrever: function() {
        console.log('Meu nome é ${this.nome} e minha idade é ${this.idade}');
    }
}

leticia.descrever();

*/
const pessoa = {
    nome: 'Leticia Barros',
    idade: 27,

    descrever: function() {
        console.log('Meu nome é ${this.nome} e minha idade é ${this.idade}');
    }
}

const atributo = "idade"

console.log(pessoa['nome']);
pessoa.nome = 'teste';








