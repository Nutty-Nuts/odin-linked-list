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

    #incrementSize() {
        this.size++;
    }

    #outOfBounds(index) {
        if (index > 0 && index > this.size) return true;
    }

    #moveToIndex(index, previous, current) {
        for (let count = 0; count < index; count++) {
            previous = current;
            current = current.next;
        }

        return [previous, current];
    }

    getSize() {
        return this.size;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.#incrementSize();
    }

    insertLast(data) {
        let node = new Node(data);
        let current = this.head;

        if (this.head === null) this.head = node;
        else {
            while (current.next) current = current.next;
            current.next = node;
        }

        this.#incrementSize();
    }

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

    getAt(index) {
        let current = this.head;
        let previous;
        let getNode = this.#moveToIndex(index, previous, current);

        return getNode[1];
    }

    getHead() {
        return this.getAt(0);
    }

    getTail() {
        return this.getAt(this.size - 2);
    }

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

    removeHead() {
        this.removeAt(0);
    }

    removeTail() {
        this.removeAt(this.size - 3);
    }

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

    clearList() {
        this.head = null;
        this.size = 0;
    }

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
