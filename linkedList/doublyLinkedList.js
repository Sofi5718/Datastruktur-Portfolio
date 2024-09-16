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

    remove(data) {
        let current = this.head;
        while (current) {
            if (current.data == data) {
                this.removeNode(current);
                return true;
            }
            current = current.next;
        }
        return false;
    }

    removeIndex(index) {
        let current = this.nodeAt(index);
        if (!current) return null;
        this.removeNode(current);
        return current.data;
    }

    get(index) {
        let current = this.nodeAt(index);
        return current ? current.data : null;
    }

    indexOf(data) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.data == data) return index;
            current = current.next;
            index++;
        }
        return -1;
    }

    insertAfter(index, data) {
        let current = this.nodeAt(index);
        if (!current) return;
        const newNode = new Node(data);
        newNode.next = current;
        newNode.prev = current.prev;
        if (current.prev) current.prev.next = newNode;
        current.prev = newNode;
        if (current === this.head) this.head = newNode;
        this.count++;
    }

    first() {
        return this.head ? this.head.data : null;
    }

    last() {
        return this.tail ? this.tail.data : null;
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

    insertAfterNode(newNode, existingNode) {
        newNode.next = existingNode.next;
        newNode.prev = existingNode;
        if (existingNode.next) existingNode.next.prev = newNode;
        existingNode.next = newNode;
        if (existingNode === this.tail) this.tail = newNode;
        this.count++;
    }

    insertBeforeNode(newNode, existingNode) {
        newNode.next = existingNode;
        newNode.prev = existingNode.prev;
        if (existingNode.prev) existingNode.prev.next = newNode;
        existingNode.prev = newNode;
        if (existingNode === this.head) this.head = newNode;
        this.count++;
    }

    removeNode(existingNode) {
        if (existingNode.prev) existingNode.prev.next = existingNode.next;
        if (existingNode.next) existingNode.next.prev = existingNode.prev;
        if (existingNode === this.head) this.head = existingNode.next;
        if (existingNode === this.tail) this.tail = existingNode.prev;
        this.count--;
    }

    nodeAt(index) {
        if (index < 0 || index >= this.count) return null;
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }

    swapNodes(nodeA, nodeB) {
        if (nodeA === nodeB) return;
        let temp = nodeA.data;
        nodeA.data = nodeB.data;
        nodeB.data = temp;
    }

    clear() {
        this.head = this.tail = null;
        this.count = 0;
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
