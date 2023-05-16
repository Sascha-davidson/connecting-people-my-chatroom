import * as path from "path";
import { Server } from "socket.io";
import { createServer } from "http";
import express from "express";

const app = express();
const http = createServer(app);
const ioServer = new Server(http);
const port = process.env.PORT || 8000;

app.use(express.static(path.resolve("public")));

ioServer.on(`connection`, (client) => {
  console.log(`user ${client.id} connected`);

  client.on(`message`, (message) => {
    console.log(`user ${client.id} sent messege: ${message}`);

    ioServer.emit(`message`, message);
  });

  client.on(`disconnect`, () => {
    console.log(`user ${client.id} disconnected`);
  });
});

http.listen(port, function () {
  console.log(`server running on http://localhost:${port}`);
});
