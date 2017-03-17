var express         = require('express');
var bodyParser      = require('body-parser');

var app = module.exports = express();
///Configurations
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

///Controllers

///Entry point
app.get('/', (req, res)=> res.redirect('/static/index.html'));

///Static resources
app.use('/static', express.static(__dirname + '/webapp/dist/'));
