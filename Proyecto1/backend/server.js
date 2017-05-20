var hapi = require('hapi');
var inert = require('inert');
var mongoose = require('mongoose');
var routes = require('./routes');
var auth = require('hapi-auth-cookie');

var server = new hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

mongoose.connect('mongodb://127.0.0.1:27017/Prueba')
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
    console.log("Connection with database succeeded.");
});

server.route(routes.endpoints);

server.start(function () {
	    console.log('Server running at:', server.info.uri);
});