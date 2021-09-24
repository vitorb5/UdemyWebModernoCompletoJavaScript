var numero = 2; // Var tem escopo global e escopo de função

{
    let numero = 4; // Tem escopo de global, escopo de função e escopo de bloco.
    console.log("dentro " + numero);/*Caso a variavel let dentro do bloco for 
    declarada como uma varivel que não existe e no log estiver chamando uma 
    variavel let que existe mesmo ela estando do lado de fora do bloco será dada 
    proridade para a variavel de fora.*/ 
}

console.log("fora " + numero);