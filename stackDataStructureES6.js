// @ts-nocheck
// Stack, data structure, has essecially two operations: push and pop

//Implement stack class
// call new object: const stack = new Stack()
//stack , count property, three methods in the prototype: peek(), pop(), push()

//peek() returns the object at the top of the stack

//push("a") count = 1
//pop("a") count = 0
// stack.pop() and stack.peek()  throw new Error ("Stack is empty.")

//uma variável stackPile  const _stackPile = new WeakMap() . set

// _count = new WeakMap()
// _stackPile = new WeakMap()
// _pop = new WeakMap()
// _push = new WeakMap()
// peek = new WeakMap()

//Define which ones go in the constructor and which ones go in the prototype

//keeping private, just accessing
//initilize internal array
const _stack = new WeakMap();

class Stack {
  constructor() {
    //setting an empty array
    _stack.set(this, []);
  }

  push(obj) {
    //access to the array with get
    _stack.get(this).push(obj);
  }

  pop() {
    //const items = _stack.get(this);
    if (_stack.length === 0) throw new Error("Stack is empty.");
    //get the array
    return _stack.get(this).pop();
  }

  peek() {
    const stacks = _stack.get(this);

    if (stacks.length === 0) throw new Error("Stack is empty.");

    return stack[stacks.length - 1];
  }
  //read only property, so using getter, get count()
  get count() {
    return _stack.get(this).length;
  }
}

const stack = new Stack();
