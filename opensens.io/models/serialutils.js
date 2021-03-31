var SerialPort = require('serialport')

function getConnected() {
	'use strict'
	return new Promise((resolve, reject) => {
		SerialPort.list().then(function(ports) {
			var connectedPort = []
			ports.forEach(function(port) {
				//if (port.manufacturer != undefined) {
				connectedPort.push(port.path)
				//	}
			})
			resolve(connectedPort)
		})
	})
}

module.exports = {
	getConnected
}