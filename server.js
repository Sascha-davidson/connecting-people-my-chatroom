import * as path from "path";
import { Server } from "socket.io";
import { createServer } from "http";
import express from "express";

const app = express();
const http = createServer(app);
const ioServer = new Server(http);
const port = process.env.PORT || 8000;

app.use(express.static(path.resolve("public")));

ioServer.on(`connection`, function(socket) {

  socket.on(`newuser`, function (username) {
    socket.broadcast.emit(`update`, username + `joined the conversation`);
  });

  socket.on(`exituser`, function (username) {
    socket.broadcast.emit(`update`, username + `left the conversation`);
  });

  socket.on(`chat`, function (message) {
    socket.broadcast.emit(`chat`, message);
  });
});


http.listen(port, function () {
  console.log(`server running on http://localhost:${port}`);
});