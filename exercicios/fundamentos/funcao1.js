//Função sem retorno
 function imprimirSoma(a, b){
     console.log(a + b);
 }

 imprimirSoma(2, 2);
 imprimirSoma(2);
 imprimirSoma(2, 2, 10, 5, 2, 4);
 imprimirSoma();

 // Função com retorno
function soma(a, b = 0){
    return a + b
};

console.log(soma(2, 2));
console.log(soma(2));
console.log(soma());