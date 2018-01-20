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
  var sq = new Path.Rectangle(new Point(50, 25), new Size(50, 50));
  sq.fillColor = 'orange';
  view.onFrame = function(event) {
    for (var i = 0; i < project.activeLayer.children.length; i++) {
      let square = project.activeLayer.children[i]
      square.rotate(3);
      square.fillColor.hue += 1;
      square.position.x += 1;
    }
  };
};

export default doodle;
