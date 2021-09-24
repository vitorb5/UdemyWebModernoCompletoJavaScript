function tratarErroELancar(erro){
    
    /*
    throw new Error("Entrar contato com o T.I");
    throw 10
    throw true
    throw "menssager"
    */
    throw{
        nome: erro.name,
        msg:  erro.message,
        data: new Date
    }
}

function imprimirNomeGritado (obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!!');
    }catch (e) {
        tratarErroELancar(e)
    }finally{
        console.log("Final");
    }
}

const obj = {name: "Roberto"}
imprimirNomeGritado(obj)