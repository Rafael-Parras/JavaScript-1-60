const prompt = require('prompt-sync')();

console.log("--- Soma e Verificação ---");

let N1 = Number(prompt("Insira o primeiro valor: "));
let N2 = Number(prompt("Insira o segundo valor: "));
let N3 = Number(prompt("Insira o terceiro valor: "));

let soma = (N1 + N2 + N3);

if (soma > 100){
console.log(`Resultado: ${soma}`)
};