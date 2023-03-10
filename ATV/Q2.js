while (true) {
    let nome_usuario = prompt("Digite o nome de usuário:");
    let senha = prompt("Digite a senha:");
    if (nome_usuario === senha) {
      alert("Erro: a senha não pode ser igual ao nome de usuário. Digite novamente.");
    } else {
      alert("Usuário e senha cadastrados com sucesso!");
      break;
    }
  }
  