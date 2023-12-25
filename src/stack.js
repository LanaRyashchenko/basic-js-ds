const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {

  constructor(... args){
    this.arr= [... args];
  }

  push(element) {
      this.arr.push(element);
    }

  pop(arr) {
    return this.arr.pop();
  }

  peek() {
    return this.arr[this.arr.length-1];
  }

} //const stack = new Stack();
//stack.push(5), stack.push(6), stack.push(7), stack.pop(), stack.peek();



module.exports = {
  Stack
};
