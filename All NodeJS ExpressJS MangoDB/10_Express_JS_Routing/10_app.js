const express = require('express');
const app = express();
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

// Use Static file Middleware
app.use('/public', express.static('public'));

// GET : for home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'views','index.html'));
});

// GET : for About page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname,'views','about.html'));
});


// GET : for Services page
app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname,'views','services.html'));
});

// GET : for contact page
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname,'views','contact.html'));
});

// GET : for Profile page
app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname,'views','profile.html'));
});

// 404  error page
app.use((req,res) => {
    res.sendFile(path.join(__dirname,'views','404.html'));
});

app.listen(port,hostname, () => {
    console.log(`Server is started at http://${hostname}:${port}`);
});