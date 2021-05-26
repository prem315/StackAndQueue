// check balanced parantheses using stack
"use strict";
const Stack = require('./stack.js');

function checkBalancedParantheses(str) {
    let stack = new Stack();
    let arr = str.split("")
    for(let i=0; i<arr.length; i++) {
        if(arr[i] == "{" || arr[i] == "(" || arr[i] == "[") {
            // if val is {,[,( --> push
            stack.push(arr[i])
        } else if(arr[i] == "}" || arr[i] == ")" || arr[i] == "]") {
            // if val is },],) --> pop
            if(stack.isEmpty()) {
                return
            }
            stack.pop();
        }
        console.log("Stack", i, "-->", stack.items)
    }
    
    if(stack.isEmpty()) {
        return true
    } else {
        return false
    }
    
}

checkBalancedParantheses("{{))}");