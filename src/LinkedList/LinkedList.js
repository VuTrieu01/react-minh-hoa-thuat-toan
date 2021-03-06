class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
export default class LinkedList {


    constructor() {
        this.head = "null";
        this.tail = "null";
        this.length = 0;
        this.action = "User hasn't done anything!";
    }

    addToHead(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        this.action = "User adds " + value;
        return this;
    }

    addToTail(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.action = "User adds " + value;
        } else {
            this.tail.next = newNode;

            newNode = this.tail;
            this.action = "aaaaaaaaa " + value;
        }

        this.length++;

        return this;
    }

    removeFromHead() {
        if (this.length === 0) {
            return undefined;
        }

        const value = this.head.value;
        this.action = "User removes " + this.head.value;
        this.head = this.head.next;
        this.length--;


        return value;
    }

    find(val) {
        let thisNode = this.tail;

        while (thisNode) {
            if (thisNode.value === val) {
                return thisNode;
            }

            thisNode = thisNode.next;
        }

        return thisNode;
    }

    remove(val) {
        if (this.length === 0) {
            return undefined;
        }

        if (this.head.value === val) {
            return this.removeFromHead();
        }

        let previousNode = this.head;
        let thisNode = previousNode.next;

        while (thisNode) {
            if (thisNode.value === val) {
                break;
            }

            previousNode = thisNode;
            thisNode = thisNode.next;
        }

        if (thisNode === null) {
            return undefined;
        }

        previousNode.next = thisNode.next;
        this.length--;
        this.action = "User removes " + val;
        return this;
    }
}