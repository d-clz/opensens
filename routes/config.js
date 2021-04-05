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
	console.log(portList)
	res.render('config', {
		title: 'MFO Config',
		ports: portList,
		baudrates: [9600, 115200],
		methods: ['CV', 'SWV', 'LMP', 'AMP', 'DVP', 'EIS']
	})
});

module.exports = router;