import anime from 'animejs';
import converter from './keydown';
import sound from './sound';
const log = document.getElementById('log');
const main = document.getElementById('main');
const pressed = {};



const commence = e => {
  pressed[e.which] = e.timeStamp;
  let pos = converter(e.keyCode);
  console.log(pos);
  switch (e.keyCode) {
    case 86:
    sound.play('gong');
    anime({
      targets: '.box',
      translateX: [
        { value: 1000, duration: 500, easing: 'easeInQuart' },
        { value: -1000, duration: 1, easing: 'easeInQuart' }
      ],
      duration: 500,
    });
    case 32:
    sound.play('808');
    default:
  }
    // Log press duration and resulting volume
    console.log('Key ' + e.which  + ' was pressed ' + pressed[e.which] / 1000 + ' seconds after load.');
    pressed[e.which] = 0;
};

document.addEventListener('keydown', commence, false);
