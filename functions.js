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

function goBack() {
  window.history.back();
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

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("indexitem");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("filterby");
var btns = btnContainer.getElementsByClassName("filter");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active","");
    this.className += " active";
  });
}
