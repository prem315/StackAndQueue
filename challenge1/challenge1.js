// Generate Binary Numbers From 1 to n Using Queue
"use strict";
const Queue = require('./queue.js');
console.log(Queue);

function generateBin(n) {
    let results = [];
    const myQueue = new Queue();

    let s1, s2;

    myQueue.enqueue("1");

    for(let i = 0; i < n; i++) {
        results.push(myQueue.dequeue());
        
        s1 = results[i] + "0";
        s2 = results[i] + "1";

        myQueue.enqueue(s1);
        myQueue.enqueue(s2);
    }

    console.log("results", results)
    return results;
}

generateBin(5);