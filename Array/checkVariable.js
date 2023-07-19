function solution(name) {
    // Check if the name starts with a digit
    if (/^\d/.test(name)) {
        return false;
    }
    
    // Check if the name contains only valid characters
    if (/^[a-zA-Z0-9_]+$/.test(name)) {
        return true;
    } else {
        return false;
    }
}

let name = "var_1__Int";
// let name = "qq-q"
console.log(solution(name))