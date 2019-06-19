// Assignment operator =
let a = 10;
console.log(a);

// Arithmetic operators + - * / , %
let num1 = 10;
let num2 = 20;
console.log(`Sum : ${num1 + num2}`);
console.log(`Sub : ${num1 - num2}`);
console.log(`Mul : ${num1 * num2}`);
console.log(`Div : ${num1 / num2}`);

let num3 = 520;
if(num3 % 2 === 0){
    console.log(`${num3} is Even number`);
}
else{
    console.log(`${num3} is Odd number`);
}

// Short hand math += , -= , *= , /=
a = 10;
let b = 20;
let sum = 0;
sum = sum + (a + b); // 0 + 10  + 20 = 30
sum += (a + b); // 30 + 10 + 20 = 60
console.log(sum);

// Conditional operators < , > , <= , >= , !=
let age = 15;
if(age > 18){
    console.log('You are Major');
}
else{
    console.log('You are Minor');
}

let time = 20;
if(time <= 12){
    console.log('Good Morning');
}
else if(time > 12 && time <= 17){
    console.log('Good Afternoon');
}
else{
    console.log('Good Evening')
}

// Unary Operator ++ , --
let x = 10;
x = x + 1; // 11
x += 1; // 12
x++; // 13
console.log(x); // 13

// Logical operators AND , OR
let inRelation = true;
let parentsAgreed = false;
if(inRelation && parentsAgreed){
    console.log('Get Marry Soon');
}
else{
    console.log('Wait until the parents Agreed');
}

// String Concatenation Operator (+)
let name = 'John';
age = 40;
console.log(name + " , " + age); // ES5
console.log(`${name} , ${age}`); // ES6

// Ternary operator (? :)
age = 55;
let message = 'You Are ';
(age > 18) ? message += 'Major' : message += 'Minor';
console.log(message);

// Type of operator
age = 40;
console.log(`value : ${age} Type : ${typeof age}`);


// == operator
a = 10;
b = '10';
if(a == b){
    console.log('Both are Equal');
}
else{
    console.log('Both are NOT Equal');
}

// === operator
a = 10;
b = '10';
if(a === b){
    console.log('Both are Equal');
}
else{
    console.log('Both are NOT Equal');
}