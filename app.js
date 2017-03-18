var express         = require('express');
var bodyParser      = require('body-parser');

var app = module.exports = express();
///Configurations
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

///Controllers
app.get('/app', (req, res, next) =>{
    console.log('passed here...');
    next();
});
///Static resources
app.use('/', express.static(__dirname + '/webapp/dist/'));
