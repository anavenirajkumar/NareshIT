const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
// Load Express Validator
const {check , validationResult} = require('express-validator/check');

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

/* GET home page. */
router.get('/', function(req, res, next) {
    let errors= [{
        location: '',
        param: '',
        value: '',
        msg: ''
    }];
    let user = {
        email : '',
        password : '',
        c_password : ''
    };
  res.render('index.ejs',{errors : errors , user : user});
});

/* POST : Login Form */
router.post('/login',[
    check('email').isEmail() ,
    check('password').isLength({min : 5}),
check('c_password').custom((value,{req}) => {
    if(value !== req.body.password){
        throw Error;
    }
    else {
        return true;
    }
})], urlencodedParser, function(req, res, next) {
    let user = req.body;
    let errors = validationResult(req).array();
    res.render('index.ejs', {errors : errors , user : user});
});

module.exports = router;
