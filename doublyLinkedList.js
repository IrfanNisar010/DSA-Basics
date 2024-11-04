class Node {
    constructor(value) {
        this.value =  value;
        this.next = null;
        this.prev = null;
    }
}

class doublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    prepend(data) {
        const newNode = new Node(data)

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    append(data) {
        const newNode = new Node(data)

        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    print() {
        let current = this.head;
        while(current) {
            console.log(current.value)
            current = current.next;
        }
    }
 }

let list = new doublyLinkedList();
list.prepend(10);
list.append(20);
list.prepend(5);
list.append(30);
list.print();  // Outputs: 5, 10, 20, 30
