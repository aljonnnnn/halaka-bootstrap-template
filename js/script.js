const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// menu button
hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('show');
    hamburger.classList.add('is-active');
})

// add class in header
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle('on-scroll', window.scrollY > 0);
});

// scroll it call
$.scrollIt({
    topOffset: -50
})

// close menu when click a navlink, magic to hahahahahaha
function hideMenu() {
    const menuBars = document.querySelector('.is-active');
    if (menuBars) {
        hamburger.classList.remove('is-active')
        navMenu.classList.remove('show')
    }
}

navMenu.addEventListener('click', hideMenu);


// AOS Init
AOS.init({
    duration: 1000,
    offset: 150,
    once: true
});
