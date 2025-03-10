export default class Node{
    // Checks that node is within board before creation.
    constructor(vertical, horizontal){
        if(vertical >= 0 && vertical <= 7) {
            this.vertical = vertical;
        } else {
            throw new Error (`Vertical = ${vertical} is outside the board.`)
        }
        if(horizontal >= 0 && horizontal <= 7) {
            this.horizontal = horizontal;
        } else {
            throw new Error (`Horizontal = ${horizontal} is outside the board.`)
        }
    }
    // Returns location of node.
    getLocation(){
        return [this.vertical, this.horizontal];
    }

    // Compares node to other node.
    equals(otherNode) {
        if (otherNode === null) return false;
        return this.vertical === otherNode.vertical && this.horizontal === otherNode.horizontal;
    }
}