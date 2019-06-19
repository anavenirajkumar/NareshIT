const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = 'mongodb://127.0.0.1:27017/ACT_SERVICES';
let _db;

const mongoConnet = (callback) => {
    MongoClient.connect(url).then(
        client => {
            console.log('Connected to Database Successfully');
            _db = client.db();
            callback();
        }
    ).catch(err => {
        console.log(err);
        throw err;

    });
};

const getDB = () => {
    if(_db){
        return _db;
    }
    throw  'No Database found';
};

exports.mongoConnet = mongoConnet;
exports.getDB = getDB;