/**
 * @param {number[]} nums
 */
class ArrayWrapper {
	constructor(nums) {
        this.array = nums;
    }
	valueOf() {
        return this.array.reduce((a,b)=> a+b, 0)
    }

	toString() {
        return `[${this.array.join(',')}]`
    }
}
const obj1 = new ArrayWrapper([1,2]);
const obj2 = new ArrayWrapper([3,4]);
obj1.valueOf() + obj2.valueOf(); // 10
console.log(obj1.valueOf()+obj2.valueOf())
console.log(obj1.toString())
String(obj1); // "[1,2]"
String(obj2); // "[3,4]"
 
