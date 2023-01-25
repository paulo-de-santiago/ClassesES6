// @ts-nocheck
//Function declaration, these are hoisted, they are raised to the top of the page
sayHello();

function sayHello() {}

//Function Expression, these are not hoisted
const sayGoodbye = function () {};

//Defining classes with declaration syntax or expression syntax
//Class Declarations are not hoisted!!!!

//Class Declaration
class Circle {}

//Class Expression

const Square = class {};
