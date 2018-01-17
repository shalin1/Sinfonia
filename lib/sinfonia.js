import {test} from './foo.js';

let pressed = {};
const audio = document.getElementById('sound');
const log = document.getElementById('log');

document.onkeydown = function (e) {

  // put pressed key in 'pressed' obj
  pressed[e.which] = e.timeStamp;

  // play sample if keycode is 86 (letter V)
  if (e.keyCode === 86) {
    audio.play();
  }
  //
    // Log press duration and resulting volume
    log.innerHTML += '<p>Key ' + e.which  + ' was pressed at ' + pressed[e.which] + ' time.';
    pressed[e.which] = 0;

    return false;

};
