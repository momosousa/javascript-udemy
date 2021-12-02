let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

/* MANEIRA ANTIGA
const varATemp = varA;

varA = varB // B
varB = varC // C
varC = varATemp // A
*/

// MANEIRA MODERNA
[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC)
