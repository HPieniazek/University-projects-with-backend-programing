var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('Hello Home');
    
});
app.param('name', function(req, res, next, name) {
    const modified = name.toUpperCase();
  
    req.name = modified;
    next();
  });
app.get('/api/users/:name', function(req, res) {
    res.send('Hello ' + req.name + '!');
  });

app.listen(3000);
