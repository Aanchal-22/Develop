var express = require('express');
var app = express();

//app.set('view engine', 'jade');
app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/'));

app.get('/', function(req, res) {
    /*res.render('index');
     */

    // for loading .html template
    res.sendFile('index.html', {
        root: __dirname
    });
});
app.listen(8080);
