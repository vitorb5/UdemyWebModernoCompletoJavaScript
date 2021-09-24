// Armazenando uma função em uma variável
const imprimirSoma = function (a, b){
    console.log(a + b);
}

imprimirSoma (5, 5)

// Armazenado uma função arrow em variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(5, 5));

// Retorno implicíto
const subtracao = (a, b) => a -b;
console.log(subtracao(5, 4));

const imprimir2 = a => a;
console.log("Legal");