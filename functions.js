window.onload = function() {
    document.body.className="";
}

function goBack() {
  window.history.back();
}

function toggleMenu() {
  document.querySelector('.menu').classList.toggle("showMenu");
  document.querySelector('body').classList.toggle("stopscroll");
  document.querySelector('#menu').classList.toggle("selected");
};

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
