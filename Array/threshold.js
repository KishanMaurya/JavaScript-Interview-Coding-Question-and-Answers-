// function solution(deposit, rate, threshold) {
//     let balance = deposit;
//     let years = 0;
//     while (balance < threshold) {
//         balance += balance * (rate / 100);
//         years++;
//     }
//     return years;
// }


// let deposit = 100, rate = 20, threshold = 170;
// console.log(solution(deposit,rate,threshold))



// (2,2),(4,2)(7,2)
// (2,4),(4,4),(7,4)
// (2,7),(4,7),(7,7)

// Shaila Banarase
// Talent Acquisition Specialist at Apptware
// https://www.linkedin.com/in/shaila-banarase-4a992b18b/

// I am confident goal oriented quick learner self motivated individual contributor workaholic. I never take part in a competition. I always try to improve my self and I like to compete with my self I like to explore new technologies and techniques. I love to gain knowledge through experience. I am optimistic. I am open for new opportunities are all 5 to 6 days working culture in a week preferred.

// I have rich learning on training in HR Generalist recruitment in IT non IT industry. I am good in recruitment, joining formalities, Induction, Background verification, Dally HR related verification quires and issue solving, leave & attendance management, payroll processing, performance management, and appraisal process, compensation and benefits. employee engagement organizational culture, labor laws, statuary compliances all administrative work. I have good reporting skills, presentation skills and Documentation. 


// so today he taking my Hr interview , so what kinds off question she ask me during interview ?



function foo() {
    console.log(this);
  }
  
  function callFoo(fn) {
    fn();
  }
  
  let obj = { foo };
  
  callFoo(obj.foo);
// undefined


  function Operations(coef) {
    return {
      sum: (...args) => arguments[0] + coef
    }
  }
  
  const ops = Operations(0.1);
  
  console.log(ops.sum(1, 2, 3));

  output : 0.2

  'use strict';

console.log(foo());

let bar = 'bar';

function foo() {
  return bar;
}

bar = 'baz';
//cannot access bar

const Num = () => {
    this.getNum = () => 10;
  }
  
  Num.prototype.getNum = () => 20;
  
  const num = new Num();
  
  console.log(num.getNum());

  // can not set the property of getNum

  let func = function foo() {
    return 'hello';
  }
  
  console.log(typeof foo);

  //undefined 

  function foo(bar, getBar = () => bar) {
    var bar = 10;
    console.log(getBar());
  }
  
  foo(5);//5

  'use strict';

  var num = 8;
  
  function num() {
    return 10;
  }
  
  console.log(num);//8