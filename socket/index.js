const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");

const app = express(); // express ki http response
const server = http.createServer(app);
const port = 8000;
const io = new Server(server);

// socket.io
io.on("connection", (socket) => {
  socket.on("user-message", (message) => {
    io.emit("message", message);
    // console.log("A new Meassage Appear", message);
  });
  // console.log("A new User Connected");
});

app.use(express.static("/public"));

// app.get("/", (req, res) => {
//   return res.sendFile("/public/index.html");
// });

app.get("/", (req, res) => {
  return res.sendFile("index.html", { root: "./public" });
});

server.listen(port, () => {
  console.log(`Server Started at ${port}`);
});

// app.listen(port, () => {
//   console.log(`Server Started at ${port}`);
// });
