const overlay = document.querySelector('.overlay');
const toggle = document.querySelector('.header__toggle');
const logo = document.querySelector('.logo--white');
const menu = document.querySelector('.header__menu');
const headerLinks = document.querySelectorAll('.header [data-anchor]');

const onOverlayClick = ({target}) => {
  if (target.closest('.overlay')) {
    closeMenu();
    overlay.removeEventListener('click', onOverlayClick);
  }
};

const openMenu = () => {
  overlay.classList.add('is-active');
  menu.classList.remove('is-close');
  toggle.classList.add('is-close');
  logo.classList.add('is-hide');
  window.focusLock.lock('.header');
  window.scrollLock.disableScrolling();
  document.addEventListener('click', onOverlayClick);
};

export const closeMenu = () => {
  overlay.classList.remove('is-active');
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
