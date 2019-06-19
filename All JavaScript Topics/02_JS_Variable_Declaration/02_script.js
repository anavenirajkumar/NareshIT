// Variable Declaration
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
console.log('The Sum of '+ num1 + ' , ' + num2 + ' is : ' + sum); // ES5
console.log(`The Sum of ${num1} , ${num2} is : ${sum}`); // ES6

let empName = 'John';
let empAge = 40;
let empDesignation = 'Manager';
let companyName = 'Infosys';
let jobLocation = 'Hyderabad';

console.log(`EmpName : ${empName}
             EmpAge : ${empAge}
             EmpDesignation : ${empDesignation}
             Company Name : ${companyName}
             Job Location : ${jobLocation}`);

// Simple program
let a = 100;
let b = 200;
if(a > b){
    console.log(`${a} is big value`);
}
else{
    console.log(`${b} is big value`);
}