//Implement a singly linked list.
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    delete(data) {
        if (!this.head) {
            return;
        }
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    display() {
        let current = this.head;
        while (current) {
            console.log(current.data + " -> ");
            current = current.next;
        }
        console.log("null");
    }
}

// Example usage:
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.display();  // Output: 1 -> 2 -> 3 -> 4 -> null

linkedList.prepend(0);
linkedList.display();  // Output: 0 -> 1 -> 2 -> 3 -> 4 -> null

linkedList.delete(2);
linkedList.display();  // Output: 0 -> 1 -> 3 -> 4 -> null



//Implement a stack using an array
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items.toString());
    }
}

// Example usage:
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.print();  // Output: 1,2,3

console.log("Popped element:", stack.pop());  // Output: Popped element: 3
stack.print();  // Output: 1,2



//Implement a queue using a linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(data) {
        const newNode = new Node(data);
        if (!this.front) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }

    dequeue() {
        if (!this.front) {
            return "Underflow";
        }
        const removedNode = this.front;
        this.front = this.front.next;
        if (!this.front) {
            this.rear = null;
        }
        this.size--;
        return removedNode.data;
    }

    peek() {
        if (!this.front) {
            return null;
        }
        return this.front.data;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    print() {
        let current = this.front;
        const elements = [];
        while (current) {
            elements.push(current.data);
            current = current.next;
        }
        console.log(elements.join(", "));
    }
}

// Example usage:
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print(); // Output: 1, 2, 3
console.log("Dequeued element:", queue.dequeue()); // Output: Dequeued element: 1
queue.print(); // Output: 2, 3



//Write a function to reverse a linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    while (current) {
        const nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    return prev;
}

// Example usage:
function printLinkedList(head) {
    let current = head;
    const elements = [];
    while (current) {
        elements.push(current.data);
        current = current.next;
    }
    console.log(elements.join(" -> "));
}

// Create a sample linked list
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

console.log("Original linked list:");
printLinkedList(head); // Output: 1 -> 2 -> 3 -> 4

const reversedHead = reverseLinkedList(head);

console.log("Reversed linked list:");
printLinkedList(reversedHead); // Output: 4 -> 3 -> 2 -> 1



//Write a function to check if a linked list contains a cycle.
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function hasCycle(head) {
    if (!head || !head.next) {
        return false;
    }

    let slow = head;
    let fast = head.next;

    while (fast && fast.next) {
        if (slow === fast) {
            return true; // Cycle detected
        }
        slow = slow.next;
        fast = fast.next.next;
    }

    return false; // No cycle detected
}

// Example usage:

// Create a linked list with a cycle
const headWithCycle = new Node(1);
const secondNode = new Node(2);
headWithCycle.next = secondNode;
const thirdNode = new Node(3);
secondNode.next = thirdNode;
thirdNode.next = secondNode; // Creating a cycle

console.log("Does the linked list have a cycle?", hasCycle(headWithCycle)); // Output: true

// Create a linked list without a cycle
const headWithoutCycle = new Node(1);
headWithoutCycle.next = new Node(2);
headWithoutCycle.next.next = new Node(3);

console.log("Does the linked list have a cycle?", hasCycle(headWithoutCycle)); // Output: false
