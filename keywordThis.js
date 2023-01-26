// @ts-nocheck

"use.strict"; //using fucntion call this will no longer point by default to the global object
// classes by default the body of classes are executed in strict mode

const Circle = function () {
  this.draw = function () {
    console.log(this);
  };
};

const circle = new Circle();
//Method call, calling a mehtod in an object
circle.draw();

const draw = circle.draw;
console.log(draw);

//Function call, it is not part of an object. By default it will point to the global object
draw();
