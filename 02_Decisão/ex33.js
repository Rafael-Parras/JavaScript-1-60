const prompt = require('prompt-sync')();

console.log("--- Valores Divisiveis por 2 e 3 ---");

let valor1 = Number(prompt("Insira o valor 1: "));
let valor2 = Number(prompt("Insira o valor 2: "));
let valor3 = Number(prompt("Insira o valor 3: "));
let valor4 = Number(prompt("Insira o valor 4: "));

console.log("Valores divisiveis por 2 e 3: ");

if (valor1 % 2 === 0 && valor1 % 3 === 0){
    console.log(`${valor1}`);
}
if (valor2 % 2 === 0 && valor2 % 3 ===0){
    console.log(`${valor2}`);
}
if (valor3 % 2 === 0 && valor3 % 3 === 0){
    console.log(`${valor3}`);
}
if (valor4 % 2 === 0 && valor4 % 3 === 0){
    console.log(`${valor4}`);
}