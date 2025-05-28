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
        if(!root){
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
}