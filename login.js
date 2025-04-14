document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const usuario = usuarios.find(u => u.email === email && u.senha === senha);

  if (!usuario) {
    alert("Email ou senha incorretos.");
    return;
  }

  localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
  alert("Login bem-sucedido!");
  window.location.href = "arearestrita.html";
});
