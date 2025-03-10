# odin-knights-travails

This is a Node.js application that calculates the shortest path a knight can follow from one square to another on a chessboard.

**Project Link:** [https://www.theodinproject.com/lessons/javascript-knights-travails](https://www.theodinproject.com/lessons/javascript-knights-travails)

## Installation and Usage

1.  **Clone the repository:**
    ```bash
    git clone [repository URL]
    cd odin-knights-travails
    ```
2.  **Install dependencies:**
    ```bash
    npm install # or yarn install if you use yarn
    ```
3.  **Run the application:**
    * Create a file that imports and calls the `knightMoves` function.
    * Example:
        ```javascript
        import knightMoves from './knightMoves.js';

        const result = knightMoves([0, 0], [3, 3]);
        if (result) {
          console.log('Shortest Paths:', result.paths);
          console.log('Moves:', result.movesCount);
        } else {
          console.log('No path found.');
        }
        ```
    * Execute the file using Node.js:
        ```bash
        node your-file-name.js
        ```

## Algorithm

This application uses Breadth-First Search (BFS) to find the shortest path. BFS is an algorithm that explores a graph level by level, ensuring that the shortest path is found first. In this context, the chessboard is represented as a graph, where each square is a node and each valid knight move is an edge.

The algorithm maintains a queue of nodes to visit, a set of visited nodes, and a list of all shortest paths found. When the destination is reached, the path is recorded, and the search continues to find any alternate paths of the same length.

## Code Structure

* `knightMoves.js`: Contains the main `knightMoves` function, which implements the BFS algorithm.
* `node.js`: Defines the `Node` class, which represents a square on the chessboard.
* `isValid` and `validMovesFrom` functions are helper functions that validate locations and generate valid knight moves.
* `formatPath` formats the paths for user readability.

## Testing

The `knightMoves` function has been tested with various origin and destination combinations, including simple cases, long moves, and edge cases. Invalid inputs are handled with appropriate error messages.

## Potential Improvements

* Implement performance optimizations, such as exploring different data structures for the queue and visited set.
* Add visual representation of the path.
* Expand to allow for different board sizes.
* Add more comprehensive testing.

## Author

[Your Name/GitHub Profile]