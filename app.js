var express = require('express');
var app = module.exports = express();

///Configurations

///Controllers

///Entry point
app.get('/', (req, res)=> res.redirect('/static/index.html'));

///Static resources
app.use('/static', express.static(__dirname + '/webapp/dist/'));
