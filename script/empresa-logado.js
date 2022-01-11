function myFunction(imgs) {
  // Obtenha a imagem expandida
  var expandImg = document.getElementById("expandedImg");
  // Pegue o texto da imagem
  var imgText = document.getElementById("imgtext");
  // Use o mesmo src na imagem expandida que a imagem que está sendo clicada na grade
  expandImg.src = imgs.src;
  // Mostra o elemento do contêiner (oculto com CSS)
  expandImg.parentElement.style.display = "block";
}

// AREA DO MODAL DE TERMOS
// BUSCA DE ID
var modal = document.getElementById('id01');

// Quando o usuário clicar em qualquer lugar fora do modal, feche-o
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// AREA DO MODAL DE PRIVACIDADE
// BUSCA DE ID
var modal = document.getElementById('id02');

// Quando o usuário clicar em qualquer lugar fora do modal, feche-o
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
