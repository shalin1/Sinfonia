import anime from 'animejs';
import keyMap from './keyMap';
import resonate from './sound';

const commence = e => {
  let pos = keyMap(e.keyCode);
  resonate(pos);
};

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener('keydown', commence, false);
});
