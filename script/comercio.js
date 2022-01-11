// CONTROLE DO PRIMEIRO CARROSSEL
var slideIndex = 1;
showSlides(slideIndex);

// Controles seguinte / anterior
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Controles de imagem em miniatura
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
}
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
}
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += "active";
}

// CONTROLE DO SEGUNDO CARROSSEL
var slideIndex2 = 1;
showSlides2(slideIndex2);

// Controles seguinte / anterior
function plusSlides2(n2) {
  showSlides2(slideIndex2 += n2);
}

// Controles de imagem em miniatura
function currentSlide2(n2) {
  showSlides2(slideIndex2 = n2);
}

function showSlides2(n2) {
  var i2;
  var slides2 = document.getElementsByClassName("mySlides2");
  var dots2 = document.getElementsByClassName("dot2");
  if (n2 > slides2.length) {slideIndex2 = 1}
  if (n2 < 1) {slideIndex2 = slides2.length}
  for (i2 = 0; i2 < slides2.length; i2++) {
      slides2[i2].style.display = "none";
}
  for (i2 = 0; i2 < dots2.length; i2++) {
      dots2[i2].className = dots2[i2].className.replace("active", "");
}
  slides2[slideIndex2-1].style.display = "block";
  dots2[slideIndex2-1].className += "active";
}

// CONTROLE DO TERCEIRO CARROSSEL
var slideIndex3 = 1;
showSlides3(slideIndex3);

// Controles seguinte / anterior
function plusSlides3(n3) {
  showSlides3(slideIndex3 += n3);
}

// Controles de imagem em miniatura
function currentSlide3(n3) {
  showSlides3(slideIndex3 = n3);
}

function showSlides3(n3) {
  var i3;
  var slides3 = document.getElementsByClassName("mySlides3");
  var dots3 = document.getElementsByClassName("dot3");
  if (n3 > slides3.length) {slideIndex3 = 1}
  if (n3 < 1) {slideIndex3 = slides3.length}
  for (i3 = 0; i3 < slides3.length; i3++) {
      slides3[i3].style.display = "none";
}
  for (i3 = 0; i3 < dots3.length; i3++) {
      dots3[i3].className = dots3[i3].className.replace("active", "");
}
  slides3[slideIndex3-1].style.display = "block";
  dots3[slideIndex3-1].className += "active";
}

// CONTROLE DO QUARTO CARROSSEL
var slideIndex4 = 1;
showSlides4(slideIndex4);

// Controles seguinte / anterior
function plusSlides4(n4) {
  showSlides4(slideIndex4 += n4);
}

// Controles de imagem em miniatura
function currentSlide4(n4) {
  showSlides4(slideIndex4 = n4);
}

function showSlides4(n4) {
  var i4;
  var slides4 = document.getElementsByClassName("mySlides4");
  var dots4 = document.getElementsByClassName("dot4");
  if (n4 > slides4.length) {slideIndex4 = 1}
  if (n4 < 1) {slideIndex4 = slides4.length}
  for (i4 = 0; i4 < slides4.length; i4++) {
      slides4[i4].style.display = "none";
}
  for (i4 = 0; i4 < dots4.length; i4++) {
      dots4[i4].className = dots4[i4].className.replace("active", "");
}
  slides4[slideIndex4-1].style.display = "block";
  dots4[slideIndex4-1].className += "active";
}

// CONTROLE DO QUINTO CARROSSEL
var slideIndex5 = 1;
showSlides5(slideIndex5);

// Controles seguinte / anterior
function plusSlides5(n5) {
  showSlides5(slideIndex5 += n5);
}

// Controles de imagem em miniatura
function currentSlide5(n5) {
  showSlides5(slideIndex5 = n5);
}

function showSlides5(n5) {
  var i5;
  var slides5 = document.getElementsByClassName("mySlides5");
  var dots5 = document.getElementsByClassName("dot5");
  if (n5 > slides5.length) {slideIndex5 = 1}
  if (n5 < 1) {slideIndex5 = slides5.length}
  for (i5 = 0; i5 < slides5.length; i5++) {
      slides5[i5].style.display = "none";
}
  for (i5 = 0; i5 < dots5.length; i5++) {
      dots5[i5].className = dots5[i5].className.replace("active", "");
}
  slides5[slideIndex5-1].style.display = "block";
  dots5[slideIndex5-1].className += "active";
}

// CONTROLE DO SEXTO CARROSSEL
var slideIndex6 = 1;
showSlides6(slideIndex6);

// Controles seguinte / anterior
function plusSlides6(n6) {
  showSlides6(slideIndex6 += n6);
}

// Controles de imagem em miniatura
function currentSlide6(n6) {
  showSlides6(slideIndex6 = n6);
}

function showSlides6(n6) {
  var i6;
  var slides6 = document.getElementsByClassName("mySlides6");
  var dots6 = document.getElementsByClassName("dot6");
  if (n6 > slides6.length) {slideIndex6 = 1}
  if (n6 < 1) {slideIndex6 = slides6.length}
  for (i6 = 0; i6 < slides6.length; i6++) {
      slides6[i6].style.display = "none";
}
  for (i6 = 0; i6 < dots6.length; i6++) {
      dots6[i6].className = dots6[i6].className.replace("active", "");
}
  slides6[slideIndex6-1].style.display = "block";
  dots6[slideIndex6-1].className += "active";
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

// busca de segmento

// function busca1() {
//   document.getElementsByClassName("segmento-loja") {
//     if (value="Farmácias") {

//     }
//   }
// }