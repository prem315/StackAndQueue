module.exports = class Stack {
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


