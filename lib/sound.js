import {Howl} from 'howler';
import samples from '../media/samples.js';

const soundType = col => {
  switch(col) {
    case 1:
      return "stab";
    case 2:
      return "snare";
    case 3:
      return "crash";
    case 4:
      return "atmos";
    case 5:
      return "perc";
    case 6:
      return "sfx";
    case 7:
      return "second";
    case 8:
      return "bass";
    case 9:
      return "atmos";
    case 0:
      return "sfx";
    case 99:
      return "silence";
    default:
      return 'no sound'
  }
};

const soundIntensity = row => {
  switch(row) {
    case 1:
      return "Hi";
    case 2:
      return "Mid";
    case 3:
      return "Low";
    default:
      return "";
  }
};

const sprite = new Howl(samples);

const resonate = pos => {
  let sampleName = "";
  sampleName += (soundType(pos[0]));
  sampleName += (soundIntensity(pos[1]));
  console.log (`now playing ${sampleName} from position ${pos}`);9
  sprite.play(sampleName);
};


export default resonate;
