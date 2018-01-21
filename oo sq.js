let Square = Base.extend({
  initialize: function(position) {
    this.position = position.clone();
    this.speed = Math.random() * 20;
    this.vector = Point.random() * 2 - 1;
    this.rotation = Math.random() * 5;
    this.count = 0;
    this.drawBox();
  },
  
  drawBox: function() {
    let size = Math.random() * window.size;
    let sq = new Path.Rectangle(new Point(0, 0), size);
    sq.fillColor='white';
    sq.strokeColor='black';
  },
  run: function(squares) {
    this.lastLoc = this.position.clone();
    this.update();
  },
  update: function() {
    this.vector.length = Math.min(this.maxSpeed, this.vector.length)
    this.position += this.vector;
    this.acceleration = new Point();
  },
})

let squares = [];

for (var i = 0; i < 30; i++) {
  let position = Point.random() * view.size;
  squares.push(new Square(position));
}

function onFrame(event) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].run(squares);
  }
}
