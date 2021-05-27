//Implement a Queue Using Stacks
"use strict";
const Stack = require('./Stack.js');

class newQueue {
    constructor(mySize) {
        this.tempStack = new Stack();
        this.mainStack = new Stack();
    }

    enqueue(value) { 
        this.mainStack.push(value);  
    }

    dequeue() {
        
        if(this.mainStack.isEmpty()){
            return null;
        }

        while (this.mainStack.isEmpty() == false) {
            this.tempStack.push(this.mainStack.pop());
        }

        let temp=this.tempStack.pop();
        
        while (this.tempStack.isEmpty() == false) {
            this.mainStack.push(this.tempStack.pop());

        }
      
        return temp;

    }

}
  
let queue = new newQueue()
console.log(queue)
    