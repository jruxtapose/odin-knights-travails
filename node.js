export default class Node{
    constructor(i, j){
        this.i = i;
        this.j = j;
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
}