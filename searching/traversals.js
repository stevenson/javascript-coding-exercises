function traverseInOrder(node, list) {
    // left root right
    console.log(node.value);
    if(node.left){
        traverseInOrder(node.left, list);
    }
    list.push(node.value);
    if(node.right){
        traverseInOrder(node.right, list);
    }
    return list;
}

function traversePreOrder(node, list) {
    //root left right
    list.push(node.value);
    if(node.left){
       traversePreOrder(node.left, list);
    }
    if(node.right){
        traversePreOrder(node.right, list);
    }
    return list;
}

function traversePostOrder(node, list) {
    // left right root
    if(node.left){
        traversePostOrder(node.left, list);
    }
    if(node.right){
        traversePostOrder(node.right, list);
    }
    list.push(node.value);
    return list;
}



class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const node = new Node(value);
        if (this.root === null) {
            this.root = node;
        } else {
            let current = this.root;
            while (true) {
                if (value < current.value) {
                    if (!current.left) {
                        current.left = node;
                        return this;
                    }
                    current = current.left;
                } else {
                    if (!current.right) {
                        current.right = node;
                        return this
                    }
                    current = current.right;
                }
            }
        }

    }
    lookup(value) {
        if (!this.root) {
            return null;
        }
        let current = this.root;
        while (current) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else if (value === current.value) {
                return current;
            }
        }
        return null;
    }
    remove(value) {
        //TODO: implement remove
    }

    breadthFirstSearch() {
        let currentNode = this.root;
        let list = [];
        let queue = [];
        queue.push(currentNode);
        while (queue.length > 0) {
            currentNode = queue.shift();
            list.push(currentNode.value);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }
        return list;
    }
    breadthFirstSearchRecursive(queue, list) {
        console.log(queue);
        console.log(queue.length);
        if (!queue.length) {
            return list;
        }
        let currentNode = queue.shift();
        console.log(currentNode);
        list.push(currentNode.value);
        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }
        return this.breadthFirstSearchRecursive(queue, list);
    }
    

    dfsInOrder() {
        return traverseInOrder(this.root, []);
    }
    dfsPreOrder() {
        return traversePreOrder(this.root, []);
    }
    dfsPostOrder() {
        return traversePostOrder(this.root, []);
    }
}

let myBst = new BinarySearchTree();
myBst.insert(9);
myBst.insert(4);
myBst.insert(20);
myBst.insert(1);
myBst.insert(6);
myBst.insert(15);
myBst.insert(170);
// console.log(myBst);
// console.log(myBst.lookup(1));
//console.log(myBst.breadthFirstSearch());
//console.log(myBst.breadthFirstSearchRecursive([myBst.root], []));
console.log(myBst.dfsInOrder());
console.log(myBst.dfsPreOrder());
console.log(myBst.dfsPostOrder());

