window.onload = function() {
    document.body.className="";}

function goBack() {
  window.history.back();
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('.menubar').style.top = "0";
  } else {
    document.querySelector('.menubar').style.top = "-7rem";
  }
  prevScrollpos = currentScrollPos;
}

function toggleMenu() {
  document.querySelector('.menu').classList.toggle("showMenu");
  document.querySelector('body').classList.toggle("stopscroll");
  document.querySelector('#menu').classList.toggle("selected");
};

function showProcess() {
  document.querySelector('.process').classList.add("showProcess");
  document.querySelector('.processbar').classList.add("showProcess");
  document.querySelector('body').classList.add("stopscroll");
  document.querySelector('.listmenu').classList.remove("showList");
  document.querySelector('.overlay').classList.add("showOverlay");
}

function hideProcess() {
  document.querySelector('.process').classList.remove("showProcess");
  document.querySelector('.processbar').classList.remove("showProcess");
  document.querySelector('body').classList.remove("stopscroll");
  document.querySelector('.overlay').classList.remove("showOverlay");
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
