class MaxHeap {
    constructor() {
        this.values = [];
    }

    insert(val) {
        this.values.push(val);
        let index = this.values.length-1;
        while(index > 0) {
            let parentIndex = Math.floor((index-1)/2);
            let parent = this.values[parentIndex];
            if(val <= parent) break;
            [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]];
            index = parentIndex;
        }
    }

    remove() { // extract root of the binary heap
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
                if(leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < this.values.length) {
                rightChild = this.values[rightChildIdx];
                if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
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

let maxHeap = new MaxHeap();
maxHeap.insert(15)
maxHeap.insert(3);
maxHeap.insert(5);
maxHeap.insert(6);
maxHeap.insert(8);
maxHeap.insert(12);
// maxHeap.remove();
console.log(maxHeap);

