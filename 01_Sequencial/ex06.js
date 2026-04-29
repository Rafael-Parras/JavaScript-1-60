const prompt = require('prompt-sync')();

console.log("--- Troca de Valores ---");

// Entrada
let A = Number(prompt("Digite o valor de A: "));
let B = Number(prompt("Digite o valor de B: "));

// Mostrar antes
console.log(`Antes da troca: A = ${A}, B = ${B}`);

// Processamento (troca)
let temp = A;
A = B;
B = temp;

// Mostrar depois
console.log(`Depois da troca: A = ${A}, B = ${B}`);