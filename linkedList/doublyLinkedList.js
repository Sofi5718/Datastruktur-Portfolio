class DoublyLinkedList {
    head;
    tail;
    count;

    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    addNodeLast(data) {
        const newTail = new Node(data);
        let currentTail = this.tail;
        if (currentTail != null) {
            currentTail.next = newTail;
            newTail.prev = currentTail;
            this.tail = newTail;
            this.count++;
            return;
        }
        if (this.head == null) {
            this.head = newTail;
            this.tail = newTail;
            this.count++;
            return;
        }
    }
    addNodeFirst(data) {
        const newHead = new Node(data);
        let currentHead = this.head;
        if (currentHead != null) {
            currentHead.prev = newHead;
            newHead.next = currentHead;
            this.head = newHead;
        }
        if (this.tail == null) {
            this.tail = newHead;
        }
        this.count++;
    }

    removeLast() {
        let currentTail = this.tail;
        if (currentTail != null) {
            this.tail = currentTail.prev;
            this.tail.next = null;
        }
        if (this.head != null && this.head == currentTail) {
            this.head = null;
        }
        this.count--;
    }

    removeFirst() {
        let currentHead = this.head;
        if (currentHead != null) {
            this.head = currentHead.next;
            this.head.prev = null;
        }
        this.count--;
    }

    removeNode(data) {
        let current = this.head;
        if (current.data == data) {
            this.head = current.next;
            this.head.prev = null;
            this.count--;
            return;
        }
        while (current) {
            if (current.data == data) {
                current.prev.next = current.next;
                current.next.prev = current.prev;
                this.count--;
                return;
            }
            current = current.next;
        }
    }

    dumpList() {
        let current = this.head;
        console.log("Linked List");
        console.log("============");
        console.log("Head: ", this.head.data);
        console.log("Tail: ", this.tail.data);
        console.log("============");
        while (current) {
            console.log("Node: ", current.data);
            console.log("-------------");
            console.log("Prev: ", current.prev ? current.prev.data : null);
            console.log("Next: ", current.next ? current.next.data : null);
            current = current.next;
            console.log(" ");
        }
    }
    size() {
        return this.count;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

const list = new DoublyLinkedList();

list.addNodeLast("B");
list.addNodeLast("C");
list.addNodeFirst("A");
list.removeNode("A");

//list.removeLast();
//list.addNodeLast("C");

//list.removeFirst();
//list.removeLast();
//list.addNodeLast("D");
//list.addNodeFirst("Z");
list.dumpList();
console.log(list.size());
