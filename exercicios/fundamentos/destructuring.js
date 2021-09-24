// novo recurso  do ES2015

const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco: {
        logadouro: "Rua: Abc",
        numero: 1000
    }
}

const { nome, idade } = pessoa;
console.log(nome, idade);

const {nome: novoNome, idade: idadeNova} = pessoa;
console.log(novoNome, idadeNova);

const {sobreNome /*= "Bittercourt"*/, bemHumorada = true} = pessoa;// Também funciona teste pessoal fora do curso
console.log(sobreNome, bemHumorada);

const {endereco: {logadouro, numero, cep = "00000-000"} } = pessoa;// Teste pessoal fora do curso
console.log(logadouro, numero, cep);

const {conta: {ag, num}} = pessoa// Erro por tentar acessar atributos que não estão aninhados, alguma coisa que não é objeto
console.log(ag, num);