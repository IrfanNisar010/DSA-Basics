
class Dnode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(data) {
        const newNode = new Dnode(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = newNode;
            newNode.prev = current;
        }
        this.size++;
    }

   remove(data) {
    if (!this.head) return null;
    let current = this.head;
    if (current.data === data) {
        this.head = current.next;
        if (this.head) this.head.prev = null;
        this.size--;
        return
    }

    while (current && current.data !== data) {
        current = current.next;
    }

    if (current) {
        if (current.next) current.next.prev = current.prev;
        if (current.prev) current.prev.next = current.next;
        this.size--;
    } else {
        console.log("Node not found");
    }

   }

    find(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) return current;
            current = current.next;
        }
        return null;
    }

    insertAt(data, index) {
        if(index < 0 || index > this.size ) {
            console.log("Invalid index");
            return;
        }

        const newNode = new Dnode(data);
        if (index === 0) {
            newNode.next = this.head;
            if (this.head) this.head.prev = newNode;
            this.head = newNode;
        } else {
            let current = this.head;
            let count = 0;

            if (current) {
                newNode.prev  = current.prev;
                newNode.next  = current;
                current.prev.next = newNode;
                current.prev = newNode;
            } else {
                newNode.prev = this.head;
                this.head.next = newNode;
            }
        }
        this.size++
    }

    printList() {
        let current = this.head;
        let list = [];
        while(current) {
            list.push(current.data);
            current = current.data
        }

        console.log(list.join(" <-> "));
    }
}

const list  = new DoublyLinkedList();

list.add(10);
list.add(30);
list.add(50);
list.insertAt(3,2);
list.printList()








// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }

//     add(data){
//         const newNode = new Node(data);
//         if(!this.head) {
//             this.head = newNode;
//         } else {
//             let current = this.head;
//             while(current.next) {
//                 current = current.next;
//             } 
//             current.next = newNode;
//         }

//         this.size++;
//     }

//     remove(data) {
//         if(!this.head) return null;
//         if(this.head.data === data) {
//             this.head = this.head.next;
//             this.size--;
//             return;
//         }

//         let current = this.head;
//         let previous = null;
//         if(current && current.data !== data) {
//             previous = current;
//             current = current.next;
//         }

//         if(current) {
//             previous.next = current.next;
//             this.size--;
//         } else {
//             console.log("Node not found");
//         }
//     }


//     find(data) {
//         let current = this.head;
//         while(current) {
//             if (current.data === data) return current;
//             current = current.next;
//         }
//         return null;
//     }

//     insertAt(data, index) {
//         if (index < 0 || index > this.size) {
//             console.log("Invalid index");
//             return;
//         }

//         const newNode = new Node (data);
//         if(index === 0) {
//             newNode.next = this.head;
//             this.head = newNode
//         }else {
//             let current = this.head;
//             let previous = null;
//             let count = 0;

//             while (count < index) {
//                 previous = current;
//                 current = current.next;
//                 count++;
//             }
//             newNode.next = current;
//             previous.next = newNode;
//         }
//         this.size++
//     }

//     printList() {
//         let current = this.head;
//         let list = [];
//         while(current) {
//             list.push(current.data);
//             current = current.next;
//         }
//         console.log(list.join(" -> "));
//     }
// }

// const list = new LinkedList();

// list.add(10);
// list.add(20);
// list.add(30);
// list.printList()
// list.insertAt(2,1);
// list.printList()