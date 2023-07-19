function solution(n) {
    if(n <= 1) return false;

    if(n % 2 === 0){
        return true;
    }
    return false
}
let n = 2;
console.log(solution(n))