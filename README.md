# odin-knights-travails

This is a Node.js application that calculates the shortest path a knight can follow from one square to another on a chessboard.

**Project Link:** [https://www.theodinproject.com/lessons/javascript-knights-travails](https://www.theodinproject.com/lessons/javascript-knights-travails)

## Installation and Usage

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/jruxtapose/odin-knights-travails.git
    cd odin-knights-travails
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the Tests:**

    * From the project directory, execute the `main.js` file using Node.js:
        ```bash
        node main.js
        ```
    * This will run a series of tests that call the `knightMoves` function with various origin and destination coordinates, including edge cases.
    * The output will display the results of each test, including the shortest paths found and the number of moves taken, or any errors encountered.
    * Example output:
        ```
        knightMoves([0, 0], [1, 2])
        Result: { paths: [ '[0, 0] -> [1, 2]' ], movesCount: 1 }
        knightMoves([8, 8], [0, 0])
        Error: Origin is invalid location.
        ...
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

The `main.js` file contains a series of tests that thoroughly evaluate the `knightMoves` function. These tests cover various scenarios, including:

* Simple moves
* Long moves
* Moves to the same location
* Moves along a single row or diagonal
* Complex moves
* Invalid origin and destination inputs
* Node object destinations

The tests utilize a `try...catch` block to handle potential errors, ensuring that all tests are executed and results are displayed, even in the event of failures. This approach provides comprehensive testing coverage and ensures that the `knightMoves` function behaves as expected in a variety of situations.

## Author

jruxtapose