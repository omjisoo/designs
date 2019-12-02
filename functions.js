var a = document.getElementById("myDiv");
var b = document.getElementById("illust");
var c = document.querySelector('#featured-btn');
var d = document.querySelector('#illust-btn');


function myFunction() {
   a.classList.toggle("expand");
   b.classList.remove("expand");
   c.classList.toggle("active");
   d.classList.remove("active");
}

function expandIllust() {
  a.classList.remove("expand");
  b.classList.toggle("expand");
  c.classList.remove("active");
  d.classList.toggle("active");
}

var eyeball = document.getElementsByClassName("eyeball");
document.onmousemove = function(){
  var x = event.clientX * 100 / window.innerWidth + "%";
  var y = event.clientY * 100 / window.innerHeight + "%";

  for(var i=0;i<2;i++){
    eyeball[i].style.left = x;
    eyeball[i].style.top = y;
    eyeball[i].style.transform = "translate(-"+x+", -"+y+")";
  }
}

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  selectedAttraction: 0.01,
  sfriction: 0.15
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  // options
});
//
// $('.carousel').flickity({
//   // options
//   cellAlign: 'center',
//   contain: true,
//   selectedAttraction: 0.01,
//   friction: 0.15
// });

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 1600); // Change image every 2 seconds
};
