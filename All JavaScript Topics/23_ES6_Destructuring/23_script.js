let student = {
    name : 'John',
    age : 22,
    course : 'Engineering',
    address : {
        city : 'Bangalore',
        state : 'Karnataka',
        country : 'India'
    }
};

// Destructuring
let {name , age , course} = student;

// Print student Data
console.log(`Name : ${name}
             Age : ${age}
             Course : ${course}`);

// Address
let {city , state , country} = student.address;
console.log(`City : ${city}
             State : ${state}
             Country : ${country}`);
