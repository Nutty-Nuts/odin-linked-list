class Node {
    // template for a node in a linked list

    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
class LinkedList {
    // template for a linked list

    constructor() {
        this.head = null;
        this.size = 0;
    }

    // insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size;
    }

    // insert last node
    insertLast(data) {
        let node = new Node(data);
        let current;

        if (!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.size++;
    }

    // insert at index

    // get at index

    // remove at index

    // clear list

    // print list data
    printListData() {
        let current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const linkedList = new LinkedList();

linkedList.insertFirst(100);
linkedList.insertFirst(200);

linkedList.printListData();
