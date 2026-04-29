const prompt = require('prompt-sync')();

console.log("--- Equação do 2º Grau (Bhaskara) ---");

let a = Number(prompt("Digite o valor de a: "));
let b = Number(prompt("Digite o valor de b: "));
let c = Number(prompt("Digite o valor de c: "));

let delta = b**2 - 4*a*c;

if (delta < 0){
	console.log("Não existem raízes reais.");
} else if (delta == 0){
	let x = -b / (2*a);
	console.log(`Existem apenas uma raiz real: ${x}`);
}else {
	let x1 = (-b + Math.sqrt(delta)) / (2*a);
	let x2 = (-b - Math.sqrt(delta)) / (2*a);

	console.log(`As raízes são: ${x1} e ${x2}`);
}