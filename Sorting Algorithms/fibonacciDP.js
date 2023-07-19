const fibonacci=(nums)=>{
    if(nums <= 0) return 0;
    else if(nums == 1) return 1
    else return fibonacci(nums - 1) + fibonacci(nums - 2)
}

console.log(fibonacci(10))


// DP problem and recursion 