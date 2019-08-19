//https://jsfiddle.net/amitsaxena17/4n89obdp/8/

//Note that  when you assign a object to [mystery]. You are basically assessing all the variables that are named mystery. 
//If one of the variables that are named mystery has a value of 'answer'
const mystery = 'answer';
const InverseOfPI = 1 / Math.PI;

const obj = {
	p1: 10,
  p2: 20,
  f1() {},
  f2: () => {},
  [mystery]: 42,
  InverseOfPI,
};

console.log(obj.mystery);//undefined
console.log(obj.answer);//answer is 42 . Because we evaluated [mystery] with 'answer' and the result was true, so 42 was the answer
console.log(obj.answer2);// Undefined
console.log(InverseOfPI)
