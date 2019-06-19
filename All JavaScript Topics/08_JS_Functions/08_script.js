// Prepare Chicken Curry
function glassBowl(rawChicken,masala) {
    // mixing Logic
    let marinatedChicken = `Mixing{${rawChicken} + ${masala}}`;
    return marinatedChicken;
}
function cookingBowl(marinatedChicken,water) {
    // Cooking Logic
    let cookedChicken = `Cooking {${marinatedChicken} + ${water}}`;
    return cookedChicken;
}
function eatingPlate(cookedChicken,rice) {
    console.log(`Eating : ${cookedChicken} with ${rice}`);
}
let rawChicken = '2kg Chicken';
let masala = 'pepper + garlic + tumaric';
let marinatedChicken = glassBowl(rawChicken,masala);
let water = '1ltr Water';
let cookedChicken = cookingBowl(marinatedChicken,water);
let rice = '1kg rice';
eatingPlate(cookedChicken,rice);

// Example 1 without parameters
function greet() { // function declaration
    console.log('Iam No Arguments Function');
}
greet(); // function call


// Example 2 with parameters
function sum(a , b) {
    let result = a + b;
    console.log(result);
}
sum(20,10);

// Example 3 : with return type
function calculate(a , b) {
    let calcResult = {
        sum : a + b,
        sub : a - b,
        mul : a * b,
        div : a / b
    };
    return calcResult;
}
let result1 = calculate(10,20);
console.log(result1);
let result2 = calculate(100,5);
console.log(result2);

// Example Object as a parameter
let mobile = {
    brand : 'Apple',
    color : 'Silver',
    price : 35000,
    isInsured : false
};

function printMobile(obj) {
    console.log(`Brand : ${obj.brand}
                 Color : ${obj.color}
                 Price : ${obj.price}
                 isInsured : ${obj.isInsured}`);
}
printMobile(mobile);

// Array as a parameter to a function
let colors = ['red','white','blue','orange'];
function displayColors(colors) {
    console.log(`1 : ${colors[0]}
                 2 : ${colors[1]}
                 3 : ${colors[2]}
                 4 : ${colors[3]}`);
}
let newColors = ['brown','deeporange','black','purple'];
displayColors(colors);
displayColors(newColors);

// function Expression
let wishMe = function(name) {
    console.log(`Good Morning ${name}`);
};
wishMe('John');

// functions as the parameter to another function
let greet1 = function() {
  console.log('Iam from Greet1');
};
let greet2 = function() {
    console.log('Iam from Greet2');
};
let greetCaller = function(abc) {
  abc();
};
greetCaller(greet2);

// Callback Functions
let doSum = function(a , b) {
    return a + b;
};

let doMul = function(a , b) {
    return a * b;
};

let doSub = function(a , b) {
    return a - b;
};

let doDiv = function(a , b) {
    return a / b;
};

let doCalculate = function(a , b , callback) {
    return callback(a , b);
};

let result = doCalculate(50,10,doDiv);
console.log(result);

// Arrow Functions
let student = {
    name : 'Rajan',
    age : 22,
    course : {
        name : 'Engineering',
        year : 4,
        rank : 458
    }
};

let printStudent = (student) => {
   console.log(student);
};
printStudent(student);

// Functions inside an Object
let employee = {
    firstName : 'John',
    lastName : 'Wilson',
    fullName : function() {
        return `${this.firstName} ${this.lastName}`;
    },
    hobbies : ['games','movies','coding','eating']
};
console.log(employee.fullName());
console.log(employee.hobbies);
