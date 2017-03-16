var app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
    console.log('Magic happens at port ' + PORT);
});

