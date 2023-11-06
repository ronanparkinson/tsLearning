// const names: Array<string> = ['Ronan', 'Max'];
// names[0].split(' ');

// //promises
// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This is done');
//     }, 2000);
// });

//objA and objB are different types of data eg. String and Number
// function merge<T extends object, U extends object>(objA: T, objB: U): T & U{
//    return Object.assign(objA, objB);
// }

// const mergedObj = merge({name: 'Ronan'}, {age: 28});
// //If there are issues in generics like {} instead of T then go to the tsconfig file and change strictNullChecks to false
// console.log(mergedObj.age);

interface Lengthy {
   length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string]{ //T = element and string = T
   let descriptionText = 'Got no value';
   if(element.length === 0){
      descriptionText = 'Got no elements.'
   } else if (element.length >= 1) {
      descriptionText = 'Got ' + element.length +  ' elements.'
   }
   return [element, descriptionText];
}

console.log(countAndDescribe(''))

//generic constraints
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U){
   return 'Value' + obj[key];
}

extractAndConvert({name: 'Ronan'}, 'name');

class DataStorage<T extends string | number | boolean> {
   private data: T[] = [];

   addItem(item: T) {
      this.data.push(item);
   }

   removeItem(item: T) {
      if(this.data.indexOf(item) === -1){
         return;
      }
      this.data.splice(this.data.indexOf(item), 1);
   }

   getItems() {
      return [...this.data];
   }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('ds')
textStorage.addItem('sfdf')
textStorage.removeItem('ds');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(4);

