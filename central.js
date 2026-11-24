function abrirAba(evt, nomeAba) {
  var i, aba, botaoAba;

  // Esconde todos os conteúdos
  aba = document.getElementsByClassName("aba");
  for (i = 0; i < aba.length; i++) {
    aba[i].style.display = "none";
  }

  // Remove a classe "active" de todos os botões
  botaoAba = document.getElementsByClassName("botaoAba");
  for (i = 0; i < botaoAba.length; i++) {
    botaoAba[i].className = botaoAba[i].className.replace(" active", "");
  }

  // Mostra a guia atual e adiciona a classe "active" ao botão clicado
  document.getElementById(nomeAba).style.display = "block";
  evt.currentTarget.className += " active";
}