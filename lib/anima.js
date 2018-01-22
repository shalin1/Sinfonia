var emanations = [];
var pressTime = new Date().getTime()

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
  if (new Date().getTime() - pressTime > 2500) {
    project.activeLayer.removeChildren();
  }
  switch (object.name) {
    case 'tunnel':
      object.scale(1.05)
      object.hue += Math.random()
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
    case 'overpass':
      object.position += object.vector;
      object.vector += new Point(.5,0)
      break;
    case 'megaGon':
    debugger
      object.rotate(object.data.spinspeed)
      object.scale(0.95);
      object.hue -= Math.random();
      break;
    default:
  }
}


function onKeyDown(event) {
  // simple debounce to avoid crashing everything on key hold
  if (new Date().getTime() - pressTime > 200) {
    pressTime = new Date().getTime();

  // clears canvas if there's too much stuff on it
    if (emanations.length > 50) {
      project.activeLayer.removeChildren();
  // keeps animation queue running for the last 20 objects to allow overlap
      emanations = emanations.slice(-40);
    }

  // master switch
  // TODO: put sound control in here (ditch key translater) to make associating noises easy.
    switch (event.key) {
      case 'a':
        reverseTunnel();
        break;
      case 'b':
        tunnel();
        break;
      case 'c':
        overpass();
        break;
      case 'd':
        overpassReversed();
        break;
      case 'e':
        fastTunnel();
        break;
      case 'f':
        explos();
        break;
      case 'g':
        reverseTunnel();
        break;
      case 'h':
        overpass();
        break;
      case 'i':
        reverseTunnel();
        break;
      case 'j':
        tunnel();
        break;
      case 'k':
        overpassReversed();
        break;
      case 'l':
        reverseTunnel();
        break;
      case 'm':
        overpass();
        break;
      case 'n':
        reverseTunnel();
        break;
      case 'o':
        overpass();
        break;
      case 'p':
        overpassReversed();
        break;
      case 'q':
        explos();
        break;
      case 'r':
        megaGon();
        break;
      case 's':
        explos();
        break;
      case 't':
        tunnel();
        break;
      case 'u':
        reverseTunnel();
        break;
      case 'v':
        tunnel();
        break;
      case 'w':
        explos();
        break;
      case 'x':
        overpass();
        break;
      case 'y':
        reverseTunnel();
        break;
      case 'z':
        tunnel();
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
  circle.strokeColor = 'red';
  circle.test = 'foo';
  circle.fillColor = randomColor();
  emanations.push(circle);
}

function fastTunnel() {
  var point = view.center;
  var circle = new Path.Circle(point, 1);
  circle.name = 'fastTunnel';
  circle.strokeColor = 'black';
  circle.fillColor = randomColor();
  emanations.push(circle);
}

function reverseTunnel() {
  var point = view.center
  var circle = new Path.Circle(point, view.size.width)
  circle.name = 'reverse';
  circle.strokeColor = randomColor();
  circle.strokeWidth = '20'
  emanations.push(circle);
}

function explos() {
  for (var i = 0; i < 15; i++) {
    var pos = view.center + (Point.random() * 30);
    var shrapnel = new Path.Circle(pos, 5);
    shrapnel.name='explos';
    shrapnel.strokeColor = 'black';
    shrapnel.vector = Point.random() * 4 -2;
    shrapnel.strokeColor = randomColor();
    shrapnel.fillColor = randomColor();
    emanations.push(shrapnel);
  }
}

function megaGon() {
  var polygon = new Path.RegularPolygon(view.center, Math.floor(7 * Math.random()) + 3, 500);
  polygon.fillColor = randomColor();
  polygon.name = 'megaGon'
  polygon.data.spinspeed = (20 * Math.random()) - 10
  emanations.push(polygon);
}

function overpass() {
  var point = view.center;
  var sq = new Path.Rectangle(new Point(-view.size.width - 20 ,0), new Point(0, view.size.height));
  sq.name = 'overpass';
  sq.fillColor = randomColor();
  sq.vector = new Point((40 * Math.random()),0);
  emanations.push(sq);
}

function overpassReversed() {
  var point = view.center;
  var sq = new Path.Rectangle(new Point(view.size.width * 2 + 20, 0), new Point(view.size.width, view.size.height));
  sq.name = 'overpass';
  sq.fillColor = randomColor();
  sq.vector = new Point((-40 * Math.random()),0);
  emanations.push(sq);
}
