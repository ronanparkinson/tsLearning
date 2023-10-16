var e1 = {
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
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('Driving');
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('Driving a truck');
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log('Loading cargo: ' + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck)
        vehicle.loadCargo(11);
}
//typecasting below
//DOM use
var userInputElement = document.getElementById('user-input');
var para = document.querySelector('p');
//const userInputOutput = <HTMLInputElement>document.getElementById('message-output');
//another option to the line above is:
var userInput = document.getElementById('message-output');
userInput.value = 'hello';
var errorBag = {
    email: 'asds@test.com',
    userName: 'ronan'
};
function adding(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
var result = adding('Ronan', 'Pa');
result.split(' ');
//optional chaining
var fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CTO', description: 'My own company' }
};
console.log(fetchedUserData.job.title);
