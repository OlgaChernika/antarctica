const anchors = document.querySelectorAll('[data-anchor]');

const moveTo = new window.MoveTo();

export const initAnchors = () => {
  anchors.forEach((anchor) => {
    moveTo.registerTrigger(anchor);
  });
};
