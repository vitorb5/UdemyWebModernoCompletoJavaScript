const escola = "cod3r";

console.log(escola.charAt(4));// Ele vai imprimir a caracter que está no indíce 4
console.log(escola.charAt(5));// Ele vai imprimir a caracter que está no indíce 5 que nesse caso vai ser vazio pq ele não achou nenhum carater nesse indíce

console.log(escola.charCodeAt(3));// Aqui ele está pegando o valor do indice na tabela "Asc"
console.log(escola.indexOf("3"));// Ele verifica se existe o número 3 e pega em que indeci esse número está

console.log(escola.substring(1));// Imprime do indece 1 para frente
console.log(escola.substring(0,3));// imprime do indíce 0 até o final pulando o indíce 3

console.log("escola".concat(escola));// Um novo mode de concactenar
console.log('escola' + escola);// Outro modo de concactenar

console.log(escola.replace(3, "e"));// Substitui 3 pela letra "e"
console.log(escola.replace(/\w/g, "e"));// Substitui todas as letras pela letra que está entre " " usando o comando "g" de global


console.log('Ana, Maria, Pedro'.split(",")); // usando a função split ele pega todo o conteudo separado pela virgula e tranforma em arrey
