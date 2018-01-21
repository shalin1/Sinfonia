var circles = [];

function tunnel() {
  var point = view.center;
  var circle = new Path.Circle(point, 1);
  circle.label = 'tunnel';
  circle.strokeColor = 'black';
  circles.push(circle);
}

function reverseTunnel() {
  var point = view.center
  var circle = new Path.Circle(point, view.size.width)
  circle.label = 'reverse';
  circle.strokeColor = 'red';
  circles.push(circle);
}

function run(object) {
  if (object.label === 'tunnel') {
    object.scale(1.1);
  } else if (object.label === 'reverse') {
    object.scale(0.9);
  }
}

function onKeyDown(event) {
  switch (event.key) {
    case 'a':
      reverseTunnel();
      break;
    default:
      tunnel();
  }
}

function onFrame(event) {
  for (i = 0; i < circles.length; i++) {
    run(circles[i])
    }

}
