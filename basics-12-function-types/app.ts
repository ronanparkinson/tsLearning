type Admin = {
    name: string;
    privilages: string[];
}

type employee = {
    name: string;
    startDate: Date;
}

type Owner = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & employee;

const e1 = {
    name: 'Ronan',
    privileges: ['create-server'],
    startDate: new Date()
}

console.log(e1);

type Combine = number | string;
type Numeric = number | boolean;

type Uni = Combine & Numeric;

type UnknownEmployee = employee | Admin | Owner;

function printEmployeeInfo(emp: UnknownEmployee){
    console.log('Name:' + emp.name);
    //finds privilages in UnknownEmployee as Admin contains UnknownEmployee which UnknowEmployee can be
    if('privilages' in emp){
        console.log('Privileges: ' + emp.privilages);
    }
}

printEmployeeInfo(e1);

class Car{
    drive() {
        console.log('Driving');
    }
}

class Truck{
    drive() {
        console.log('Driving a truck');
    }

    loadCargo(amount: number){
        console.log('Loading cargo: ' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle){
    vehicle.drive();
    if(vehicle instanceof Truck)
    vehicle.loadCargo(11);
}

//typecasting below
//DOM use
const userInputElement = document.getElementById('user-input');
const para = document.querySelector('p');
//const userInputOutput = <HTMLInputElement>document.getElementById('message-output');
//another option to the line above is:
const userInput = document.getElementById('message-output')! as HTMLInputElement;
userInput.value = 'hello';
// if(userInputElement){
//     (userInputElement as HTMLInputElement).value = 'Hi There'
// }

//index types
interface ErrorContainer{ //{email: 'not a vaild email'}
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    email:  'asds@test.com',
    userName: 'ronan'
};

//method overloading
function adding(a: number, b: number): number;
function adding(a: string, b: string): string;
function adding(a: string, b: number): string;
function adding(a: number, b: string): string;
function adding(a: Combine, b: Combine) {
  if (typeof a === 'string' || typeof b === 'string'){
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
  //job: { title: 'CTO', description: 'My own company' }
};
//the ? makes the field that was called optional to gather info from, can be used for varaiables and parameters too 
console.log(fetchedUserData?.job?.title);

const userInputt = null;
const storedData = userInputt || 'DE'
