const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Sample Persons Data
let persons = [{"id":1,"first_name":"Elberta","last_name":"Belbin","email":"ebelbin0@elpais.com","country":"Portugal"},
    {"id":2,"first_name":"Kip","last_name":"Bakes","email":"kbakes1@opera.com","country":"Guatemala"},
    {"id":3,"first_name":"Angeli","last_name":"MacCrackan","email":"amaccrackan2@google.ca","country":"Nicaragua"},
    {"id":4,"first_name":"Alica","last_name":"Barradell","email":"abarradell3@cdc.gov","country":"Slovenia"},
    {"id":5,"first_name":"Agneta","last_name":"Aynold","email":"aaynold4@cnn.com","country":"Indonesia"},
    {"id":6,"first_name":"Chere","last_name":"Steers","email":"csteers5@storify.com","country":"China"},
    {"id":7,"first_name":"Nelly","last_name":"Lennarde","email":"nlennarde6@nifty.com","country":"China"},
    {"id":8,"first_name":"Julee","last_name":"Hesser","email":"jhesser7@sbwire.com","country":"Brazil"},
    {"id":9,"first_name":"Valina","last_name":"Dayborne","email":"vdayborne8@csmonitor.com","country":"Guatemala"},
    {"id":10,"first_name":"Claudell","last_name":"Guilaem","email":"cguilaem9@wordpress.com","country":"Portugal"},
    {"id":11,"first_name":"Norine","last_name":"MacMarcuis","email":"nmacmarcuisa@studiopress.com","country":"Ivory Coast"},
    {"id":12,"first_name":"Carmela","last_name":"Maker","email":"cmakerb@state.tx.us","country":"Indonesia"},
    {"id":13,"first_name":"Bobbie","last_name":"Moules","email":"bmoulesc@desdev.cn","country":"Pakistan"},
    {"id":14,"first_name":"Giusto","last_name":"Clist","email":"gclistd@ameblo.jp","country":"Japan"},
    {"id":15,"first_name":"Hilly","last_name":"Tivenan","email":"htivenane@twitpic.com","country":"China"},
    {"id":16,"first_name":"Andee","last_name":"Richen","email":"arichenf@constantcontact.com","country":"Indonesia"},
    {"id":17,"first_name":"Jarrod","last_name":"Le Gassick","email":"jlegassickg@princeton.edu","country":"Portugal"},
    {"id":18,"first_name":"Normie","last_name":"Brisse","email":"nbrisseh@patch.com","country":"Philippines"},
    {"id":19,"first_name":"Brendon","last_name":"Grane","email":"bgranei@adobe.com","country":"Iran"},
    {"id":20,"first_name":"Say","last_name":"Broodes","email":"sbroodesj@myspace.com","country":"Haiti"},
    {"id":21,"first_name":"Gerrard","last_name":"Garret","email":"ggarretk@virginia.edu","country":"Indonesia"},
    {"id":22,"first_name":"Clint","last_name":"O'Hartnedy","email":"cohartnedyl@jiathis.com","country":"Macedonia"},
    {"id":23,"first_name":"Heath","last_name":"Ziebart","email":"hziebartm@cpanel.net","country":"Mexico"},
    {"id":24,"first_name":"Keriann","last_name":"Sprade","email":"kspraden@forbes.com","country":"Pakistan"},
    {"id":25,"first_name":"Gay","last_name":"Quarrington","email":"gquarringtono@nymag.com","country":"Nepal"},
    {"id":26,"first_name":"Lonee","last_name":"O'Dunniom","email":"lodunniomp@phoca.cz","country":"Philippines"},
    {"id":27,"first_name":"Caresse","last_name":"Bernlin","email":"cbernlinq@hud.gov","country":"Indonesia"},
    {"id":28,"first_name":"Dode","last_name":"Hegges","email":"dheggesr@yellowpages.com","country":"Venezuela"},
    {"id":29,"first_name":"Queenie","last_name":"Lenaghen","email":"qlenaghens@free.fr","country":"Malawi"},
    {"id":30,"first_name":"Thorsten","last_name":"Marcone","email":"tmarconet@theatlantic.com","country":"Belarus"},
    {"id":31,"first_name":"Ludvig","last_name":"Gorioli","email":"lgorioliu@networksolutions.com","country":"France"},
    {"id":32,"first_name":"Maggy","last_name":"Diche","email":"mdichev@msn.com","country":"Zimbabwe"},
    {"id":33,"first_name":"Forrester","last_name":"Iacovazzi","email":"fiacovazziw@nsw.gov.au","country":"Indonesia"},
    {"id":34,"first_name":"Eolanda","last_name":"Iannini","email":"eianninix@tmall.com","country":"Japan"},
    {"id":35,"first_name":"Eldridge","last_name":"Brooker","email":"ebrookery@elegantthemes.com","country":"China"},
    {"id":36,"first_name":"Sherill","last_name":"Yearnes","email":"syearnesz@blogspot.com","country":"Iran"},
    {"id":37,"first_name":"Tammie","last_name":"McGurgan","email":"tmcgurgan10@craigslist.org","country":"Colombia"},
    {"id":38,"first_name":"Flint","last_name":"Ivanchenkov","email":"fivanchenkov11@arstechnica.com","country":"China"},
    {"id":39,"first_name":"Arvie","last_name":"Awdry","email":"aawdry12@narod.ru","country":"Philippines"},
    {"id":40,"first_name":"Lilith","last_name":"O' Byrne","email":"lobyrne13@ihg.com","country":"China"},
    {"id":41,"first_name":"Nickey","last_name":"Deetch","email":"ndeetch14@stanford.edu","country":"Mauritius"},
    {"id":42,"first_name":"Cymbre","last_name":"Whiffin","email":"cwhiffin15@google.co.uk","country":"Colombia"},
    {"id":43,"first_name":"Penelopa","last_name":"Healy","email":"phealy16@wikimedia.org","country":"Peru"},
    {"id":44,"first_name":"Willamina","last_name":"Eye","email":"weye17@upenn.edu","country":"Indonesia"},
    {"id":45,"first_name":"Tammara","last_name":"Conniam","email":"tconniam18@shutterfly.com","country":"Costa Rica"},
    {"id":46,"first_name":"Doro","last_name":"Syplus","email":"dsyplus19@digg.com","country":"Denmark"},
    {"id":47,"first_name":"Shepard","last_name":"Narramore","email":"snarramore1a@theguardian.com","country":"Ukraine"},
    {"id":48,"first_name":"Gib","last_name":"Danilchev","email":"gdanilchev1b@amazon.com","country":"Morocco"},
    {"id":49,"first_name":"Gage","last_name":"Guisler","email":"gguisler1c@vkontakte.ru","country":"Indonesia"},
    {"id":50,"first_name":"Nancee","last_name":"Ziemens","email":"nziemens1d@slashdot.org","country":"Indonesia"}];


// Connection URL
const url = 'mongodb://127.0.0.1:27017';

// Database Name
const dbName = 'Company';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to Mongo DB");
    const db = client.db(dbName);

    /*
    insertDocuments(db, function() {
        client.close();
    });
    */

/*

    findDocuments(db, function() {
        client.close();
    });
*/


        updateDocument(db, function() {
            client.close();
        });


});

// Insert the Records / CREATE Operation
const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('Person');
    // Insert some documents
    collection.insertMany(persons, function(err, result) {
        assert.equal(err, null);
        assert.equal(50, result.result.n);
        assert.equal(50, result.ops.length);
        console.log("Inserted 50 documents into the collection");
        callback(result);
    });
};

// Fetch Records / READ Operation
const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('Person');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(docs);
        callback(docs);
    });
};

// UPDATE
const updateDocument = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('Person');
    // Update document where a is 2, set b equal to 1
    collection.updateOne({ id : 1 }
        , { $set: { first_name : 'NAVEEN' , last_name : 'SAGGAM' } }, function(err, result) {
            assert.equal(err, null);
            assert.equal(1, result.result.n);
            console.log("Updated the document with the field a equal to 2");
            callback(result);
        });
}