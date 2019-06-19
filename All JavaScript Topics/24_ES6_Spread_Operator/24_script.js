// min of numbers
let numbers = [23,46,3,78,2,897,94,9,654,61,51,616,1];
let min = Math.min(...numbers);
console.log(`min : ${min}`);

// Ex : 2 : add an array in the middle of another array
let arr1 = [10,20,30,40];
let arr2 = [...arr1,50,60,70];
console.log(arr2);

// Ex : 3: create a new copy of an array
let array1 = [10,20,30,40];
//let array2 = array1.slice();
let array2 = [...array1];
console.log(array2);