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
        this.size++;
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
    insertAtIndex(data, index) {
        if (index > 0 && index > this.size) {
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const node = new Node(data);
        let current, previous;

        current = this.head;
        let count = 0;

        while (count < index) {
            previous = current;
            count++;
            current = current.next;
        }

        node.next = current;
        previous.next = node;

        this.size++;
    }

    // get at index
    getAtIndex(index) {
        let current = this.head;
        let count = 0;

        while (current) {
            if (count == index) {
                console.log(current.data);
            }
            count++;
            current = current.next;
        }

        return null;
    }

    // remove at index
    removeAtIndex(index) {
        if (index > 0 && index > this.size) {
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        if (index == 0) {
            this.head = current.next;
        } else {
            while (count < index) {
                count++;
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
        }
    }

    // clear list
    clearList() {
        this.head = null;
        this.size = 0;
    }

    // print list data
    printListData() {
        let current = this.head;

        let array = [];
        let printString = "";

        function stringFormat(string) {
            return ` ( ${string} ) -->`;
        }

        while (current) {
            array.push(current.data);
            current = current.next;
        }

        for (let i of array) {
            printString = `${printString}${stringFormat(i)}`;
        }

        printString = `${printString} null`;
        console.log(printString);
    }
}

const linkedList = new LinkedList();

linkedList.insertFirst(100);
linkedList.insertFirst(200);
linkedList.insertFirst(300);

linkedList.insertLast(400);

linkedList.insertAtIndex(500, 2);

linkedList.printListData();

console.log("");

linkedList.getAtIndex(2);

console.log("");

linkedList.removeAtIndex(2);
linkedList.removeAtIndex(0);

linkedList.printListData();

linkedList.clearList();

console.log("");

linkedList.printListData();
