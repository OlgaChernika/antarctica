const body = document.querySelector('body');
const toggle = document.querySelector('.header__toggle');
const logo = document.querySelector('.logo--white');
const menu = document.querySelector('.header__menu');
const headerLinks = document.querySelectorAll('.header [data-anchor]');

const openMenu = () => {
  body.classList.add('overlay');
  menu.classList.remove('is-close');
  toggle.classList.add('is-close');
  logo.classList.add('is-hide');
  window.focusLock.lock('.header');
  window.scrollLock.disableScrolling();
};

export const closeMenu = () => {
  body.classList.remove('overlay');
  menu.classList.add('is-close');
  toggle.classList.remove('is-close');
  logo.classList.remove('is-hide');
  window.focusLock.unlock('.header');
  window.scrollLock.enableScrolling();
};

const initJs = () => {
  const header = document.querySelector('header');
  if (header.classList.contains('header--no-js')) {
    header.classList.remove('header--no-js');
  }
};

export const initMenu = () => {
  if (!toggle) {
    return;
  }

  initJs();

  headerLinks.forEach((link) => {
    link.addEventListener('click', (evt) => {
      evt.preventDefault();
      if (!menu.classList.contains('is-close')) {
        closeMenu();
      }
    });
  });

  toggle.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (menu.classList.contains('is-close')) {
      openMenu();
      return;
    }
    closeMenu();
  });

  window.addEventListener('keydown', (evt) => {
    if (evt.key === 'Esc' || evt.key === 'Escape') {
      evt.preventDefault();
      closeMenu();
    }
  });
};
