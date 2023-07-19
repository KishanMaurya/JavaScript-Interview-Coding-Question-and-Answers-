// f(n-1)+(n-2)


const fib = (n)=>{
    let arr = [1,2];
    for(let i=2; i<=n; i++){
        arr.push(arr[i-1]+ arr[i-2])
    }
    return arr[n]
}

console.log(fib(5))


const fibC = (x)=>{
    if( x <= 1 ){
        return x
    }
    return fibC(x-1) + fibC(x-2)
}

console.log(fibC(10))

//print series 
//Output: 0 1 1 2 3 5 8 13 21 34

const printSeries  = (x)=>{
    let a=0; b=1, c=0;
    for(let i=0; i<x; i++){
        console.log(a ** 2);
        c = a + b;
        a = b;
        b = c;
    }
}
console.log("\n\n")
console.log(printSeries(10))