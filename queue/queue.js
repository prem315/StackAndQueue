class Queue {
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

let myQueue = new Queue();
console.log("You have successfully created a Queue of size: " + myQueue.size());
console.log("Enqueue Elements 2,4,6,8,10");
myQueue.enqueue(2);
myQueue.enqueue(4);
myQueue.enqueue(6);
myQueue.enqueue(8);
myQueue.enqueue(10);


console.log("Dequeue(): " + myQueue.dequeue());
console.log("Dequeue(): " + myQueue.dequeue());

console.log("getFront(): " + myQueue.getFront());

console.log("Enqueue Elements 12,14");
myQueue.enqueue(12);
myQueue.enqueue(14);


