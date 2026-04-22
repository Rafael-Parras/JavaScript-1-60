const prompt = require('prompt-sync')();

console.log("--- Cálculo da Quantidade de Combústivel Gasta em uma Viagem ---");

let distancia = Number(prompt("Insira a distância percorrida em quilômetros: "));
let gasolina = Number(prompt("Insira o consumo do veículo em quilômetros por litro:"));

let litro = distancia/gasolina;

console.log (`A quantidade de combustível gasta na viagem é de: ${litro}`);