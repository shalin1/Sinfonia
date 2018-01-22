import lodash from 'lodash';

const schemes = [
  {
    background: "#FEFDFC",
    middleground: "#499225",
    foreground: "#FOD2EA",
    hightlight: "#DBEFF8",
    accent: "#FEFF8D",
  },
]

const next = _.sample(schemes);

const chameleon = () => {
  document.getElementById('canvas').style.background = next.background;
};



export default chameleon;
