#!/usr/bin/node

/** represents a node in the bstree */
class bst_node {
    constructor(value){
        this.value = value
        this.right = null;
        this.left = null;
    }
}

/** Binary search tree class */
class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value){
        const new_node = new bst_node(value)
        if(!this.root){
            this.root = new_node
            return
        }
        let current = this.root;
        while(true){
            if(value < current.value){
                if(!current.left){
                    current.left = new_node
                    return;
                }
                current = current.left
            }
            else if(value > current.value){
                if(!current.right){
                    current.right = new_node
                    return;
                }
                current = current.right
            }else {
                //duplicate value
                return
            }
        }
    }
    /** 
     * Binary search tree transversal
     * INORDER: left->root-> right
     * PREORDER: root->left->right
     * POSTORDER: left->right->root
    */
   print_inorder() {
    const stack = [];
    let current = this.root;

    while(current || stack.length) {
        while(current) {
            stack.push(current)
            current = current.left
        }

        current = stack.pop()
        console.log(current.value)

        current = current.right
    }
   }

}

let bst = new BinarySearchTree()
bst.insert(2)
bst.insert(23)
bst.insert(10)
bst.insert(7)
bst.insert(19)
bst.insert(1)
bst.print_inorder()