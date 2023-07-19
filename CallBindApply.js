// CALL
function hello(){
    return "Hello" + this.name
}

var obj  = { name : 'Kishan' }

console.log(hello.call(obj))
//call() method allows an object to use the method of another object 

//APPLY
function Apply(message){
    return this.name + ", " + message
}

var person = { name : "kishan" }
console.log(Apply.apply(person,["Awesome"]))
//Call method takes arguments saparately whereas , apply() method takes arguments as an array 

//BIND
//This method return a new function where the value of this keyword will be bound to the another object 
//, which provided as a parameter 
var details = {
    display : function(number, brand){
        return this.name + " , " + "bike details " + number + brand
    }
}
var person = { name : "kishan" }
var fetchDetail = details.display.bind(person,"OD#4343HNS", "Bajaj");

console.log(fetchDetail())