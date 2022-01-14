class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue { // implemented with min heap
    constructor() {
        this.values = [];
    }

    enqueue(value, priority) {
        const node = new Node(value, priority)
        this.values.push(node);
        let index = this.values.length-1;
        while(index > 0) {
            let parentIndex = Math.floor((index-1)/2);
            let parent = this.values[parentIndex];
            if(node.priority >= parent.priority) break;
            [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]];
            index = parentIndex;
        }
    }

    dequeue() { // extract root of the binary heap
        if(this.values.length === 1) {
            return this.values.pop();
        } else if (this.values.length === 0) {
            return undefined;
        }
        const element = this.values.pop();
        const max = this.values[0];
        this.values[0] = element;
        let index = 0;
        let leftChild, rightChild;
        while(true) {
            let leftChildIdx = 2 * index + 1;
            let rightChildIdx = 2 * index + 2;
            let swap = null;
            if(leftChildIdx < this.values.length) {
                leftChild = this.values[leftChildIdx]
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < this.values.length) {
                rightChild = this.values[rightChildIdx];
                if((swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)) {
                    swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            [this.values[index], this.values[swap]] = [this.values[swap], this.values[index]];
            index = swap;
        }
        return max;
    }
}

let pq = new PriorityQueue();
pq.enqueue('eat', 5);
pq.enqueue('study', 2)
pq.enqueue('project', 1);
pq.enqueue('sleep', 6);
pq.enqueue('play', 7);
pq.enqueue('movie', 9);
pq.dequeue();
console.log(pq);
