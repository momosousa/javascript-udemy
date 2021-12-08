//                 0       1        2
let alunos = [`Luiz`, `Maria`, `João`];

alunos[0] = `Eduardo`;
alunos[3] = `Mônica`;

alunos[alunos.length] = `Junior`; // Adiciona no fim
alunos.push(`Pedro`); // Adiciona no fim
alunos.unshift(`Verônica`); // Adiciona no começo
alunos.pop(); // Remove o último elemento
alunos.shift // Remove o primeiro elemento
delete alunos[1] // Remove elemento sem alterar o índice dos outros

const removido = alunos.pop();
const removido2 = alunos.shift();


console.log(removido);
console.log(removido2);

console.log(alunos);

console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos.slice(1, 4));
console.log(alunos.slice(1, 2));

console.log(typeof alunos); // Objeto
console.log(alunos instanceof Array);
