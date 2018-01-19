import anime from 'animejs';
import keyMap from './keyMap';
import resonate from './sound';
const pressed = {};

const commence = e => {
  pressed[e.which] = e.timeStamp;
  let pos = keyMap(e.keyCode);
  console.log(pos);
  resonate(pos);
  pressed[e.which] = 0;
};

document.addEventListener('keydown', commence, false);
