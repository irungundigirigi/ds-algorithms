#!/usr/bin/node


/** instantiates a new node */
class Node{
    constructor(value) {
        this.value = value
        this.prev = null
        this.next = null
    }
}

/** implement doubly linked list and its methods  */
class doubly_linked_list{
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    append_node(value) {
        let new_node = new Node(value);
        if(!this.head){
            this.head = new_node
            this.tail = new_node
            this.size++
            return
        }
        new_node.prev = this.tail
        this.tail.next = new_node
        this.tail = new_node
        

    }
    print_list(){
        let current = this.head
        while(current){
            console.log(current.value)
            current = current.next
        }
    }
}

let dll = new doubly_linked_list
dll.append_node(23)
dll.append_node(2)
dll.append_node(22)

dll.print_list()