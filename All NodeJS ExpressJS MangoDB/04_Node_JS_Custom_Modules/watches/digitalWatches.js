const fs = require('fs');

let indianWatch = () => {
    let today = new Date();
    let options = {timeZone : 'Asia/Kolkata'};
    let time = today.toLocaleTimeString('en-US',options);
    let date = today.toLocaleDateString('it-IT',options);
    storeDate('indianWatch.txt',time);
};

let usaWatch = () => {
    let today = new Date();
    let options = {timeZone : 'America/New_York'};
    let time = today.toLocaleTimeString('en-US',options);
    let date = today.toLocaleDateString('it-IT',options);
    storeDate('usaWatch.txt',time);
};

let chinaWatch = () => {
    let today = new Date();
    let options = {timeZone : 'Asia/Shanghai'};
    let time = today.toLocaleTimeString('en-US',options);
    let date = today.toLocaleDateString('it-IT',options);
    storeDate('chinaWatch.txt',time);
};

// Write to a File
let storeDate = (filename,data) => {
    data = `${data} \n`;
    fs.appendFile(filename,data,'utf8',(err) => {
        if(err) throw  err;
    });
};

module.exports = {
    indianWatch,
    usaWatch,
    chinaWatch
};