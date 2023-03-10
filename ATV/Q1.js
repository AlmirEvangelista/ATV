while (true) {
    let nota = parseFloat(prompt("Digite uma nota de 0 a 10:"));
    if (nota < 0 || nota > 10) {
      alert("Nota inválida. Digite novamente.");
    } else {
      alert(`Nota válida: ${nota}`);
      break;
    }
  }

