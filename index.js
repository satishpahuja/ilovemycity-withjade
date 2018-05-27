var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'jade');

var routes = require('./routes/route.js');

app.get('/', routes.renderHome);

app.get('/:city', routes.renderCity);

var port = process.env.PORT || 3000;

var server = app.listen(port, function (req, res) {
    console.log("Server started at port " + port);
    routes.fillCitiesHashMap();
});
