const body = document.querySelector('body');
const toggle = document.querySelector('.header__toggle');
const logo = document.querySelector('.logo--white');
const menu = document.querySelector('.header__menu');

// const toggleMenuElements = () => {
//   if (body.classList.contains('scroll-lock') || body.classList.contains('scroll-lock-ios')) {
//     window.focusLock.unlock('.header__menu');
//     window.scrollLock.enableScrolling();
//   } else {
//     window.scrollLock.disableScrolling();
//   }
//   body.classList.toggle('overlay');
//   menu.classList.toggle('is-close');
//   toggle.classList.toggle('is-close');
//   logo.classList.toggle('is-hide');
//   window.focusLock.lock('.header');
// };

const openMenu = () => {
  body.classList.add('overlay');
  menu.classList.remove('is-close');
  toggle.classList.add('is-close');
  logo.classList.add('is-hide');
  window.focusLock.lock('.header');
};

export const closeMenu = () => {
  if (!menu.classList.contains('is-close')) {
    body.classList.remove('overlay');
    menu.classList.add('is-close');
    toggle.classList.remove('is-close');
    logo.classList.remove('is-hide');
    window.focusLock.unlock('.header');
  }
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

  toggle.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (menu.classList.contains('is-close')) {
      openMenu();
      window.scrollLock.disableScrolling();
    } else {
      closeMenu();
      window.scrollLock.enableScrolling();
    }
  });

  window.addEventListener('keydown', (evt) => {
    if (evt.key === 'Esc' || evt.key === 'Escape') {
      evt.preventDefault();
      closeMenu();
      window.scrollLock.enableScrolling();
    }
  });
};
