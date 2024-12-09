class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class linkedList {
    constructor() {
       this.head = null;
       this.size = 0;
    }


    append(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }

        this.size++
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    printList() {
        const values = [];

        let current = this.head;
        while(current) {
            values.push(current.value)
            current = current.next;
        }

        console.log(values);
    }

    remove(value) {
        if(!this.head) return null;
        if(this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let current = this.head;
        while( current.next && current.next.value !== value) {
            current = current.next;
        }
        if (current.next) {
            current.next = current.next.next;
            this.size--;
        }
    }

    find(value) {
        let current = this.head;
        while(current) {
            if(current.value === value) {
                return current;
            }

            current = current.next;
        }
        return null
    }
}

const list = new linkedList();

list.append(10);
list.append(20);
list.prepend(2);
list.printList();

