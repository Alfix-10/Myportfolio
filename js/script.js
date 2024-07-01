// navabar fixed
window.onscroll = function() {
     const header = document.querySelector('header');
     const navFixed = header.offsetTop;

     if (window.pageYOffset > navFixed) {
          header.classList.add('navbar-fixed');
     } else {
          header.classList.remove('navbar-fixed');
     }
};


// hamburger
const hamburger = document.querySelector('#hamburger');
const navmenu = document.querySelector('#nav-menu');


hamburger.addEventListener('click', function() {
     hamburger.classList.toggle('hamburger-active');
     navmenu.classList.toggle('hidden');
});