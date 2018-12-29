import express from "express";
import http from "http";
import path from "path";
import SocketIO from "socket.io";

import initializeSocketEvents from "./socket/initializeSocketEvents";
import eventTypes from "./socket/eventTypes";

import {clearRooms} from "./store";


const app = express();
const server = http.Server(app);

export const io = new SocketIO(server);

const port = process.env.PORT || 5000;

initializeSocketEvents(io);

// Clear all data every 1 week
const dayInMs = 24*60*60*1000;
setInterval(()=>{
  clearRooms();
  io.emit(eventTypes.ALL_DATA_CLEARED);
},7* dayInMs);

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client","build")));
  // Handle React routing, return all requests to React app
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client","build", "index.html"));
  });
}

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
