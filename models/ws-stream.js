const WebSocket = require('ws');
const webSocketPort = 1200;

const webSocketServer = new WebSocket.Server({
  port: webSocketPort
});

function stream() {
  webSocketServer.on('connection', function(ws) {
    console.log("WebSocket is open on port", webSocketPort);
    ws.on('message', function incoming(message) {
      ws.send(str)
    })
  })
}

module.exports = {
  stream
}
