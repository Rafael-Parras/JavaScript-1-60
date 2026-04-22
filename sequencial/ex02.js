const prompt = require('prompt-sync')();

console.log("--- Conversor de Temperatura ---");

let Fahrenheit = Number(prompt("Digite a temperatura em °Fahrenheit: "));
let Celsius = (Fahrenheit - 32) * 5/9;

console.log("A temperatura em Celsius é: " + Celsius);