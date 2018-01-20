import paper from 'paper';

const doodle = (pos) => {
  switch (pos[0]) {
    case 1:
      wave(pos[1]);
    case 2:
      overpass(pos[1]);
    case 3:
      circle(pos[1]);
    case 4:
      adidabiba(pos[1]);
    case 5:
      spiral(pos[1]);
    case 6:
      explode(pos[1]);
    case 7:
      laser(pos[1]);
    case 8:
      portal(pos[1]);
    case 9:
      poly(pos[1]);
    case 0:
      strobe(pos[1]);
      break;
    default:
  }
};

const overpass = variation => {

  const w = view.size.width
  const h = view.size.height
  var sq = new Path.Rectangle(new Point(-w*2, 0), new Size(w*2, h));
  sq.fillColor = '#F0D2EA';
  view.onFrame = function(event) {
    for (var i = 0; i < project.activeLayer.children.length; i++) {
      let square = project.activeLayer.children[i]
      square.position.x += (view.size.width/15);
    }
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
    for (var i = 0; i < project.activeLayer.children.length; i++) {
      let square = project.activeLayer.children[i]
      beam.position.x += (view.size.width/60);
    }
  }
}

export default doodle;
