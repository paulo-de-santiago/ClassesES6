// @ts-nocheck
/* function Circle(radius) {
  this.radius = radius;
}

this.draw = function () {
  console.log("draw");
};
 */
//Rewrite using ES6:
//Methods don't use the word this but they are defined in the body of the class
class Circle {
  //constructor is a method and it is used to initialise objects- just like the constructor function above
  constructor(radius) {
    this.radius = radius;
    //methods defined in the constructor won't be in the prototype
    //move method is only on the object instance
    this.move = function () {};
  }
  //no function keyword
  draw() {
    console.log("draw");
  }
}

const c = new Circle(1);
