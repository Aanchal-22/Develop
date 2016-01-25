var express = require('express');
var app = express();
app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/public'));
app.get('/', function(request, response) {
    response.sendFile("index.html", {
        root: __dirname
    });
})
app.listen(3000);
