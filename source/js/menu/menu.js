const body = document.querySelector('body');
const navToggle = document.querySelector('.header__toggle');

const initMenu = () => {
  if (!navToggle) {
    return;
  }

  const navMenu = document.querySelector('.header__menu');
  const navLink = document.querySelector('.nav__link');

  const setMenuLinkFocus = () => {
    if (!navMenu.classList.contains('header__menu--closed')) {
      navLink.focus();
    }
    navToggle.focus();
  };

  navToggle.addEventListener('click', (evt) => {
    evt.preventDefault();
    body.classList.toggle('fixed');
    navMenu.classList.toggle('header__menu--closed');
    navToggle.classList.toggle('header__toggle--closed');
    setMenuLinkFocus();
  });

  window.addEventListener('keydown', (evt) => {
    if (evt.key === 'Esc' || evt.key === 'Escape') {
      evt.preventDefault();
      body.classList.toggle('fixed');
      navMenu.classList.toggle('header__menu--closed');
      navToggle.classList.toggle('header__toggle--closed');
      setMenuLinkFocus();
    }
  });
};

export default initMenu();
