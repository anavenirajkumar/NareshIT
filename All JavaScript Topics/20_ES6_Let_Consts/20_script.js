// var vs let vs const
let course = 'Engineering';
if(course === 'Engineering'){
    var dept1 = 'IT';
    let dept2 = 'Govt';
}
console.log(course); // Engineering
console.log(dept1); // IT
//console.log(dept2); // ReferenceError: dept2 is not defined


// var vs let for blocks
for(let i=0; i<=10; i++){
    console.log(i); // prints 1 - 10
}
//console.log(i); // ReferenceError: i is not defined

// var vs let for functions
let greet = () => {
    var msg1 = 'Good Morning';
    let msg2 = 'Good Afternoon';
};
greet();
// console.log(msg1); ReferenceError: msg1 is not defined
// console.log(msg2); ReferenceError: msg2 is not defined

// let vs const
const name = 'John';
// name = 'Wilson'; TypeError: Assignment to constant variable
console.log(name);

// const Example
const employee = {
    name : 'Rajan',
    age : 25,
    designation : 'Software Engineer'
};
console.log(employee);
employee.designation = 'Team Lead';
console.log(employee);

// let vs var vs const
let greetMe = () => {
    var a = 10;
    let b = 20;
    const c = 30;
};
greetMe();
//console.log(a); ReferenceError: a is not defined
// console.log(b); ReferenceError: b is not defined
// console.log(c); ReferenceError: c is not defined

// let vs const with block
if(100 === 100){
    let x = 10;
    const y = 100;
}
// console.log(x); ReferenceError: x is not defined
// console.log(y); ReferenceError: y is not defined
