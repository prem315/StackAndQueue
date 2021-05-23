// evaluate prefix expression using stack
"use strict";
const Stack = require('./stack.js');

function evaluatePrefix(str) {
    let arr = str.split(" ")
    let stack = new Stack();
    let op1, op2;
    let val = 0;
    for(let i= arr.length-1; i >= 0; i--) {
        console.log(arr[i]);
        if(arr[i] !== "+" && arr[i] !== "-" && arr[i] !== "*" && arr[i] !== "/" && arr[i] !== "^") {
            stack.push(arr[i])
        } else {
            
            op1 = parseInt(stack.pop());
            op2 = parseInt(stack.pop());
            if(arr[i] === "+") {
                val = op1 + op2;
            } else if(arr[i] === "-") {
                val = op1 - op2;
            } else if(arr[i] === "*") {
                val = op1 * op2;
            } else if(arr[i] === "/") {
                val = op1 / op2;
            } else if(arr[i] === "^") {
                let insideVal = 1;
                for(let i=0; i<op2; i++) {
                    insideVal = insideVal * op1 
                }
                val = insideVal;
            }
            stack.push(val);
        }
        
    }
    console.log(stack);
    return val
}

evaluatePrefix("- + 2 * 3 4 / 16 ^ 2 3")