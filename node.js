export default class Node{
    constructor(i, j){
        if(i >= 0 && i <= 7) {
            this.i = i;
        } else {
            throw new Error (`i = ${i} is outside the board.`)
        }
        if(j >= 0 && i <= 7) {
            this.j = j;
        } else {
            throw new Error (`j = ${j} is outside the board.`)
        }
        this.availableMoves = this.getMoves();
        this.next = null;
    }

    setNext(node){
        this.next = node;
    }

    getNext(){
        return this.next;
    }

    getLocation(){
        return [this.i, this.j];
    }

    getMoves(){
        
    }
}