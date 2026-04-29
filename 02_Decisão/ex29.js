const prompt = require('prompt-sync')();
console.log("--- Cálculo da Média e Verificação de Aprovação ---");

let N1 = Number(prompt("Insira a primeira nota: "));

let N2 = Number(prompt("Insira a segunda nota: "));

let N3 = Number(prompt("Insira a terceira nota: "));

let N4 = Number(prompt("Insira a quarta nota: "));

let media = (N1 + N2 + N3 + N4) / 4;

console.log(`A média das notas é: ${media}`);

if (media > 5) {
console.log("Aprovado!")
} else {
console.log("Reprovado!");
}