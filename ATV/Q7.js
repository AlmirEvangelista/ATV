let numeros = [];
for (let i = 1; i <= 5; i++) {
  let num = parseInt(prompt("Digite o " + i + "º número:"));
  numeros.push(num);
}

let maior = numeros[0];
for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maior) {
    maior = numeros[i];
  }
}

alert("O maior número é: " + maior);
