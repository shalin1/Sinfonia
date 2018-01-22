import anime from 'animejs';
import keyMap from './keyMap';
import resonate from './sound';
<<<<<<< HEAD
import lodash from 'lodash';
let time = new Date().getTime() - 2000;
=======
const pressed = {};
import doodle from './paper';
import paper from 'paper';
import chameleon from './chameleon'
>>>>>>> master

const commence = e => {
  let pos = keyMap(e.keyCode);
<<<<<<< HEAD
  resonate(pos);
};

const showFooter = () => {
  if (new Date().getTime() - time > 2000) {
    time = new Date().getTime();
    console.log('showing footer')
    anime({
      targets: document.getElementById('footer'),
      opacity: 1,
      easing: 'easeInOutQuart',
      duration: 2000
    });
  }
};
const hideFooter = () => anime({
  targets: document.getElementById('footer'),
  opacity: 0,
  easing: 'easeInOutQuart',
  duration: 1000
});

const showTooltip = () => anime({
  targets: document.getElementById('tooltip'),
  opacity: 1,
  easing: 'easeInQuad',
  duration: 2000
})

const hideToolTip = () => anime({
  targets: document.getElementById('tooltip'),
  opacity: 0,
  easing: 'easeInOutQuart',
  duration: 1000
})

document.addEventListener('DOMContentLoaded', () => {
  showFooter();
  showTooltip();
  document.addEventListener('keydown', hideFooter, false)
  document.addEventListener('keydown', hideToolTip, false)
  document.addEventListener('mousemove', showFooter, false)
=======
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
>>>>>>> master
  document.addEventListener('keydown', commence, false);
});
