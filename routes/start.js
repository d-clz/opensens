var express = require('express')
var router = express.Router()
var serialport = require('serialport')
var Readline = require('@serialport/parser-readline')
const websocket = require('../models/ws-stream');

router.post('/', function(req, res) {
	console.log(req.body);
	const port = new serialport(
		req.body.selectedPort, {
		baudRate: parseInt(req.body.baudrate)
	},
	function(err) {
		if (err)
			return console.log('Serial:', err.message)
	})
	const parser = port.pipe(new Readline({
		delimiter: '\r\n'
	}))
 	var str
 	parser.on("data", function(data) {
	 	str = data.toString('hex')
 	})

	websocket.stream()
// 	parser.on('data', data => {
// 		console.log(data);
// 		port.write(req.body.method, function(err, res) {
// 			if (err) {
// 				console.log(err);
// 			}
// 			if (res) {
// 				console.log(res);
// 			}
// 		})
})

module.exports = router;
