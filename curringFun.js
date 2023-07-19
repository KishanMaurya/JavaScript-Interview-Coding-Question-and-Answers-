function add(a){
    return function(b){
        if(b) return add(a+b)
        return a
    }
}

console.log(add(2)(3)(4)(5)())


function adds(){
    let sum =0;

    function addNextVale(n){
        if(!n== undefined){
            sum+=n
            return addNextVale
        }else{
            return sum 
        }
    }
    return addNextVale
}
console.log(adds()(3)(4)(5)())