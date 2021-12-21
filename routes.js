let express = require('express');

let router = express.Router();
let appartController = require('./controllers/appartController');

router.get('/appart', appartController.roomList);

router.get('/appart/addRoom', appartController.roomAdd);

router.post('/appart/roomAdded', appartController.roomAdded);

router.get('/', function(req, res){
	res.redirect('/appart');
});





module.exports = router;