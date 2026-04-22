const prompt = require('prompt-sync')();

console.log("--- Cálculo do Volume de uma Lata de Óleo ---");

let raio = Number(prompt("Insira o raio da lata em centímetros: "));
let altura = Number(prompt("Insira a altura da lata em centímetros: "));

let volume = Math.PI * (raio * raio) * altura;


console.log(`O volume da lata é: ${volume}  cm³`);