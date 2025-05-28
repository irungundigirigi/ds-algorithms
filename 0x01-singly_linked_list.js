#!/usr/bin/node
class Node {
  constructor(data) {
    this.data = data
    this.next = null
    }
}

class singly_linked_list { 
  constructor() {
    this.head = null
    this.size = 0
  }
  /** Adds node to the end of a linked list */
  append(value){
    let new_node =new Node(value)
    if(!this.head){
      this.head = new_node;
      this.size++
      return
    }
    let current = this.head;
    while(current.next){
      current = current.next
    }
    current.next = new_node
    this.size++
  }
  /** Adds node to the end of a linked list */
  prepend(value) {
    let new_node = new Node(value)
    new_node.next = this.head
    this.head = new_node
  }
  /** delete first */
  delete_first() {
    if(!this.head){
      return
    }
    this.head = this.head.next
    this.size--
  }
  /** delete at index*/
  delete_at(index) {
    if(!this.head ||this.index < 0 || index >= this.size){
      return
    }
    if(this.size == 1) {
      this.head = null
      this.size--;
      return
    }
    if (index == 0){
      this.head = this.head.next
      this.size--;
      return
    }
    let previous = null
    let i = 0
    let current = this.head
    // assume delete 4th item idx=3
    while(i < index) {
      previous = current
      current = current.next //2
      i++
    }
    previous.next = current.next
    this.size--;
  }

  /** Print the content of list */
  print_list() {
    let current = this.head
    while(current){
      console.log(current.data)
      current = current.next
    }
  }
}

let list_1 = new singly_linked_list();
list_1.append(10);
list_1.append(2)
list_1.append(23)
list_1.append(12)
list_1.prepend(0)
list_1.delete_at(1)
list_1.print_list()
