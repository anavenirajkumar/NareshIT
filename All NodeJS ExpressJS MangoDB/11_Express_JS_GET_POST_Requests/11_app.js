const express = require('express');
const app = express();
const path = require('path');
const  router = require('./router/appRouting');

const hostname = '127.0.0.1';
const port = 3000;

// Use Static file Middleware
app.use('/public', express.static('public'));

// Set the View Engine Configuration
app.set('view engine', 'ejs');

// Routing Logic
router.mapRoutes(app);

app.listen(port,hostname, () => {
    console.log(`Server is started at http://${hostname}:${port}`);
});