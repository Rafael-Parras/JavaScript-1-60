const prompt = require('prompt-sync')();

console.log("--- Maior e Menor Valor ---");

const N1 = Number(prompt("Insira um valor: "));
const N2 = Number(prompt("Insira um valor: "));
const N3 = Number(prompt("Insira um valor: "));
const N4 = Number(prompt("Insira um valor: "));
const N5 = Number(prompt("Insira um valor: "));

const numeros = [N1, N2, N3, N4, N5];

const maior = Math.max(...numeros);
const menor = Math.min(...numeros);

console.log(`Maior valor: ${maior}`);
console.log(`Menor valor: ${menor}`);