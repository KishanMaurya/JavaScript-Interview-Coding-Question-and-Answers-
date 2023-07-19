const a = [1,2,3,4,5,6,7,8,9,10]
for(var i=0; i<10; i++){
    setTimeout(function(){ 
        console.log(a[i]);
    },1000)
}

//OUTPUT : undefined 10 times 

// This is because the setTimeout function is an asynchronous function 
// that will not block the execution of the rest of the code. Therefore, 
// when the console.log statement inside the function is executed after the delay 
// of 1 second, the value of i will have already reached 10, which is outside the 
// index range of the array a. As a result, a[i] will evaluate to undefined for all iterations.

const b = [1,2,3,4,5,6,7,8,9,10]
for(let i=0; i<10; i++){
    setTimeout(function(){ 
        console.log(b[i]);
    },1000)
}

//OUTPUT : 1,2,3,4,5,6,7,8,9,10

for(var i=0; i<10; i++){
    (function(i){
        setTimeout(function(){ 
            console.log(i);
        },1000 * i)
    })(i)
}

for(var i=0; i<5; i++){
    (function(j){
        setTimeout(function(){ 
            console.log(j);
        },1000 * j)
    })(i)
}

//Output :  0,1,2,3,4,5,6,7,8,9 same output with var also 

function func(){
    var x = "variable" 
    function abc(){
        console.log(x)
        var x
    }
    return abc();
}
func()

//Output : undefined


// This is because of a concept called variable hoisting in JavaScript. 
// When a variable is declared with the var keyword, the declaration is "hoisted" 
// to the top of the current function or global scope. This means that the variable 
// declaration is moved to the beginning of the scope, before any other code is executed. 
// However, the value of the variable is not hoisted, only the declaration.

// In the code above, the variable x is declared inside the abc function, 
// but the declaration is hoisted to the top of the abc function. Therefore, 
// when the console.log(x) statement is executed, x exists but has not been assigned 
// a value yet, so it has the value undefined


function func(){
    var x = "variable" 
    function abc(){
        var x;
        console.log(x);
        x = "new value";
    }
    return abc();
}

(function(){
    console.log(1)
    setTimeout(function(){console.log(2)}, 10000)
    setTimeout(function(){console.log(3)},0)
    console.log(4)
})()

//1,4,3,2

