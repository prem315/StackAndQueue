// Two Stacks Using One Array
class TwoStacks {
    constructor(s) {
        this.items = [];
        this.top1 = -1;
        this.top2 = s;
        this.size = s;
    }

    push1(value) {
        if(this.top1 < this.top2 - 1) {
            this.top1 = this.top1 + 1;
            this.items[this.top1] = value;
        }
    }

    push2(value) {
        if(this.top1 < this.top2 - 1) {
            this.top2 = this.top2 - 1;
            this.items[this.top2] = value;
        }
    }

    pop1() {
        if(this.top1 > 0) {
            let val = this.items[this.top1];
            this.top1 = this.top1 - 1;
            return val
        } else {
            return -1;
        }
    }

    pop2() {
        if(this.top2 < this.size) {
            let val = this.items[this.top2];
            this.top2 = this.top2 + 1;
            return val;
        } else {
            return -1;
        }
    }
}

var stack = new TwoStacks(10)
stack.push1(20)
stack.push2(10)
stack.push1(30)
stack.push2(40)
stack.push1(60)
stack.push2(50)

console.log("stack", stack)

console.log(stack.pop1())
console.log(stack.pop2())
console.log(stack.pop1())
console.log(stack.pop1())
console.log(stack.pop2())
console.log(stack.pop2())

console.log(stack.pop1())
console.log(stack.pop2())