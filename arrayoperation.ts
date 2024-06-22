//  Q : Write a function "arrayOperations" that creates an arrays of numbers, adds a number to the
//  end of the arrays, removes the middle number and add a new number and print the modified array.

// solution:

let arrayOperations =[1,3,4,5];
arrayOperations.pop();
console.log(arrayOperations);
arrayOperations.shift();
console.log(arrayOperations);
arrayOperations.unshift();
console.log(arrayOperations);
arrayOperations.push(7);
console.log(arrayOperations);
let array = arrayOperations.splice(1,2,9);
arrayOperations.splice(2,1,9);
console.log(arrayOperations.splice(1,2,8));


