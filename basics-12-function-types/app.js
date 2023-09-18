var e1 = {
    name: 'Ronan',
    privileges: ['create-server'],
    startDate: new Date()
};
console.log(e1);
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInfo(emp) {
    console.log('Name:' + emp.name);
    //finds privilages in UnknownEmployee as Admin contains UnknownEmployee which UnknowEmployee can be
    if ('privilages' in emp) {
        console.log('Privileges: ' + emp.privilages);
    }
}
printEmployeeInfo(e1);
