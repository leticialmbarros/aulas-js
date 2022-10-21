//pessoa é uma classe que descreve como tem que ser uma pessoa
// classe é uma definição de como deveria ser
// instancia é uma ocorrencia daquele objeto

class pessoa {
    nome;
    idade;

    constructor(nome,idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log('Meu nome é ${this.nome} e minha idade é ${this.idade}');
    }
}

const victor = new pessoa('victor', 25);
const renan = new pessoa('renan', 30 );

victor.descrever();
renan.descrever();



