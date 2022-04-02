module.exports = function (app, fireReadyEvent) {
    const http = app.Server.httpApp
    const io = require('socket.io')(http)

    fireReadyEvent(io)
}