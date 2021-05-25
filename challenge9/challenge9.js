// find next greater element using stack
"use strict";
const Stack = require('./stack.js');

function findNextGreaterEle(arr) {
    let myStack = new Stack();
    let result = [];
    var top, next;

    for (var i = arr.length - 1; i >= 0; i--) {
        next = arr[i]
        if (myStack.isEmpty() == false) {
            top = myStack.getTop();
            while (top <= next) {
                if (myStack.isEmpty()) {
                    break;
                }
                myStack.pop();
                top = myStack.getTop();
            }

        }
        if(!myStack.isEmpty())
            result[i] = myStack.getTop();
        else
            result[i] = -1

        myStack.push(next);
    }

    return result;
}


findNextGreaterEle([4,6,3,2,8,1])