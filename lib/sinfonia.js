import {test} from './foo.js';

let pressed = {};
const audio = document.getElementById('sound');
const log = document.getElementById('log');
const body = document.body;
document.onkeydown = function (e) {

  // put pressed key in 'pressed' obj
  pressed[e.which] = e.timeStamp;

  // play sample and toggle background if keycode is 86 (letter V)
  if (e.keyCode === 86) {
    new Audio('./media/winxp.mp3').play();
    body.style.backgroundColor = body.style.backgroundColor === 'black' ? 'white' : 'black';
  }

  //
    // Log press duration and resulting volume
    log.innerHTML += '<p>Key ' + e.which  + ' was pressed at ' + pressed[e.which] + ' time.';
    pressed[e.which] = 0;

    

};
