import paper from 'paper';

const doodle = (pos) => {
  switch (pos[0]) {
    case 1:
      wave(pos[1]);
      break;
    case 2:
      overpass(pos[1]);
      break;
    case 3:
      circle(pos[1]);
      break;
    case 4:
      adidabiba(pos[1]);
      break;
    case 5:
      spiral(pos[1]);
      break;
    case 6:
      explode(pos[1]);
      break;
    case 7:
      laser(pos[1]);
      break;
    case 8:
      portal(pos[1]);
      break;
    case 9:
      poly(pos[1]);
      break;
    case 0:
      strobe(pos[1]);
      break;
    default:
  }
};

const explode = variation => {
  console.log('now exploding...')
  let count = 150;
  const ball = new Path.Circle({
    center: [0,0],
    radius: 20,
    fillColor: 'white',
    strokeColor: 'black'
  });

  var symbol = new Symbol(ball);

  for (var i = 0; i < count; i++) {
    let center = Point.random() * view.size;
    let placedBall = symbol.place(center);
    placedBall.scale(i/ count);count[i]
  }
}

const circle = variation => {

  var myCircle = new Path.Circle(new Point(view.center), 200);
myCircle.strokeColor = 'orange';
}

const overpass = variation => {

  var path = new Path(new Point(20, 20), new Point(50, 50));
path.style = {
	strokeColor: 'red',
	strokeWidth: 10,
	strokeCap: 'round'
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
