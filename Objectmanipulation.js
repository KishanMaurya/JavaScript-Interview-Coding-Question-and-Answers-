var emp = "name.firstName.kishan";
var value = "Joe";

var person = {};
var props = emp.split('.');
let obj = person
for(let i=0; i<props.length-1; i++){
    obj=obj[props[i]]=obj[props[i]] || {}
}
obj[props[props.length-1]] = value
console.log(person)


function createNestedObject(keys, value) {
    const lastKeyIndex = keys.length - 1;
    const nestedObject = {};
    keys.reduce((obj, key, index) => {
      if (index === lastKeyIndex) {
        obj[key] = value;
      } else {
        obj[key] = obj[key] || {};
      }
      return obj[key];
    }, nestedObject);
    return nestedObject;
  }
  const obj = createNestedObject(['foo', 'bar', 'baz'], 'hello');
  console.log(obj); // { foo: { bar: { baz: 'hello' } } }
  