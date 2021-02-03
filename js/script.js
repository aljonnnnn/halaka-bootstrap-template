const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('show');
})

window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle('on-scroll', window.scrollY > 0);
});
