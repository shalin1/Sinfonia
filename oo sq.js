class Square {
  initialize(position) {
    this.position = position.clone();
    this.speed = Math.random() * 20;
    this.vector = Point.random() * 2 - 1;
    this.rotation = Math.random() * 5;
  }

  drawBox() {
    let size = Math.random() * window.size;
    let sq = new Path.Rectangle(new Point(0, 0), size);
    sq.fillColor='white';
    sq.strokeColor='black';
  }
}
  run() {
    this.vector.length = Math.min(this.maxSpeed, this.vector.length)
    this.position += this.vector;
    this.acceleration = new Point();
  }


let squares = [];


function onFrame(event) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].run(squares);
  }
}
