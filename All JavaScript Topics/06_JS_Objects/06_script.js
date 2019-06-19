// Empty Object Creation
let fridge = {};
console.log(fridge);

// Add properties to an object
fridge.eggs = 20;
fridge.veg = 'Tomotos';
fridge.juice = '2lts';
console.log(fridge);

// Create a fully loaded object
let mobile = {
    brand : 'Apple',
    color : 'Silver',
    price : 35000,
    isInsured : false
};
console.log(mobile);

// Access the properties of an object using dot notation
console.log(`Mobile Brand : ${mobile.brand}`);


// Access the properties of an object using [] notation
console.log(`Mobile Brand : ${mobile['brand']}`);

// Nested Object
let student = {
    name : 'Rajan',
    age : 22,
    course : {
        name : 'Engineering',
        year : 4,
        rank : 458
    },
    college : {
        name : 'IIT Mumbai',
        location : 'Mumbai',
        estd : 1880
    },
    address : {
        city : 'Hyderabad',
        state : 'TS',
        country : 'India'
    }
};

console.log(student);

// Access the nested objects
console.log(student.college);
console.log(student.college.location);

// delete an object
console.log(student);
delete student.college;
console.log(student);