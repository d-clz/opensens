var express = require('express');
var serialPort = require('../models/serialutils')
var router = express.Router();
/* GET users listing. */
router.get('/', async function(req, res, next) {
	// const [arr1, arr2, arr3] = await Promise.all([
	//    function1(),
	//    function2(),
	//     ...
	// ])
	var portList = await serialPort.getConnected()
	res.render('config', {
		title: 'MFO Config',
		ports: portList
	})
});

module.exports = router;
