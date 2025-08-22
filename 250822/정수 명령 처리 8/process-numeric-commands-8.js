const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

// Please Write your code here.
class Node {
    constructor(newData){
        this.data = newData;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    pushFront(data) {
        const newNode = new Node(data);

        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            newNode.prev = null;

            this.head.prev = newNode;
            this.head = newNode;            
        }
        this.length++;
    }
    pushBack(data) {
        const newNode = new Node(data);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            newNode.next = null;

            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    popFront() {
        if(this.length === 0) {
            console.log('List is Empty');
        } else if(this.head.next === null) {
            const temp = this.head;

            this.head = null;
            this.tail = null;
            this.length = 0;

            console.log(temp.data);
        } else {
            const temp = this.head;

            temp.next.prev = null;
            this.head = temp.next;
            temp.next = null;

            this.length--;

            console.log(temp.data);
        }
    }
    popBack() {
        if(this.length === 0) {
            console.log('List is Empty');
        } else if(this.tail.prev === null) {
            const temp = this.tail;

            this.head = null;
            this.tail = null;
            this.length = 0;

            console.log(temp.data);
        } else {
            const temp = this.tail;

            temp.prev.next = null;
            this.tail = temp.prev;
            temp.prev = null;

            this.length--;

            console.log(temp.data);
        }
    }

    size() {
        console.log(this.length);
    }
    empty() {
        console.log(this.length === 0 ? 1 : 0)
    }
    
    front() {
        if(this.length === 0) {
            console.log('List is Empty');
        }
        console.log(this.head.data);
    }
    back() {
        if(this.length === 0) {
            console.log('List is Empty');
        }
        console.log(this.tail.data);
    }
}
const dll = new DoubleLinkedList();
for(const command of commands) {
    const [c, v] = command.split(" ");
    switch(c) {
        case "push_back":
            dll.pushBack(v);
            break;
        case "pop_back":
            dll.popBack();
            break;
        case "push_front":
            dll.pushFront(v);
            break;
        case "pop_front":
            dll.popFront();
            break;
        case "size":
            dll.size();
            break;
        case "empty":
            dll.empty();
            break;
        case "front":
            dll.front();
            break;
        case "back":
            dll.back();
            break;
    }
}