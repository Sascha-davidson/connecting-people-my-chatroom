import * as path from "path";
import { Server } from "socket.io";
import { createServer } from "http";
import express from "express";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const http = createServer(app);
const ioServer = new Server(http);
const port = process.env.PORT || 8000;

app.use(express.static(path.resolve("public")));

// app.set("view engine", "ejs");
// app.set("views", "./views");

// app.get("/", (req, res) => {
//   res.render('index')
// });

ioServer.on(`connection`, (client) => {
  console.log(`user ${client.id} connected`);

  client.on(`massage`, (message) => {
    console.log(`user ${client.id} sent massege: ${message}`);

    ioServer.emit(`message`, message);
  });

  client.on(`disconnect`, () => {
    console.log(`user ${client.id} disconnected`);
  });
});

app.listen(port, function () {
  console.log(`server running on http://localhost:${port}`);
});
