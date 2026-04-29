const prompt = require('prompt-sync')();

console.log("--- Ordenação de Três Números Inteiros ---");

let N1 = Number(prompt("Insira um valor: "));
let N2 = Number(prompt("Insira um valor: "));
let N3 = Number(prompt("Insira um valor: "));

if(N1 >= N2 && N1 >= N3){
	if(N2 >= N3){
	console.log(`A ordem é: ${N1}, ${N2}, ${N3}`);
	}else {
	console.log(`${N2}, ${N3}, ${N1}`);
}} else if (N2 >= N1 && N2 >= N3) {
    if (N1 >= N3) {
        console.log(`${N2}, ${N1}, ${N3}`);
    } else {
        console.log(`${N2}, ${N3}, ${N1}`);
    }
} else {
    if (N1 >= N2) {
        console.log(`${N3}, ${N1}, ${N2}`);
    } else {
        console.log(`${N3}, ${N2}, ${N1}`);
    }
}