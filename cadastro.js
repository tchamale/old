document.getElementById("cadastroForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirmarSenha").value;

  const dia = document.getElementById("dia").value;
  const mes = document.getElementById("mes").value;
  const ano = document.getElementById("ano").value;
  const dataNascimento = `${dia}/${mes}/${ano}`;

  if (senha !== confirmarSenha) {
    alert("As senhas não coincidem.");
    return;
  }

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  if (usuarios.some(u => u.email === email)) {
    alert("Esse email já está cadastrado.");
    return;
  }

  const novoUsuario = { nome, email, senha, dataNascimento };
  usuarios.push(novoUsuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  localStorage.setItem("usuarioLogado", JSON.stringify(novoUsuario));

  alert("Cadastro realizado com sucesso!");
  window.location.href = "arearestrita.html";
});
