// @ts-nocheck
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  //Instance Method - specific to a object
  draw() {}

  // Static Method - are not available on the object instance, only accessible on the class
  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}

//Cricle object instance has the draw method
const circle = new Circle(1);
console.log(circle);

//STATIC METHODS
const circles = Circle.parse('{"radius: 1"}');
console.log(circles);
//These are available on the class itself but not on the object instance. Used to create utility fucntions that are not specific to a given object

class Math2 {
  static abs(value) {
    //
  }
}

Math2.abs();
