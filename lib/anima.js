var emanations = [];

function tunnel() {
  var point = view.center;
  var circle = new Path.Circle(point, 1);
  circle.name = 'tunnel';
  circle.strokeColor = 'black';
  emanations.push(circle);

}

function reverseTunnel() {
  var point = view.center
  var circle = new Path.Circle(point, view.size.width)
  circle.name = 'reverse';
  circle.strokeColor = 'red';
  emanations.push(circle);
}


function explos() {
  for (var i = 0; i < 20; i++) {
    var pos = view.center + (Point.random() * 30);
    var shrapnel = new Path.Circle(pos, 5);
    shrapnel.name='explos';
    shrapnel.strokeColor = 'black';
    shrapnel.vector = Point.random() * 4 -2;
    emanations.push(shrapnel);
  }
}

function run(object) {
  switch (object.name) {
    case 'tunnel':
      object.scale(1.05)
      break;
    case 'reverse':
      object.scale(0.93)
      break;
    case 'explos':
      object.position += object.vector;
      object.vector.length += 1;
    default:
  }
}

var timeout = true;

function onKeyDown(event) {
  if (emanations.length > 100) {
    project.activeLayer.removeChildren();
    emanations = emanations.slice(-60);
  }
  switch (event.key) {
    case 'a':
      reverseTunnel();
      break;
    case 'b':
      tunnel();
      break;
    case 'c':
      explos();
      break;
    default:
  }


}

function onFrame(event) {
  for (i = 0; i < emanations.length; i++) {
    run(emanations[i])
  }



}
