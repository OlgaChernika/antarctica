const body = document.querySelector('body');
const toggle = document.querySelector('.header__toggle');
const logo = document.querySelector('.logo--white');
const menu = document.querySelector('.header__menu');
const link = document.querySelector('.nav__link');

const toggleMenuElements = () => {
  body.classList.toggle('fixed');
  menu.classList.toggle('is-close');
  toggle.classList.toggle('is-close');
  logo.classList.toggle('is-hide');
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

  const setMenuLinkFocus = () => {
    if (!menu.classList.contains('is-close')) {
      link.focus();
    }
    toggle.focus();
  };

  toggle.addEventListener('click', (evt) => {
    evt.preventDefault();
    toggleMenuElements();
    setMenuLinkFocus();
  });

  window.addEventListener('keydown', (evt) => {
    if (evt.key === 'Esc' || evt.key === 'Escape') {
      evt.preventDefault();
      toggleMenuElements();
      setMenuLinkFocus();
    }
  });
};
