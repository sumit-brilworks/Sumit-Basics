// Create a class called the stack that implements push / pop methods and count property using ES6 classses

class Stack {
  constructor() {
    this.stack = [];
    this.count = 0;
  }
  push(item) {
    console.log(item);
    this.stack.push(item);
    this.count++;
  }
  pop() {
    if (this.count === 0) {
      throw new Error("Stack is empty");
      return;
    }
    this.stack.pop();
    this.count--;
  }
}
const obj = new Stack();
obj.push(10);
console.log(obj);
obj.pop();
console.log(obj);
obj.push(103);
console.log(obj);
obj.push(101);
console.log(obj);
obj.pop();
console.log(obj);
obj.pop();
