var express = require('express');

var app = express();

app.get('/', function(req, res) {
	//res.send('Hello world');
	res.json({hello: 'world'})
});

var server = app.listen(3000, function() {
	console.log('Server listening at http://127.0.0.1:3000')
})