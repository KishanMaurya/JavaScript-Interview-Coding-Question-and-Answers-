var createCounter = function(n) {
    return function(n) {
        n+=1
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12