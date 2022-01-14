class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);
        if (!this.root) {
            this.root = node;
            return this;
        }

        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = node;
                    return this;
                } else {
                    current = current.left;
                }
            } else if (value > current.value) {
                if (!current.right) {
                    current.right = node;
                    return this;
                } else {
                    current = current.right;
                }
            } else {
                console.log(`Node wth value ${value} already exists`);
                return this;
            }
        }
    }

    search(value) {
        if (!this.root) {
            return null;
        }

        let current = this.root;
        while (true) {
            if (value === current.value) {
                return true;
            } else if (value < current.value) {
                if (!current.left) {
                    return false;
                } else {
                    current = current.left;
                }
            } else if (value > current.value) {
                if (!current.right) {
                    return false;
                } else {
                    current = current.right;
                }
            }
        }
    }

    BFS() { // Breadth first search (traverse all same level elements starting from top)
        let queue = [],
            data = [],
            node = this.root;
        queue.push(node);

        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }

    DFSPreOrder() { // depth first search(node -> left branch -> right branch)
        let date = [],
            current = this.root;

        function traverse(node) {
            date.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(current);
        return date;
    }

    DFSPostOrder() { // (left branch -> right branch -> node)
        let date = [],
            current = this.root;

        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            date.push(node.value);
        }
        traverse(current);
        return date;
    }

    DFSInOrder() { // (left branch -> node -> right branch)
        let date = [],
            current = this.root;

        function traverse(node) {
            if (node.left) traverse(node.left);
            date.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(current);
        return date;
    }
}