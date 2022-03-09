var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('Hello World');
});
app.get('/', function (req, res) {
    res.send(2+2) 
    })
app.listen(3000);
