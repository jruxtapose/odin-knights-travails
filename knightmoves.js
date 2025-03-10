import Node from "./node.js";

export default function knightMoves(origin, destination) {
  // Check to verify that origin and destination are valid locations and set nodes if not already nodes.
  const knightOrigin = !isValid(origin)
    ? null
    : origin instanceof Node
      ? origin
      : new Node(origin[0], origin[1]);
  if (knightOrigin === null) throw new Error("Origin is invalid location.");

  const knightDestination = !isValid(destination)
    ? null
    : destination instanceof Node
      ? destination
      : new Node(destination[0], destination[1]);
  if (knightDestination === null)
    throw new Error("Destination is invalid location.");

  const queue = [];
  const visitedNodes = new Set();
  const allShortestPaths = [];
  let shortestPathLength = null;

  // Enqueue the origin node.
  queue.push({ node: knightOrigin, path: [knightOrigin.getLocation()] });

  while (queue.length > 0) {
    const { node, path } = queue.shift();
    // Once destination is reached, path and length are recorded, and other paths are checked.
    if (node.equals(knightDestination)) {
      if (shortestPathLength === null) {
        shortestPathLength = path.length;
        allShortestPaths.push(path);
      } else if (path.length === shortestPathLength) {
        allShortestPaths.push(path);
      }
      continue;
    }

    // Ensures that piece doesn't move backwards to a previously visited node.
    const nodeLocation = node.getLocation();
    if (visitedNodes.has(`${nodeLocation[0]},${nodeLocation[1]}`)) {
      continue;
    }

    // Adds current node to list of visited nodes.
    visitedNodes.add(`${nodeLocation[0]},${nodeLocation[1]}`);

    // Generates valid moves.
    const validMoves = validMovesFrom(nodeLocation);

    // Adds moves to queue as long as they aren't a longer path than previously identified paths to destination.
    validMoves.forEach((move) => {
      const nextNode = new Node(move[0], move[1]);
      const nextPath = [...path, nextNode.getLocation()];
      if (
        shortestPathLength === null ||
        nextPath.length <= shortestPathLength
      ) {
        queue.push({ node: nextNode, path: nextPath });
      }
    });
  }

  // Prints list of shortest path with all variations.
  if (allShortestPaths.length > 0) {
    const formattedPaths = allShortestPaths.map((path) => {
      return formatPath(path);
    });

    const moves = shortestPathLength - 1;
    const paths = allShortestPaths.length;
    const movesMessage =
      moves > 1
        ? `You made it in ${moves} moves!`
        : moves === 1
          ? "You made it in one move!"
          : "You are already there!";

    const pathsMessage = paths === 1 ? "Here is your path:" : "Here are your paths:"

    const message = movesMessage + ' ' + pathsMessage;

    return {
      message,
      paths: formattedPaths,
    };
  }
  // Should never happen.
  throw new Error("Impossible. No paths found.");
}

// Allows user to verify both created nodes as well as individual coordinates.
function isValid(location) {
  if (location instanceof Node) location = location.getLocation();
  if (!Array.isArray(location) || location.length !== 2) return false;
  const [vertical, horizontal] = location;
  if (isNaN(vertical) || isNaN(horizontal)) return false;
  if (vertical < 0 || vertical > 7 || horizontal < 0 || horizontal > 7)
    return false;
  return true;
}

// Calculates all valid moves from a given (valid) location.
function validMovesFrom(location) {
  if (!isValid(location)) throw new Error(`Origin is invalid.`);
  if (location instanceof Node) location = location.getLocation();
  const vertical = location[0];
  const horizontal = location[1];
  const possibleMoves = [
    [vertical - 2, horizontal - 1],
    [vertical - 2, horizontal + 1],
    [vertical - 1, horizontal - 2],
    [vertical - 1, horizontal + 2],
    [vertical + 1, horizontal - 2],
    [vertical + 1, horizontal + 2],
    [vertical + 2, horizontal - 1],
    [vertical + 2, horizontal + 1],
  ];
  const validMoves = [];
  possibleMoves.forEach((move) => {
    if (isValid(move)) validMoves.push(move);
  });
  return validMoves;
}

// Makes the printed paths prettier.
function formatPath(path) {
  return path.map((coord) => `[${coord[0]}, ${coord[1]}]`).join(" -> ");
}
