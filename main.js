import knightMoves from "./knightmoves.js";

console.log(knightMoves([0, 0], [1, 2])); // Short move
console.log(knightMoves([0, 0], [3, 3])); // Medium move
console.log(knightMoves([0, 0], [7, 7])); // Long move
console.log(knightMoves([3, 3], [3, 3])); // Same origin and destination
//console.log(knightMoves([8, 8], [0, 0])); // Invalid origin
//console.log(knightMoves([0, 0], [8, 8])); // Invalid destination
console.log(knightMoves([0, 0], [7, 0])); // test along a single row
console.log(knightMoves([7, 0], [0, 7])); // test along a diagonal
console.log(knightMoves([3, 4], [1, 1])); // test a complex move

import Node from "./node.js";

const destinationNode = new Node(7,7);
console.log(knightMoves([0,0], destinationNode));