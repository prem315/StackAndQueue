// craete a min() Function Using a Stack

"use strict";
const Stack = require('./stack.js');
class minStack {
    constructor() {
        this.mainStack = new Stack()
        this.minStack = new Stack()
    }

    pop() {
        return this.mainStack.pop()
    }
    
    push(value) {
        this.mainStack.push(value)
        if (value > this.minStack.getTop() && this.minStack.isEmpty() == false){
            this.minStack.push(this.minStack.getTop())
        } else {
            this.minStack.push(value)      
        } 
    }
    
    min() {
        return this.minStack.getTop()
    }
}
var stack = new minStack()
stack.push(50)
stack.push(20)
stack.push(4)
stack.push(10)
stack.push(3)
stack.push(92)

console.log("minimum value: ",stack.min())

stack.pop()
stack.pop()
stack.pop()

console.log("minimum value: " ,stack.min())