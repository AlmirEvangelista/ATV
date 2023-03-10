while (true) {
    let nome = prompt("Digite o nome (maior que 3 caracteres):");
    let idade = parseInt(prompt("Digite a idade (entre 0 e 150):"));
    let salario = parseFloat(prompt("Digite o salário (maior que zero):"));
    let sexo = prompt("Digite o sexo (f ou m):").toLowerCase();
    let estado_civil = prompt("Digite o estado civil (s, c, v ou d):").toLowerCase();
  
    if (nome.length <= 3) {
      alert("O nome deve ter mais de 3 caracteres. Tente novamente.");
    } else if (idade < 0 || idade > 150) {
      alert("A idade deve ser entre 0 e 150 anos. Tente novamente.");
    } else if (salario <= 0) {
      alert("O salário deve ser maior que zero. Tente novamente.");
    } else if (sexo !== "f" && sexo !== "m") {
      alert("O sexo deve ser f ou m. Tente novamente.");
    } else if (estado_civil !== "s" && estado_civil !== "c" && estado_civil !== "v" && estado_civil !== "d") {
      alert("O estado civil deve ser s, c, v ou d. Tente novamente.");
    } else {
      alert("Informações validadas com sucesso!");
      break;
    }
  }

  
