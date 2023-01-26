// @ts-nocheck
// weakMap()
//private property
const _radius = new WeakMap();
//private method
const _move = new WeakMap();

class Circle {
  constructor(radius) {
    // this.radius = radius;
    //Initialise
    _radius.set(this, radius);

    //using arrow function instead of function() so it uses this
    _move.set(this, () => {
      console.log("move", this); //this will return undefined because classes are executed in strict mode
    });
  }

  draw() {
    console.log(_radius.get(this));
    _move.get(this)(); // this returns a function so we can call it
    console.log("draw");
  }
}

const c = new Circle(1);
