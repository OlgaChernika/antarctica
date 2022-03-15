const anchors = document.querySelectorAll('[data-anchor]');

const onAnchorClick = (evt) => {
  evt.preventDefault();
  const link = evt.target;
  if (link.dataset.anchor && document.querySelector(link.dataset.anchor)) {
    const desiredBlock = document.querySelector(link.dataset.anchor);
    const desiredCoordinate = desiredBlock.getBoundingClientRect().top + scrollY;
    window.scrollTo({
      behavior: 'smooth',
      top: desiredCoordinate,
    });
  }

};

export const initAnchors = () => {
  if (anchors.length > 0) {
    anchors.forEach((link) => {
      link.addEventListener('click', onAnchorClick);
    });
  }
};
