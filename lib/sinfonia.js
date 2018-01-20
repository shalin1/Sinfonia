import anime from 'animejs';
import keyMap from './keyMap';
import resonate from './sound';
const pressed = {};
import doodle from './paper';
import paper from 'paper';
import chameleon from './chameleon'

const commence = e => {
  pressed[e.which] = e.timeStamp;
  let pos = keyMap(e.keyCode);
  console.log(pos);
  if (pos === 99) {
    chameleon();
  } else {
    resonate(pos);
    doodle(pos);
  }
  pressed[e.which] = 0;
};

document.addEventListener("DOMContentLoaded", () => {
  paper.install(window);
  paper.setup('canvas');

  document.addEventListener('keydown', commence, false);
});
