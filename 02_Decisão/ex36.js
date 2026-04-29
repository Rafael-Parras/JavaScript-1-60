const prompt = require('prompt-sync')();

console.log("--- Par ou Ímpar ---");

let N1 = Number(prompt("Insira um número inteiro: "));

if(N1 % 2 === 0 ){
    console.log(`O número ${N1} é par`);
} else {
    console.log(`O número ${N1} é ímpar`)
}