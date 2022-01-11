let cont1 = 0
let cont2 = 0
let cont3 = 0
let cont4 = 0
let cont5 = 0
let cont6 = 0

function exibirText1() {
    if (cont1 == 0) {
        document.getElementById('span1').style.display = 'none';
        document.getElementById('p1').style.display = 'inherit';
        document.getElementById('button01').textContent = 'Mostrar menos'
        cont1++;
    }
    else if(cont1 == 1){
        document.getElementById('span1').style.display = 'inherit';
        document.getElementById('p1').style.display = 'none';
        document.getElementById('button01').textContent = 'Mostrar mais'
        cont1--;
    }
}
function exibirText2() {
    if (cont2 == 0) {
        document.getElementById('span2').style.display = 'none';
        document.getElementById('p2').style.display = 'inherit';
        document.getElementById('button02').textContent = 'Mostrar menos'
        cont2++;
    }
    else if(cont2 == 1){
        document.getElementById('span2').style.display = 'inherit';
        document.getElementById('p2').style.display = 'none';
        document.getElementById('button02').textContent = 'Mostrar mais'
        cont2--;
    }
}
function exibirText3() {
    if (cont3 == 0) {
        document.getElementById('span3').style.display = 'none';
        document.getElementById('p3').style.display = 'inherit';
        document.getElementById('button03').textContent = 'Mostrar menos'
        cont3++;
    }
    else if(cont3 == 1){
        document.getElementById('span3').style.display = 'inherit';
        document.getElementById('p3').style.display = 'none';
        document.getElementById('button03').textContent = 'Mostrar mais'
        cont3--;
    }
}
function exibirText4() {
    if (cont4 == 0) {
        document.getElementById('span4').style.display = 'none';
        document.getElementById('p4').style.display = 'inherit';
        document.getElementById('button04').textContent = 'Mostrar menos'
        cont4++;
    }
    else if(cont4 == 1){
        document.getElementById('span4').style.display = 'inherit';
        document.getElementById('p4').style.display = 'none';
        document.getElementById('button04').textContent = 'Mostrar mais'
        cont4--;
    }
}
function exibirText5() {
    if (cont5 == 0) {
        document.getElementById('span5').style.display = 'none';
        document.getElementById('p5').style.display = 'inherit';
        document.getElementById('button05').textContent = 'Mostrar menos'
        cont5++;
    }
    else if(cont5 == 1){
        document.getElementById('span5').style.display = 'inherit';
        document.getElementById('p5').style.display = 'none';
        document.getElementById('button05').textContent = 'Mostrar mais'
        cont5--;
    }
}
function exibirText6() {
    if (cont6 == 0) {
        document.getElementById('span6').style.display = 'none';
        document.getElementById('p6').style.display = 'inherit';
        document.getElementById('button06').textContent = 'Mostrar menos'
        cont6++;
    }
    else if(cont6 == 1){
        document.getElementById('span6').style.display = 'inherit';
        document.getElementById('p6').style.display = 'none';
        document.getElementById('button06').textContent = 'Mostrar mais'
        cont6--;
    }
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