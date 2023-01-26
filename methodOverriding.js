// @ts-nocheck
// Method overriding, when we have a method defined in the parent class and we want to change its implementation in the child class

class Shape {
  move() {
    console.log("move");
  }
}

class Circle extends Shape {
  //reimplementing move() in the Circle class
  move() {
    super.move(); // move comes from Shape class
    console.log("circle move"); //move comes from Circle class
  }
}
