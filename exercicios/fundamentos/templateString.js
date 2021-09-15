const nome = "Rebeca";
const concactenacao = "Olá " + nome;// Concactenando com "+" ele não permiti a quebra de linha no meio da concactenção
const template = `
    Olá
    ${nome}`;// Já "Template String" eu posso quebrar a linha no meio do texto além de que concactenar usando template string é mais performatico
console.log(concactenacao + template);

// Expressões matemática
console.log(`1 + 1 = ${1+1}`);// No template String vc tambpem pode além da concactenção vc pode tbm efetuar expressões matemática

const up = texto => texto.toUpperCase()// No template String vc também pode ultilzar funções que no caso aqui é a"UpperCase" que passando o texto nessa função vc deixa todo esse texto em maiúsculo 
console.log(`Ei..... ${up('cudiado')}`);