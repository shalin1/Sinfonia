var emanations = [];

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
time = new Date().getTime()
function onKeyDown(event) {
  console.log(new Date().getTime() - time)
  if (new Date().getTime() - time > 300) {
    time = new Date().getTime();
    if (emanations.length > 30) {
      project.activeLayer.removeChildren();
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

function onFrame(event) {
  for (i = 0; i < emanations.length; i++) {
    run(emanations[i])
  }

}
