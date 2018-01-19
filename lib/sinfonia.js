import anime from 'animejs';
const log = document.getElementById('log');
const main = document.getElementById('main');
const pressed = {};

import {Howl} from 'howler';

const sound = new Howl({
    src: [
      "../media/sinfonia.mp3", "../media/sinfonia.ogg"
    ],
    sprite: {
      silence: [0,1],
      808: [6000,1000],
      gong: [77000,5828],
      autoplay: false,
      buffer: false,
      onend: console.log('sprite finished playing'),
      onload: console.log('sprite loaded'),
      onloaderror: console.log('sprite load error'),
      onplay: console.log('sprite playing')
    }

});

const commence = e => {
  // put pressed key keycode in 'pressed' obj
  pressed[e.which] = e.timeStamp;
  // play sample and toggle background if keycode is 86 (letter V)
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
    break;
    case 32:
    sound.play('808');
    break;
    default:
  }
    // Log press duration and resulting volume
    console.log('Key ' + e.which  + ' was pressed ' + pressed[e.which] / 1000 + ' seconds after load.');
    pressed[e.which] = 0;
};

document.addEventListener('keydown', commence, false);
