//we can create our own stack
/*functions:
push: insert element into stack
pop: remove top element from stack
peek : displaying top element of satck
size: size of the stack
*/
var Stack = function () {
    this.count = 0;
    this.storage = {};
    this.push = function (value) {
        this.storage[this.count] = value;
        this.count++;
    }
    this.pop = function () {
        if(this.count === 0) {
            return undefined;
        }
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }
    this.peek = function () {
        return this.storage[this.count-1];
    }
    this.size = function () {
        return this.count;
    }
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.size());
console.log(myStack.peek());
myStack.push("Rukhsar");
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.size());
console.log(myStack.peek());
