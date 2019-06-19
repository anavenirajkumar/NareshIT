const path = require('path');
// Load the Body Parser for form Handling
const bodyParser = require('body-parser');

// profiles data
let profiles = [{"id":1,"first_name":"Phebe","last_name":"Rayment","email":"prayment0@ihg.com","gender":"Female","ip_address":"114.132.145.45"},
    {"id":2,"first_name":"Veronike","last_name":"Shortt","email":"vshortt1@sfgate.com","gender":"Female","ip_address":"4.178.225.63"},
    {"id":3,"first_name":"Smitty","last_name":"Dubois","email":"sdubois2@flavors.me","gender":"Male","ip_address":"17.247.44.127"},
    {"id":4,"first_name":"Jephthah","last_name":"Ianittello","email":"jianittello3@washington.edu","gender":"Male","ip_address":"212.45.153.95"},
    {"id":5,"first_name":"Robinet","last_name":"Osmon","email":"rosmon4@usa.gov","gender":"Female","ip_address":"128.222.105.134"},
    {"id":6,"first_name":"Jeffie","last_name":"Waymont","email":"jwaymont5@creativecommons.org","gender":"Male","ip_address":"108.144.40.69"},
    {"id":7,"first_name":"Carce","last_name":"Bumfrey","email":"cbumfrey6@amazonaws.com","gender":"Male","ip_address":"19.102.100.70"},
    {"id":8,"first_name":"Armstrong","last_name":"Roughan","email":"aroughan7@dyndns.org","gender":"Male","ip_address":"1.26.136.94"},
    {"id":9,"first_name":"Corbie","last_name":"Ogdahl","email":"cogdahl8@loc.gov","gender":"Male","ip_address":"213.154.34.38"},
    {"id":10,"first_name":"Whitman","last_name":"Studdal","email":"wstuddal9@si.edu","gender":"Male","ip_address":"202.137.184.48"},
    {"id":11,"first_name":"Haroun","last_name":"Devo","email":"hdevoa@nsw.gov.au","gender":"Male","ip_address":"168.81.249.234"},
    {"id":12,"first_name":"Rubia","last_name":"Luis","email":"rluisb@umn.edu","gender":"Female","ip_address":"213.76.25.93"},
    {"id":13,"first_name":"Paulette","last_name":"Akister","email":"pakisterc@bloomberg.com","gender":"Female","ip_address":"87.134.242.101"},
    {"id":14,"first_name":"Robbie","last_name":"Woofenden","email":"rwoofendend@stanford.edu","gender":"Male","ip_address":"47.128.154.233"},
    {"id":15,"first_name":"Rayner","last_name":"Mamwell","email":"rmamwelle@cdbaby.com","gender":"Male","ip_address":"133.47.212.246"},
    {"id":16,"first_name":"Theodore","last_name":"Lofty","email":"tloftyf@infoseek.co.jp","gender":"Male","ip_address":"129.184.48.91"},
    {"id":17,"first_name":"Arny","last_name":"Thal","email":"athalg@photobucket.com","gender":"Male","ip_address":"116.122.219.226"},
    {"id":18,"first_name":"Vladamir","last_name":"Franzen","email":"vfranzenh@msu.edu","gender":"Male","ip_address":"163.170.251.27"},
    {"id":19,"first_name":"Tamarah","last_name":"Freshwater","email":"tfreshwateri@usda.gov","gender":"Female","ip_address":"44.61.114.178"},
    {"id":20,"first_name":"Gertrudis","last_name":"Stobbes","email":"gstobbesj@dmoz.org","gender":"Female","ip_address":"178.175.54.47"},
    {"id":21,"first_name":"Daune","last_name":"de Amaya","email":"ddeamayak@tinypic.com","gender":"Female","ip_address":"212.78.175.176"},
    {"id":22,"first_name":"Cathe","last_name":"Jendrich","email":"cjendrichl@bloglines.com","gender":"Female","ip_address":"184.70.239.13"},
    {"id":23,"first_name":"Rudiger","last_name":"Pawels","email":"rpawelsm@bigcartel.com","gender":"Male","ip_address":"143.149.12.142"},
    {"id":24,"first_name":"Andreas","last_name":"Buss","email":"abussn@comsenz.com","gender":"Male","ip_address":"174.227.44.253"},
    {"id":25,"first_name":"Corene","last_name":"Yaus","email":"cyauso@printfriendly.com","gender":"Female","ip_address":"94.153.107.147"},
    {"id":26,"first_name":"Eugenio","last_name":"Ryce","email":"erycep@npr.org","gender":"Male","ip_address":"180.162.92.77"},
    {"id":27,"first_name":"Ethyl","last_name":"Atheis","email":"eatheisq@vistaprint.com","gender":"Female","ip_address":"139.144.134.88"},
    {"id":28,"first_name":"Morena","last_name":"Sharrard","email":"msharrardr@ucoz.com","gender":"Female","ip_address":"93.153.43.170"},
    {"id":29,"first_name":"Keriann","last_name":"Whitters","email":"kwhitterss@usgs.gov","gender":"Female","ip_address":"148.127.87.97"},
    {"id":30,"first_name":"Miguel","last_name":"Kabisch","email":"mkabischt@histats.com","gender":"Male","ip_address":"1.153.1.187"},
    {"id":31,"first_name":"Hermy","last_name":"Fendlen","email":"hfendlenu@blog.com","gender":"Male","ip_address":"17.133.244.72"},
    {"id":32,"first_name":"Dan","last_name":"Ferriday","email":"dferridayv@sciencedaily.com","gender":"Male","ip_address":"205.233.227.190"},
    {"id":33,"first_name":"Virge","last_name":"Fortie","email":"vfortiew@google.co.uk","gender":"Male","ip_address":"222.20.190.105"},
    {"id":34,"first_name":"Tom","last_name":"Letten","email":"tlettenx@yahoo.com","gender":"Male","ip_address":"158.9.79.58"},
    {"id":35,"first_name":"Nathan","last_name":"Gosdin","email":"ngosdiny@deliciousdays.com","gender":"Male","ip_address":"167.241.106.240"},
    {"id":36,"first_name":"Trumaine","last_name":"Greenley","email":"tgreenleyz@mysql.com","gender":"Male","ip_address":"20.28.223.113"},
    {"id":37,"first_name":"Catlee","last_name":"Bemrose","email":"cbemrose10@cbslocal.com","gender":"Female","ip_address":"153.211.115.246"},
    {"id":38,"first_name":"Terrance","last_name":"Moysey","email":"tmoysey11@simplemachines.org","gender":"Male","ip_address":"36.46.226.0"},
    {"id":39,"first_name":"Shani","last_name":"Pavlitschek","email":"spavlitschek12@about.me","gender":"Female","ip_address":"190.102.16.158"},
    {"id":40,"first_name":"Dennet","last_name":"Laxen","email":"dlaxen13@behance.net","gender":"Male","ip_address":"189.176.93.37"},
    {"id":41,"first_name":"Elden","last_name":"De Meyer","email":"edemeyer14@spotify.com","gender":"Male","ip_address":"236.10.151.217"},
    {"id":42,"first_name":"Carlyle","last_name":"Quinnet","email":"cquinnet15@si.edu","gender":"Male","ip_address":"5.162.52.34"},
    {"id":43,"first_name":"Jedediah","last_name":"Lambis","email":"jlambis16@loc.gov","gender":"Male","ip_address":"39.23.92.168"},
    {"id":44,"first_name":"Emory","last_name":"Durling","email":"edurling17@youtube.com","gender":"Male","ip_address":"97.147.236.167"},
    {"id":45,"first_name":"Marcy","last_name":"Cracie","email":"mcracie18@ezinearticles.com","gender":"Female","ip_address":"114.73.17.77"},
    {"id":46,"first_name":"Sully","last_name":"Jelks","email":"sjelks19@seattletimes.com","gender":"Male","ip_address":"50.0.138.129"},
    {"id":47,"first_name":"Kata","last_name":"Ralestone","email":"kralestone1a@ucoz.com","gender":"Female","ip_address":"124.61.37.196"},
    {"id":48,"first_name":"Jesse","last_name":"Pennycord","email":"jpennycord1b@hostgator.com","gender":"Female","ip_address":"55.199.83.170"},
    {"id":49,"first_name":"Nichole","last_name":"Cyphus","email":"ncyphus1c@mlb.com","gender":"Female","ip_address":"75.117.233.36"},
    {"id":50,"first_name":"Byron","last_name":"Gerish","email":"bgerish1d@ft.com","gender":"Male","ip_address":"157.105.120.13"},
    {"id":51,"first_name":"Claudia","last_name":"Kembery","email":"ckembery1e@vistaprint.com","gender":"Female","ip_address":"26.10.7.136"},
    {"id":52,"first_name":"Madison","last_name":"Satterlee","email":"msatterlee1f@sohu.com","gender":"Male","ip_address":"207.194.197.239"},
    {"id":53,"first_name":"Mara","last_name":"Bimrose","email":"mbimrose1g@mit.edu","gender":"Female","ip_address":"126.130.45.235"},
    {"id":54,"first_name":"Bel","last_name":"Stoile","email":"bstoile1h@google.com.br","gender":"Female","ip_address":"197.129.124.73"},
    {"id":55,"first_name":"Levon","last_name":"Headington","email":"lheadington1i@furl.net","gender":"Male","ip_address":"146.209.200.134"},
    {"id":56,"first_name":"Ringo","last_name":"Ronchka","email":"rronchka1j@plala.or.jp","gender":"Male","ip_address":"133.41.103.162"},
    {"id":57,"first_name":"Mattheus","last_name":"Hankard","email":"mhankard1k@phpbb.com","gender":"Male","ip_address":"112.194.118.116"},
    {"id":58,"first_name":"Lothaire","last_name":"McLevie","email":"lmclevie1l@phoca.cz","gender":"Male","ip_address":"86.196.56.23"},
    {"id":59,"first_name":"Dwight","last_name":"Lambis","email":"dlambis1m@t.co","gender":"Male","ip_address":"45.173.24.175"},
    {"id":60,"first_name":"Susie","last_name":"Gibbieson","email":"sgibbieson1n@ezinearticles.com","gender":"Female","ip_address":"175.252.254.130"},
    {"id":61,"first_name":"Adella","last_name":"Corking","email":"acorking1o@senate.gov","gender":"Female","ip_address":"182.116.18.230"},
    {"id":62,"first_name":"Conchita","last_name":"Rapsey","email":"crapsey1p@webs.com","gender":"Female","ip_address":"162.114.124.160"},
    {"id":63,"first_name":"Billie","last_name":"Bergen","email":"bbergen1q@telegraph.co.uk","gender":"Female","ip_address":"66.63.149.25"},
    {"id":64,"first_name":"Danella","last_name":"Pasque","email":"dpasque1r@webs.com","gender":"Female","ip_address":"198.10.23.9"},
    {"id":65,"first_name":"Rowe","last_name":"Branthwaite","email":"rbranthwaite1s@state.tx.us","gender":"Female","ip_address":"99.110.129.197"},
    {"id":66,"first_name":"Emiline","last_name":"Carradice","email":"ecarradice1t@netlog.com","gender":"Female","ip_address":"42.7.91.229"},
    {"id":67,"first_name":"Dari","last_name":"O'Deegan","email":"dodeegan1u@woothemes.com","gender":"Female","ip_address":"194.185.77.182"},
    {"id":68,"first_name":"Malchy","last_name":"Marriot","email":"mmarriot1v@merriam-webster.com","gender":"Male","ip_address":"47.137.33.174"},
    {"id":69,"first_name":"Thaddeus","last_name":"Laughtisse","email":"tlaughtisse1w@t-online.de","gender":"Male","ip_address":"18.141.240.161"},
    {"id":70,"first_name":"Hale","last_name":"Taudevin","email":"htaudevin1x@bbc.co.uk","gender":"Male","ip_address":"177.198.72.123"},
    {"id":71,"first_name":"Dyanne","last_name":"Joder","email":"djoder1y@springer.com","gender":"Female","ip_address":"139.80.81.71"},
    {"id":72,"first_name":"Kamilah","last_name":"Borland","email":"kborland1z@vimeo.com","gender":"Female","ip_address":"164.101.210.134"},
    {"id":73,"first_name":"Robena","last_name":"Redhole","email":"rredhole20@earthlink.net","gender":"Female","ip_address":"185.14.35.42"},
    {"id":74,"first_name":"Gearalt","last_name":"Hunn","email":"ghunn21@webeden.co.uk","gender":"Male","ip_address":"30.119.33.190"},
    {"id":75,"first_name":"Collen","last_name":"Hedditch","email":"chedditch22@livejournal.com","gender":"Female","ip_address":"146.111.117.246"},
    {"id":76,"first_name":"Keslie","last_name":"Gorvette","email":"kgorvette23@techcrunch.com","gender":"Female","ip_address":"18.210.255.27"},
    {"id":77,"first_name":"Barnebas","last_name":"Wayvill","email":"bwayvill24@mac.com","gender":"Male","ip_address":"112.138.45.200"},
    {"id":78,"first_name":"Angel","last_name":"Winskill","email":"awinskill25@telegraph.co.uk","gender":"Female","ip_address":"42.41.95.190"},
    {"id":79,"first_name":"Rowan","last_name":"Taveriner","email":"rtaveriner26@dagondesign.com","gender":"Male","ip_address":"132.248.154.76"},
    {"id":80,"first_name":"Angus","last_name":"Borkett","email":"aborkett27@ocn.ne.jp","gender":"Male","ip_address":"3.106.98.50"},
    {"id":81,"first_name":"Pascale","last_name":"Braizier","email":"pbraizier28@globo.com","gender":"Male","ip_address":"140.143.223.9"},
    {"id":82,"first_name":"Doti","last_name":"De Andreis","email":"ddeandreis29@guardian.co.uk","gender":"Female","ip_address":"204.55.87.42"},
    {"id":83,"first_name":"Albrecht","last_name":"Moriarty","email":"amoriarty2a@yolasite.com","gender":"Male","ip_address":"63.57.54.0"},
    {"id":84,"first_name":"Gracia","last_name":"Ensten","email":"gensten2b@naver.com","gender":"Female","ip_address":"144.244.9.247"},
    {"id":85,"first_name":"Padraig","last_name":"Peyton","email":"ppeyton2c@sfgate.com","gender":"Male","ip_address":"157.14.182.178"},
    {"id":86,"first_name":"Fin","last_name":"Laundon","email":"flaundon2d@altervista.org","gender":"Male","ip_address":"150.29.125.253"},
    {"id":87,"first_name":"Keary","last_name":"Rountree","email":"krountree2e@behance.net","gender":"Male","ip_address":"95.36.90.25"},
    {"id":88,"first_name":"Eustace","last_name":"Geke","email":"egeke2f@ycombinator.com","gender":"Male","ip_address":"191.217.68.4"},
    {"id":89,"first_name":"Davidde","last_name":"Allright","email":"dallright2g@ucoz.ru","gender":"Male","ip_address":"62.40.214.16"},
    {"id":90,"first_name":"Yetta","last_name":"Dowtry","email":"ydowtry2h@infoseek.co.jp","gender":"Female","ip_address":"170.190.109.34"},
    {"id":91,"first_name":"Coletta","last_name":"Grouen","email":"cgrouen2i@narod.ru","gender":"Female","ip_address":"212.190.142.130"},
    {"id":92,"first_name":"Salmon","last_name":"Owttrim","email":"sowttrim2j@delicious.com","gender":"Male","ip_address":"219.48.244.189"},
    {"id":93,"first_name":"Lyndel","last_name":"Borth","email":"lborth2k@vinaora.com","gender":"Female","ip_address":"159.1.66.106"},
    {"id":94,"first_name":"Bernard","last_name":"Manilove","email":"bmanilove2l@weibo.com","gender":"Male","ip_address":"171.235.169.84"},
    {"id":95,"first_name":"Maximilianus","last_name":"Drohane","email":"mdrohane2m@globo.com","gender":"Male","ip_address":"51.177.42.222"},
    {"id":96,"first_name":"Rutger","last_name":"Beneix","email":"rbeneix2n@spotify.com","gender":"Male","ip_address":"250.225.34.105"},
    {"id":97,"first_name":"Margalit","last_name":"Ames","email":"mames2o@printfriendly.com","gender":"Female","ip_address":"18.81.1.191"},
    {"id":98,"first_name":"Aristotle","last_name":"Jankiewicz","email":"ajankiewicz2p@flavors.me","gender":"Male","ip_address":"178.225.143.239"},
    {"id":99,"first_name":"Bea","last_name":"Carloni","email":"bcarloni2q@omniture.com","gender":"Female","ip_address":"4.22.83.168"},
    {"id":100,"first_name":"Harmonia","last_name":"Di Carlo","email":"hdicarlo2r@pen.io","gender":"Female","ip_address":"100.140.225.61"}];

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

