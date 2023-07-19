// In JavaScript, both Map and Set are built-in objects that allow you to store collections of values. However, 
// there are some differences between the two:

// Map is an ordered collection of key-value pairs, where each key can only appear once. 
// Keys can be any value, 
// including objects, and the order of keys is preserved. 
// You can use methods like .set(), .get(), .has(), and .delete() to manipulate the contents of a Map. 
// Map is useful for situations where you need to associate values with keys, and where the order of keys matters.

// Set is an ordered collection of unique values, where each value can only appear once. 
// Values can be any value, including objects, and the order of values is preserved. 
// You can use methods like .add(), .has(), and .delete() to manipulate the contents of a Set. 
// Set is useful for situations where you need to store a collection of unique values, 
// and where the order of values matters.

// Here's an example of using Map and Set:


// Objects: In JavaScript, 
// objects are a built-in data structure that can be used to store collections of key-value pairs.
//  Objects are a more flexible and general-purpose data structure than Map or Set. 
//  Unlike Map, objects have no specific restrictions on their keys,
//   and they can contain any type of value as a key or value. However, 
//   objects do not have built-in methods like .set(), .get(), or .delete(), and their order is not guaranteed.


// Create a new Map
const myMap = new Map();

// Set some key-value pairs
myMap.set('name', 'Alice');
myMap.set('age', 30);

// Get a value by key
console.log(myMap.get('name')); // Output: 'Alice'

// Check if a key exists
console.log(myMap.has('name')); // Output: true

// Delete a key-value pair
myMap.delete('age');




// Create a new Set
const mySet = new Set();
// Add some values
mySet.add('hello');
mySet.add('world');
// Check if a value exists
console.log(mySet.has('hello')); // Output: true

// Delete a value
mySet.delete('world');


// Create a new object
const myObj = {
    name: 'Bob',
    age: 35,
  };
  myObj['address'] = '123 Main St';



  // For Map 
//predefind 
  //set, get, has, delete


  // For Set 

  //add , has , delete 

  // For Object 

  // do not have any predefind function 