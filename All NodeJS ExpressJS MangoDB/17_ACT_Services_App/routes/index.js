const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoDB = require('../database/dbOperations').getDB;

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs');
});

/* GET Raise Complaints page. */
router.get('/raise', function(req, res, next) {
    res.render('raise-complaints.ejs');
});

/* GET List of Complaints page. */
router.get('/list', function(req, res, next) {
    // Fetch the data from database
    let db = mongoDB();
    db.collection('Complaint').find({}).toArray((err,complaints) => {
        if(err) throw err;
        res.render('list-of-complaints.ejs',{complaints : complaints});
    });

});


/* POST Raise Complaints Form. */
router.post('/complain',urlencodedParser ,function(req, res, next) {
    let complaint = req.body;
    console.log(complaint);
    // store to DB
    let db  = mongoDB();
    db.collection('Complaint').insertOne(complaint,(err , data) => {
        if(err) throw err;
        res.render('raise-complaint-success.ejs',{complaint : complaint});
    });
});

module.exports = router;
