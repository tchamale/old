document.addEventListener("DOMContentLoaded", () => {
  const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

  if (!usuario) {
    alert("Acesso negado! Faça login primeiro.");
    window.location.href = "login.html";
    return;
  }

  // Exibir nome no topo
  document.getElementById("nomeUsuario").textContent = `Olá, ${usuario.nome}`;

  // Preencher informações do perfil
  document.getElementById("perfilNome").textContent = usuario.nome;
  document.getElementById("perfilEmail").textContent = usuario.email;
  document.getElementById("perfilNascimento").textContent = usuario.dataNascimento;

  // Simular publicações
  const publicacoes = [
    { titulo: "Lançamento do novo produto", data: "10/03/2025" },
    { titulo: "Evento anual da empresa", data: "22/02/2025" },
    { titulo: "Parceria com a ONG local", data: "15/01/2025" }
  ];

  const lista = document.getElementById("listaPublicacoes");
  publicacoes.forEach(pub => {
    const li = document.createElement("li");
    li.textContent = `${pub.data} - ${pub.titulo}`;
    lista.appendChild(li);
  });
});

function sair() {
  localStorage.removeItem("usuarioLogado");
  alert("Você saiu com sucesso.");
  window.location.href = "login.html";
}
