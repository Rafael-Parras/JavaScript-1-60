const prompt = require('prompt-sync')();

console.log("--- Cálculo da Média e Verificação de Aprovação com Exame ---");

let N1 = Number(prompt("Insira a primeira nota: "));

let N2 = Number(prompt("Insira a segunda nota: "));

let N3 = Number(prompt("Insira a terceira nota: "));

let N4 = Number(prompt("Insira a quarta nota: "));

let media = (N1 + N2 + N3 + N4) / 4;

if (media>=7){
	console.log(`Sua média é ${media}. \n Aprovado!`);
} else {
	console.log(`Sua média é ${media}. \n Em exame!`);

	let exame = Number(prompt("Insira a nota do exame: "));
	let novaMedia = (media + exame) / 2;

if (novaMedia >= 5){
	console.log(`Aprovado no exame!Sua nova média é: ${novaMedia}`);
} else {
	console.log(`Reprovado. Sua nova média é ${novaMedia}`);
	}
}