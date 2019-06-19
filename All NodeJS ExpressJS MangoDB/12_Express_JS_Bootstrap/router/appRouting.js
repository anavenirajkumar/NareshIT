const path = require('path');

let mapRoutes = (app) => {

    // GET : home page
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname,'..','views','index.html'));
    });

// GET : About us page
    app.get('/about', (req, res) => {
        res.sendFile(path.join(__dirname,'..','views','about.html'));
    });

// GET : services page
    app.get('/services', (req, res) => {
        res.sendFile(path.join(__dirname,'..','views','services.html'));
    });

// GET : profile page
    app.get('/profile', (req, res) => {
        res.sendFile(path.join(__dirname,'..','views','profile.html'));
    });

// GET : Contact Us page
    app.get('/contact', (req, res) => {
        res.sendFile(path.join(__dirname,'..','views','contact.html'));
    });

// 404  error page
    app.use((req,res) => {
        res.sendFile(path.join(__dirname,'..','views','404.html'));
    });

};

module.exports = {
    mapRoutes
};