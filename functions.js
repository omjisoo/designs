window.onload = function() {
    document.body.className="";
}

function goBack() {
  window.history.back();
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.querySelector('.menubar').style.top = "0";
//   } else {
//     document.querySelector('.menubar').style.top = "-8rem";
//   }
//   prevScrollpos = currentScrollPos;
// }

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('#totop').style.bottom = "-7vw";
  } else {
    document.querySelector('#totop').style.bottom = "7vw";
  }
  prevScrollpos = currentScrollPos;
}

function toggleMenu() {
  document.querySelector('.menu').classList.toggle("showMenu");
  document.querySelector('body').classList.toggle("stopscroll");
  document.querySelector('#menu').classList.toggle("selected");
};

var process = document.querySelector('.process');
var overlay = document.querySelector('.overlay')
var body = document.querySelector('body')

function showProcess() {
    process.classList.add("open");
    overlay.classList.add("showOverlay");
    body.classList.add("stopscroll");
};

window.addEventListener('mouseup', function(event){
  if(event.target != process && event.target.parentNode != process){
    process.classList.remove("open"); overlay.classList.remove("showOverlay");
    body.classList.remove("stopscroll");
  }
});

function hideProcess() {
  process.classList.remove("open"); overlay.classList.remove("showOverlay");
  body.classList.remove("stopscroll");
}

function copyEmail() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Email copied for your convenience: " + copyText.value);
}
