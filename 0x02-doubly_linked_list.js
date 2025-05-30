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

    /** 
     * adds a node to the end of list 
     * Time Complexity: O(1)
     */
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
    /** 
     * adds a node with value v at specific index idx
     * Time complexity: O(n)
     * NB optimize to transverse via quickest side - from tail/head
     * */
    insertAt(idx, v) {
        let new_node = new Node(v)
        let i = 0
        let current = this.head
        let prv = null
        if(idx == 0) {
            new_node.next = this.head
            this.head.prev = new_node
            this.head = this.head.prev
            this.size++
            return
        }
        while(i < idx) {
            prv = current
            current = current.next
            i++
        }
        new_node.next = current
        new_node.prev = prv
        prv.next = new_node
        current.prev = new_node
        this.size++
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
dll.insertAt(0,9)
dll.insertAt(1, 9.5)
dll.insertAt(1, 9.6)

dll.print_list()