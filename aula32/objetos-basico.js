// AULA 32 - OBJETOS   

// Criar objeto manualmente

const pessoa1 = {
    nome: 'Mônica',
    sobrenome: 'Sousa',
    idade: 16,

    fala() {
        // console.log(`${pessoa1.nome} ${pessoa2.sobrenome}, ${pessoa1.idade} anos`);c]
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    },

    incrementaIdade() {
        this.idade++;
        console.log(`Em 2023 terei: ${this.idade}`);
    }
};

const pessoa2 = {
    nome: 'Junior',
    sobrenome: 'Vaz',
    idade: 19
};

pessoa1.fala();
pessoa1.incrementaIdade();

// Criar objeto por função

function criaPessoa (nome, sobrenome, idade) { //Parâmetros
    return {nome, sobrenome, idade};
}

const pessoa3 = criaPessoa(`Verônica`,`Almeida`, 48); // Argumentos
const pessoa4 = criaPessoa(`Valdinê`,`Sousa`, 40);
const pessoa5 = criaPessoa(`Lucimara`,`Almeida`, 21);

console.log(pessoa5.nome)

