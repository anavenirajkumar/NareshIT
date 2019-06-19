let colors = ['red','blue','orange','green','yellow'];

// Loop an array with normal for-loop
let output = '';
for(let i=0; i<=colors.length-1; i++){
    output += `${colors[i].toUpperCase()} `;
}
console.log(output);

// loop an array with for-in loop ES5
output = '';
for(let index in colors){
    output += `${colors[index].toUpperCase()} `;
}
console.log(output);

// loop an array with for-of loop ES6
output = '';
for(let color of colors){
    output += `${color.toUpperCase()} `;
}
console.log(output);

// forEach function of ES5
output = '';
colors.forEach(function(color) {
    output += `${color.toUpperCase()} `;
});
console.log(output);

// forEach function with Arrow ES6
output = '';
colors.forEach(color => output += `${color.toUpperCase()} `);
console.log(output);