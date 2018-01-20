import anime from 'animejs';
import keyMap from './keyMap';
import resonate from './sound';
const pressed = {};
import paperDraw from './paper';
import paper from 'paper';


const commence = e => {
  pressed[e.which] = e.timeStamp;
  let pos = keyMap(e.keyCode);
  console.log(pos);
  resonate(pos);
  paperDraw(pos);
  pressed[e.which] = 0;
};

document.addEventListener("DOMContentLoaded", () => {
  paper.install(window);
  paper.setup('canvas');
  document.addEventListener('keydown', commence, false);
});
