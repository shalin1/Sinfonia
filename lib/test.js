var emanations = [];
var clearCanvas = true;

function tunnel() {
  var point = view.center;
  var circle = new Path.Circle(point, 1);
  circle.name = 'tunnel';
  circle.strokeColor = 'black';
  emanations.push(circle);
  setTimeout(function(){
        circle.remove();
	}, 4000);
}

function reverseTunnel() {
  var point = view.center
  var circle = new Path.Circle(point, view.size.width)
  circle.name = 'reverse';
  circle.strokeColor = 'red';
  emanations.push(circle);
}

function run(object) {
  if (object.name === 'tunnel') {
    object.scale(1.1);
  } else if (object.name === 'reverse') {
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
  for (i = 0; i < emanations.length; i++) {
    run(emanations[i])
  }
  if(clearCanvas && project.activeLayer.hasChildren()){
    project.activeLayer.removeChildren();
    clearCanvas = false;
  }
}
