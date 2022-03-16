const anchors = document.querySelectorAll('[data-anchor]');

const moveTo = new window.MoveTo();

export const initAnchors = () => {
  if (anchors.length > 0) {
    anchors.forEach((anchor) => {
      moveTo.registerTrigger(anchor);
    });
  }
};
