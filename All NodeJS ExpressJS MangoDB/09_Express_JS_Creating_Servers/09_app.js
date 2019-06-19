const express = require('express');
const app = express();
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

// for '/' get request
app.get('/', (req, res) => {
    res.send('Hello World!')
});

// for a html String
app.get('/tag', (req,res) => {
    res.send(`<h2 style="color: red">Welcome to Express JS</h2>`);
});

// for complete HTML File
app.get('/home',(req,res) => {
    res.sendFile(path.join(__dirname,'index.html'));
});

// for json response
let models=[{brandId:1,id:1,name:'Swift'},{brandId:1,id:2,name:'Brezza'},{brandId:1,id:3,name:'Ertiga'},{brandId:2,id:4,name:'Baleno'},{brandId:2,id:5,name:'S Cross'},{brandId:2,id:6,name:'Ignis'},{brandId:3,id:7,name:'Creta'},{brandId:3,id:8,name:'Verna'},{brandId:3,id:9,name:'Grand i20'}];
app.get('/json',(req,res) => {
    res.json(models);
});

// for file download
app.get('/download',(req,res) => {
    res.download(path.join(__dirname,'ui.pdf'));
});

app.listen(port,hostname, () => {
    console.log(`Server is started at http://${hostname}:${port}`);
});