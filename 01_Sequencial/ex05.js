const prompt = require('prompt-sync')();

console.log("--- Cálculo do Valor de uma Prestação em Atraso ---");

let valorInicial = Number(prompt("Insira o valor inicial dap prestação: "));
let mesesAtraso = Number(prompt("Insira o número de meses em atraso: "));
let taxaMensal = Number(prompt("Insira a taxa mensal: ")); 

let valorFinal = valorInicial * (1 + (taxaMensal/100) * mesesAtraso);

console.log(`O valor final será de: ${valorFinal}`);
