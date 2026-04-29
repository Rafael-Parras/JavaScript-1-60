const prompt = require('prompt-sync')();
console.log("--- Classificação de Números Positivo ou Negativo ---");

    let N1 = Number(prompt("Insira um número: "));
    
    if (N1 > 0) {
        console.log("Número positivo")
    
    } else if (N1 < 0){
        console.log("Número negativo");
    } else {
        console.log("Número neutro");
    }