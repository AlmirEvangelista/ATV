while (true) {
    let populacaoA = prompt("Informe a população do país A:");
    let populacaoB = prompt("Informe a população do país B:");
    let taxaCrescimentoA = prompt("Informe a taxa de crescimento anual do país A:");
    let taxaCrescimentoB = prompt("Informe a taxa de crescimento anual do país B:");
    let anos = 0;
  
    // Validação das entradas
    if (populacaoA <= 0 || populacaoB <= 0 || taxaCrescimentoA <= 0 || taxaCrescimentoB <= 0) {
      console.log("As informações fornecidas são inválidas. Tente novamente.");
      continue;
    }
  
    while (populacaoA < populacaoB) {
      populacaoA += populacaoA * (taxaCrescimentoA / 100);
      populacaoB += populacaoB * (taxaCrescimentoB / 100);
      anos++;
    }
  
    alert(`Serão necessários ${anos} anos para que a população de A ultrapasse ou iguale a população de B.`);
  
    let continuar = prompt("Deseja continuar? (s/n)").toLowerCase();
    if (continuar !== "s" && continuar !== "sim") {
      break;
    }
  }
  