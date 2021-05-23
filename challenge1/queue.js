"use strict";

module.exports = class Queue {
    constructor() {
        this.items = [];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    getFront() {
        if(this.isEmpty()) {
            return null;
        } else {
            return this.items[0];
        }
    }

    size() {
        return this.items.length;
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if(this.isEmpty()) {
            return null;
        } else {
            return this.items.shift()
        }
    }
} 