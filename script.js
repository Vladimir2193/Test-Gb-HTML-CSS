let menuActive = document.querySelector('.menu-active');
let headerMenu = document.querySelector('.lines');

function toggleMenu() {
menuActive.classList.toggle('hidden');
}

headerMenu.addEventListener('click', toggleMenu);