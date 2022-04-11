
////this block of code is for my corousel

var slideIndex = 0;
showSlides(slideIndex);
//this functions moves from one index of the page to another
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
//this function is where all the operation takes place
function showSlides(n) {
  var i;

//we fetch the div elements by class from html assigned to new variables
  var slides = document.getElementsByClassName("mySlides");

  var dots = document.getElementsByClassName("demo");

  var captionText = document.getElementById("caption");


//l
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
//
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  //display
  slides[slideIndex-1].style.display = "block";

  dots[slideIndex-1].className += " active";
  
  captionText.innerHTML = dots[slideIndex-1].alt;
}

//this code is for my modal
var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//nav
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}