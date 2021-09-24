const valores = [7.7, 8.9, 6.1, 9.2];
console.log(valores [0], valores[2]);
console.log(valores[4]);// Retonra um undefined por ser um indíce que não existe ainda 

valores[4] = 10;// Inclui um valor no indice que vc indicar
console.log(valores);

console.log([4]);
console.log(valores.length);// Mostrar o tamanho do array

valores.push({id:2}, false, null, "teste")// Inclui um valor no array
console.log(valores);

console.log(valores.pop());// Remove o ultimo indíce do array
delete valores[0];// Deleta o indíce do array que vc solicitar

console.log(valores);
console.log(typeof valores);