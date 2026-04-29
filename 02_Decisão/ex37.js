const prompt = require('prompt-sync')();

console.log("--- Verificação de Faixa de Valor ---");

let N1 = Number(prompt("Digite um número inteiro: "));

if(N1 >= 1 && N1 <= 9){
console.log("Faixa Permitida!");
} else { 
console.log("Faixa não permitida");
}