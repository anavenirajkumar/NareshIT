// creation of arrays
let array = [10,20,30,40,50];
console.log(array);

// Accessing an array and its exiting properties
console.log(array[0]); // 10

// Accessing an array and its NON exiting properties
console.log(array[8]); // undefined

array = [20,40,50,60,10,30];
console.log(array.sort().reverse());

// shift() -> to remove the first element of an array
let technologies = ['html','css','javascript','bootstrap'];
console.log(technologies);
technologies.shift();
console.log(technologies);

// unshift() -> to add the first element of to array
technologies = ['html','css','javascript','bootstrap'];
console.log(technologies);
technologies.unshift('node js');
console.log(technologies);

// pop() -> to remove the last element from an array
technologies = ['html','css','javascript','bootstrap'];
console.log(technologies);
technologies.pop();
console.log(technologies);

// push() -> add an element to the end of the array
technologies = ['html','css','javascript','bootstrap'];
console.log(technologies);
technologies.push('react js');
console.log(technologies);

// 1) Splice(index) -> to remove all the element from the given index
technologies = ['html','css','javascript','bootstrap'];
console.log(technologies);
technologies.splice(2);
console.log(technologies);

// 1) Splice(index,nof elements) -> to remove the no of elements from the given index
technologies = ['html','css','javascript','bootstrap'];
console.log(technologies);
technologies.splice(2,1);
console.log(technologies);

// 1) Splice(index,1,nof elements) -> to replace an element from the given array
technologies = ['html','css','javascript','bootstrap'];
console.log(technologies);
technologies.splice(2,1,'node js');
console.log(technologies);

// join() -> to join the elements to a string
technologies = ['html','css','javascript','bootstrap'];
console.log(technologies);
let techString = technologies.join(' - ');
console.log(techString);

// Split() -> to split the given string into array
let newTechnologies = techString.split(' - ');
console.log(newTechnologies);

// slice() -> to create a copy of an array
let arr1 = [10,20,30,40];
let arr2 = arr1.slice();
arr1.splice(2);
console.log(arr2);

// Looping from an array using Normal For-loop ES5
let colors = ['white','green','blue','black','orange'];
let output = '';
for(let i=0; i<colors.length;i++){
    output += `${colors[i]} `;
}
console.log(output);

// Looping from an array using for-in loop ES5
colors = ['white','green','blue','black','orange'];
output = '';
for(let index in colors){
    output += `${colors[index]} `;
}
console.log(output);

// Looping from an array using for-of loop ES6
colors = ['white','green','blue','black','orange'];
output = '';
for(let element of colors){
    output += `${element} `;
}
console.log(output);

// Looping from an array using forEach function ES5
colors = ['white','green','blue','black','orange'];
output = '';
colors.forEach(function(element) {
    output += `${element} `;
});
console.log(output);

// Looping from an array using forEach with Arrow function ES6
colors = ['white','green','blue','black','orange'];
output = '';
colors.forEach(element => output += `${element} `);
console.log(output);

// Filter function , Mix of object and array

