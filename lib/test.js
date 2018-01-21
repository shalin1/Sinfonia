var circles = [];

function onKeyDown(event) {
  
  var point = Point.random() * view.size
  var newCircle = new Path.Circle(point, 500);
  newCircle.strokeColor = 'black';
  circles.push(newCircle);
}
function onFrame(event) {
  for (i = 0; i < circles.length; i++) {
    circles[i].scale(.9);
  }
}
