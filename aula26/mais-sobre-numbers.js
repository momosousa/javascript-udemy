//IEEE 754-2008

let num1 = 1500; //number
let num2 = 2.5; //number


// console.log(num1.toString() + num2);
// num1 = num1.toString();
// console.log(typeof num1);
// console.log(num1.toString(2)); // Transforma em binário
// console.log(num2.toFixed(2)) // Mostra apenas duas casas decimais
// console.log(Number.isInteger(num1)); // Verifica se o número é inteiro (booliano)

// let temp =  num1 * `Olá`
// console.log(Number.isNaN(temp)); // Verifica se é um NaN (booliano, true quando não for número)


let num1B = 0.7; //number
let num2B = 0.1; //number

console.log(`Adição de números decimais (0.7 + 0.1 = ${num1 + num2})` );

num1B += num2B; // 0.8 (0.79999...)
num1B += num2B; // 0.9 (0.99999...)
num1B += num2B; // 1.0 (0.99999...)

num1B = num1B.toFixed(2); // (0.9999... passa a ser uma string, "exibindo" 1.00, mas o 0.999... ainda existe)
console.log(`\n "Aparecer" apenas as duas casas decimais com toFixed(2): ${num1B}`);
console.log(`Apenas com toFixed(2) é inteiro?: ${Number.isInteger(num1B)};`) // Por tanto, aqui retorna falso. É uma string, não é sequer um number, muito menos inteiro.)

//Solução
num1B = Number(num1B);
console.log(`\n E em seguida convertendo em number: ${num1B}`)
console.log(`Com toFixed e Number é inteiro?: ${Number.isInteger(num1B)};`) // O número agora é um inteiro.
console.log(`\n Resultado final: ${num1B} (Um resultado da adição de números decimais, sendo ele inteiro e do tipo number.)`)


