class LinkedList{
    constructor(data){
        this.head = {
            value : data,
            next : null
        }
        this.tail = this.head;
    }
    addData(ele){
        let newNode = {
            value : ele,
            next : null
        }
        this.tail.next = newNode;
        this.tail=newNode;
    }
    listTraversing(){
        let counter = 0;
        let currentNode = this.head;
        while(counter < this.head.length){
            console.log(currentNode)
            currentNode = currentNode.next
            counter++;
        }
    }
}

const  list = new LinkedList(300)
list.addData(400)
list.addData(400)
list.addData(400)
list.addData(400)
list.addData(400)
list.addData(400)
list.addData(400)
list.listTraversing()
console.log(list)