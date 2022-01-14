class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }

    removeVertex(vertex) {
        this.adjacencyList[vertex].forEach(node => {
            this.removeEdge(vertex, node);
        });
        delete this.adjacencyList[vertex];
    }

    DFSRecursive(startVertex) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        function dfs(vertex) {
            if (!vertex) return null;
            result.push(vertex);
            visited[vertex] = true;
            adjacencyList[vertex].forEach(connection => {
                if (!visited[connection]) {
                    dfs(connection);
                }
            });
        }
        dfs(startVertex);
        return result;
    }

    DFSIterative(startVertex) {
        const stack = [startVertex];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[startVertex] = true;
        while(stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(connection => {
                if(!visited[connection]) {
                    visited[connection] = true;
                    stack.push(connection);
                }
            });
        }
        return result;
    }
}

const graph = new Graph();
graph.addVertex('Tokyo');
graph.addVertex('Delhi');
graph.addVertex('London');
graph.addVertex('Mumbai')
graph.addEdge('Tokyo', 'Delhi');
graph.addEdge('Tokyo', 'London');
graph.addEdge('Mumbai', 'London')
// graph.addEdge('Delhi', 'London');
// console.log(graph.adjacencyList);
// graph.removeVertex('Tokyo');
// graph.removeEdge('Tokyo', 'London')
// graph.removeEdge('Tokyo', 'Delhi')
console.log(graph.DFSRecursive('Tokyo'));