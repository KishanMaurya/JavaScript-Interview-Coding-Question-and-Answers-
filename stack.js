class Stack {
    constructor(){
        this.StackArray = []
    }
    insert(ele){
        return this.StackArray.push(ele)
    }
    delete(){
        if(this.StackArray.length > 0){
            return this.StackArray.pop()
        }
    }
    peek(){
        return this.StackArray[this.StackArray.length-1]
    }
    checkEmpty(){
        return this.StackArray.length === 0
    }
    stackSize(){
        return this.StackArray.length;
    }
    clearStack(){
        return this.StackArray = []
    }
}

const stackObj = new Stack();
stackObj.insert(10);
stackObj.insert(20);
stackObj.insert(30);
stackObj.insert(40);
stackObj.insert(50);
stackObj.insert(60);
stackObj.delete();

console.log(stackObj.StackArray)
console.log(stackObj.peek());
console.log(stackObj.checkEmpty());
console.log(stackObj.stackSize());