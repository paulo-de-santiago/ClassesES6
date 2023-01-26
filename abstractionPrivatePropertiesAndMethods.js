// @ts-nocheck
//Set a priavate property
const _radius = Symbol();
//Always returns an unique value: Symbol() === Symbol() false

// set a private method
const _draw = Symbol();

class Circle {
  constructor(radius) {
    this.radius = radius;
    //this["radius"] = radius;
    this[_radius] = radius;
  }

  //Implement private method
  [_draw]() {}
}

const c = new Circle(1);
c.radius;

//ES6 Symbols to achieve abstraction //

//Primitive type Symbol
