let express = require('express');
let session = require('express-session');

let app = express();

let mysql = require('mysql');

app.use(express.static("public"));

app.use(express.urlencoded({extended: true})); 

let router = require('./routes');

app.use('/',router);


app.listen(80, function() {
	console.log('Server listening on port 80');
});