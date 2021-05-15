class Stack {
    constructor() {
        this.items = [];
        this.top = null;
    }

    isEmpty() {
        return this.items.length === 0
    }

    getTop() {
        if(this.items.length === 0) {
            return null;
        } else {
            return this.top
        }
    }

    size() {
        return this.items.length
    }

    push(element) {
        this.items.push(element);
        this.top = element;
    }

    pop() {
        if(this.items.length !== 0) {
            if(this.items.length === 1) {
                this.top = null;
                return this.items.pop();
            } else {
                this.top = this.items[this.items.length - 2]
                return this.items.pop();
            }
        } else {
            return null
        }
    }
}

let stack = new Stack()
console.log("stack", stack)
stack.push(5)
stack.push(3)
stack.push(7)

console.log("stack", stack.items)

stack.pop();

console.log("stack", stack.items)
console.log("stack top", stack.top)
