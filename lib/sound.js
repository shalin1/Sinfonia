import {Howl} from 'howler';

const sound = new Howl({
    src: [
      "../media/sinfonia.mp3", "../media/sinfonia.ogg"
    ],
    sprite: {
      silence: [0,1],
      808: [6000,1000],
      gong: [77000,5828],
      "accordion-1": {
        "start": 23,
        "end": 24.09063492063492,
        "loop": false
      },
      autoplay: false,
      buffer: false,
      onend: console.log('sprite finished playing'),
      onload: console.log('sprite loaded'),
      onloaderror: console.log('sprite load error'),
      onplay: console.log('sprite playing')
    }
});

export default sound;
