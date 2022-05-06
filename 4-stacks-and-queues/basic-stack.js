class ArrayStack{
    constructor(){
        this.array = [];
    }
    peek(){
        return this.array[this.array.length-1];
    }
    push(value){
        this.array.push(value);
        return this;
    }
    pop(){
        return this.array.pop(value);
    }
}

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Queue{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    peek(){
        return this.top;
    }
    push(value){
        const newNode = new Node(value);
        if (this.length === 0){
            this.top = newNode;
            this.bottom = newNode;
        } else{
            const temp = this.top;
            this.top = newNode;
            this.top.next = temp;
        }
        this.length++;
        return this;
    }
    pop(value){
        if(!this.top){
            return null;
        }
        if( this.top === this.bottom){
            this.bottom = null;
            return null;
        }
        const temp = this.top;
        this.top = this.top.next;
        this.length--;
        return temp;
    }
}

const stack = new Queue();
stack.push('a');
stack.push('b');
console.log(stack);