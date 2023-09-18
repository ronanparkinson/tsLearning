"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(10, 5, (result) => {
    console.log(result);
});
printResult(add(5, 12));
let combineValues;
combineValues = add;
// combineValues = printResult;
// combineValues = 5;
console.log(combineValues(8, 8));
// let someValue: undefined;
function stringOrNumber(n1, n2) {
    if (typeof n1 === 'string' && typeof n2 === 'string') {
        return +n1 + +n2;
    }
    else {
        return n1 + n2;
    }
}
let Number1;
let Number2;
Number1 = 'dsds';
Number2 = 'sdd';
console.log(stringOrNumber(Number1, Number2));
const Person = {
    name: 'ron',
    age: 27
};
console.log(Person.name + Person.age);
