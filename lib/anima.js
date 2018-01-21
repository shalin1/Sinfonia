var emanations = [];
var time = new Date().getTime()

// animation runner

function onFrame(event) {
  for (i = 0; i < emanations.length; i++) {
    run(emanations[i])
  }
}

// takes object name and performs a callback funtion on every animation frame.
// these should probably get refactored in to callbacks on the objects
// but that's a little weird in paperscript...

function run(object) {
  switch (object.name) {
    case 'tunnel':
      object.scale(1.05)
      break;
    case 'fastTunnel':
      object.scale(1.1)
      break;
    case 'reverse':
      object.scale(0.93)
      break;
    case 'explos':
      object.position += object.vector;
      object.vector.length += 1;
      object.scale(1.04);
      break;
    default:
  }
}

// key listener

function onKeyDown(event) {

  // simple debounce to avoid crashing everything on key hold

  if (new Date().getTime() - time > 300) {
    time = new Date().getTime();

  // clears canvas if there's too much stuff on it

    if (emanations.length > 30) {
      project.activeLayer.removeChildren();

  // keeps animation queue running for the last 20 objects to allow overlap

      emanations = emanations.slice(-20);
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
      case 'd':
        fastTunnel();
        break;
      default:
    }
  }
}

// here are the animations!

function tunnel() {
  var point = view.center;
  var circle = new Path.Circle(point, 1);
  circle.name = 'tunnel';
  circle.strokeColor = 'black';
  circle.test = 'foo'
  emanations.push(circle);
}

function fastTunnel() {
  var point = view.center;
  var circle = new Path.Circle(point, 1);
  circle.name = 'fastTunnel';
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
