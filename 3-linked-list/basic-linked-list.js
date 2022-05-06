// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }
// class LinkedList{
//     constructor(value){
//         this.head = new Node(value);
//         this.tail = this.head;
//         this.length = 1;
//     }
//     append(value){ //add to end
//         const node = new Node(value);
//         this.tail.next = node;
//         this.tail = node;
//         this.length++;
//     }
//     prepend(value){
//         const node = new Node(value);
//         node.next = this.head;
//         this.head = node;
//         this.length ++;
//     }
//     insert(index, value){
//         if(index === 0){
//             this.prepend(value);
//         }else if (index >= this.length){
//             this.append(value);
//         }else{
//             const node = new Node(value);
//             const preceeding = this.traverseToIndex(index-1);
//             const succeeding = preceeding.next; 
//             preceeding.next = node;
//             node.next = succeeding;            
//         }
//         this.length++;
//     }
//     remove(index){
//         const preceeding = this.traverseToIndex(index-1);
//         const forDelete = preceeding.next;
//         preceeding.next = forDelete.next;
//         this.length--;
//     }
//     traverseToIndex(index){
//         let counter =0
//         let currentNode = this.head;
//         while(counter < index){ // this also handles a negative index
//             currentNode = currentNode.next();
//             counter ++;
//         }
//         return currentNode;
//     }
// }


class LinkedList{
    constructor(value){
        this.head = {
            value: value,
            next: null,
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value){ //add to end
        const node = {
            value: value,
            next: null,
        };
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }
    prepend(value){
        const node = {
            value: value,
            next: null,
        };
        node.next = this.head;
        this.head = node;
        this.length ++;
    }
    insert(index, value){
        if(index === 0){
            this.prepend(value);
        }else if (index >= this.length){
            this.append(value);
        }else{
            const node = {
                value: value,
                next: null,
            };
            const preceeding = this.traverseToIndex(index-1);
            const succeeding = preceeding.next; 
            preceeding.next = node;
            node.next = succeeding;            
        }
        this.length++;
    }
    remove(index){
        const preceeding = this.traverseToIndex(index-1);
        const forDelete = preceeding.next;
        preceeding.next = forDelete.next;
        this.length--;
    }
    traverseToIndex(index){
        let counter =0
        let currentNode = this.head;
        while(counter < index){ // this also handles a negative index
            currentNode = currentNode.next();
            counter ++;
        }
        return currentNode;
    }
    reverse() {
        if(!this.head.next){
            return this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while(second){
            // switch the pointer to the node and the pointer to its next
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next=null;
        this.head = first;
        return this;
    }
}

class DoublyLinkedList{
    constructor(value){
        this.head = {
            value: value,
            next: null,
            prev: null,
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value){ //add to end
        const node = {
            value: value,
            next: null,
            prev: null,
        };
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }
    prepend(value){
        const node = {
            value: value,
            next: null,
            prev: null,
        };
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
        this.length ++;
    }
    insert(index, value){
        if(index === 0){
            this.prepend(value);
        }else if (index >= this.length){
            this.append(value);
        }else{
            const node = {
                value: value,
                next: null,
                prev: null,
            };
            const preceeding = this.traverseToIndex(index-1);
            const succeeding = preceeding.next; 
            preceeding.next = node;
            node.next = succeeding;       
            node.prev = preceeding;
            succeeding.prev = node; 
        }
        this.length++;
    }
    remove(index){
        const preceeding = this.traverseToIndex(index-1);
        const forDelete = preceeding.next;
        const succeeding = forDelete.next;
        preceeding.next = forDelete.next;
        succeeding.prev = forDelete.prev;
        this.length--;
    }
    traverseToIndex(index){
        let counter =0
        let currentNode = this.head;
        while(counter < index){ // this also handles a negative index
            currentNode = currentNode.next();
            counter ++;
        }
        return currentNode;
    }
}



const ll = new LinkedList(7);
ll.append(9);
ll.append(10);
ll.insert(1,8);
ll.remove(1);
console.log(ll);