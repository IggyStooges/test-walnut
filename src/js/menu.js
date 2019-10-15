const openMenuBtn = document.querySelector('.header__open');
const menu = document.querySelector('.menu');
const closeMenuBtn = menu.querySelector('.menu__close');

function openMenuBthHandler() {
  menu.classList.add('menu--open');
}

function closeMenuBthHandler() {
  menu.classList.remove('menu--open');
}

export default function displayMenu() {
  openMenuBtn.addEventListener('click', openMenuBthHandler);
  closeMenuBtn.addEventListener('click', closeMenuBthHandler);
}
