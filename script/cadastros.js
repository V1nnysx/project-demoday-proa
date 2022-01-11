function openCity(cityName, elmnt, color) {
    // Oculte todos os elementos com class = "tabcontent" por padrão * /
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Remova a cor de fundo de todos os tablinks / botões
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }

    // Mostra o conteúdo específico da guia
    document.getElementById(cityName).style.display = "block";

    // Adicione a cor específica ao botão usado para abrir o conteúdo da guia
    elmnt.style.backgroundColor = color;
}

// SENHA 1 CAD PESSOA 

// Obtenha o elemento com id = "defaultOpen" e clique nele
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

// CONFIRM SNHA CAD PESSOA

// Obtenha o elemento com id = "defaultOpen" e clique nele
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

// SENHA 1 CAD EMPRESA

// Obtenha o elemento com id = "defaultOpen" e clique nele
document.getElementById("defaultOpen").click();

document.getElementById('olho3').addEventListener     ('mousedown', function() {
    document.getElementById('pass3').type = 'text';
});

document.getElementById('olho3').addEventListener('mouseup', function() {
    document.getElementById('pass3').type = 'password';
});

// Para que o password não fique exposto apos mover a imagem.
document.getElementById('olho3').addEventListener('mousemove', function() {
    document.getElementById('pass3').type = 'password';
});

// CONFIRM SNHA CAD EMPRESA

// Obtenha o elemento com id = "defaultOpen" e clique nele
document.getElementById("defaultOpen").click();

document.getElementById('olho4').addEventListener('mousedown', function() {
    document.getElementById('pass4').type = 'text';
});

document.getElementById('olho4').addEventListener('mouseup', function() {
    document.getElementById('pass4').type = 'password';
});

// Para que o password não fique exposto apos mover a imagem.
document.getElementById('olho4').addEventListener('mousemove', function() {
    document.getElementById('pass4').type = 'password';
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

// Botão de checked pessoa
function concordar() {
    if (!document.getElementById('checkbox1').checked) {
        alert("Para seguir com o cadastramento é necessário aceitar os Termos de Uso e Privacidade!");
        return;
    } else {
        window.location.href = "usuario-logado.html";
    }
}

// Botão de checked pessoa
function concordar2() {
    if (!document.getElementById('checkbox3').checked) {
        alert("Para seguir com o cadastramento é necessário aceitar os Termos de Uso e Privacidade!");
        return;
    } else {
        window.location.href = "empresa-logado.html";
    }
}