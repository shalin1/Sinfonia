

paper.install(window);
window.onload = function() {
	// Setup directly from canvas id:
	paper.setup('canvas');
  let Square = Base.extend({
    initialize: function(position, size, maxSpeed) {
      this.maxSpeed = maxSpeed;
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
      this.position = this.position.plus(this.vector);
      this.sq.position = this.position;
    },
  })

  let Circle = Base.extend({
    initialize: function(position, radius, maxSpeed) {
      this.maxSpeed = maxSpeed;
      this.vector = (Point.random() * 2 - 1);
      this.drawCircle(position, radius);
    },
    drawCircle: function(position, radius) {
      this.circle = new Path.Circle({
        center: position,
        radius: radius,
        strokeColor: 'black'
      });
    },
    run: function() {
      this.position = this.position.plus(this.vector);
      this.circle.position = this.position;
    },
  })

  const objects = [];

  function onKeyDown(event) {
      const position = new Point(view.size).multiply(Point.random());
      const side = 300 * Math.random();
      const size = new Size(side, side).multiply(Size.random());
      const radius = 300 * Math.random();
      const maxSpeed = 10;
      switch (event.key) {
        case 'a':
          objects.push(new Square(position, size, maxSpeed))
          break;
        case 'z':
          objects.push(new Circle(position, radius, maxSpeed))
          break;
        default:
      }
  };



};
