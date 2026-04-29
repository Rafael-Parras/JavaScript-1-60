const prompt = require('prompt-sync')();

console.log("--- Multiplicação e Verificação ---");

let N1 = Number(prompt("Digite um número: "));

if (N1 * 2 >= 30){
    console.log(`Resultado: ${N1 * 2}`)
};