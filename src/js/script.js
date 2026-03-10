const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');
const overlay = document.querySelector('.menu__overlay');
const navLinks = document.querySelectorAll('.menu__link a');
const percentages = document.querySelectorAll('.skills__rating-percentages');
const lines = document.querySelectorAll('.skills__rating-scale span');

function openMenu() {
    menu.classList.add('active');
    menu.setAttribute('aria-hidden', 'false');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    menu.classList.remove('active');
    menu.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}

hamburger.addEventListener('click', openMenu);
hamburger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openMenu();
    }
});

closeElem.addEventListener('click', closeMenu);
closeElem.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        closeMenu();
    }
});

overlay.addEventListener('click', closeMenu);

navLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
});

percentages.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});
