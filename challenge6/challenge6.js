// convert infix to prefix using stack
"use strict";
const Stack = require('./stack.js');

function precedence(operator) {
    if(operator === "-" || operator === "+") {
        return 1
    } else if(operator === "*" || operator === "/") {
        return 2
    }
}

function infixtoPrefix(infixStr) {
    const reverseInfixArr = infixStr.split("").reverse()
    console.log(reverseInfixArr)
    let stack = new Stack();
    let postfix = [];
    for(let i=0; i<reverseInfixArr.length; i++) {
        if(reverseInfixArr[i] !== "+" && reverseInfixArr[i] !== "-" && reverseInfixArr[i] !== "*" && reverseInfixArr[i] !== "/") {
            postfix.push(infixArr[i])
        } else {
            if(stack.isEmpty()) {
                stack.push(reverseInfixArr[i]) 
            } else {
                let elePrecedence = precedence(reverseInfixArr[i]);
                let stackElePrecedence = precedence(stack.getTop());
                if(elePrecedence > stackElePrecedence) {
                    stack.push(reverseInfixArr[i])
                } 
            }
        }
    }
}

infixtoPrefix("a+b*c-d");
// +a*bc