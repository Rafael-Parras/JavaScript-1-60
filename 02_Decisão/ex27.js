const prompt = require('prompt-sync')();

console.log("--- Cálculo da Diferença entre Dois Números Inteiros ---");

let valores = prompt("Digite dois números separados por espaço: ")
    .split(" ")
    .map(Number);

let n1 = valores[0];
let n2 = valores[1];

let diferença = (n1 - n2);

console.log(`A diferença entre eles é: ${diferença}`);