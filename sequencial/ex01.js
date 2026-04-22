// Importando o módulo que você instalou via terminal
const prompt = require('prompt-sync')();

console.log("--- Conversor de Temperatura ---");

let temp = Number(prompt("Digite a temperatura em °C: "));
let fahrenheit = (temp * 9/5) + 32;

console.log("A temperatura em Fahrenheit é: " + fahrenheit);