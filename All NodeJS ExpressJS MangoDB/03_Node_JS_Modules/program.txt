// OS Module
const os = require('os');
const fs = require('fs');
const path = require('path');

// total memory
console.log(`Total Memory : ${os.totalmem()}`);

// Free Memory
console.log(`Free Memory : ${os.freemem()}`);

// Home Dir
console.log(`Home Dir : ${os.homedir}`);

// Computer Name
console.log(`Computer Name ${os.hostname}`);

// Up time
console.log(`Up Time : ${os.uptime}`);

// Platform
console.log(`Platform : ${os.platform()}`);

// User Information
let user = os.userInfo().username;
console.log(user);

// Create a file / Write to a file
let data = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut esse fugiat magnam provident. Fugit laborum nobis quidem ut? Fuga, rem?';
fs.writeFile('data.txt',data,'utf8',(err) => {
    if(err) throw err;
    console.log('data is saved');
});

// Read data from a file
fs.readFile('data.txt','utf8',(err,data) => {
    if(err) throw err;
    console.log(data);
});

// Create a file and read data from current file
fs.readFile('03_app.js','utf8',(err,data) => {
    if(err) throw err;
    fs.writeFile('program.txt',data,'utf8',(err) => {
        if(err) throw err;
        console.log('data is saved');
    });
});

// Path Module
console.log(__dirname);
console.log(__filename);

//
let newPath = path.join(__dirname,'data','employee');
console.log(newPath);

// Create a new file using path , fs module , os module
fs.mkdir(path.join(__dirname,'data','employee'),{ recursive: true },(err) => {
    if(err) throw err;
    fs.readFile(path.join(__dirname,'03_app.js'),'utf8',(err,data) => {
        if(err) throw  err;
        fs.writeFile(path.join(__dirname,'data','employee','employee.txt'),data,'utf8',(err) => {
            if(err) throw err;
            console.log('data is added');
        })
    });
});


// Phone Numbers file
let numbers = [];
for(let i=1; i<=10000; i++) {
    let number = '9844';
    let randomNumber = Math.floor(Math.random() * 1000000);
    number = number + randomNumber;
    if (number.length === 10) {
        numbers.push(number);
    }
}
fs.writeFile('phone.txt',numbers,'utf8',(err) => {
    if(err) throw err;
    console.log('data is saved');
});