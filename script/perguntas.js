let cont1 = 0
let cont2 = 0
let cont3 = 0
let cont4 = 0
let cont5 = 0
let cont6 = 0
let cont7 = 0

function aparecer1(){
    if (cont1 == 0){
        onclick = document.getElementById('p1').style.display = 'inherit';
        cont1++;
    }
    else if (cont1 == 1){
        onclick = document.getElementById('p1').style.display = 'none';
        cont1--;
    }
    
}

function aparecer2(){
    if (cont2 == 0){
        onclick = document.getElementById('p2').style.display = 'inherit';
        cont2++;
    }
    else if (cont2 == 1){
        onclick = document.getElementById('p2').style.display = 'none';
        cont1--;
    }
}
    

function aparecer3(){
    if (cont3 == 0){
        onclick = document.getElementById('p3').style.display = 'inherit';
        cont3++;
    }
    else if (cont3 == 1){
        onclick = document.getElementById('p3').style.display = 'none';
        cont3--;
    }
    
}

function aparecer4(){
    if (cont4 == 0){
        onclick = document.getElementById('p4').style.display = 'inherit';
        cont4++;
    }
    else if (cont4 == 1){
        onclick = document.getElementById('p4').style.display = 'none';
        cont4--;
    }
    
}

function aparecer5(){
    if (cont5 == 0){
        onclick = document.getElementById('p5').style.display = 'inherit';
        cont5++;
    }
    else if (cont5 == 1){
        onclick = document.getElementById('p5').style.display = 'none';
        cont5--;
    }
    
}

function aparecer6(){
    if (cont6 == 0){
        onclick = document.getElementById('p6').style.display = 'inherit';
        cont6++;
    }
    else if (cont6 == 1){
        onclick = document.getElementById('p6').style.display = 'none';
        cont6--;
    }
    
}

function aparecer7(){
    if (cont7 == 0){
        onclick = document.getElementById('p7').style.display = 'inherit';
        cont7++;
    }
    else if (cont7 == 1){
        onclick = document.getElementById('p7').style.display = 'none';
        cont7--;
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
