// evaluate postfix expression using stack
"use strict";
const Stack = require('./stack.js');

function evaluatePostfixExpression(str) {
    let arr = str.split(" ");
    let stack = new Stack();
    let val = 0;
    let op1, op2;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] !== "+" && arr[i] !== "-" && arr[i] !== "*" && arr[i] !== "/" && arr[i] !== "^") {
            stack.push(arr[i])
        } else {
            
            op2 = parseInt(stack.pop());
            op1 = parseInt(stack.pop());
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
    console.log(val);
    return val
}


evaluatePostfixExpression("2 3 4 * + 16 2 3 ^ / -");