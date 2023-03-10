let numeros = [];
let soma = 0;
for (let i = 1; i <= 5; i++) {
  let num = parseFloat(prompt("Digite o " + i + "º número:"));
  numeros.push(num);
  soma += num;
}

let media = soma / numeros.length;

alert("A soma dos números é: " + soma);
alert("A média dos números é: " + media);

