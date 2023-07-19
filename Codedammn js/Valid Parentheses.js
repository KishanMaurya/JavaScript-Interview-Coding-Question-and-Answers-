const ValidParentheses = (str)=>{
    let stack = []

    let validPath = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    for(let i=0; i<str.length; i++){
        let char = str[i]
        if(char === '(' || char === '{' || char === '['){
            stack.push(char)
        }
        if(char === ')' || char === '}' || char === ']'){
            if(stack.length === 0 || validPath[stack.pop()] !== char){
                return false
            }
        }
    }
    return stack.length === 0
}
let str =  "()"
console.log(ValidParentheses(str))


// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false