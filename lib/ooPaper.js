

paper.install(window);
window.onload = function() {
	// Setup directly from canvas id:
	paper.setup('canvas');
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

  let Circle = Base.extend({
    initialize: function(position, radius, maxSpeed) {
      this.maxSpeed = maxSpeed;
      this.position = position.clone();
      this.radius = radius
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
      this.position += this.vector;
      this.circle.position = this.position;
    },
  })

  const objects = [];

  const toolK = new Tool();
  toolK.onKeyDown = function(event) {
      let position = view.center;
      let side = 300 * Math.random();
      let size = new Size(side);
      let radius = 300 * Math.random();
      let maxSpeed = 10;
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
