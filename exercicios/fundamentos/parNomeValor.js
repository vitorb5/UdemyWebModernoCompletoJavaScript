// Par nome/Valor
const saudacao = "opa";// Contexto léxico é o local aonde sua vairavel foi definida físicamente no código, nesse caso foi definida no arquivo parNomeValor.js

function exec(){
    const saudacao = "fala"// Contexto léxico 2
    return saudacao
};

// Obejetos são grupos aninhados de pares nome/valor
const Cliente = {
    mome: "Pedro",
    idade: 32,
    peso: 90,
     endereco:{
         logadouro: "Rua: Muito Legal",
         numero: 123
     }
}

console.log(saudacao);
console.log(exec());
console.log(Cliente);