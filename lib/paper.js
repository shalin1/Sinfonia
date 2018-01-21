import paper from 'paper';


const coral = "#F98C8A";
const rose = "#D22E32";
const manilla = "#F3E2B7";
const fountainBlue = "#50BDAC";
const simpson = "#F9E14D";
const irishCloud = "#E4F8F3";
const cream = "#F5EDE6";
const paleSky = "#5CCAF6";
const businessBlue = "#0B64C4";
const deepSky = "#2996ED";


const doodle = (pos) => {

  let sq = new Path.Rectangle(new Point(50, 25), new Size(50, 50));
  sq.fillColor = 'orange';

  let sqSym = new Symbol(sq);

  let count = 100;
  for (var i = 0; i < count; i++) {
    var x = (view.size.width * Math.random())
    var y = (view.size.height * Math.random())
    sqSym.vel = Math.random() * 2 -1
    let placed = sqSym.place({x,y})
  }
  view.onFrame = function(event) {
    sqSym.definition.rotate(3);
    sqSym.definition.fillColor.hue += 1;
    sqSym.definition.position.x += sqSym.vel ;
  }

};

export default doodle;
