var ejemplo = require('./controllers/ejemploController');

exports.endpoints = [
	{   method: 'GET',path: '/',config: ejemplo.test}
];