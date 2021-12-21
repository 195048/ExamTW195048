let Room = require('../models/roomModel');
let mysql = require('mysql');

let roomsList = [];


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'appart'
});




exports.roomList = function (req,res) {
	roomsList = [];
	connection.query('SELECT * FROM rooms', function(error, result) {
		if (error) console(error);
		result.forEach(element => {
			let room = new Room(element.name, element.length, element.width);
			roomsList.push(room);
			
		})
		let stotale = 0;
			roomsList.forEach(element => {
			stotale += element.largeur*element.longueur;
			})
		res.render('roomList.ejs', {rooms : roomsList, stotale : stotale});
	});
	
}

exports.roomAdd = function (req, res) {
	res.render('addRoom.ejs',{Message : ""});
}

exports.roomAdded = function (req, res) {
	let nom = req.body.nom;
	let largeur = req.body.largeur;
	let longueur = req.body.longueur;
	if (nom == "" || largeur <= 0 || longueur <= 0) {
		res.render('addRoom.ejs', {Message : "Veuillez entrée des données pour toutes les cases"});
	}
	else {
		
		let room = new Room(nom, largeur, longueur);
		connection.query('insert INTO rooms SET ?',{"name" : room.nom, "length" : room.longueur, "width" : room.largeur},function(error, result) {
            if (error) console(error);
            res.redirect('/appart');
        });
		
	}
	

}
