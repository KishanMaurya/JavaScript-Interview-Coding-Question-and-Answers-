// chaining function 

const calc = {
    total : 0,
    add(a){
        this.total +=a;
        return this;
    },
    multiply(b){
        this.total *=b;
        return this
    },
    subtract(c){
        this.total -=c;
        return this
    },
    add(d){
        this.total +=d;
        return this
    }
}


const result  =  calc.add(2).multiply(5).subtract(30)

console.log(result.total)