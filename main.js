import knightMoves from "./knightmoves.js";
import Node from "./node.js";

const tests = [
  { origin: [0, 0], destination: [1, 2] }, // Short move
  { origin: [0, 0], destination: [3, 3] }, // Medium move
  { origin: [0, 0], destination: [7, 7] }, // Long move
  { origin: [3, 3], destination: [3, 3] }, // Same origin and destination
  { origin: [8, 8], destination: [0, 0] }, // Invalid origin
  { origin: [0, 0], destination: [8, 8] }, // Invalid destination
  { origin: [0, 0], destination: [7, 0] }, // Test along a single row
  { origin: [7, 0], destination: [0, 7] }, // Test along a diagonal
  { origin: [3, 4], destination: [1, 1] }, // Test a complex move
  { origin: [0, 0], destination: new Node(7, 7) }, // Node destination test
];

tests.forEach((test) => {
  try {
    const result = knightMoves(test.origin, test.destination);
    console.log(`knightMoves([${test.origin}], [${test.destination}])`);
    console.log("Result:", result);
  } catch (error) {
    console.log(`knightMoves([${test.origin}], [${test.destination}])`);
    console.error("Error:", error.message);
  }
});