function goBack() {
  window.history.back();
}

function showMenu() {
  document.querySelector('.menu').classList.toggle("showMenu");
  document.querySelector('body').classList.toggle("stopscroll");
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

function showList() {
  document.querySelector('.listmenu').classList.add("showList");
  // document.querySelector('body').classList.add("stopscroll");
  document.querySelector('.process').classList.remove("showProcess");
}

function hideList() {
  document.querySelector('.listmenu').classList.remove("showList");
  // document.querySelector('body').classList.remove("stopscroll");
}

function openMenu() {
  document.getElementById("menu").classList.toggle("open");
};

function hideNav() {
  document.querySelector('#nav').classList.toggle("hideNav")
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
};

function myFunctionMobile() {
  document.getElementById("myDropdownMobile").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

var eyeball = document.getElementsByClassName("eyeball");
document.onmousemove = function(){
  var x = event.clientX * 100 / window.innerWidth + "%";
  var y = event.clientY * 100 / window.innerHeight + "%";

  for(var i=0;i<2;i++){
    eyeball[i].style.left = x;
    eyeball[i].style.top = y;
    eyeball[i].style.transform = "translate(-"+x+", -"+y+")";
  }
};
