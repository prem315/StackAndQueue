// Reversing First k Elements of Queue
"use strict";
const Queue = require('./queue.js');
const Stack = require('./stack.js');

function reverseKElementsOfQueue(queue, k) {
    // create an empty stack
    let stack = new Stack();
    if(queue.isEmpty() !== true) {

        for(let i = 0; i < k; i++) {
            // remove first k ele from queue and push it to stack
            let ele = queue.dequeue();
            // push ele to stack
            stack.push(ele);
        }

        // empty stack and push it to queue
        while(stack.isEmpty() !== true) {
            // remove ele from stack
            let ele = stack.pop();
            // push(enqueue) it to queue
            queue.enqueue(ele);
        }

        // remove first k ele from queue and push(enqueue) it to queue 
        for(let i = 0; i < (queue.size() - k); i++) {
            let ele = queue.dequeue();
            queue.enqueue(ele)
        }
    }

    console.log(queue);
    console.log(stack);
}

let queue = new Queue()
for(let i = 0; i < 10; i++) {
    queue.enqueue(i+1);
}

reverseKElementsOfQueue(queue, 4) 
