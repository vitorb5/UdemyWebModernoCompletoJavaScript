// Scopo é o que está dentro do bloco
{
    {
        {
            {
                var sera = "Será?"
                console.log(sera);
            }
        }
    }
}

console.log(sera);

function teste () {
    var local = 12
    console.log(local);
}

teste();
console.log(local);// Erro, pois ele não pode acessar a variável nesse caso por a variável estar acessivel apena dento do bloco da função, toda a variável definida dentro do bloco de uma função só fica acessivel dentro da função onde ela foi criada