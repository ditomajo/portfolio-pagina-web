


// sidebar
const navToggle = document.querySelector(".nav-toggle");
const listButtonNone = document.querySelector(".listButtonNone");


navToggle.addEventListener("click", function () {
 
  listButtonNone.classList.toggle("listButton");
});


// icon burger

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});