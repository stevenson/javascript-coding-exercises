class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(value){
        const node = new Node(value);
        if(this.root === null){
            this.root = node;
        }else{
            let current = this.root;
            while(true){
                if(value < current.value){
                    if(!current.left){
                        current.left = node;
                        return this;
                    }
                    current = current.left;
                } else {
                    if(!current.right){
                        current.right = node;
                        return this
                    }
                    current = current.right;
                }
            }
        }

    }
    lookup(value){
        if( !this.root) {
            return null;
        }
        let current = this.root;
        while(current){
            if(value<current.value){
                current = current.left;
            }else if( value > current.value){
                current = current.right;
            }else if(value === current.value){
                return current;
            }
        }
        return null;
    }
    remove(value){
        //TODO: implement remove
    }
}

let myBst = new BinarySearchTree();
myBst.insert(2);
myBst.insert(1);
myBst.insert(3);
myBst.insert(4);
myBst.insert(5);
console.log(myBst);
console.log(myBst.lookup(1));