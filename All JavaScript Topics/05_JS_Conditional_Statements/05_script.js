// If - else
let time = -54;
if(time >=0 && time <= 12){
    console.log('Good Morning');
}
else if(time >12 && time <= 17){
    console.log('Good Afternoon');
}
else if(time >17 && time <= 23){
    console.log('Good Evening');
}
else{
    console.log('Enter a Proper Time');
}

// Switch Statements
let day = new Date().getDay();
let today = 'Today is : ';
day = 10;
switch(day){
    case 0:
        today += 'SUNDAY';
        break;
    case 1:
        today += 'MONDAY';
        break;
    case 2:
        today += 'TUESDAY';
        break;
    case 3:
        today += 'WEDNESDAY';
        break;
    case 4:
        today += 'THURSDAY';
        break;
    case 5:
        today += 'FRIDAY';
        break;
    case 6:
        today += 'SATURDAY';
        break;

    default:
        today += 'No Match';
        break;
}
console.log(today);

// For-loop to print 0 - 10
let output = '';
for(let i=0; i<=10; i++){
    if(i <= 9){
        output += `${i} , `;
    }
    else{
        output += `${i}`;
    }
}
console.log(output);

// for-loop to print 20 - 0 with the diff is 2
output = '';
for(let i = 20; i>=0; i-=2){
   if(i > 0){
       output += `${i} - `;
   }
   else {
       output += `${i}`;
   }
}
console.log(output);

// For-loop to print 00 - 20
output = '';
for(let i = 0; i<=20; i++){
    if(i <= 9){
        output += `0${i} `;
    }
    else{
        output += `${i} `;
    }
}
console.log(output);

// For loop for multiplication Table
output = '';
for(let i=1; i<=10; i++){
    for(let j=1 ; j<=10; j++){
        output += `\n ${i} * ${j} = ${i * j}`;
    }
    output += '\n-------------------------------- ';
}
console.log(output);

// For Loop to print number ascending order dual number
output = '';
let theNumber = 9;
for(let i = 1; i <= theNumber; i++){
    for(let j=1 ; j <= i; j++){
        output += ` ${i}`;
    }
    output += `\n`;
}
console.log(output);

// For Loop to print number ascending order same number
output = '';
theNumber = 9;
for(let i = 1; i <= theNumber; i++){
    for(let j=1 ; j <= i; j++){
        output += ` ${j}`;
    }
    output += `\n`;
}
console.log(output);

// For Loop to print number in reverse Order
output = '';
theNumber = 5;
for(let i=theNumber; i>=1; i--,theNumber--){
    for(let j = 1; j<=i ; j++){
        output += `${j} `;
    }
    output += '\n';
}
console.log(output);

console.log('-------------------------------- While Loop --------------------- ');

// While loop to print 0 - 10
output = '';
let i=0;
while(i<=10){
    if(i <= 9){
        output += `${i} , `;
    }
    else{
        output += `${i}`;
    }
    i++;
}
console.log(output);

// while loop to print 20 - 0 with the diff is 2
output = '';
i = 20;
while(i>=0){
    if(i > 0){
        output += `${i} - `;
    }
    else {
        output += `${i}`;
    }
    i-=2;
}
console.log(output);

// While-loop to print 00 - 20
output = '';
i = 0;
while(i<=20){
    if(i <= 9){
        output += `0${i} `;
    }
    else{
        output += `${i} `;
    }
    i++;
}
console.log(output);

// while loop for multiplication Table
output = '';
i = 1;
while(i<=10){
    let j=1;
    while(j<=10){
        output += `\n ${i} * ${j} = ${i * j}`;
        j++;
    }
    output += '\n-------------------------------- ';
    i++;
}
console.log(output);

// while Loop to print number ascending order dual number
output = '';
theNumber = 9;
i = 1;
while(i <= theNumber){
    let j =1;
    while(j <= i){
        output += ` ${i}`;
        j++;
    }
    output += `\n`;
    i++;
}
console.log(output);

// while Loop to print number in reverse Order
output = '';
theNumber = 5;
i=theNumber;
while(i>=1){
    let j = 1;
    while(j <= i){
        output += `${j} `;
        j++;
    }
    output += '\n';
    i--;theNumber--;
}
console.log(output);




