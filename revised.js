class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedListg {
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
    }
}

let newLinkedList = new LinkedListg();
newLinkedList.insertLast(10);
newLinkedList.insertLast(5);

console.log(newLinkedList);
