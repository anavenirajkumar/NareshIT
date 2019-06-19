// Normal Function
function greet1(name) {
    console.log(`Iam a normal Function ${name}`);
}
greet1('John');

// Function Expression
let greet2 = function(name) {
    console.log(`Iam a Function Expression ${name}`);
};
greet2('John');

// Arrow Function
let greet3 = (name) => {
    console.log(`Iam a Arrow Function ${name}`);
};
greet3('John');

// Shortcut Arrow
let greet4 = name => console.log(`Iam a Arrow Function Shortcut ${name}`);
greet4('John');

// Limitation of Arrow Function with Objects
let student = {
    firstName : 'Arjun',
    lastName : 'Reddy',
    fullName : () =>  {
        return `${student.firstName} ${student.lastName}`;
    }
};
console.log(student.fullName());