type Admin = {
    name: string;
    privilages: string[];
}

type employee = {
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

function add(a: Combine, b: Combine){
    if(typeof a === 'string' || typeof b === 'string'){
         return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = employee | Admin;

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