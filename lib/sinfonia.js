import {test} from './foo.js';
import {Howl} from 'howler';

const audio = document.getElementById('sound');
const log = document.getElementById('log');
const main = document.getElementById('main');
const sound = new Howl({
  src: ['./media/winxp.mp3']
});
const pressed = {};


const commence = e => {
  // put pressed key keycode in 'pressed' obj
  pressed[e.which] = e.timeStamp;
  // play sample and toggle background if keycode is 86 (letter V)
  if (e.keyCode === 86) {
    sound.play();

    main.style.backgroundColor = (main.style.backgroundColor === 'black' ? 'white' : 'black');
  }
    // Log press duration and resulting volume
    console.log('Key ' + e.which  + ' was pressed ' + pressed[e.which] / 1000 + ' seconds after load.');
    pressed[e.which] = 0;
};

document.addEventListener('keydown', commence, false);
