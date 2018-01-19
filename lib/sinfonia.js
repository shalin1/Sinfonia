import anime from 'animejs';
import keyMap from './keyMap';
import resonate from './sound';
const pressed = {};
import visualize from './animation';

const commence = e => {
  pressed[e.which] = e.timeStamp;
  let pos = keyMap(e.keyCode);
  console.log(pos);
  resonate(pos);
  visualize(ctx,pos);
  pressed[e.which] = 0;
};

document.addEventListener("DOMContentLoaded", () => {
  const canvasEl = document.getElementById('myCanvas');
  canvasEl.width = window.innerWidth;
  canvasEl.height = window.innerHeight;
  const ctx = canvasEl.getContext('2d');
  window.ctx = ctx;
  document.addEventListener('keydown', commence, false);
});
