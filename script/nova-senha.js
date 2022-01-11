// SENHA 1 PESSOA 

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

document.getElementById('olho1').addEventListener     ('mousedown', function() {
    document.getElementById('pass1').type = 'text';
});

document.getElementById('olho1').addEventListener('mouseup', function() {
    document.getElementById('pass1').type = 'password';
});

// Para que o password não fique exposto apos mover a imagem.
document.getElementById('olho1').addEventListener('mousemove', function() {
    document.getElementById('pass1').type = 'password';
});

// CONFIRM SENHA PESSOA

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

document.getElementById('olho2').addEventListener('mousedown', function() {
    document.getElementById('pass2').type = 'text';
});

document.getElementById('olho2').addEventListener('mouseup', function() {
    document.getElementById('pass2').type = 'password';
});

// Para que o password não fique exposto apos mover a imagem.
document.getElementById('olho2').addEventListener('mousemove', function() {
    document.getElementById('pass2').type = 'password';
});

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
