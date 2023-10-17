"use strict";
var _a;
const e1 = {
    name: 'Ronan',
    privileges: ['create-server'],
    startDate: new Date()
};
console.log(e1);
function printEmployeeInfo(emp) {
    console.log('Name:' + emp.name);
    //finds privilages in UnknownEmployee as Admin contains UnknownEmployee which UnknowEmployee can be
    if ('privilages' in emp) {
        console.log('Privileges: ' + emp.privilages);
    }
}
printEmployeeInfo(e1);
class Car {
    drive() {
        console.log('Driving');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck');
    }
    loadCargo(amount) {
        console.log('Loading cargo: ' + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck)
        vehicle.loadCargo(11);
}
//typecasting below
//DOM use
const userInputElement = document.getElementById('user-input');
const para = document.querySelector('p');
//const userInputOutput = <HTMLInputElement>document.getElementById('message-output');
//another option to the line above is:
const userInput = document.getElementById('message-output');
userInput.value = 'hello';
const errorBag = {
    email: 'asds@test.com',
    userName: 'ronan'
};
function adding(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = adding('Ronan', 'Pa');
result.split(' ');
//optional chaining
const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CTO', description: 'My own company' }
};
//the ? makes the field that was called optional to gather info from, can be used for varaiables and parameters too 
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
//nullish coalescing
const userInputt = ''; //underfined
const storedData = userInputt !== null && userInputt !== void 0 ? userInputt : 'DEFAULT'; //this will output DEFAULT if userInputt is underfined
console.log(userInputt);
