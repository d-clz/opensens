var express = require('express');
var router = express.Router();
var serialport = require('serialport');
var Readline = require('@serialport/parser-readline');

router.post('/', function(req, res) {
	console.log(req.body);
	const port = new serialport(req.body.selectedPort, {
		baudRate: parseInt(req.body.baudrate)
	})
	const parser = port.pipe(new Readline({
		delimiter: '\r\n'
	}))

	parser.on('data', data => {
		console.log(data);
		port.write(req.body.method, function(err, res) {
			if (err) {
				console.log(err);
			}
			if (res) {
				console.log(res);
			}
		})
	})
});

module.exports = router;