let num1 = 9.49;

let num2 = Math.floor(num1); // Arredonda para o INTEIRO mais próximo ABAIXO
let num2 = Math.ceil(num1); // Arredonda para o INTEIRO  mais próximo ACIMA
let num2 = Math.round(num1); // Arredonda para o número inteiro mais próximo




console.log(Math.max(1,2,3,5,6,8,-50,1500,9,7,6)) // Retorna o maior número de uma sequência
console.log(Math.min(1,2,3,5,6,8,-50,1500,9,7,6)) // Retorna o menor número de uma sequência



// const aleatorio = Math.random(); // Gera um número aleatório entre 0 e 0.9
const aleatorio = Math.round(Math.random() * (10 - 5) + 5); // Número aleatório entre 10 e 5
console.log(aleatorio);

console.log(Math.PI) // Retorna o valor de PI
console.log(Math.pow(2,10)); // Potência - 2 elevado a 10


let num3 = 9;
console.log(num3 ** (1/2)); // Pegar raíz quadrada de num3
console.log(num3 ** 0.5) // Outro jeito de pegar a raíz quadrada de num3

