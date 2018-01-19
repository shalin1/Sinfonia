import {Howl} from 'howler';
import anime from 'animejs';
const log = document.getElementById('log');
const main = document.getElementById('main');
const sound = new Howl({
  src: ['./media/winxp.mp3']
});
const pressed = {};

const movebox = () => anime({
targets: '#box .el',
translateX: 250
});

const commence = e => {
  // put pressed key keycode in 'pressed' obj
  pressed[e.which] = e.timeStamp;
  // play sample and toggle background if keycode is 86 (letter V)
  switch (e.keyCode) {
    case 86:
    sound.play();
    anime({
      targets: '.box',
      translateX: [
        { value: 3000, duration: 3200 },
      ],
      duration: 2000,
    });
      break;
    default:
      console.log (`keypress was ${e.keycode}, no action triggered.`);
  }
    // Log press duration and resulting volume
    console.log('Key ' + e.which  + ' was pressed ' + pressed[e.which] / 1000 + ' seconds after load.');
    pressed[e.which] = 0;
};

document.addEventListener('keydown', commence, false);
