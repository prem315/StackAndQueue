// convert infix to postfix using stack
"use strict";
const Stack = require('./stack.js');
function precedence(operand) {
    if(operand === "-" || operand === "+") {
        return 1
    } else if(operand === "*" || operand === "/") {
        return 2
    }
}
function infixToPostfix(infixStr) {
    const infixArr = infixStr.split("");
    let stack = new Stack();
    let postfix = [];
    for(let i=0; i<infixArr.length; i++) {
        if(infixArr[i] !== "+" && infixArr[i] !== "-" && infixArr[i] !== "*" && infixArr[i] !== "/"){
            postfix.push(infixArr[i])
        } else if (infixArr[i] === "+" || infixArr[i] === "-" || infixArr[i] === "*" || infixArr[i] === "/") {
            if(stack.isEmpty()) {
                stack.push(infixArr[i]) 
            } else {
                let ele = stack.getTop();
                let precedenceStack = precedence(ele);
                let precedenceScannedItem = precedence(infixArr[i]);     
                if(precedenceScannedItem > precedenceStack) {
                    stack.push(infixArr[i]) 
                } else if ( (precedenceScannedItem < precedenceStack) || (precedenceStack === precedenceScannedItem) ) {
                    while(stack.isEmpty() !== true) {
                        ele = stack.pop()
                        console.log("ele", ele)
                        postfix.push(ele);
                    }
                    stack.push(infixArr[i])
                }
            }
        }
    }
    while(stack.isEmpty() !== true) {
        postfix.push(stack.pop())
    }
    return postfix.join("")
}

infixToPostfix("x-y/z-r*d");
// infixToPostfix("x+y-z");