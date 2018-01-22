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

  var symbol = new Symbol(ball);

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

};

// Create a symbol from the path:
var symbol = new Symbol(path);

// Place 30 instances of the symbol in the project in random
// positions in the view:
for (var i = 0; i < 30; i++) {
	var position = view.size * Point.random();
	var placed = symbol.place(position);
}

function onFrame(event) {
	// Each frame, rotate the definition
	// of the symbol by 1 degree:
	symbol.definition.rotate(1);

	// Add 0.2 degrees to the stroke color's hue:
	symbol.definition.strokeColor.hue += 0.2;
}

}

const laser = variation => {

  const w = view.size.width
  const h = view.size.height
  let beam = new Path({
	segments: [[0, h/2], [w/2, h/2]]
});
  beam.strokeColor = 'black';
  beam.strokeWidth = 7;
  view.onFrame = function(event) {
    beam.position.x += (view.size.width/60);
  }
}

export default doodle;
