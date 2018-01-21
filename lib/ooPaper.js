let Square = Base.extend({
  initialize: function(position, size, maxSpeed) {
    this.maxSpeed = maxSpeed;
    this.position = position.clone();
    this.size = size.clone();
    this.vector = (Point.random() * 2 - 1);
    this.drawBox(position, size);
  },
  drawBox: function(position, size) {
    this.sq = new Path.Rectangle({
      center: position,
      size: size,
      strokeColor: 'black'
    });
  },
  run: function() {
    this.position += this.vector;
    this.sq.position = this.position;
  },
})

function onFrame(event) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].run();
  }
}

const squares = [];

function onKeyDown(event) {
    let position = Point.random() * view.size;
    let side = 300 * Math.random();
    let size = new Size(side);
    let maxSpeed = 10;
    squares.push(new Square(position, size, maxSpeed))
};