let mapRoutes = (app) => {

    // GET : home page
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname,'..','views','index.html'));
    });

// GET : About us page
    app.get('/about', (req, res) => {
        res.sendFile(path.join(__dirname,'..','views','about.html'));
    });

// GET : services page with Query Strings
    app.get('/services', (req, res) => {
        let queryString = req.query;
        console.log(queryString);
        res.sendFile(path.join(__dirname,'..','views','services.html'));
    });

    // GET : profile page
    app.get('/profile', (req, res) => {
        res.sendFile(path.join(__dirname,'..','views','profile.html'));
    });

    // GET : profile page with parameters
    app.get('/profile/:id', (req, res) => {
        let id = Number.parseInt(req.params.id);
        let profile = profiles.find((profile) => {
                return profile.id === id;
        });
        console.log(profile);
        res.sendFile(path.join(__dirname,'..','views','profile.html'));
    });


// GET : Contact Us page
    app.get('/contact', (req, res) => {
        res.sendFile(path.join(__dirname,'..','views','contact.html'));
    });

    // POST : Feedback Form
    app.post('/feedback',urlencodedParser,(req,res) => {
        // form handling Logic
        let feedback = req.body;
        console.log(feedback);
        res.render(path.join(__dirname,'..','views','contact-success.ejs'),{feedback :feedback});
    });

// 404  error page
    app.use((req,res) => {
        res.sendFile(path.join(__dirname,'..','views','404.html'));
    });

};

module.exports = {
    mapRoutes
};