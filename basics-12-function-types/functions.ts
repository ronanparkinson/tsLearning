function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (arg0: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 5, (result) => {
  console.log(result);
});

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8));

// let someValue: undefined;


// function stringOrNumber(n1, n2){
//   if(typeof n1 === 'string' && typeof n2 === 'string'){
//       return +n1 + +n2;
//   } else{
//       return n1 + n2;
//   }
// }

let Number1: number | string;
let Number2: number | string;

Number1 = 'dsds';
Number2 = 'sdd';

// console.log(stringOrNumber(Number1,Number2));

 const Person = {
  name: 'ron',
  age: 27
 };
 
console.log(Person.name + Person.age);