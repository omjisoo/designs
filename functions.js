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

// var elem = document.querySelector('.main-carousel');
// var flkty = new Flickity( elem, {
//   // options
//   cellAlign: 'left',
//   contain: true,
// });
//
// // element argument can be a selector string
// //   for an individual element
// var flkty = new Flickity( '.main-carousel', {
//   // options
//   autoPlay: true,
//   autoPlay: 1500
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
  setTimeout(showSlides, 1500); // Change image every 2 seconds
}
