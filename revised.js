class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // increments the size of the linked list
    #incrementSize() {
        this.size++;
    }

    // checks if the index is within the size of the linked list
    #outOfBounds(index) {
        if (index > 0 && index > this.size) return true;
    }

    // returns the node at the index and the node before
    #moveToIndex(index, previous, current) {
        for (let count = 0; count < index; count++) {
            previous = current;
            current = current.next;
        }

        return [previous, current];
    }

    // returns the size of the linked list
    getSize() {
        return this.size;
    }

    // inserts a node at the start of the linked list
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.#incrementSize();
    }

    // inserts a nodc at the end of the linked list
    insertLast(data) {
        let node = new Node(data);
        let current = this.head;
        let previous;

        if (this.head === null) this.insertFirst(data);
        else {
            while (current.next) current = current.next;
            current.next = node;
        }

        this.#incrementSize();
    }

    // inserts a node at a specified index
    insertAt(data, index) {
        if (this.#outOfBounds(index)) return;

        if (index === 0) {
            this.insertFirst(data);
            return;
        }

        let node = new Node(data);
        let current = this.head;
        let previous;

        let consecutiveNodes = this.#moveToIndex(index, previous, current);
        previous = consecutiveNodes[0];
        current = consecutiveNodes[1];

        node.next = current;
        previous.next = node;

        this.#incrementSize();
    }

    // returns the data of a node at a specified index
    getAt(index) {
        let current = this.head;
        let previous;
        let getNode = this.#moveToIndex(index, previous, current);

        return getNode[1];
    }

    // returns the first node of the linked list
    getHead() {
        return this.getAt(0);
    }

    // returns the last node of the linked list
    getTail() {
        return this.getAt(this.size - 2);
    }

    // removes a node at the specified index
    removeAt(index) {
        if (this.#outOfBounds(index)) return;

        let current = this.head;
        let previous;

        if (index === 0) {
            this.head = current.next;
            return;
        }

        let consecutiveNodes = this.#moveToIndex(index, previous, current);
        previous = consecutiveNodes[0];
        current = consecutiveNodes[1];

        previous.next = current.next;
    }

    // removes the first node of the linked list
    removeHead() {
        this.removeAt(0);
    }

    // removes the last node of the linked list
    removeTail() {
        this.removeAt(this.size - 3);
    }

    // returns the index of the value taken as a parameter
    find(value) {
        let current = this.head;
        let count = 0;

        while (current.next !== null) {
            if (current.data === value) return count;
            current = current.next;
            count++;
        }
        return null;
    }

    // checks if the value is inside the linked list
    contains(value) {
        let current = this.head;

        let count = 0;

        while (current.next !== null) {
            if (current.data === value) return true;
            current = current.next;
            count++;
        }
        return false;
    }

    // clears all nodes of the linked list
    clearList() {
        this.head = null;
        this.size = 0;
    }

    // prints all node of the linked list
    printList() {
        let current = this.head;
        let nodeData = [];
        let printString = "LIST <";

        while (current) {
            nodeData.push(current.data);
            current = current.next;
        }

        printString = `( ${nodeData.shift()} )`;

        for (let i of nodeData) {
            printString = `${printString} -—> ( ${i} )`;
        }

        console.log(printString);
    }
}

let newLinkedList = new LinkedList();

newLinkedList.insertLast(10);
newLinkedList.insertLast(5);
newLinkedList.insertLast(0);

newLinkedList.insertFirst(15);
newLinkedList.insertFirst(30);
newLinkedList.insertFirst(45);

console.log(newLinkedList);

console.log(newLinkedList.getAt(1));
newLinkedList.removeAt(0);

console.log(newLinkedList);

console.log(newLinkedList.getHead());
console.log(newLinkedList.getTail());

newLinkedList.printList();

newLinkedList.removeHead();
newLinkedList.removeTail();

newLinkedList.printList();

console.log(newLinkedList.find(10));
console.log(newLinkedList.contains(15));

console.log(newLinkedList.getSize());
