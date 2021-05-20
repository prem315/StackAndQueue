// sort values in stack
"use strict";
const Stack = require('./stack.js');

function sortStack(stack) {
    let tempStack = new Stack();
    let value;
    while(stack.isEmpty() !== true) {
        // get top value from stack
        value = stack.pop();
        // check value is greater than top value of the stack
        if(value >= tempStack.getTop()) {
            // if greater -> push it to temperory stack
            tempStack.push(value)
        } 
        else {
            // if not -> remove all the ele from tempory stack and push it to the stack
            while(tempStack.isEmpty() !== true) {
                let ele = tempStack.pop();
                stack.push(ele)
            }
            // push the value to the tempory stack
            tempStack.push(value)
        }
    }
    return tempStack
}

var stack =new Stack()
stack.push(2)
stack.push(9)
stack.push(4)
stack.push(3)
stack.push(12)
stack.push(10)
stack.push(23)
let s=stack.size()
sortStack(stack)