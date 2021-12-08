const numero = Number(prompt(`Digite um número:`));
const numeroTitulo = document.getElementById(`numero-titulo`);
const texto = document.getElementById(`texto`);

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p>Raiz quadrada: <b>${numero ** 0.5}</b></p>`

if (Number.isInteger(numero) === true){
    texto.innerHTML += `<p>${numero} é inteiro: <b>Sim</b></p>`;
    }else{
    texto.innerHTML += `<p>${numero} é inteiro: <b>Não</b></p>`;
}

if (Number.isNaN(numero) === true){
    texto.innerHTML += `<p>É NaN: <b>Sim</b></p>`;
    }else{
    texto.innerHTML += `<p>É NaN: <b>Não</b></p>`;
}

texto.innerHTML += `<p>Arredondando para cima: <b>${Math.ceil(numero)}</b></p>`
texto.innerHTML += `<p>Arredondando para baixo: <b>${Math.floor(numero)}</b></p>`
texto.innerHTML += `<p>Com duas casas decimais: <b>${numero.toFixed(2)}</b></p>`

