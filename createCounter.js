/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    function increment() {
        count++;
        return count++;
    }
    function reset() {
        init = 5;
        return init
    }
    function decrement() {
        init--;
        return init
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */