import chat from "./controllers/chat";
const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());
const PORT = process.env.PORT || 3002;

const server = http.createServer(app);

app.get("/", (req, res) => {
  console.log("getting request");

  res.send("Rahil Socket BE App changed");
});
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

chat(io);

server.listen(PORT, () => {
  console.log("SERVER RUNNING :", PORT);
});
